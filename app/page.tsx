'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Menu from '@/components/Menu'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import QRMenu from '@/components/QRMenu'

export default function Home() {
  const [isQRMenuOpen, setIsQRMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, -100])

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.get('qr') === 'menu') {
      setIsQRMenuOpen(true)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main className="min-h-screen">
      {isQRMenuOpen && (
        <QRMenu onClose={() => setIsQRMenuOpen(false)} />
      )}
      <motion.div style={{ y }}>
        <Header />
      </motion.div>
      <Hero onOpenMenu={() => setIsQRMenuOpen(true)} />
      <About />
      <Menu onOpenMenu={() => setIsQRMenuOpen(true)} />
      <Gallery />
      <Contact />
      <Footer />
      
      {/* Botón Volver al Top */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 left-6 bg-secondary-600 text-white p-3 rounded-full shadow-lg hover:bg-secondary-700 transition-all duration-300 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        aria-label="Volver arriba"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>

      {/* Botón QR Menu */}
      <motion.button
        onClick={() => setIsQRMenuOpen(true)}
        className="fixed bottom-6 right-6 bg-primary-600 text-white p-4 rounded-full shadow-lg hover:bg-primary-700 transition-all duration-300 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
        aria-label="Abrir menú QR"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </motion.button>
    </main>
  )
}
