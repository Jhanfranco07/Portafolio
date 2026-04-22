# ⚡ Guía Rápida - Jhan Freelance Landing Page

## 🚀 Inicio Rápido (3 pasos)

```bash
# 1. Instalar dependencias
npm install

# 2. Ejecutar en desarrollo
npm run dev

# 3. Abrir en navegador
# http://localhost:5173
```

¡Listo! Tu landing page está corriendo.

---

## 📝 Personalización Esencial (10 minutos)

### 1. ☎️ Cambiar Número de WhatsApp

**Buscar y reemplazar en TODOS los archivos:**
```
1234567890  →  TU_NUMERO_SIN_ESPACIOS
```

Formato: Sin + ni espacios. Ejemplo: `573001234567` (para Colombia)

**Archivos a editar:**
- Navbar.tsx
- Hero.tsx  
- Process.tsx
- Pricing.tsx
- FAQ.tsx
- Contact.tsx
- Footer.tsx
- WhatsAppButton.tsx

**Búsqueda global con VS Code:**
1. Presiona `Ctrl+Shift+H` (Windows) o `Cmd+Shift+H` (Mac)
2. Buscar: `1234567890`
3. Reemplazar con: `TU_NUMERO`
4. Click "Replace All"

### 2. 📧 Cambiar Email

**Buscar y reemplazar:**
```
hola@jhanfreelance.com  →  tu@email.com
```

**Archivos:**
- Contact.tsx (línea ~70)
- Footer.tsx (línea ~60)

### 3. 🎨 Cambiar Nombre de Marca

**Buscar y reemplazar:**
```
Jhan Freelance  →  Tu Marca
```

**Archivos principales:**
- Navbar.tsx (logo)
- Footer.tsx (brand)
- README.md (documentación)

---

## 🎯 Editar Contenido Principal

### Proyectos del Portafolio

**Archivo:** `/src/app/data/projects.ts`

```typescript
{
  id: 1,
  title: "Nombre del Proyecto",
  description: "Descripción breve...",
  category: "Web App", // E-commerce, Landing Page, etc.
  image: "URL_IMAGEN_UNSPLASH",
  technologies: ["React", "Node.js"],
  results: [
    "Resultado 1",
    "Resultado 2"
  ]
}
```

**Tip imágenes:** Usa https://unsplash.com/search/photos/[keyword]

### Testimonios

**Archivo:** `/src/app/data/testimonials.ts`

```typescript
{
  id: 1,
  name: "Nombre Cliente",
  role: "CEO",
  company: "Empresa",
  content: "Testimonio completo...",
  avatar: "URL_AVATAR",
  rating: 5
}
```

### Precios

**Archivo:** `/src/app/components/Pricing.tsx` (línea 7)

```typescript
{
  name: 'Tu Plan',
  price: '$999',
  duration: '1-2 semanas',
  features: ['Feature 1', 'Feature 2'],
  popular: true, // Marca como destacado
  color: 'from-indigo-600 to-violet-600'
}
```

### FAQ

**Archivo:** `/src/app/components/FAQ.tsx` (línea 5)

```typescript
{
  question: '¿Tu pregunta?',
  answer: 'Tu respuesta detallada...'
}
```

---

## 🎨 Personalizar Colores

### Opción 1: Buscar y Reemplazar (Rápido)

**Colores actuales → Tus colores:**
```
indigo-600  →  blue-600     (Primary)
violet-600  →  purple-600   (Secondary)  
cyan-600    →  teal-600     (Accent)
```

**Comando global en VS Code:**
1. `Ctrl+Shift+H`
2. Buscar: `indigo-600`
3. Reemplazar: `blue-600` (o tu color)
4. "Replace All"

### Opción 2: Tailwind Colors

Colores disponibles: https://tailwindcss.com/docs/customizing-colors

```
slate, gray, zinc, neutral, stone,
red, orange, amber, yellow, lime,
green, emerald, teal, cyan, sky,
blue, indigo, violet, purple, fuchsia,
pink, rose
```

Intensidades: 50, 100, 200, ..., 900

---

## 📧 Conectar Formulario de Contacto

### Opción A: Formspree (Más Fácil - 2 minutos)

1. Ve a https://formspree.io
2. Crea cuenta gratis
3. Crea nuevo form → Copia el endpoint
4. Edita `/src/app/components/Contact.tsx` línea 25:

```typescript
const response = await fetch('https://formspree.io/f/TU_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
});
```

5. ¡Listo! Recibirás emails en tu bandeja.

### Opción B: EmailJS (Gratis 200/mes)

Ver `/BACKEND_EXAMPLE.md` → Opción 4

### Opción C: Backend Propio

Ver `/BACKEND_EXAMPLE.md` → Opciones 1-2

---

