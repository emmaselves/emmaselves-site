import React from "react";

export default function EmmasElvesSite() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-lg">Emma’s Elves</a>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#about" className="hover:opacity-70">About</a>
            <a href="#impact" className="hover:opacity-70">Impact</a>
            <a href="#event" className="hover:opacity-70">Events</a>
            <a href="#sponsor" className="hover:opacity-70">Sponsors</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
          </nav>
          <a href="#donate" className="px-4 py-2 rounded-2xl bg-zinc-900 text-white text-sm hover:bg-zinc-800">Donate</a>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-amber-50 via-white to-emerald-50" />
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Spreading joy—one gift at a time.
            </h1>
            <p className="mt-4 text-lg text-zinc-700">
              Emma’s Elves is a Long Island–based holiday toy drive and community event that partners with local schools, businesses, and organizations to support underserved families.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#donate" className="px-5 py-3 rounded-2xl bg-emerald-600 text-white text-sm hover:bg-emerald-700">Donate toys or funds</a>
              <a href="#event" className="px-5 py-3 rounded-2xl border text-sm hover:bg-zinc-50">See events</a>
            </div>
            <p className="mt-3 text-xs text-zinc-500">10th year and counting • Est. 2015</p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-3xl bg-white shadow-lg ring-1 ring-zinc-100 p-4">
              <div className="h-full w-full rounded-2xl bg-[radial-gradient(ellipse_at_top_left,rgba(16,185,129,0.12),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(245,158,11,0.12),transparent_40%)] flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl">🎁</div>
                  <p className="mt-2 text-sm text-zinc-600">Community • Kindness • Cheer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-semibold">About Emma’s Elves</h2>
            <p className="mt-4 text-zinc-700 leading-relaxed">
              Founded in 2015, Emma’s Elves began as a small holiday gathering and has grown into a large-scale annual toy drive. We collaborate with schools, local businesses, and regional organizations to bring gifts and essentials to families who need a little extra cheer during the holidays.
            </p>
            <ul className="mt-6 space-y-2 text-zinc-700">
              <li>• Community toy collection & drop-off</li>
              <li>• Annual celebration event with live music</li>
              <li>• Raffle baskets and sponsor partnerships</li>
            </ul>
          </div>
          <div className="rounded-3xl border p-6 shadow-sm">
            <h3 className="font-medium">Quick Facts</h3>
            <dl className="mt-4 grid grid-cols-2 gap-4 text-sm">
              <div>
                <dt className="text-zinc-500">Founded</dt>
                <dd className="font-medium">2015</dd>
              </div>
              <div>
                <dt className="text-zinc-500">Based in</dt>
                <dd className="font-medium">Long Island, NY</dd>
              </div>
              <div>
                <dt className="text-zinc-500">Partner orgs</dt>
                <dd className="font-medium">Schools & local nonprofits</dd>
              </div>
              <div>
                <dt className="text-zinc-500">Contact</dt>
                <dd className="font-medium">emmaselves@gmail.com</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section id="impact" className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-semibold">Impact</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[{label:"Years running",value:"10+"},{label:"Raffle baskets (avg)",value:"20+"},{label:"Community partners",value:"15+"}].map((stat)=> (
              <div key={stat.label} className="rounded-3xl border p-6 shadow-sm">
                <div className="text-3xl font-semibold">{stat.value}</div>
                <div className="text-sm text-zinc-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* Events */}
