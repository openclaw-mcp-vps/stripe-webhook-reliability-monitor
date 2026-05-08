export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Payment Infrastructure
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
          Monitor Stripe Webhook Delivery Failures in Real-Time
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Track delivery success rates, retry patterns, and failure reasons across all Stripe events. Get instant alerts before missed webhooks cost you revenue.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Monitoring — $15/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required for 7-day trial. Cancel anytime.</p>

        {/* Stats bar */}
        <div className="mt-14 grid grid-cols-3 gap-6 border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
          <div>
            <div className="text-2xl font-bold text-[#58a6ff]">99.9%</div>
            <div className="text-xs text-[#8b949e] mt-1">Delivery visibility</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[#58a6ff]">&lt;30s</div>
            <div className="text-xs text-[#8b949e] mt-1">Alert latency</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[#58a6ff]">All</div>
            <div className="text-xs text-[#8b949e] mt-1">Stripe event types</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="border border-[#58a6ff]/40 rounded-2xl p-8 bg-[#161b22] text-center">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] text-sm mb-6">/month · billed monthly</div>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] mt-0.5">✓</span>Real-time webhook event dashboard</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] mt-0.5">✓</span>Failure reason tracking &amp; retry analysis</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] mt-0.5">✓</span>Email &amp; Slack alerts on delivery drops</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] mt-0.5">✓</span>30-day event history &amp; export</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] mt-0.5">✓</span>Unlimited Stripe endpoints</li>
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">How does it connect to my Stripe account?</h3>
            <p className="text-sm text-[#8b949e]">You add our endpoint URL to your Stripe webhook settings. We receive every event Stripe sends, log the delivery status, and surface failures instantly in your dashboard — no code changes needed.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">What counts as a webhook failure?</h3>
            <p className="text-sm text-[#8b949e]">Any event that returns a non-2xx HTTP status, times out, or exhausts Stripe's retry attempts is flagged as a failure. We capture the exact error code and response body so you can debug fast.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Can I cancel anytime?</h3>
            <p className="text-sm text-[#8b949e]">Yes. Cancel from your account dashboard at any time. You keep access until the end of your billing period with no cancellation fees.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Stripe Webhook Monitor. Not affiliated with Stripe, Inc.
      </footer>
    </main>
  )
}
