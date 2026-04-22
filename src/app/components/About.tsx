import { Bot, Braces, CheckCircle2, Database, FileCog, PanelsTopLeft, Route, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { SectionHeader } from './SectionHeader';

const focusAreas = [
  { icon: PanelsTopLeft, label: 'Apps web y landing pages' },
  { icon: FileCog, label: 'Automatización documental' },
  { icon: Bot, label: 'Asistentes inteligentes' },
  { icon: Braces, label: 'Herramientas internas' }
];

const workflow = ['Idea', 'Estructura', 'MVP', 'Mejoras'];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[linear-gradient(180deg,#f5f9ff_0%,#eef5ff_48%,#f8fbff_100%)] py-20 lg:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.035)_1px,transparent_1px)] bg-[size:64px_64px] opacity-40 motion-safe:animate-[gridDrift_24s_linear_infinite]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55 }}
          >
            <SectionHeader
              align="left"
              eyebrow="Sobre mí"
              title="Un perfil técnico orientado a resolver procesos, no solo a entregar pantallas."
              description="Trabajo como desarrollador freelance creando soluciones digitales para negocios, profesionales y equipos que necesitan ordenar información, automatizar tareas o lanzar una presencia web sólida."
            />

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {focusAreas.map(({ icon: Icon, label }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -3 }}
                  className="flex items-center gap-3 rounded-lg border border-white/80 bg-white/75 p-4 shadow-sm shadow-blue-100/60 backdrop-blur transition-colors duration-300 hover:border-blue-200"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-bold text-slate-800">{label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <AboutVisual />
        </div>
      </div>
    </section>
  );
}

function AboutVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="relative min-h-[560px]"
    >
      <div className="absolute inset-x-4 top-8 h-[380px] overflow-hidden rounded-lg border border-slate-200 bg-slate-900 shadow-2xl shadow-slate-300/60 sm:inset-x-10">
        <img
          src="/images/about-workspace.jpg"
          alt="Mesa de trabajo con código y diseño web"
          className="h-full w-full object-cover opacity-[0.82]"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/84 via-slate-900/34 to-blue-500/12" />

        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-5 top-5 rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-white backdrop-blur-md"
        >
          <p className="text-xs font-semibold text-white/58">Frontend</p>
          <p className="mt-1 text-sm font-black">Next.js + Tailwind</p>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-5 right-5 rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-white backdrop-blur-md"
        >
          <p className="text-xs font-semibold text-white/58">Automatización</p>
          <p className="mt-1 text-sm font-black">Python + APIs</p>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-[620px] rounded-lg border border-slate-200 bg-white p-5 shadow-xl shadow-slate-300/50 sm:p-6">
        <div className="grid gap-4 sm:grid-cols-[1fr_0.9fr]">
          <div>
            <div className="mb-4 flex items-center gap-2 text-sm font-black text-slate-950">
              <Route className="h-4 w-4 text-blue-600" />
              Flujo de trabajo
            </div>
            <div className="grid gap-3">
              {workflow.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-950 text-xs font-black text-white">
                    {index + 1}
                  </span>
                  <span className="text-sm font-bold text-slate-700">{item}</span>
                  <span className="h-px flex-1 bg-slate-200" />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="rounded-lg bg-slate-50 p-4">
            <div className="flex items-center gap-2 text-sm font-black text-slate-950">
              <Sparkles className="h-4 w-4 text-violet-600" />
              Enfoque
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Combino frontend, backend, datos e IA para que la solución no se quede solo en una interfaz bonita.
            </p>
            <div className="mt-4 flex items-center gap-2 rounded-lg border border-emerald-100 bg-emerald-50 p-3 text-sm font-bold text-emerald-900">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              Alcance claro
            </div>
          </div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-0 top-0 hidden rounded-lg border border-slate-200 bg-white p-4 shadow-xl shadow-slate-300/50 md:block"
      >
        <Database className="h-5 w-5 text-blue-600" />
        <p className="mt-2 text-sm font-black text-slate-900">Datos ordenados</p>
        <p className="mt-1 text-xs text-slate-500">SQL, dashboards y reportes</p>
      </motion.div>
    </motion.div>
  );
}