<section id="event" className="py-16 border-t">
  <div className="mx-auto max-w-6xl px-4">
    <header className="mb-8 text-center">
      <h2 className="text-3xl font-bold tracking-tight">🎁 Emma’s Elves 2025 Celebration</h2>
      <p className="mt-2 text-zinc-600">
        Join us for live music, raffles, and holiday cheer! All proceeds fund gifts for local families.
      </p>
    </header>

    <div className="grid gap-8 md:grid-cols-2">
      {/* Flyer (public/flyer.png) */}
      <div>
        <img
          src="/flyer.png"
          alt="Emma’s Elves Event Flyer"
          className="w-full rounded-3xl border shadow-sm"
        />
      </div>

      {/* Details + RSVP & Pay */}
      <div className="rounded-3xl border p-6 shadow-sm">
        <dl className="grid grid-cols-1 gap-3 text-sm">
          <div>
            <dt className="text-zinc-500">Date</dt>
            <dd className="font-medium">Friday, November 28, 2025 · 6:30–11:30 PM</dd>
          </div>
          <div>
            <dt className="text-zinc-500">Venue</dt>
            <dd className="font-medium">
              Great South Bay Brewery, Bay Shore, NY
              <a
                href="https://maps.apple.com/?q=Great+South+Bay+Brewery+Bay+Shore+NY"
                target="_blank"
                rel="noreferrer"
                className="ml-2 text-emerald-700 underline"
              >
                Map
              </a>
            </dd>
          </div>
        </dl>

        {/* Discount note */}
        <div className="mt-4 rounded-xl bg-emerald-50 p-3 text-emerald-700 text-sm">
          💡 Pre-purchase online and get <b>$10 off</b>. (At the door: Gold $125 / Silver $80)
        </div>

        {/* RSVP & Pay */}
<div className="mt-6">
  <h3 className="text-base font-semibold">RSVP & Pay</h3>

  {/* React helper: deep-link to Venmo with desktop fallback */}
  {/* Put this function ABOVE your return if you're splitting into smaller components;
      but inside a single component, this inline definition is fine. */}
  {(() => {
    function openVenmo(handle, amount, note) {
      const deep = `venmo://paycharge?txn=pay&recipients=${encodeURIComponent(handle)}&amount=${encodeURIComponent(
        String(amount)
      )}&note=${encodeURIComponent(note)}`;

      const web = `https://venmo.com/u/${encodeURIComponent(handle)}`;

      // Try to open the Venmo app (mobile). If it doesn't catch, fall back to web.
      const t = Date.now();
      try {
        window.location.href = deep;
      } catch (_) {
        window.location.href = web;
        return;
      }
      setTimeout(() => {
        if (Date.now() - t < 1200) {
          window.location.href = web;
        }
      }, 800);
    }

    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.currentTarget;
          const data = new FormData(form);

          const name = (data.get("name") || "").toString().trim();
          const email = (data.get("email") || "").toString().trim();
          const tierValue = (data.get("tier") || "gold").toString(); // 'gold' | 'silver'
          const tierLabel = tierValue === "gold" ? "Gold" : "Silver";

          const amount = tierValue === "gold" ? 115 : 70; // discounted online prices
          const note = `Emma's Elves - ${tierLabel} Ticket - ${name}`;

          // Fire-and-forget RSVP to Formspree (replace ID if yours is different)
          fetch("https://formspree.io/f/xpwyvzbk", {
            method: "POST",
            headers: { Accept: "application/json" },
            body: data,
            keepalive: true,
          }).catch(() => {});

          // Open Venmo (mobile deep link + desktop fallback)
          openVenmo("emmas_elves", amount, note);
        }}
        className="mt-3 grid gap-3 text-sm"
      >
        <input name="name" required className="border rounded-xl px-3 py-2" placeholder="Your name" />
        <input type="email" name="email" required className="border rounded-xl px-3 py-2" placeholder="Email" />

        {/* Ticket choice */}
        <div className="grid gap-2 rounded-xl border p-3">
          <label className="flex items-center gap-2">
            <input type="radio" name="tier" value="gold" defaultChecked />
            <span className="font-medium">Gold – $115</span>
            <span className="text-zinc-500">(4-hr open bar, dinner, donation)</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="tier" value="silver" />
            <span className="font-medium">Silver – $70</span>
            <span className="text-zinc-500">(soft drinks, dinner, 5 raffle tix, donation)</span>
          </label>
        </div>

        <button type="submit" className="rounded-2xl bg-zinc-900 text-white px-5 py-2 hover:bg-zinc-800">
          RSVP & Pay via Venmo
        </button>

        <p className="text-xs text-zinc-500">
          On phones, Venmo opens with your amount and note prefilled. On desktop, we’ll open your Venmo profile:
          <a href="https://venmo.com/u/emmas_elves" target="_blank" rel="noreferrer" className="underline ml-1">
            venmo.com/u/emmas_elves
          </a>.
        </p>
      </form>
    );
  })()}
