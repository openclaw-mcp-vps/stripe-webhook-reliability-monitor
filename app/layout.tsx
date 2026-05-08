import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Stripe Webhook Reliability Monitor',
  description: 'Monitor Stripe webhook delivery failures in real-time. Track success rates, retry patterns, and get instant alerts when webhooks start failing.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="229cbc16-d8ec-441a-a7d0-942f94ca13ed"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
