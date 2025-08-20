'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Clock, Euro } from 'lucide-react'

interface MenuProps {
  onOpenMenu: () => void
}

export default function Menu({ onOpenMenu }: MenuProps) {
  const [activeCategory, setActiveCategory] = useState('entrantes')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const categories = [
    { id: 'entrantes', name: 'Entrantes', icon: '🥗' },
    { id: 'principales', name: 'Platos Principales', icon: '🍽️' },
    { id: 'pescados', name: 'Pescados', icon: '🐟' },
    { id: 'carnes', name: 'Carnes', icon: '🥩' },
    { id: 'postres', name: 'Postres', icon: '🍰' },
  ]

  const menuItems = {
    entrantes: [
      {
        id: 'ensalada-mediterranea',
        name: 'Ensalada Mediterránea',
        description: 'Lechugas frescas, tomates cherry, aceitunas, queso feta y vinagreta de limón',
        price: '12.50',
        time: '15 min',
        popular: true,
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
      },
      {
        id: 'gazpacho-andaluz',
        name: 'Gazpacho Andaluz',
        description: 'Sopa fría de tomates, pepinos y pimientos con guarnición de crutones',
        price: '9.80',
        time: '10 min',
        popular: false,
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
      },
      {
        id: 'croquetas-jamon',
        name: 'Croquetas de Jamón',
        description: 'Croquetas caseras de jamón ibérico con bechamel cremosa',
        price: '14.20',
        time: '20 min',
        popular: true,
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
      }
    ],
    principales: [
      {
        id: 'paella-valenciana',
        name: 'Paella Valenciana',
        description: 'Arroz con pollo, conejo, verduras y azafrán, cocinado en paellera tradicional',
        price: '28.50',
        time: '45 min',
        popular: true,
        image: 'https://images.unsplash.com/photo-1515443961218-a51367888e4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
      },
      {
        id: 'risotto-setas',
        name: 'Risotto de Setas',
        description: 'Arroz arborio con setas silvestres, parmesano y vino blanco',
        price: '22.80',
        time: '35 min',
        popular: false,
        image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
      }
    ],
    pescados: [
      {
        id: 'lubina-horno',
        name: 'Lubina al Horno',
        description: 'Lubina fresca al horno con hierbas aromáticas y limón',
        price: '32.50',
        time: '40 min',
        popular: true,
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
      },
      {
        id: 'gambas-ajillo',
        name: 'Gambas al Ajillo',
        description: 'Gambas frescas salteadas con ajo, perejil y aceite de oliva virgen',
        price: '26.80',
        time: '25 min',
        popular: false,
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
      }
    ],
    carnes: [
      {
        id: 'solomillo-trufa',
        name: 'Solomillo con Salsa de Trufa',
        description: 'Solomillo de ternera con salsa de trufa negra y patatas confitadas',
        price: '38.50',
        time: '50 min',
        popular: true,
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
      },
      {
        id: 'cordero-asado',
        name: 'Cordero Asado',
        description: 'Pierna de cordero asada lentamente con hierbas provenzales',
        price: '34.20',
        time: '60 min',
        popular: false,
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
      }
    ],
    postres: [
      {
        id: 'crema-catalana',
        name: 'Crema Catalana',
        description: 'Crema pastelera con azúcar caramelizado y canela',
        price: '8.50',
        time: '15 min',
        popular: true,
        image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
      },
      {
        id: 'tarta-santiago',
        name: 'Tarta de Santiago',
        description: 'Tarta tradicional de almendras con polvo de azúcar glass',
        price: '9.80',
        time: '20 min',
        popular: false,
        image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
      }
    ]
  }

  return (
    <section id="menu" className="section-padding bg-gradient-to-b from-white to-secondary-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-secondary-900 mb-6">
            Nuestro Menú
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Descubre nuestra selección de platos mediterráneos, elaborados con ingredientes frescos 
            y técnicas tradicionales que han pasado de generación en generación.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-secondary-700 hover:bg-secondary-100 border border-secondary-200'
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </motion.div>

        {/* Menu Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {menuItems[activeCategory as keyof typeof menuItems]?.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  {item.popular && (
                    <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Popular
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-serif text-xl font-semibold text-secondary-900">
                      {item.name}
                    </h3>
                    <div className="flex items-center space-x-1 text-primary-600 font-bold text-lg">
                      <Euro className="w-5 h-5" />
                      <span>{item.price}</span>
                    </div>
                  </div>
                  <p className="text-secondary-600 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-secondary-500">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{item.time}</span>
                    </div>
                    {item.popular && (
                      <div className="flex items-center space-x-1 text-yellow-500">
                        <Star className="w-4 h-4 fill-current" />
                        <span>Popular</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              ¿Quieres ver nuestro menú completo?
            </h3>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Explora todos nuestros platos, bebidas y opciones especiales en nuestro menú digital completo.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 font-semibold px-8 py-4 rounded-xl text-lg hover:bg-secondary-50 transition-colors duration-300"
              onClick={onOpenMenu}
            >
              Ver Menú Completo
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
