import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'KAVYA.DEV — Web · Game · AI',
  description: 'Portfolio of Kavya Parmar — Web Developer, Game Creator, AI Builder from Rajkot, India.',
  keywords: ['Kavya Parmar', 'web developer', 'game developer', 'AI developer', 'Rajkot', 'portfolio'],
}

export const viewport: Viewport = {
  themeColor: '#00f5ff',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Global scanline overlay */}
        <div className="scanlines" aria-hidden="true" />
        {children}
      </body>
    </html>
  )
}
