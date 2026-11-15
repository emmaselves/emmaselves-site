// Vercel serverless endpoint. Keeps the Google Apps Script secret off the public website.
module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success:false, error:'Method not allowed.' });
  }
  const endpoint = process.env.APPS_SCRIPT_URL;
  const secret = process.env.RSVP_API_SECRET;
  if (!endpoint || !secret) {
    return res.status(503).json({ success:false, error:'RSVP connection is not configured yet.' });
  }
  const x = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
  if (x.website) return res.status(400).json({success:false,error:'Invalid submission.'});
  const name=String(x.name||'').trim(),email=String(x.email||'').trim(),
        guests=String(x.guests||'').trim(),open=Number(x.open),non=Number(x.non);
  if (!name || name.length>120 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      email.length>200 || guests.length>1000 || !Number.isInteger(open) ||
      !Number.isInteger(non) || open<0 || non<0 || open+non<1 || open+non>20) {
    return res.status(400).json({success:false,error:'Please check your details and ticket quantities.'});
  }
  try {
    const response=await fetch(endpoint,{
      method:'POST',
      headers:{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'},
      body:new URLSearchParams({secret,name,email,guests,open:String(open),non:String(non)}),
      redirect:'follow',
      signal:AbortSignal.timeout(25000)
    });
    const raw=await response.text();
    let result;
    try { result=JSON.parse(raw); }
    catch { throw new Error('Google Apps Script returned an unexpected response. Check the deployment.'); }
    if (!response.ok || !result.success) {
      return res.status(502).json({success:false,error:result.error||'Could not save RSVP.'});
    }
    return res.status(200).json({
      success:true,id:String(result.id||''),total:Number(result.total),
      tickets:Number(result.tickets),emailSent:Boolean(result.emailSent)
    });
  } catch(err) {
    console.error('RSVP API error',err);
    return res.status(502).json({success:false,error:'Registration could not be confirmed. Please contact the organizer if this continues.'});
  }
};