## 🌐 Desplegar (Gratis)

### Vercel (Recomendado)

```bash
# Instalar CLI
npm i -g vercel

# Deploy
vercel

# Seguir instrucciones (enter, enter, enter)
```

URL gratis: `tu-proyecto.vercel.app`

### Netlify

1. Arrastra carpeta del proyecto a https://app.netlify.com/drop
2. ¡Listo! URL: `tu-proyecto.netlify.app`

### GitHub Pages

```bash
npm run build
# Sube carpeta /dist a GitHub Pages
```

---

## 📱 Testear en Móvil

### Mientras desarrollas:

1. En tu terminal verás: `Network: http://192.168.X.X:5173`
2. Abre esa URL en tu celular (misma red WiFi)
3. ¡Listo! Verás la web en tu móvil

### Chrome DevTools:

1. F12 → Toggle Device Toolbar (Ctrl+Shift+M)
2. Selecciona dispositivo (iPhone, iPad, etc.)

---

## ❓ Problemas Comunes

### "npm run dev" no funciona

```bash
# Borrar node_modules y reinstalar
rm -rf node_modules
npm install
npm run dev
```

### Errores de TypeScript

```bash
# Los tipos están correctos, solo reinicia el servidor
# Ctrl+C para detener
npm run dev
```

### Imágenes no cargan

- Verifica URLs de Unsplash
- Usa formato: `https://images.unsplash.com/photo-...?w=800&q=80`

### WhatsApp no abre

- Verifica formato del número: `57300XXXXXXX` (sin +)
- Prueba en móvil, no en desktop

### Formulario no envía

- Verifica conexión a internet
- Revisa consola del navegador (F12)
- Implementa una de las opciones en `/BACKEND_EXAMPLE.md`

---

## 🎓 Próximos Pasos

### Nivel 1 (Básico):
- ✅ Cambiar textos y contenido
- ✅ Actualizar proyectos y testimonios  
- ✅ Cambiar colores
- ✅ Conectar formulario con Formspree

### Nivel 2 (Intermedio):
- 📝 Agregar más secciones personalizadas
- 🎨 Modificar layouts y diseños
- 📊 Integrar Google Analytics
- 🌙 Agregar modo oscuro

### Nivel 3 (Avanzado):
- 🌍 Internacionalización (i18n)
- 📰 Agregar blog con MDX
- 🔐 Panel de administración
- 💾 CMS (Contentful, Strapi)

---

## 📚 Documentación Completa

- 📘 **README.md** - Documentación principal y completa
- 📗 **BACKEND_EXAMPLE.md** - 5 opciones para el formulario
- 📕 **ESTRUCTURA_PROYECTO.md** - Arquitectura detallada
- 📙 **GUIA_RAPIDA.md** - Este archivo (inicio rápido)

---

## 💡 Tips Pro

### SEO Básico
Edita las etiquetas meta en tu archivo HTML principal:
```html
<title>Tu Marca - Desarrollo Web</title>
<meta name="description" content="Tu descripción SEO">
```

### Performance
- ✅ Imágenes ya están optimizadas (Unsplash CDN)
- ✅ Code splitting automático (Vite)
- ✅ CSS optimizado (Tailwind purge)

### Accesibilidad
- ✅ Contraste de colores WCAG AA
- ✅ Navegación por teclado
- ✅ ARIA labels en botones
- ✅ Semántica HTML correcta

---

## 🆘 Soporte

¿Necesitas ayuda? Opciones:

1. **Documentación:** Lee `/README.md` completo
2. **Ejemplos:** Revisa `/BACKEND_EXAMPLE.md`
3. **Estructura:** Consulta `/ESTRUCTURA_PROYECTO.md`
4. **Issues:** (Si es un proyecto GitHub)

---

## ✅ Checklist Pre-Deploy

Antes de publicar, verifica:

- [ ] Cambié el número de WhatsApp
- [ ] Actualicé el email de contacto  
- [ ] Modifiqué el nombre de marca
- [ ] Actualicé proyectos del portafolio
- [ ] Agregué testimonios reales (o los edité)
- [ ] Ajusté los precios a mi negocio
- [ ] Conecté el formulario de contacto
- [ ] Probé en móvil
- [ ] Probé todos los enlaces
- [ ] Revisé que el WhatsApp funcione

---

## 🎉 ¡Listo!

Tu landing page profesional está lista. Ahora:

1. **Personaliza** el contenido (10-30 min)
2. **Prueba** en móvil y desktop (5 min)
3. **Despliega** en Vercel/Netlify (2 min)
4. **Comparte** tu URL con el mundo 🚀

**Tiempo total estimado:** 20-40 minutos para tener tu web live.

---

**Creado con ❤️ | React + Tailwind CSS + Motion**