</div>


        {/* Secondary actions */}
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="https://partiful.com/e/DV0hAR57C77cdtNe2OSh"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border px-4 py-2 text-sm hover:bg-zinc-50"
          >
            View full details on Partiful
          </a>
          <a
            href="https://venmo.com/u/emmas_elves"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl bg-emerald-600 px-4 py-2 text-sm text-white hover:bg-emerald-700"
          >
            Open Venmo
          </a>
        </div>
      </div>
    </div>

    {/* Optional info cards */}
    <div className="mt-10 grid gap-4 md:grid-cols-3">
      <div className="rounded-2xl border p-4 text-sm">
        <h4 className="font-medium">What to expect</h4>
        <p className="mt-1 text-zinc-600">Live music, raffles, sponsor shoutouts, and lots of holiday cheer.</p>
      </div>
      <div className="rounded-2xl border p-4 text-sm">
        <h4 className="font-medium">Dress code</h4>
        <p className="mt-1 text-zinc-600">Festive casual / holiday vibes!</p>
      </div>
      <div className="rounded-2xl border p-4 text-sm">
        <h4 className="font-medium">Parking</h4>
        <p className="mt-1 text-zinc-600">On-site lot and nearby street parking.</p>
      </div>
    </div>
  </div>
</section>



      {/* Sponsors */}
      <section id="sponsor" className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-semibold">Sponsors</h2>
          <p className="mt-3 text-zinc-700 max-w-3xl">We welcome in‑kind donations (our preference) and community partnerships. If your business would like to contribute goods, services, or raffle items, we’d love to hear from you.</p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="aspect-[3/2] rounded-2xl border grid place-items-center text-zinc-400 text-sm">Logo</div>
            ))}
          </div>
          <div className="mt-6">
            <a href="#contact" className="px-5 py-3 rounded-2xl bg-emerald-600 text-white text-sm hover:bg-emerald-700">Become a sponsor</a>
          </div>
        </div>
      </section>

      {/* Donate */}
      <section id="donate" className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-semibold">Donate</h2>
            <p className="mt-3 text-zinc-700">Prefer in‑kind gifts? Perfect. We accept new, unwrapped toys (all ages) and gift cards. Monetary donations help us fill critical gaps and bulk‑purchase high‑need items.</p>
            <ul className="mt-4 text-zinc-700 space-y-2 text-sm">
              <li>• In‑kind drop‑offs at partner locations</li>
              <li>• Gift cards (Target, Amazon, local shops)</li>
              <li>• Monetary gifts (link or QR can go here)</li>
            </ul>
          </div>
          <div className="rounded-3xl border p-6 shadow-sm">
            <h3 className="font-medium">Mail‑in / Contact</h3>
            <p className="mt-2 text-sm text-zinc-600">Email <span className="font-medium">emmaselves@gmail.com</span> or text <span className="font-medium">631‑804‑2998</span> to coordinate a donation or pickup.</p>
            <form
  action="https://formspree.io/f/xpwyvzbk"
  method="POST"
  className="mt-4 grid gap-3 text-sm"
>
  <input
    name="name"
    required
    className="border rounded-xl px-3 py-2"
    placeholder="Your name"
  />
  <input
    type="email"
    name="email"
    required
    className="border rounded-xl px-3 py-2"
    placeholder="Email"
  />
  <textarea
    name="message"
    required
    className="border rounded-xl px-3 py-2 min-h-[100px]"
    placeholder="How would you like to help?"
  />
  <button
    type="submit"
    className="rounded-2xl bg-zinc-900 text-white hover:bg-zinc-800 px-5 py-2"
  >
    Send
  </button>
</form>

          </div>
        </div>
      </section>

      {/* Contact */}
      <footer id="contact" className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="font-semibold">Emma’s Elves</div>
            <p className="text-sm text-zinc-600 mt-1">Long Island, New York • Est. 2015</p>
          </div>
          <div className="text-sm text-zinc-700">
            <div>Email: <a href="mailto:emmaselves@gmail.com" className="underline">emmaselves@gmail.com</a></div>
            <div>Phone: <a href="tel:+16318042998" className="underline">631‑804‑2998</a></div>
          </div>
        </div>
      </footer>
    </div>
  );
}
