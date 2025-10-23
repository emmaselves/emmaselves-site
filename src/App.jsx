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
      <section id="event" className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-semibold">Events</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <article className="rounded-3xl border p-6 shadow-sm">
              <h3 className="font-medium">Annual Holiday Toy Drive Celebration</h3>
              <p className="mt-2 text-sm text-zinc-600">Private hall • Live band + DJ • Raffles</p>
              <p className="mt-3 text-zinc-700">Join us for an evening of music, community, and giving. Your ticket helps fund gifts for local families.</p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <span className="inline-flex items-center rounded-full border px-3 py-1">Open bar option</span>
                <span className="inline-flex items-center rounded-full border px-3 py-1">Food included</span>
              </div>
              <div className="mt-5">
                <a href="#contact" className="px-4 py-2 rounded-2xl bg-zinc-900 text-white text-sm hover:bg-zinc-800">Request details</a>
              </div>
            </article>
            <article className="rounded-3xl border p-6 shadow-sm">
              <h3 className="font-medium">Community Drop‑Offs</h3>
              <p className="mt-2 text-sm text-zinc-600">Local schools & partner businesses</p>
              <p className="mt-3 text-zinc-700">Bring a new, unwrapped toy or gift card to one of our partner locations. We’ll handle sorting and delivery.</p>
              <div className="mt-5">
                <a href="#contact" className="px-4 py-2 rounded-2xl border text-sm hover:bg-zinc-50">Become a drop‑off site</a>
              </div>
            </article>
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
            <form onSubmit={(e)=> e.preventDefault()} className="mt-4 grid gap-3 text-sm">
              <input className="border rounded-xl px-3 py-2" placeholder="Your name" />
              <input className="border rounded-xl px-3 py-2" placeholder="Email" type="email" />
              <textarea className="border rounded-xl px-3 py-2 min-h-[100px]" placeholder="How would you like to help?" />
              <button className="px-4 py-2 rounded-2xl bg-zinc-900 text-white hover:bg-zinc-800">Send</button>
              <p className="text-xs text-zinc-500">(Form is a demo — wire up to your email or Airtable later.)</p>
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
