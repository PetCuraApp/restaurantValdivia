import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://lacocinademaria.com'),
  title: 'La Cocina de María - Restaurante Gourmet',
  description: 'Descubre la auténtica cocina mediterránea en un ambiente elegante y acogedor. Reserva tu mesa y disfruta de nuestra experiencia culinaria única.',
  keywords: 'restaurante, cocina mediterránea, gourmet, reservas, menú, Barcelona',
  authors: [{ name: 'La Cocina de María' }],
  openGraph: {
    title: 'La Cocina de María - Restaurante Gourmet',
    description: 'Descubre la auténtica cocina mediterránea en un ambiente elegante y acogedor.',
    url: 'https://lacocinademaria.com',
    siteName: 'La Cocina de María',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'La Cocina de María - Restaurante',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'La Cocina de María - Restaurante Gourmet',
    description: 'Descubre la auténtica cocina mediterránea en un ambiente elegante y acogedor.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
