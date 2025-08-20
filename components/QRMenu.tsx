'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { X, Star, Euro, Clock, ChevronDown, ChevronUp } from 'lucide-react'

interface QRMenuProps {
  onClose: () => void
}

export default function QRMenu({ onClose }: QRMenuProps) {
  const [activeCategory, setActiveCategory] = useState('entrantes')
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())

  const categories = [
    { id: 'entrantes', name: 'Entrantes', icon: '🥗' },
    { id: 'principales', name: 'Platos Principales', icon: '🍽️' },
    { id: 'pescados', name: 'Pescados', icon: '🐟' },
    { id: 'carnes', name: 'Carnes', icon: '🥩' },
    { id: 'postres', name: 'Postres', icon: '🍰' },
    { id: 'bebidas', name: 'Bebidas', icon: '🍷' },
  ]

  const menuItems = {
    entrantes: [
      {
        id: 'ensalada-mediterranea',
        name: 'Ensalada Mediterránea',
        description: 'Lechugas frescas, tomates cherry, aceitunas, queso feta y vinagreta de limón',
        price: '12.50',
        allergens: ['Lactosa', 'Gluten'],
        time: '15 min',
        popular: true
      },
      {
        id: 'croquetas-jamon',
        name: 'Croquetas de Jamón Ibérico',
        description: 'Croquetas caseras con jamón ibérico de bellota y bechamel cremosa',
        price: '14.00',
        allergens: ['Lactosa', 'Gluten', 'Huevo'],
        time: '20 min',
        popular: false
      },
      {
        id: 'gazpacho',
        name: 'Gazpacho Andaluz',
        description: 'Sopa fría de tomate, pepino, pimiento y ajo con guarnición de crutones',
        price: '9.50',
        allergens: ['Gluten'],
        time: '10 min',
        popular: false
      }
    ],
    principales: [
      {
        id: 'paella-valenciana',
        name: 'Paella Valenciana',
        description: 'Arroz con pollo, conejo, verduras y azafrán, cocinado en paellera tradicional',
        price: '28.00',
        allergens: ['Gluten'],
        time: '45 min',
        popular: true
      },
      {
        id: 'risotto-setas',
        name: 'Risotto de Setas',
        description: 'Arroz arborio con setas silvestres, parmesano y trufa negra',
        price: '24.50',
        allergens: ['Lactosa', 'Gluten'],
        time: '35 min',
        popular: false
      }
    ],
    pescados: [
      {
        id: 'lubina-horno',
        name: 'Lubina al Horno',
        description: 'Lubina fresca al horno con hierbas provenzales y limón',
        price: '32.00',
        allergens: ['Pescado'],
        time: '30 min',
        popular: true
      }
    ],
    carnes: [
      {
        id: 'solomillo-ternera',
        name: 'Solomillo de Ternera',
        description: 'Solomillo a la parrilla con salsa de vino tinto y patatas asadas',
        price: '38.00',
        allergens: ['Gluten'],
        time: '25 min',
        popular: true
      }
    ],
    postres: [
      {
        id: 'tiramisu',
        name: 'Tiramisú Casero',
        description: 'Clásico tiramisú con mascarpone, café y cacao en polvo',
        price: '12.00',
        allergens: ['Lactosa', 'Gluten', 'Huevo'],
        time: '15 min',
        popular: false
      }
    ],
    bebidas: [
      {
        id: 'vino-casa',
        name: 'Vino de la Casa',
        description: 'Selección de vinos tintos y blancos de la región',
        price: '6.50',
        allergens: ['Sulfitos'],
        time: '5 min',
        popular: false
      }
    ]
  }

  const toggleItem = (itemId: string) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId)
    } else {
      newExpanded.add(itemId)
    }
    setExpandedItems(newExpanded)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <div>
                <h1 className="font-serif text-2xl font-bold">La Cocina de María</h1>
                <p className="text-primary-100 text-sm">Menú Digital</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="flex items-center justify-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>Abierto 7 días</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 fill-current" />
              <span>4.9/5 - 200+ Reseñas</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[calc(90vh-200px)] overflow-y-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="space-y-4">
            {menuItems[activeCategory as keyof typeof menuItems]?.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="border border-secondary-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-serif text-lg font-semibold text-secondary-900">
                          {item.name}
                        </h3>
                        {item.popular && (
                          <span className="bg-primary-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                            Popular
                          </span>
                        )}
                      </div>
                      <p className="text-secondary-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2 text-primary-600 font-bold text-lg ml-4">
                      <Euro className="w-5 h-5" />
                      <span>{item.price}</span>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="flex items-center justify-between text-sm text-secondary-500 mb-3">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{item.time}</span>
                      </span>
                      <span>•</span>
                      <span>Alergenos: {item.allergens.join(', ')}</span>
                    </div>
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="text-primary-600 hover:text-primary-700 transition-colors duration-200"
                    >
                      {expandedItems.has(item.id) ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                  </div>

                  {/* Expanded Content */}
                  {expandedItems.has(item.id) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-secondary-100 pt-4 mt-3"
                    >
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <h4 className="font-semibold text-secondary-900 mb-2">Ingredientes Principales</h4>
                          <p className="text-secondary-600">
                            Ingredientes frescos y de temporada, seleccionados cuidadosamente por nuestros chefs.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-secondary-900 mb-2">Preparación</h4>
                          <p className="text-secondary-600">
                            Elaborado al momento con técnicas tradicionales mediterráneas.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-secondary-50 p-6 border-t border-secondary-200">
          <div className="text-center">
            <p className="text-secondary-600 text-sm mb-3">
              ¿Tienes alguna pregunta sobre nuestros platos?
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm">
              <span className="text-secondary-500">📞 +34 93 123 45 67</span>
              <span className="text-secondary-500">📧 info@lacocinademaria.com</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
