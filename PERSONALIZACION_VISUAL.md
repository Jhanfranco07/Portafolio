# 🎨 Guía de Personalización Visual

## Cómo personalizar el diseño sin romper nada

---

## 🎯 Cambios Rápidos (Copiar/Pegar)

### 1. Cambiar Colores Principales

#### Opción A: Buscar y Reemplazar Global

**VS Code:**
1. `Ctrl+Shift+H` (Windows) o `Cmd+Shift+H` (Mac)
2. Activar "Match Whole Word" (icono Aa|)

**Esquema Azul → Verde:**
```
Buscar:    indigo-600    →    Reemplazar:    emerald-600
Buscar:    indigo-700    →    Reemplazar:    emerald-700
Buscar:    indigo-100    →    Reemplazar:    emerald-100
Buscar:    indigo-50     →    Reemplazar:    emerald-50

Buscar:    violet-600    →    Reemplazar:    teal-600
Buscar:    violet-700    →    Reemplazar:    teal-700
Buscar:    violet-100    →    Reemplazar:    teal-100

Buscar:    cyan-600      →    Reemplazar:    sky-600
Buscar:    cyan-700      →    Reemplazar:    sky-700
```

**Esquema Rojo/Naranja (Energético):**
```
indigo-600  →  red-600
indigo-700  →  red-700
violet-600  →  orange-600
violet-700  →  orange-700
cyan-600    →  amber-600
```

**Esquema Morado (Elegante):**
```
indigo-600  →  purple-600
violet-600  →  fuchsia-600
cyan-600    →  pink-600
```

### 2. Paletas Predefinidas

#### 🔵 Azul Corporativo
```
Primary:   blue-600
Secondary: sky-600
Accent:    cyan-600
```

#### 🟢 Verde Eco/Tech
```
Primary:   green-600
Secondary: emerald-600
Accent:    teal-600
```

#### 🟣 Morado Creativo
```
Primary:   purple-600
Secondary: violet-600
Accent:    fuchsia-600
```

#### 🔴 Rojo Dinámico
```
Primary:   red-600
Secondary: rose-600
Accent:    pink-600
```

#### 🟠 Naranja Moderno
```
Primary:   orange-600
Secondary: amber-600
Accent:    yellow-600
```

---

## 🎨 Personalización de Secciones

### Hero Section (Primera Impresión)

**Archivo:** `/src/app/components/Hero.tsx`

#### Cambiar título principal (línea ~50):
```tsx
// Antes:
<h1>
  Transformo ideas en{' '}
  <span className="bg-gradient-to-r from-indigo-600...">
    experiencias digitales
  </span>{' '}
  excepcionales
</h1>

// Después (ejemplo):
<h1>
  Construyo{' '}
  <span className="bg-gradient-to-r from-blue-600 to-purple-600...">
    productos digitales
  </span>{' '}
  que escalan tu negocio
</h1>
```

#### Cambiar descripción (línea ~60):
```tsx
<p>
  Tu nueva descripción aquí. Mantén 2-3 líneas máximo
  para que sea efectivo y fácil de leer.
</p>
```

#### Cambiar estadísticas (línea ~90):
```tsx
<div>
  <div className="text-3xl font-bold text-indigo-600">100+</div>
  <div className="text-sm text-slate-600">Tu Métrica</div>
</div>
```

---

### Navbar (Barra Superior)

**Archivo:** `/src/app/components/Navbar.tsx`

#### Cambiar logo/marca (línea ~35):
```tsx
<button className="text-2xl font-bold...">
  Tu Marca
</button>
```

#### Agregar logo imagen:
```tsx
<button className="flex items-center gap-2">
  <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
  <span className="text-2xl font-bold...">Tu Marca</span>
</button>
```

#### Cambiar items del menú (línea ~20):
```tsx
const navLinks = [
  { name: 'Inicio', href: '#hero' },
  { name: 'Nosotros', href: '#about' },  // Nuevo
  { name: 'Servicios', href: '#services' },
  // ... agrega o quita según necesites
];
```

---

### Footer

**Archivo:** `/src/app/components/Footer.tsx`

#### Cambiar redes sociales (línea ~40):
```tsx
<a href="https://linkedin.com/in/TU-PERFIL">LinkedIn</a>
<a href="https://github.com/TU-USUARIO">GitHub</a>
<a href="https://twitter.com/TU-USUARIO">Twitter</a>
```

#### Agregar más redes:
```tsx
import { Instagram, Youtube } from 'lucide-react';

<a href="https://instagram.com/TU-USUARIO">
  <Instagram className="w-5 h-5" />
</a>
```

---

