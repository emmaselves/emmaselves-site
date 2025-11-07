import React, { useState } from "react";

/* ====================== MAIN ====================== */
export default function EmmasElvesSite() {
  // toggle for the alt RSVP form inside Events
  const [altRSVPOpen, setAltRSVPOpen] = useState(false);
 // Ticket prices
const GOLD_PRICE = 110;
const SILVER_PRICE = 80;

// Venmo form quantities
const [goldQty, setGoldQty] = useState(0);
const [silverQty, setSilverQty] = useState(0);
const totalRSVP = goldQty * GOLD_PRICE + silverQty * SILVER_PRICE;

// Alt form quantities
const [altGoldQty, setAltGoldQty] = useState(0);
const [altSilverQty, setAltSilverQty] = useState(0);
const altTotal = altGoldQty * GOLD_PRICE + altSilverQty * SILVER_PRICE;

const [rsvpConfirmed, setRsvpConfirmed] = useState(false);
const [showVenmoFallback, setShowVenmoFallback] = useState(false);




  return (
    <div className="min-h-screen bg-white text-zinc-900 pb-24 sm:pb-0">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <img src="eenav.png" alt="Emma’s Elves logo" className="h-10 w-auto" />
          </a>

          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#event" className="hover:opacity-70">Events</a>
            <a href="#raffles" className="hover:opacity-70">Raffles</a>
            <a href="#about" className="hover:opacity-70">About</a>
            <a href="#volunteer" className="hover:opacity-70">Volunteer</a>
            <a href="#supporter" className="hover:opacity-70">Supporters</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
          </nav>

          <a href="#donate" className="px-4 py-2 rounded-2xl bg-zinc-900 text-white text-sm hover:bg-zinc-800">Donate</a>
        </div>
      </header>

      {/* ====================== Hero (mobile-first, RSVP-focused) ====================== */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-amber-50 via-white to-emerald-50" />
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-24">
          {/* Logo */}
          <div className="text-center mt-8 md:mt-16">
            <img src="/eelogo.png" alt="Emma’s Elves logo" className="mx-auto h-20 w-auto md:h-32 mb-4 md:mb-6" />
          </div>

          {/* Headline + subcopy */}
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight">Spreading joy—one gift at a time.</h1>
            <p className="mt-3 text-base text-zinc-700 md:text-lg">
              Emma’s Elves is a Long Island–based holiday toy drive and community event.
            </p>
          </div>

          {/* Actions */}
          <div className="mt-4 space-y-3">
            <a
              href="#event"
              className="inline-flex w-full items-center justify-center rounded-2xl bg-emerald-600 px-5 py-3 text-base font-semibold text-white hover:bg-emerald-700"
              aria-label="RSVP and buy tickets"
            >
              RSVP / Buy Tickets
            </a>

            {/* compact chip nav on mobile */}
            <div className="-mx-4 px-4 overflow-x-auto">
              <div className="flex gap-2 w-max mx-auto md:mx-0">
                <a href="#event" className="inline-flex items-center justify-center rounded-full border px-4 py-2 text-sm whitespace-nowrap hover:bg-zinc-50">Events</a>
                <a href="#raffles" className="inline-flex items-center justify-center rounded-full border px-4 py-2 text-sm whitespace-nowrap hover:bg-zinc-50">Raffles</a>
                <a href="#about" className="inline-flex items-center justify-center rounded-full border px-4 py-2 text-sm whitespace-nowrap hover:bg-zinc-50">About</a>
                <a href="#volunteer" className="inline-flex items-center justify-center rounded-full border px-4 py-2 text-sm whitespace-nowrap hover:bg-zinc-50">Volunteer</a>
                <a href="#supporter" className="inline-flex items-center justify-center rounded-full border px-4 py-2 text-sm whitespace-nowrap hover:bg-zinc-50">Supporters</a>
                <a href="#contact" className="inline-flex items-center justify-center rounded-full border px-4 py-2 text-sm whitespace-nowrap hover:bg-zinc-50">Contact</a>
              </div>
            </div>
          </div>

          <p className="mt-3 text-center text-xs text-zinc-500">Est. 2015</p>
        </div>
      </section>

      {/* ====================== Events ====================== */}
      <section id="event" className="py-16 border-t scroll-mt-24 md:scroll-mt-28">
        <div className="mx-auto max-w-6xl px-4">
          <header className="mb-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight">🎁 Emma’s Elves 2025 Celebration</h2>
            <p className="mt-2 text-zinc-600">
              Join us for live music, raffles, and holiday cheer! All proceeds fund gifts for local families.
            </p>
          </header>

          <div className="grid gap-8">
            {/* Details + RSVP & Pay */}
            <div className="rounded-3xl border p-6 shadow-sm">
              <dl className="grid grid-cols-1 gap-3 text-sm">
                <div>
                  <dt className="text-zinc-500">Date</dt>
                  <dd className="font-medium">Friday, November 28, 2025 · 7:30–11:30 PM</dd>
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
                <div>
                  <dt className="text-zinc-500">Raffles</dt>
                  <dd className="font-medium">
                    Scroll down to see some of our baskets and buy tickets in advance! Ticket entry will close at 9:30 PM.
                  </dd>
                </div>
              </dl>

              {/* Discount note */}
              <div className="mt-4 rounded-xl bg-emerald-50 p-3 text-emerald-700 text-sm">
                💡 Pre-purchase online and get <b>$15 off</b>. (At the door: Gold $125 / Silver $90)
              </div>

              {/* RSVP & Pay via Venmo (records to Formspree, then opens Venmo) */}
              <div className="mt-6">
                <h3 className="text-base font-semibold">RSVP & Pay</h3>

                {(() => {
    function openVenmo(handle, amount, note) {
      const deep = `venmo://paycharge?txn=pay&recipients=${encodeURIComponent(handle)}&amount=${encodeURIComponent(
        String(amount)
      )}&note=${encodeURIComponent(note)}`;
      const web = `https://venmo.com/u/${encodeURIComponent(handle)}`;
      const t = Date.now();
      try {
        window.location.href = deep;
      } catch {
        window.location.href = web;
        return;
      }
      setTimeout(() => {
        if (Date.now() - t < 1200) window.location.href = web;
      }, 800);
    }

                  return (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (totalRSVP <= 0) return;

                        const form = e.currentTarget;
                        const data = new FormData(form);
                        const name = (data.get("name") || "").toString().trim();

                        data.set("gold_qty", String(goldQty));
                        data.set("silver_qty", String(silverQty));
                        data.set("total_amount", String(totalRSVP));

                        const parts = [];
                        if (goldQty > 0) parts.push(`Gold x${goldQty}`);
                        if (silverQty > 0) parts.push(`Silver x${silverQty}`);
                        const note = `Emma's Elves - ${parts.join(" + ")} - ${name}`;

                        fetch("https://formspree.io/f/xpwyvzbk", {
                          method: "POST",
                          headers: { Accept: "application/json" },
                          body: data,
                          keepalive: true,
                        }).catch(() => { });

                        setRsvpConfirmed(true);                 // show “RSVP received” message
                        setTimeout(() => {
                          openVenmo("emmas_elves", amount, note);
                          // If Venmo didn't take over in ~1.2s, show a manual link button.
                          setTimeout(() => setShowVenmoFallback(true), 1200);
                        }, 600);


                        openVenmo("emmas_elves", totalRSVP, note);
                      }}
                      className="mt-3 grid gap-3 text-sm"
                    >
                      {/* contact */}
                      <input name="name" required className="border rounded-xl px-3 py-2" placeholder="Your name" />
                      <input type="email" name="email" required className="border rounded-xl px-3 py-2" placeholder="Email" />

                      {/* tickets (+/− only, values stored via hidden inputs) */}
                      <div className="grid gap-3 rounded-xl border p-3">
                        {/* Gold */}
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <div className="font-medium">Gold – ${GOLD_PRICE}</div>
                            <div className="text-zinc-500 text-xs">open bar, dinner, donation</div>
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              className="w-7 h-7 flex items-center justify-center rounded-md border hover:bg-zinc-100"
                              onClick={() => setGoldQty((q) => Math.max(0, q - 1))}
                              aria-label="Decrease Gold tickets"
                            >
                              −
                            </button>
                            <span className="w-10 text-center">{goldQty}</span>
                            <button
                              type="button"
                              className="w-7 h-7 flex items-center justify-center rounded-md border hover:bg-zinc-100"
                              onClick={() => setGoldQty((q) => q + 1)}
                              aria-label="Increase Gold tickets"
                            >
                              +
                            </button>
                            <input type="hidden" name="gold_qty" value={goldQty} />
                          </div>
                        </div>

                        {/* Silver */}
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <div className="font-medium">Silver – ${SILVER_PRICE}</div>
                            <div className="text-zinc-500 text-xs">soft drinks, dinner, 5 raffle tix, donation</div>
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              className="w-7 h-7 flex items-center justify-center rounded-md border hover:bg-zinc-100"
                              onClick={() => setSilverQty((q) => Math.max(0, q - 1))}
                              aria-label="Decrease Silver tickets"
                            >
                              −
                            </button>
                            <span className="w-10 text-center">{silverQty}</span>
                            <button
                              type="button"
                              className="w-7 h-7 flex items-center justify-center rounded-md border hover:bg-zinc-100"
                              onClick={() => setSilverQty((q) => q + 1)}
                              aria-label="Increase Silver tickets"
                            >
                              +
                            </button>
                            <input type="hidden" name="silver_qty" value={silverQty} />
                          </div>
                        </div>
                      </div>

                      {/* total + button */}
                      <div className="mt-1 flex items-center justify-between text-sm">
                        <span className="text-zinc-600">Total</span>
                        <span className="font-semibold">${totalRSVP}</span>
                      </div>

                      <button
                        type="submit"
                        disabled={totalRSVP <= 0}
                        className={`rounded-2xl px-5 py-2 text-white ${totalRSVP > 0
                            ? "bg-zinc-900 hover:bg-zinc-800"
                            : "bg-zinc-400 cursor-not-allowed"
                          }`}
                      >
                        {totalRSVP > 0 ? `RSVP & Pay $${totalRSVP}` : "RSVP & Pay via Venmo"}
                      </button>

                      {rsvpConfirmed && (
                        <p className="mt-2 text-sm text-emerald-700">
                          ✅ RSVP received! Redirecting you to Venmo to complete payment…
                        </p>
                      )}

                      {showVenmoFallback && (
                        <button
                          type="button"
                          onClick={() => openVenmo("emmas_elves", totalRSVP, note)}
                          className="mt-2 inline-flex items-center rounded-xl border px-3 py-2 text-sm hover:bg-zinc-50"
                        >
                          Venmo didn’t open? Tap to pay
                        </button>
                      )}

                      <p className="text-xs text-zinc-500">
                        Prefer another way to pay? Use the option below for Zelle/Check/Cash.
                      </p>

                    </form>
                  );
                })()}
              </div>

              {/* Alt payment RSVP (Formspree only) */}
              <div className="mt-6 border-t pt-6">
                <button
                  onClick={() => setAltRSVPOpen((v) => !v)}
                  className="rounded-2xl border px-4 py-2 text-sm hover:bg-zinc-50"
                >
                  {altRSVPOpen ? "Hide" : "RSVP & pay another way"}
                </button>

                {altRSVPOpen && (
                  <form action="https://formspree.io/f/xpwyvzbk" method="POST" className="mt-4 grid gap-3 text-sm">
                    <input type="hidden" name="type" value="Alt RSVP" />

                    <input name="name" required className="border rounded-xl px-3 py-2" placeholder="Your name" />
                    <input type="email" name="email" required className="border rounded-xl px-3 py-2" placeholder="Email" />

                    {/* tickets (+/− only, submit via hidden inputs) */}
                    <div className="grid gap-3 rounded-xl border p-3">
                      {/* Gold */}
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <div className="font-medium">Gold – ${GOLD_PRICE}</div>
                          <div className="text-zinc-500 text-xs">open bar, dinner, donation</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            className="w-7 h-7 flex items-center justify-center rounded-md border hover:bg-zinc-100"
                            onClick={() => setAltGoldQty((q) => Math.max(0, q - 1))}
                            aria-label="Decrease Gold tickets"
                          >
                            −
                          </button>
                          <span className="w-10 text-center">{altGoldQty}</span>
                          <button
                            type="button"
                            className="w-7 h-7 flex items-center justify-center rounded-md border hover:bg-zinc-100"
                            onClick={() => setAltGoldQty((q) => q + 1)}
                            aria-label="Increase Gold tickets"
                          >
                            +
                          </button>
                          <input type="hidden" name="gold_qty" value={altGoldQty} />
                        </div>
                      </div>

                      {/* Silver */}
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <div className="font-medium">Silver – ${SILVER_PRICE}</div>
                          <div className="text-zinc-500 text-xs">soft drinks, dinner, 5 raffle tix, donation</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            className="w-7 h-7 flex items-center justify-center rounded-md border hover:bg-zinc-100"
                            onClick={() => setAltSilverQty((q) => Math.max(0, q - 1))}
                            aria-label="Decrease Silver tickets"
                          >
                            −
                          </button>
                          <span className="w-10 text-center">{altSilverQty}</span>
                          <button
                            type="button"
                            className="w-7 h-7 flex items-center justify-center rounded-md border hover:bg-zinc-100"
                            onClick={() => setAltSilverQty((q) => q + 1)}
                            aria-label="Increase Silver tickets"
                          >
                            +
                          </button>
                          <input type="hidden" name="silver_qty" value={altSilverQty} />
                        </div>
                      </div>
                    </div>

                    {/* total preview only */}
                    <div className="mt-1 flex items-center justify-between text-sm">
                      <span className="text-zinc-600">Total (preview)</span>
                      <span className="font-semibold">${altTotal}</span>
                    </div>

                    <label className="text-zinc-600">How do you plan to pay?</label>
                    <select name="payment_method" className="border rounded-xl px-3 py-2" defaultValue="Zelle">
                      <option>Zelle</option>
                      <option>Check</option>
                      <option>Cash</option>
                    </select>

                    <p className="text-xs text-zinc-500">
                      Zelle to <b>631-804-2998</b>; for checks please make payable to <b>Emma Benardos</b>.
                    </p>

                    <button type="submit" className="rounded-2xl bg-zinc-900 text-white px-5 py-2 hover:bg-zinc-800">
                      Submit RSVP
                    </button>
                  </form>
                )}
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

      {/* ====================== Raffle Baskets ====================== */}
      <section id="raffles" className="py-16 border-t scroll-mt-24 md:scroll-mt-28">
        <div className="mx-auto max-w-6xl px-4">
          <header className="mb-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight">🎟️ Raffle Baskets 2025</h2>
            <p className="mt-2 text-zinc-600">
              Can’t make the event? You can still support Emma’s Elves by entering our raffle!
              Choose a basket, enter how many tickets you want, or use a quick bundle. Winners called at 9:30 PM!
            </p>
            <p className="mt-2 text-sm text-zinc-500">
              Tickets are <b>$5 each</b>. Bundles: <b>10/$35</b> · <b>20/$60</b> · <b>40/$100</b>.
            </p>
            <p className="mt-2 text-sm text-zinc-500">
              These are some of our raffles available for online ticket entries — we’ll keep updating as more donations come in.
            </p>
          </header>

          <RaffleGrid />
        </div>
      </section>

      {/* ====================== About ====================== */}
      <section id="about" className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-semibold">About Emma’s Elves</h2>
            <p className="mt-4 text-zinc-700 leading-relaxed">
              Founded in 2015, Emma’s Elves began as a small holiday gathering and has grown into a
              large-scale annual toy drive. We collaborate with schools, local businesses, and regional organizations.
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

      {/* ====================== Volunteer ====================== */}
      <section id="volunteer" className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-semibold">Volunteer with Emma’s Elves</h2>
            <p className="mt-4 text-zinc-700 leading-relaxed">
              Want to help spread holiday cheer? We’re looking for friendly hands to keep everything running smoothly.
              No experience needed—just a smile and a little time.
            </p>
            <ul className="mt-6 space-y-2 text-zinc-700">
              <li>• <span className="font-medium">Toy pick-ups & drop-offs</span> — help collect and deliver donations.</li>
              <li>• <span className="font-medium">Event night volunteers</span> — guest check-in and distributing raffle tickets (Nov 28).</li>
              <li>• <span className="font-medium">Wherever needed</span> — we’ll plug you in where you’re most helpful.</li>
            </ul>
          </div>

          {/* Quick sign-up form */}
          <div className="rounded-3xl border p-6 shadow-sm">
            <h3 className="font-medium">Sign up to volunteer</h3>
            <form action="https://formspree.io/f/xpwyvzbk" method="POST" className="mt-4 grid gap-3 text-sm">
              <input type="hidden" name="type" value="Volunteer" />
              <input name="name" required className="border rounded-xl px-3 py-2" placeholder="Your name" />
              <input type="email" name="email" required className="border rounded-xl px-3 py-2" placeholder="Email" />
              <input name="phone" className="border rounded-xl px-3 py-2" placeholder="Phone (optional)" />
              <label className="block text-zinc-600 mt-2">I’m interested in</label>
              <select name="interest" className="border rounded-xl px-3 py-2" defaultValue="Toy pick-ups & drop-offs">
                <option>Toy pick-ups & drop-offs</option>
                <option>Event night: check-in & ticket distribution</option>
                <option>Wherever needed</option>
              </select>
              <textarea name="notes" className="border rounded-xl px-3 py-2 min-h-[100px]" placeholder="Availability, dates, or any notes (optional)" />
              <button type="submit" className="rounded-2xl bg-zinc-900 text-white hover:bg-zinc-800 px-5 py-2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ====================== Supporters ====================== */}
      <section id="supporter" className="border-t py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Supporters</h2>

          {/* Sponsors */}
          <div className="mb-12 text-center">
            <h3 className="text-xl font-semibold mb-4 text-zinc-700">Sponsors</h3>
            <p className="text-zinc-600 mb-6">
              Thank you to the incredible businesses and individuals who help make Emma’s Elves possible.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-3 text-sm text-zinc-700">
              <a href="https://www.greatsouthbaybrewery.com" target="_blank" rel="noreferrer" className="hover:text-emerald-700 hover:underline transition-colors">Great South Bay Brewery</a>
              <a href="https://www.licares.org" target="_blank" rel="noreferrer" className="hover:text-emerald-700 hover:underline transition-colors">Long Island Cares</a>
              <a href="https://www.actionsportsny.com/" className="hover:text-emerald-700 hover:underline transition-colors">Action Sports</a>
              <a href="https://www.heartandsoulwax.com/" className="hover:text-emerald-700 hover:underline transition-colors">Heart & Soul Wax</a>
              <a href="https://southshoregolf.net/" className="hover:text-emerald-700 hover:underline transition-colors">South Shore Golf</a>
              <a href="https://www.wherestarscollide.com/" className="hover:text-emerald-700 hover:underline transition-colors">Where Stars Collide</a>
              <a href="#" className="hover:text-emerald-700 hover:underline transition-colors">Ben Djaha Travel</a>
              <a href="#" className="hover:text-emerald-700 hover:underline transition-colors">Michael Cifelli Aviation</a>
              <a href="https://riverheadcider.com/" className="hover:text-emerald-700 hover:underline transition-colors">The Riverhead Ciderhouse</a>
              <a href="https://www.theharpandhoundny.com/" className="hover:text-emerald-700 hover:underline transition-colors">The Harp & Hound</a>
              <a href="https://tellerschophouse.com/" className="hover:text-emerald-700 hover:underline transition-colors">Tellers</a>
              <a href="https://danoiislip.com/" className="hover:text-emerald-700 hover:underline transition-colors">Da Noi</a>
              <a href="#" className="hover:text-emerald-700 hover:underline transition-colors">A Krafty Event</a>
              <a href="https://www.itakitchen.com/" className="hover:text-emerald-700 hover:underline transition-colors">ITA Kitchen</a>
              <a href="#" className="hover:text-emerald-700 hover:underline transition-colors">Local Schools</a>
              <a href="#" className="hover:text-emerald-700 hover:underline transition-colors">Community Members</a>
              <a href="#" className="hover:text-emerald-700 hover:underline transition-colors">Neighborhood Businesses</a>
              <a href="#" className="hover:text-emerald-700 hover:underline transition-colors">Family & Friends</a>
            </div>
          </div>

          {/* Community Partner */}
          <div className="border-t pt-12">
            <h3 className="text-xl font-semibold mb-4 text-zinc-700 text-center">Community Partner</h3>
            <div className="flex flex-col items-center">
              <img src="/LIC.png" alt="Long Island Cares" className="w-48 mb-4" />
              <p className="text-center text-zinc-600 max-w-xl">
                We’re proud to partner with{" "}
                <a href="https://www.licares.org" target="_blank" rel="noreferrer" className="underline text-emerald-700 hover:text-emerald-800">
                  Long Island Cares
                </a>{" "}
                to distribute toys and essentials to local families in need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== Donate ====================== */}
      <section id="donate" className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-semibold">Donate</h2>
            <p className="mt-3 text-zinc-700">
              Prefer in-kind gifts? Perfect. We accept new, unwrapped toys (all ages) and gift cards. Monetary donations help us fill critical gaps.
            </p>
            <ul className="mt-4 text-zinc-700 space-y-2 text-sm">
              <li>• In-kind drop-offs at partner locations</li>
              <li>• Gift cards (Target, Amazon, local shops)</li>
              <li>• Monetary gifts (payments via venmo, zelle, cash, or check payable to Emma Benardos)</li>
            </ul>
          </div>
          <div className="rounded-3xl border p-6 shadow-sm">
            <h3 className="font-medium">Mail-in / Contact</h3>
            <p className="mt-2 text-sm text-zinc-600">
              Email <span className="font-medium">emmaselves@gmail.com</span> or text <span className="font-medium">631-804-2998</span> to coordinate a donation or pickup.
            </p>
            <form action="https://formspree.io/f/xpwyvzbk" method="POST" className="mt-4 grid gap-3 text-sm">
              <input name="name" required className="border rounded-xl px-3 py-2" placeholder="Your name" />
              <input type="email" name="email" required className="border rounded-xl px-3 py-2" placeholder="Email" />
              <textarea name="message" required className="border rounded-xl px-3 py-2 min-h-[100px]" placeholder="How would you like to help?" />
              <button type="submit" className="rounded-2xl bg-zinc-900 text-white hover:bg-zinc-800 px-5 py-2">Send</button>
            </form>
          </div>
        </div>
      </section>

      {/* ====================== Footer ====================== */}
      <footer id="contact" className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="font-semibold">Emma’s Elves</div>
            <p className="text-sm text-zinc-600 mt-1">Long Island, New York • Est. 2015</p>
          </div>
          <div className="text-sm text-zinc-700 space-y-1">
            <div>Email: <a href="mailto:emmaselves@gmail.com" className="underline">emmaselves@gmail.com</a></div>
            <div>Phone: <a href="tel:+16318042998" className="underline">631-804-2998</a></div>
            <div>
              Instagram:{" "}
              <a
                href="https://www.instagram.com/emmas_elves?igsh=MWYzdHo3cXVha2IyNg%3D%3D&utm_source=qr"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                @emmas_elves
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky mobile RSVP bar – mobile only */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sm:hidden">
        <div className="mx-auto max-w-6xl px-3 pb-[calc(env(safe-area-inset-bottom)+12px)] pt-3">
          <a
            href="#event"
            className="block w-full text-center rounded-2xl bg-emerald-600 px-5 py-3 text-base font-semibold text-white shadow-md shadow-emerald-600/20 hover:bg-emerald-700 active:translate-y-px"
            aria-label="RSVP and buy tickets"
          >
            RSVP / Buy Tickets
          </a>
        </div>
      </div>
    </div>
  );
}

