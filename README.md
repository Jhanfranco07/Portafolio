# Jhan Freelance - Portfolio Web

Landing page profesional para la marca personal **Jhan Freelance**, enfocada en desarrollo web, automatizacion, dashboards, asistentes inteligentes y herramientas internas para negocios, profesionales y sector publico.

El proyecto busca presentar servicios de forma clara y honesta: sin metricas inventadas, sin precios cerrados ficticios y con una estructura visual moderna orientada a confianza tecnica.

## Vista general

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=0f172a)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Motion](https://img.shields.io/badge/Motion-Animations-8B5CF6?style=flat-square)

## Caracteristicas

- Hero oscuro con fondo visual, navegacion superior y llamadas a la accion.
- Seccion "Sobre mi" con enfoque tecnico, cards y visual referencial.
- Bloque de soluciones: landing pages, SaaS internos, chatbots, automatizacion, dashboards y plataformas a medida.
- Stack tecnologico agrupado por lenguajes, frameworks y plataformas.
- Proyectos destacados con imagenes referenciales reales, tecnologias y modal de detalle.
- Seccion "Para quien trabajo" con tarjetas diferenciadas por color.
- Proceso de trabajo interactivo paso a paso, con subtareas, progreso y transiciones.
- CTA final, formulario de contacto y boton flotante de WhatsApp.
- Diseno responsive con microinteracciones y animaciones al hacer scroll.

## Tecnologias

**Frontend**

- React
- TypeScript
- Vite
- Tailwind CSS
- Motion
- Lucide React

**UI y experiencia**

- Componentes reutilizables
- Tema oscuro/tecnologico combinado con secciones claras
- Animaciones discretas en scroll
- Cards con hover, modales y stepper interactivo

**Formulario y contacto**

- React Hook Form
- WhatsApp directo con mensaje prellenado
- Enlaces a email, LinkedIn y GitHub

## Estructura del proyecto

```txt
/
|-- public/
|   `-- images/                 # Imagenes referenciales usadas en proyectos y secciones
|-- src/
|   |-- app/
|   |   |-- components/          # Secciones y componentes reutilizables
|   |   |   |-- landing/         # Hero principal
|   |   |   |-- ui/              # Componentes base estilo shadcn/ui
|   |   |   |-- About.tsx
|   |   |   |-- Solutions.tsx
|   |   |   |-- Technologies.tsx
|   |   |   |-- Projects.tsx
|   |   |   |-- TargetAudience.tsx
|   |   |   |-- Process.tsx
|   |   |   |-- Contact.tsx
|   |   |   `-- Footer.tsx
|   |   |-- data/
|   |   |   |-- content.ts       # Textos, tecnologias, proyectos y datos de contacto
|   |   |   `-- types.ts
|   |   |-- utils/
|   |   |   `-- whatsapp.ts
|   |   `-- App.tsx
|   |-- assets/
|   |   `-- logo.png
|   |-- styles/
|   |   |-- index.css
|   |   |-- theme.css
|   |   `-- tailwind.css
|   `-- main.tsx
|-- index.html
|-- package.json
|-- tailwind.config.ts
`-- vite.config.ts
```

## Instalacion

Requisitos:

- Node.js 18 o superior
- npm

```bash
npm install
```

## Ejecutar en desarrollo

```bash
npm run dev
```

Luego abre el navegador en:

```txt
http://localhost:5173
```

Si Vite usa otro puerto, revisa la URL que aparece en la terminal.

## Construir para produccion

```bash
npm run build
```

La version optimizada se genera en:

```txt
dist/
```

## Personalizacion rapida

La mayor parte del contenido editable esta en:

```txt
src/app/data/content.ts
```

Desde ahi puedes cambiar:

- Datos de contacto.
- Numero de WhatsApp.
- LinkedIn y GitHub.
- Soluciones ofrecidas.
- Tecnologias del stack.
- Proyectos destacados.
- Publicos objetivo.
- Tipos de proyecto del formulario.

## Contacto configurado

- Email: `jhandev07@gmail.com`
- WhatsApp: `+51 921 561 684`
- LinkedIn: [Jhan Perez](https://www.linkedin.com/in/jhan-perez-a7a63a29a/)

## Despliegue sugerido

Este proyecto puede desplegarse facilmente en Vercel, Netlify o cualquier hosting estatico.

Para Vercel:

```bash
npm run build
```

Configura:

- Framework preset: `Vite`
- Build command: `npm run build`
- Output directory: `dist`

## Estado

Proyecto en desarrollo visual, preparado para seguir ajustando contenido personal, proyectos reales y capturas finales.
