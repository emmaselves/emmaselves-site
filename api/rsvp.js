
export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed.'
    });
  }

  const endpoint = process.env.APPS_SCRIPT_URL;
  const secret = process.env.RSVP_API_SECRET;

  if (!endpoint || !secret) {
    return res.status(503).json({
      success: false,
      error: 'RSVP connection is not configured.'
    });
  }

  try {
    const x = typeof req.body === 'string'
      ? JSON.parse(req.body)
      : (req.body || {});

    const name = String(x.name || '').trim();
    const email = String(x.email || '').trim();
    const guests = String(x.guests || '').trim();
    const open = Number(x.open);
    const non = Number(x.non);

    if (
      x.website ||
      !name ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      !Number.isInteger(open) ||
      !Number.isInteger(non) ||
      open < 0 ||
      non < 0 ||
      open + non < 1 ||
      open + non > 20
    ) {
      return res.status(400).json({
        success: false,
        error: 'Please check your RSVP details.'
      });
    }

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        secret,
        name,
        email,
        guests,
        open: String(open),
        non: String(non)
      }),
      redirect: 'follow',
      signal: AbortSignal.timeout(25000)
    });

    const raw = await response.text();
    let result;

    try {
      result = JSON.parse(raw);
    } catch {
      throw new Error('Unexpected response from Google Apps Script');
    }

    if (!response.ok || !result.success) {
      return res.status(502).json({
        success: false,
        error: result.error || 'Could not save RSVP.'
      });
    }

    return res.status(200).json(result);

  } catch (error) {
    console.error('RSVP API error:', error);

    return res.status(502).json({
      success: false,
      error: 'Could not confirm RSVP. Please contact the organizer.'
    });
  }
}
