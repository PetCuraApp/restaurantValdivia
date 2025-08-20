'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ChefHat, Award, Users, Heart } from 'lucide-react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const stats = [
    { icon: ChefHat, number: '25+', label: 'Años de Experiencia' },
    { icon: Award, number: '15+', label: 'Premios Culinarios' },
    { icon: Users, number: '50K+', label: 'Clientes Satisfechos' },
    { icon: Heart, number: '100%', label: 'Pasión por la Cocina' },
  ]

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-secondary-50 to-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-wider mb-4"
              >
                Nuestra Historia
              </motion.span>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-serif text-4xl md:text-5xl font-bold text-secondary-900 mb-6"
              >
                Más de un cuarto de siglo{' '}
                <span className="text-gradient">cocinando sueños</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg text-secondary-600 leading-relaxed mb-6"
              >
                Fundado en 1998 por la Chef María González, La Cocina de María nació de un sueño: 
                crear un espacio donde la tradición mediterránea se encuentre con la innovación culinaria. 
                Cada plato es una obra maestra que cuenta la historia de generaciones de cocineros.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-lg text-secondary-600 leading-relaxed mb-8"
              >
                Nuestros ingredientes provienen de productores locales y sostenibles, 
                garantizando la frescura y calidad en cada bocado. La pasión por la excelencia 
                culinaria se refleja en cada detalle de nuestra experiencia gastronómica.
              </motion.p>
            </div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="text-center p-4 bg-white rounded-xl shadow-lg border border-secondary-100"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full mb-3">
                    <stat.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="text-2xl font-bold text-secondary-900 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-secondary-600">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-4"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                    alt="Chef preparando plato"
                    className="w-full h-64 object-cover transform hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Interior del restaurante"
                    className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="space-y-4 pt-8"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1081&q=80"
                    alt="Plato gourmet"
                    className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Ambiente del restaurante"
                    className="w-full h-64 object-cover transform hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </motion.div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-secondary-100"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">1998</div>
                <div className="text-sm text-secondary-600">Año de Fundación</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
