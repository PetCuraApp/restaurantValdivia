'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Inicio', href: '#home' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Menú', href: '#menu' },
    { name: 'Galería', href: '#gallery' },
    { name: 'Contacto', href: '#contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <span className={`font-serif text-2xl font-bold ${
              isScrolled ? 'text-primary-600' : 'text-white'
            }`}>
              La Cocina de María
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors duration-300 hover:text-primary-600 ${
                  isScrolled ? 'text-secondary-700' : 'text-white'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center space-x-2 text-sm"
            >
              <Phone className={`w-4 h-4 ${isScrolled ? 'text-primary-600' : 'text-white'}`} />
              <span className={isScrolled ? 'text-secondary-700' : 'text-white'}>
                +34 93 123 45 67
              </span>
            </motion.div>
            
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="btn-primary"
            >
              Reservar Mesa
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2"
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-secondary-700' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-secondary-700' : 'text-white'}`} />
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-gray-200"
            >
              <div className="py-4 space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-secondary-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="px-4 py-3 border-t border-gray-200">
                  <div className="flex items-center space-x-2 text-sm text-secondary-600 mb-3">
                    <Phone className="w-4 h-4" />
                    <span>+34 93 123 45 67</span>
                  </div>
                  <button className="w-full btn-primary">
                    Reservar Mesa
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
