'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const currentYear = new Date().getFullYear()

  const footerLinks = {
    restaurante: [
      { name: 'Sobre Nosotros', href: '#about' },
      { name: 'Nuestro Menú', href: '#menu' },
      { name: 'Galería', href: '#gallery' },
      { name: 'Reservas', href: '#contact' },
    ],
    servicios: [
      { name: 'Eventos Privados', href: '#' },
      { name: 'Catering', href: '#' },
      { name: 'Clases de Cocina', href: '#' },
      { name: 'Delivery', href: '#' },
    ],
    legal: [
      { name: 'Política de Privacidad', href: '#' },
      { name: 'Términos y Condiciones', href: '#' },
      { name: 'Política de Cookies', href: '#' },
      { name: 'Aviso Legal', href: '#' },
    ]
  }

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ]

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">M</span>
                </div>
                <span className="font-serif text-2xl font-bold">
                  La Cocina de María
                </span>
              </div>
              
              <p className="text-secondary-300 mb-6 leading-relaxed">
                Más de 25 años creando experiencias gastronómicas únicas. 
                Nuestra pasión por la cocina mediterránea se refleja en cada plato.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-secondary-300">
                  <MapPin className="w-5 h-5 text-primary-400" />
                  <span className="text-sm">Carrer de Gràcia, 123, Barcelona</span>
                </div>
                <div className="flex items-center space-x-3 text-secondary-300">
                  <Phone className="w-5 h-5 text-primary-400" />
                  <span className="text-sm">+34 93 123 45 67</span>
                </div>
                <div className="flex items-center space-x-3 text-secondary-300">
                  <Mail className="w-5 h-5 text-primary-400" />
                  <span className="text-sm">info@lacocinademaria.com</span>
                </div>
                <div className="flex items-center space-x-3 text-secondary-300">
                  <Clock className="w-5 h-5 text-primary-400" />
                  <span className="text-sm">Lun-Dom: 12:00 - 23:00</span>
                </div>
              </div>
            </motion.div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([section, links], sectionIndex) => (
              <motion.div
                key={section}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.2 + sectionIndex * 0.1 }}
                className="lg:col-span-1"
              >
                <h3 className="font-serif text-lg font-semibold mb-6 capitalize">
                  {section}
                </h3>
                <ul className="space-y-3">
                  {links.map((link, linkIndex) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: 0.3 + sectionIndex * 0.1 + linkIndex * 0.05 }}
                    >
                      <a
                        href={link.href}
                        className="text-secondary-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="py-8 border-t border-secondary-700"
        >
          <div className="text-center">
            <h3 className="font-serif text-xl font-semibold mb-4">
              Suscríbete a Nuestro Newsletter
            </h3>
            <p className="text-secondary-300 mb-6 max-w-md mx-auto">
              Recibe nuestras ofertas especiales, eventos y novedades culinarias directamente en tu email.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-3 bg-secondary-800 border border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-secondary-400"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary px-8"
              >
                Suscribirse
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="py-6 border-t border-secondary-700"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="text-secondary-400 text-sm">
              © {currentYear} La Cocina de María. Todos los derechos reservados.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-secondary-800 rounded-full flex items-center justify-center text-secondary-300 hover:text-primary-400 hover:bg-secondary-700 transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