## 🖼️ Imágenes y Assets

### Cambiar Imágenes del Portafolio

**Archivo:** `/src/app/data/projects.ts`

#### Opción 1: Unsplash (Gratis)
```typescript
image: "https://images.unsplash.com/photo-XXXXXXX?w=800&q=80"
```

Busca en: https://unsplash.com/s/photos/[tu-keyword]
Copia URL de la imagen

#### Opción 2: Imágenes propias
```typescript
// 1. Coloca imagen en /public/images/proyecto1.jpg
// 2. Referencia:
image: "/images/proyecto1.jpg"
```

#### Opción 3: CDN externo
```typescript
image: "https://tu-cdn.com/imagen.jpg"
```

### Cambiar Avatares de Testimonios

**Archivo:** `/src/app/data/testimonials.ts`

Mismo proceso que arriba:
```typescript
avatar: "URL_DE_TU_IMAGEN"
```

**Tip:** Para avatares, usa formato cuadrado (1:1)

---

## 🔤 Tipografía

### Cambiar Fuente Principal

**Archivo:** `/src/styles/fonts.css`

#### Opción 1: Google Fonts
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

body {
  font-family: 'Inter', sans-serif;
}
```

**Fuentes recomendadas:**
- **Inter** - Moderna y legible
- **Poppins** - Amigable y redonda
- **Roboto** - Clásica y confiable
- **Montserrat** - Elegante y profesional
- **Open Sans** - Neutral y versátil

#### Opción 2: Fuente del sistema (actual)
```css
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', ...;
}
```

### Cambiar Tamaños de Texto

**Archivo:** `/src/styles/theme.css` (línea 4):
```css
:root {
  --font-size: 16px;  /* Cambiar a 14px o 18px */
}
```

---

## 🎭 Animaciones

### Desactivar Animaciones (Performance)

Si quieres una web más rápida sin animaciones:

**Opción 1: Quitar Motion imports**
Busca y comenta/elimina:
```tsx
// import { motion } from 'motion/react';
```

Y cambia:
```tsx
<motion.div>  →  <div>
```

**Opción 2: Reducir animaciones**
Cambiar `duration` de 0.6 a 0.3:
```tsx
transition={{ duration: 0.3 }}
```

### Personalizar Animaciones

#### Cambiar velocidad:
```tsx
// Más rápido
transition={{ duration: 0.3 }}

// Más lento
transition={{ duration: 1 }}
```

#### Cambiar efecto:
```tsx
// De abajo hacia arriba
initial={{ opacity: 0, y: 20 }}

// De izquierda a derecha
initial={{ opacity: 0, x: -20 }}

// Solo fade
initial={{ opacity: 0 }}
```

---

## 📐 Espaciado y Layout

### Cambiar Padding de Secciones

Busca en cada componente:
```tsx
// Menos espacio
className="py-12 lg:py-16"

// Espacio actual
className="py-20 lg:py-28"

// Más espacio
className="py-28 lg:py-36"
```

### Cambiar Ancho Máximo

Busca `container`:
```tsx
// Ancho actual
<div className="container mx-auto px-4">

// Más angosto
<div className="max-w-6xl mx-auto px-4">

// Más ancho
<div className="max-w-screen-2xl mx-auto px-4">
```

---

## 🎨 Efectos Visuales

### Cambiar Bordes Redondeados

**Global:** Archivo `/src/styles/theme.css` (línea 33):
```css
--radius: 0.625rem;  /* Actual: 10px */
--radius: 0.375rem;  /* Menos redondeado: 6px */
--radius: 1rem;      /* Más redondeado: 16px */
--radius: 0;         /* Sin redondeo */
```

**Individual:**
```tsx
className="rounded-lg"   // Actual
className="rounded-md"   // Menos
className="rounded-2xl"  // Más
className="rounded-none" // Sin redondeo
```

### Cambiar Sombras

```tsx
// Sombra actual
className="shadow-lg"

// Más sutil
className="shadow-md"

// Más dramática
className="shadow-2xl"

// Con color
className="shadow-lg shadow-indigo-500/20"
```

### Cambiar Efectos Hover

```tsx
// Scale suave
className="hover:scale-105"

// Scale más notable
className="hover:scale-110"

// Rotate
className="hover:rotate-3"

// Brightness
className="hover:brightness-110"
```

---

## 🌈 Gradientes

### Cambiar Gradientes de Botones

```tsx
// Actual
className="bg-gradient-to-r from-indigo-600 to-violet-600"

// Horizontal invertido
className="bg-gradient-to-l from-indigo-600 to-violet-600"

// Diagonal
className="bg-gradient-to-br from-indigo-600 to-violet-600"