/* ====================== RaffleGrid ====================== */
function RaffleGrid() {
  const VENMO_HANDLE = "emmas_elves";
  const ZELLE = "631-804-2998";
  const UNIT_PRICE = 5;

  // new bundle set
  const BUNDLES = [
    { label: "10", tickets: 10, amount: 35 },
    { label: "20", tickets: 20, amount: 60 },
    { label: "40", tickets: 40, amount: 100 },
  ];

  // baskets: updated list
  const BASKETS = [
    { id: "beach", name: "🏖️ Beach Day", blurb: "Nalu, Bunger, and more beach essentials!" },
    { id: "plane", name: "🧑🏻‍✈️ Stearman Aircraft Ride", blurb: "Fly around Long Island in a World War II aircraft with Pilot Michael Cifelli." },
    { id: "travel", name: "🛫 Ben Djaha Travel", blurb: "Free travel planning for a 7-night vacation." },
   // { id: "danoi", name: "🍝 Dinner at Da Noi", blurb: "$100 gift card." },
    //{ id: "tellers", name: "🥩 Dinner at Tellers", blurb: "$100 gift card." },
    { id: "jackson", name: "🍽️ Jackson Hall Feast", blurb: "$100 gift card." },
    { id: "winter", name: "🎿 Winter Sports", blurb: "Action Sports snow essentials." },
    { id: "racines", name: "💇 Racine’s", blurb: "$100 gift card and hair styling essentials." },
    { id: "rhc", name: "🍏 Riverhead Ciderhouse Starter Pack", blurb: "RHC swag and more!" },
  ];

  // compute the cheapest total using bundles + unit tickets
  function priceForTickets(n) {
    let best = { cost: n * UNIT_PRICE, breakdown: n ? [`${n}×$${UNIT_PRICE}`] : [] };

    for (let a = 0; a <= Math.floor(n / 40) + 1; a++) {
      for (let b = 0; b <= Math.floor(n / 20) + 1; b++) {
        for (let c = 0; c <= Math.floor(n / 10) + 1; c++) {
          const bundled = a * 40 + b * 20 + c * 10;
          if (bundled > n) continue;
          const rem = n - bundled;
          const cost = a * 100 + b * 60 + c * 35 + rem * UNIT_PRICE;
          if (cost < best.cost) {
            const parts = [];
            if (a) parts.push(`${a}×40 ($100)`);
            if (b) parts.push(`${b}×20 ($60)`);
            if (c) parts.push(`${c}×10 ($35)`);
            if (rem) parts.push(`${rem}×$${UNIT_PRICE}`);
            best = { cost, breakdown: parts };
          }
        }
      }
    }
    return best;
  }

  const [qty, setQty] = useState(Object.fromEntries(BASKETS.map((b) => [b.id, 1])));

  function setBasketQty(id, next) {
    const n = Math.max(1, Math.min(999, Number(next) || 1));
    setQty((q) => ({ ...q, [id]: n }));
  }

  function openVenmo(amount, note) {
    const deep = `venmo://paycharge?txn=pay&recipients=${encodeURIComponent(
      VENMO_HANDLE
    )}&amount=${encodeURIComponent(String(amount))}&note=${encodeURIComponent(note)}`;
    const web = `https://venmo.com/u/${encodeURIComponent(VENMO_HANDLE)}`;

    const t = Date.now();
    try {
      window.location.href = deep;
    } catch {
      window.location.href = web;
      return;
    }
    setTimeout(() => {
      if (Date.now() - t < 1200) window.location.href = web;
    }, 800);
  }

  return (
    <div className="grid gap-8 md:grid-cols-2">
      {BASKETS.map((b) => {
        const tickets = qty[b.id] ?? 1;
        const priced = priceForTickets(tickets);
        const venmoNote = `Emma's Elves - Raffle: ${b.name} - ${tickets} ticket${tickets > 1 ? "s" : ""}`;

        return (
          <article key={b.id} className="rounded-3xl border p-6 shadow-sm">
            <div className="flex gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{b.name}</h3>
                <p className="mt-2 text-sm text-zinc-600">{b.blurb}</p>
              </div>
            </div>

            {/* Flexible input */}
            <div className="mt-4 grid grid-cols-2 items-end gap-3">
              <div>
                <label className="block text-sm text-zinc-600">Tickets ($5 each; bundles auto-applied)</label>
                <div className="mt-1 flex items-center gap-2">
                  <button onClick={() => setBasketQty(b.id, tickets - 1)} className="rounded-lg border px-2 py-1 text-sm">−</button>
                  <input
                    type="number"
                    min={1}
                    max={999}
                    value={tickets}
                    onChange={(e) => setBasketQty(b.id, e.target.value)}
                    className="w-24 rounded-lg border px-2 py-1 text-sm"
                  />
                  <button onClick={() => setBasketQty(b.id, tickets + 1)} className="rounded-lg border px-2 py-1 text-sm">+</button>
                </div>
              </div>
              <div>
                <div className="text-sm text-zinc-600">Total</div>
                <div className="mt-1 text-xl font-semibold">${priced.cost}</div>
                {priced.breakdown.length > 0 && (
                  <div className="text-xs text-zinc-500 mt-1">Auto-applied: {priced.breakdown.join(" + ")}</div>
                )}
              </div>
            </div>

            <div className="mt-3">
              <button
                onClick={() => openVenmo(priced.cost, venmoNote)}
                className="rounded-2xl bg-zinc-900 px-4 py-2 text-sm text-white hover:bg-zinc-800"
              >
                Pay via Venmo
              </button>
              <p className="mt-2 text-xs text-zinc-500">
                Tip: Repeat for multiple baskets. On desktop, we’ll send you to venmo.com if the app doesn’t open.
              </p>
            </div>

            {/* Quick bundles */}
            <div className="mt-5">
              <div className="text-sm font-medium">Or quick bundles</div>
              <div className="mt-2 flex flex-wrap gap-2">
                {BUNDLES.map((bdl) => (
                  <button
                    key={bdl.label}
                    onClick={() => openVenmo(bdl.amount, `Emma's Elves - Raffle: ${b.name} - ${bdl.tickets} tickets`)}
                    className="rounded-2xl border px-3 py-2 text-sm hover:bg-zinc-50"
                  >
                    {bdl.tickets} for ${bdl.amount}
                  </button>
                ))}
              </div>
            </div>

            {/* Other payment methods */}
            <div className="mt-5 text-sm text-zinc-600">
              <p className="font-medium">Prefer another way to pay?</p>
              <ul className="mt-1 list-disc pl-5">
                <li>Zelle: <b>{ZELLE}</b></li>
                <li>Pay by check: payable to <b>Emma Benardos</b>. Please write <b>Emma’s Elves</b> in the memo line.</li>
                <li>Cash: Please reach out to arrange.</li>
              </ul>
            </div>
          </article>
        );
      })}
    </div>
  );
}





