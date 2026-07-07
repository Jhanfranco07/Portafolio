import { useState } from 'react';
import { Info, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { technologies } from '../data/content';
import type { Technology } from '../data/types';
import { SectionHeader } from './SectionHeader';
import { TechLogo } from './TechLogo';

const techDescriptions: Record<string, { what: string; use: string }> = {
  Python: { what: 'Lenguaje versátil orientado a productividad, datos e inteligencia artificial.', use: 'Lo utilizo para automatizaciones, APIs, modelos de IA y procesamiento de información.' },
  TypeScript: { what: 'JavaScript con tipado estático para crear aplicaciones más seguras y mantenibles.', use: 'Lo utilizo en interfaces, plataformas web y proyectos fullstack de mayor escala.' },
  JavaScript: { what: 'Lenguaje principal de la web para añadir lógica e interactividad.', use: 'Lo utilizo en experiencias dinámicas, integraciones y aplicaciones web.' },
  HTML: { what: 'Lenguaje de marcado que define la estructura y el contenido de una página.', use: 'Lo utilizo para construir interfaces accesibles y correctamente organizadas.' },
  CSS: { what: 'Lenguaje de estilos para controlar presentación, adaptación y animaciones.', use: 'Lo utilizo para crear diseños responsive, transiciones y experiencias visuales.' },
  SQL: { what: 'Lenguaje para consultar y administrar información estructurada.', use: 'Lo utilizo para diseñar consultas, reportes y operaciones sobre bases de datos.' },
  'Next.js': { what: 'Framework de React para aplicaciones web modernas y optimizadas.', use: 'Lo utilizo en plataformas fullstack, autenticación, rutas, APIs y despliegues web.' },
  React: { what: 'Librería para construir interfaces mediante componentes reutilizables.', use: 'Lo utilizo en dashboards, SaaS y aplicaciones con interacción dinámica.' },
  'Tailwind CSS': { what: 'Framework de utilidades CSS para diseñar interfaces con rapidez y consistencia.', use: 'Lo utilizo para sistemas visuales responsive y componentes personalizados.' },
  'Node.js': { what: 'Entorno de ejecución que permite utilizar JavaScript en el servidor.', use: 'Lo utilizo para APIs, servicios backend, automatizaciones e integraciones.' },
  Express: { what: 'Framework minimalista para construir servidores y APIs con Node.js.', use: 'Lo utilizo para endpoints, lógica de negocio y conexión con bases de datos.' },
  Prisma: { what: 'ORM moderno para trabajar con bases de datos desde TypeScript.', use: 'Lo utilizo para definir modelos, migraciones y consultas seguras.' },
  'scikit-learn': { what: 'Librería de Python para aprendizaje automático y análisis predictivo.', use: 'La utilizo para clasificación, entrenamiento de modelos y evaluación de resultados.' },
  Figma: { what: 'Herramienta colaborativa de diseño y prototipado de interfaces.', use: 'La utilizo para planificar pantallas, flujos y sistemas visuales antes del desarrollo.' },
  GitHub: { what: 'Plataforma para alojar código y colaborar mediante Git.', use: 'La utilizo para control de versiones, documentación y publicación de proyectos.' },
  Vercel: { what: 'Plataforma cloud especializada en despliegues web.', use: 'La utilizo para publicar aplicaciones, gestionar dominios y automatizar despliegues.' },
  Neon: { what: 'Plataforma serverless de PostgreSQL administrado en la nube.', use: 'La utilizo para disponer de bases de datos escalables en proyectos web.' },
  PostgreSQL: { what: 'Sistema de base de datos relacional robusto y de código abierto.', use: 'Lo utilizo para datos estructurados, relaciones, reportes y operaciones transaccionales.' },
  Supabase: { what: 'Plataforma backend con PostgreSQL, autenticación, almacenamiento y APIs.', use: 'La utilizo para acelerar el backend de aplicaciones y prototipos funcionales.' },
  n8n: { what: 'Plataforma visual de automatización e integración de procesos.', use: 'La utilizo para conectar servicios, mover datos y reducir tareas repetitivas.' },
  Streamlit: { what: 'Framework de Python para crear aplicaciones de datos e IA rápidamente.', use: 'Lo utilizo para demos, paneles analíticos y prototipos de modelos.' },
  'Google Sheets API': { what: 'Interfaz para leer y modificar hojas de cálculo mediante código.', use: 'La utilizo en automatizaciones, reportes y sincronización de datos.' },
  Postman: { what: 'Herramienta para diseñar, probar y documentar APIs.', use: 'La utilizo para validar endpoints, autenticación y respuestas del backend.' }
};

export function Technologies() {
  const [selectedTech, setSelectedTech] = useState<Technology | null>(null);

  return (
    <section id="technologies" className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fafc_0%,#eaf3ff_45%,#ffffff_100%)] py-20 lg:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="absolute left-0 top-24 h-[70%] w-1/3 bg-[linear-gradient(90deg,rgba(59,130,246,0.08),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Tecnologías"
          title="Un stack práctico para crear interfaces, automatizaciones, datos y despliegues."
          description="Agrupado por uso real: tecnologías base, frameworks, librerías, runtimes y plataformas para diseño, datos, integraciones y publicación."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {technologies.map((category, categoryIndex) => (
            <motion.article
              key={category.category}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="rounded-lg border border-slate-200 bg-white/80 p-5 shadow-sm shadow-blue-100/50 backdrop-blur transition-colors duration-300 hover:border-blue-200"
            >
              <div className="mb-5 lg:min-h-[124px]">
                <h3 className="text-xl font-black text-slate-950">{category.category}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{category.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
                {category.items.map((tech, index) => (
                  <motion.button
                    type="button"
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: categoryIndex * 0.04 + index * 0.025 }}
                    whileHover={{ y: -3, scale: 1.02 }}
                    whileTap={{ scale: 0.96, rotateY: 8 }}
                    onClick={() => setSelectedTech(tech)}
                    className="group relative flex min-h-[118px] w-full flex-col items-center justify-center rounded-lg border border-slate-200 bg-white p-3 text-center shadow-sm transition-colors duration-300 hover:border-blue-300 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-100"
                  >
                    <Info className="absolute right-2 top-2 h-4 w-4 text-slate-300 transition group-hover:text-blue-500" />
                    <TechLogo name={tech.name} />
                    <span className="mt-3 text-sm font-bold leading-tight text-slate-800">{tech.name}</span>
                  </motion.button>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedTech && <TechnologyDialog tech={selectedTech} onClose={() => setSelectedTech(null)} />}
      </AnimatePresence>
    </section>
  );
}

function TechnologyDialog({ tech, onClose }: { tech: Technology; onClose: () => void }) {
  const detail = techDescriptions[tech.name] ?? {
    what: 'Tecnología utilizada en el desarrollo de productos digitales.',
    use: 'La utilizo según las necesidades técnicas de cada proyecto.'
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/65 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="technology-title"
    >
      <motion.div
        initial={{ opacity: 0, y: 30, rotateX: -14, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, rotateX: 10, scale: 0.94 }}
        transition={{ type: 'spring', stiffness: 260, damping: 24 }}
        className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-blue-100 bg-white p-6 shadow-2xl shadow-blue-950/25 sm:p-8"
        onClick={(event) => event.stopPropagation()}
        style={{ transformPerspective: 1000 }}
      >
        <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400" />
        <button type="button" onClick={onClose} className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-900" aria-label="Cerrar información">
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-4 pr-12">
          <TechLogo name={tech.name} />
          <div>
            <p className="text-sm font-bold text-blue-600">Tecnología</p>
            <h3 id="technology-title" className="text-2xl font-black text-slate-950">{tech.name}</h3>
          </div>
        </div>

        <div className="mt-6 grid gap-4">
          <div className="rounded-xl bg-slate-50 p-4">
            <h4 className="font-black text-slate-950">¿Qué es?</h4>
            <p className="mt-2 leading-7 text-slate-600">{detail.what}</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <h4 className="font-black text-blue-950">¿Para qué la uso?</h4>
            <p className="mt-2 leading-7 text-blue-900/75">{detail.use}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