// 3 colores
className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"
```

### Crear Gradientes Personalizados

**Herramienta online:** https://uigradients.com
**Hypercolor:** https://hypercolor.dev

Ejemplo:
```tsx
className="bg-gradient-to-r from-[#667eea] to-[#764ba2]"
```

---

## 📱 Responsive Adjustments

### Ocultar en Móvil/Desktop

```tsx
// Ocultar en móvil, mostrar en desktop
className="hidden lg:block"

// Mostrar en móvil, ocultar en desktop
className="lg:hidden"

// Diferentes estilos por tamaño
className="text-sm md:text-base lg:text-lg"
```

### Cambiar Grid en Móvil

```tsx
// 1 columna móvil, 2 en tablet, 3 en desktop
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"

// 2 columnas siempre en móvil
className="grid grid-cols-2 lg:grid-cols-4"
```

---

## 🎯 Componentes Específicos

### Botones

#### Estilo Outline:
```tsx
className="border-2 border-indigo-600 text-indigo-600 
           hover:bg-indigo-600 hover:text-white"
```

#### Botón Grande:
```tsx
className="px-8 py-4 text-lg"
```

#### Botón Pequeño:
```tsx
className="px-4 py-2 text-sm"
```

### Cards

#### Card con Borde:
```tsx
className="border-2 border-indigo-200 hover:border-indigo-500"
```

#### Card sin Sombra:
```tsx
className="border border-slate-200"
```

---

## 🎨 Temas Prehechos

### Tema Minimalista
```tsx
// Colores neutros
Primary: slate-900
Secondary: slate-700
Accent: slate-500

// Más espacio en blanco
py-28 → py-36

// Menos sombras
shadow-lg → shadow-md
```

### Tema Vibrante
```tsx
// Colores saturados
Primary: purple-600
Secondary: pink-600
Accent: yellow-500

// Gradientes audaces
from-purple-600 via-pink-600 to-red-600

// Más animaciones
Aumentar scale: hover:scale-110
```

### Tema Corporativo
```tsx
// Colores serios
Primary: blue-700
Secondary: slate-700
Accent: blue-500

// Menos redondeo
rounded-lg → rounded-md

// Sombras sutiles
shadow-xl → shadow-md
```

---

## ⚡ Tips Pro

### 1. Mantén Consistencia
- Usa los mismos colores en toda la web
- Mantén el mismo espaciado (múltiplos de 4)
- Usa la misma familia de fuentes

### 2. Prueba en Móvil
- Abre devtools (F12) → Toggle device toolbar
- Prueba iPhone, iPad, Android
- Verifica que todo sea legible

### 3. Contraste Adecuado
- Texto oscuro en fondo claro
- Mínimo 4.5:1 de contraste ratio
- Herramienta: https://webaim.org/resources/contrastchecker/

### 4. No Sobrecargues
- Máximo 3 colores principales
- No más de 2-3 fuentes
- Animaciones sutiles > dramáticas

---

## 🔧 Debugging Visual

### Si algo se ve mal:

1. **Abre DevTools** (F12)
2. **Inspecciona el elemento** (click derecho)
3. **Edita clases en vivo** para probar
4. **Copia el resultado** al código

### Tailwind IntelliSense

Instala extensión VS Code:
"Tailwind CSS IntelliSense"

Te da autocompletado de clases.

---

## 📚 Recursos

### Colores
- **Tailwind Colors:** https://tailwindcss.com/docs/customizing-colors
- **Coolors:** https://coolors.co (generador paletas)
- **Color Hunt:** https://colorhunt.co

### Fuentes
- **Google Fonts:** https://fonts.google.com
- **Font Pair:** https://www.fontpair.co
- **Type Scale:** https://typescale.com

### Gradientes
- **UI Gradients:** https://uigradients.com
- **Hypercolor:** https://hypercolor.dev
- **Mesh Gradients:** https://meshgradient.com

### Imágenes
- **Unsplash:** https://unsplash.com
- **Pexels:** https://pexels.com
- **Pixabay:** https://pixabay.com

---

## ✅ Checklist de Personalización

- [ ] Cambié colores principales (buscar/reemplazar)
- [ ] Actualicé el logo/nombre de marca
- [ ] Cambié las imágenes por las mías
- [ ] Ajusté la tipografía si necesario
- [ ] Verifiqué responsive en móvil
- [ ] Probé todos los botones y enlaces
- [ ] El contraste es legible
- [ ] Las animaciones son suaves
- [ ] Todo se ve profesional

---

**¡Listo! Tu sitio ahora tiene tu identidad visual única. 🎨**
