'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { X, ChevronLeft, ChevronRight, Instagram, Heart } from 'lucide-react'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1081&q=80',
      alt: 'Paella Valenciana',
      category: 'Platos Principales',
      likes: 1247
    },
    {
      src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      alt: 'Solomillo de Ternera',
      category: 'Carnes',
      likes: 892
    },
    {
      src: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Ensalada Mediterránea',
      category: 'Entrantes',
      likes: 567
    },
    {
      src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Interior del Restaurante',
      category: 'Ambiente',
      likes: 2341
    },
    {
      src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Terraza del Restaurante',
      category: 'Ambiente',
      likes: 1892
    },
    {
      src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1081&q=80',
      alt: 'Postre Gourmet',
      category: 'Postres',
      likes: 756
    },
    {
      src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      alt: 'Chef en Cocina',
      category: 'Cocina',
      likes: 1123
    },
    {
      src: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Vinos y Bebidas',
      category: 'Bebidas',
      likes: 445
    }
  ]

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1)
    }
  }

  return (
    <section id="gallery" className="section-padding bg-gradient-to-br from-secondary-900 to-secondary-800">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block text-primary-400 font-semibold text-sm uppercase tracking-wider mb-4"
          >
            Galería Visual
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-serif text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Momentos que{' '}
            <span className="text-gradient">inspiran</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-secondary-300 max-w-2xl mx-auto"
          >
            Descubre la belleza de nuestros platos y el ambiente acogedor de nuestro restaurante 
            a través de nuestra galería fotográfica.
          </motion.p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <div className="text-white">
                  <h3 className="font-semibold text-sm mb-1">{image.alt}</h3>
                  <p className="text-xs text-secondary-300 mb-2">{image.category}</p>
                  <div className="flex items-center space-x-2 text-xs">
                    <Heart className="w-3 h-3 fill-current text-red-400" />
                    <span>{image.likes}</span>
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 border-2 border-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            </motion.div>
          ))}
        </motion.div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Instagram className="w-6 h-6" />
            <span>Síguenos en Instagram</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-primary-400 transition-colors duration-200 z-10"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-primary-400 transition-colors duration-200 z-10 bg-black/50 p-2 rounded-full"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-primary-400 transition-colors duration-200 z-10 bg-black/50 p-2 rounded-full"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image */}
              <motion.img
                key={selectedImage}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="max-w-full max-h-full object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 text-white text-center">
                <h3 className="font-semibold text-lg mb-1">
                  {galleryImages[selectedImage].alt}
                </h3>
                <p className="text-secondary-300">
                  {galleryImages[selectedImage].category}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
