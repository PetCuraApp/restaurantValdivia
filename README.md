# 🍽️ La Cocina de María - Sitio Web de Restaurante

Un sitio web moderno, responsive y elegante para restaurante construido con **Next.js 14**, **TypeScript**, **Tailwind CSS** y **Framer Motion**.

## ✨ Características Principales

### 🎨 Diseño y UX
- **Diseño completamente responsive** optimizado para móvil y PC
- **Animaciones modernas** con Framer Motion para una experiencia fluida
- **Paleta de colores elegante** inspirada en restaurantes gourmet
- **Tipografías premium** (Playfair Display + Inter)
- **Efectos visuales** como parallax, hover states y transiciones suaves

### 📱 Funcionalidades
- **Header inteligente** que cambia de transparente a sólido al hacer scroll
- **Navegación responsive** con menú hamburguesa para móvil
- **Sección Hero** con imagen de fondo y llamadas a la acción
- **Sección About** con estadísticas animadas e imágenes
- **Menú interactivo** con categorías y filtros
- **Galería de fotos** con lightbox modal y navegación
- **Formulario de reservas** completo y funcional
- **Footer informativo** con enlaces y newsletter

### 🎯 Funcionalidad QR
- **Menú QR modal** que se abre automáticamente desde URL
- **Detección automática** de parámetros QR en la URL
- **Menú expandible** con información detallada de platos
- **Información de alérgenos** y tiempos de preparación
- **Categorías organizadas** para fácil navegación

### 🚀 Optimizaciones
- **SEO optimizado** con metadatos completos
- **Imágenes optimizadas** con formatos WebP/AVIF
- **Lazy loading** y animaciones por viewport
- **Performance optimizada** para Vercel
- **Accesibilidad** con ARIA labels y navegación por teclado

## 🛠️ Tecnologías Utilizadas

- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Styling**: Tailwind CSS
- **Animaciones**: Framer Motion
- **Iconos**: Lucide React
- **Fuentes**: Google Fonts (Playfair Display + Inter)
- **Imágenes**: Unsplash (optimizadas para restaurante)

## 📦 Instalación

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Pasos de instalación

1. **Clonar el repositorio**
```bash
git clone <tu-repositorio>
cd landingPageRestaurantv3
```

2. **Instalar dependencias**
```bash
npm install
# o
yarn install
```

3. **Ejecutar en desarrollo**
```bash
npm run dev
# o
yarn dev
```

4. **Abrir en el navegador**
```
http://localhost:3000
```

## 🚀 Despliegue en Vercel

### Despliegue automático
1. Conecta tu repositorio de GitHub a Vercel
2. Vercel detectará automáticamente que es un proyecto Next.js
3. El build se ejecutará automáticamente en cada push

### Despliegue manual
```bash
npm run build
npm run start
```

## 📱 Uso del Menú QR

### Acceso directo
- **URL**: `https://tudominio.com?qr=menu`
- **Botón flotante**: Aparece en la esquina inferior derecha

### Funcionalidades del menú QR
- **Categorías**: Entrantes, Principales, Pescados, Carnes, Postres, Bebidas
- **Información detallada**: Precios, descripciones, alérgenos, tiempos
- **Platos populares**: Marcados con badges especiales
- **Expansión de items**: Click para ver más información
- **Navegación intuitiva**: Tabs y scroll suave

## 🎨 Personalización

### Colores
Edita `tailwind.config.js` para cambiar la paleta de colores:
```javascript
colors: {
  primary: {
    50: '#fef7f0',    // Naranja claro
    600: '#f2751a',   // Naranja principal
    700: '#bc4610',   // Naranja oscuro
  },
  secondary: {
    // Grises y neutros
  },
  accent: {
    // Acentos y highlights
  }
}
```

### Contenido
- **Imágenes**: Reemplaza URLs de Unsplash con tus propias imágenes
- **Textos**: Edita contenido en cada componente
- **Menú**: Modifica `menuItems` en `components/Menu.tsx`
- **Información de contacto**: Actualiza en `components/Contact.tsx`

### Fuentes
Cambia las fuentes en `tailwind.config.js`:
```javascript
fontFamily: {
  'serif': ['Tu Fuente Serif', 'serif'],
  'sans': ['Tu Fuente Sans', 'sans-serif'],
}
```

## 📁 Estructura del Proyecto

```
landingPageRestaurantv3/
├── app/
│   ├── globals.css          # Estilos globales y Tailwind
│   ├── layout.tsx           # Layout principal con metadatos
│   └── page.tsx             # Página principal
├── components/
│   ├── Header.tsx           # Navegación y header
│   ├── Hero.tsx             # Sección principal
│   ├── About.tsx            # Sobre nosotros
│   ├── Menu.tsx             # Menú de platos
│   ├── Gallery.tsx          # Galería de fotos
│   ├── Contact.tsx          # Formulario de contacto
│   ├── Footer.tsx           # Footer del sitio
│   └── QRMenu.tsx           # Modal del menú QR
├── tailwind.config.js       # Configuración de Tailwind
├── postcss.config.js        # Configuración de PostCSS
├── next.config.js           # Configuración de Next.js
└── package.json             # Dependencias del proyecto
```

## 🔧 Scripts Disponibles

```json
{
  "dev": "next dev",           # Desarrollo local
  "build": "next build",       # Build de producción
  "start": "next start",       # Servidor de producción
  "lint": "next lint"          # Linting del código
}
```

## 🌟 Características Destacadas

### 🎭 Animaciones
- **Entrada escalonada** de elementos
- **Hover effects** en botones y cards
- **Transiciones suaves** entre secciones
- **Parallax scrolling** en el header
- **Animaciones por viewport** con `useInView`

### 📱 Responsive Design
- **Mobile-first** approach
- **Breakpoints optimizados** para todos los dispositivos
- **Navegación adaptativa** con menú hamburguesa
- **Grid layouts** que se adaptan automáticamente
- **Imágenes responsive** con diferentes tamaños

### ♿ Accesibilidad
- **ARIA labels** en elementos interactivos
- **Navegación por teclado** completamente funcional
- **Contraste de colores** optimizado
- **Textos alternativos** en todas las imágenes
- **Estructura semántica** HTML5

## 🚀 Próximas Mejoras

- [ ] **Sistema de reservas** con backend
- [ ] **Integración con Google Maps**
- [ ] **Sistema de reviews** y calificaciones
- [ ] **Blog de recetas** y noticias
- [ ] **E-commerce** para delivery
- [ ] **PWA** con offline support
- [ ] **Multiidioma** (ES/EN/CAT)
- [ ] **Analytics** y tracking

## 📞 Soporte

Para soporte técnico o consultas sobre el proyecto:
- **Email**: info@tudominio.com
- **Documentación**: [Link a docs]
- **Issues**: [GitHub Issues]

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver `LICENSE` para más detalles.

---

**Desarrollado con ❤️ para restaurantes que quieren destacar en la web**
