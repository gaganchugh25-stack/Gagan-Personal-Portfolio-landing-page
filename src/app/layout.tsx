import type { Metadata, Viewport } from 'next';
import '@fontsource-variable/manrope';
import '@fontsource-variable/newsreader/wght-italic.css';
import './globals.css';
import './reference-refresh.css';

export const metadata: Metadata = {
  title: 'Gagan Chugh — Supply Chain & Logistics',
  description: 'Gagan Chugh, Manager – Logistics at Samsung India Electronics. 20+ years across supply chain, logistics, warehousing and operational excellence.',
  keywords: ['Gagan Chugh', 'supply chain', 'logistics', 'warehouse management', 'Samsung India', 'Noida'],
  openGraph: { title: 'Gagan Chugh — Precision in motion.', description: 'Two decades of moving businesses forward through supply chain and logistics leadership.', type: 'website', locale: 'en_IN' },
  twitter: { card: 'summary', title: 'Gagan Chugh — Supply Chain & Logistics', description: 'Manager – Logistics. Operational excellence, delivered.' },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { themeColor: '#191b18', colorScheme: 'light' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-IN"><body><a className="skip-link" href="#main">Skip to content</a>{children}</body></html>;
}
