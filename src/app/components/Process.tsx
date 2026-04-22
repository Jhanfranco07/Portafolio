import { useState } from 'react';
import { CheckCircle2, ChevronLeft, ChevronRight, Code2, FileText, Layers3, Search } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { processSteps } from '../data/content';
import { SectionHeader } from './SectionHeader';

const stepIcons = [Search, FileText, Layers3, Code2, CheckCircle2];

const stepDetails = [
  {
    label: 'Entendimiento inicial',
    tasks: [
      'Aterrizar el objetivo del proyecto y el problema real.',
      'Identificar usuarios, datos, restricciones y prioridades.',
      'Definir qué debe estar listo para una primera versión útil.'
    ],
    output: 'Resumen claro del alcance inicial y criterios de éxito.'
  },
  {
    label: 'Ruta viable',
    tasks: [
      'Ordenar funcionalidades por prioridad e impacto.',
      'Separar lo esencial de lo que puede esperar.',
      'Proponer tiempos, entregables y forma de trabajo.'
    ],
    output: 'Propuesta con alcance, fases y entregables entendibles.'
  },
  {
    label: 'Base del producto',
    tasks: [
      'Diseñar estructura de pantallas, módulos y navegación.',
      'Definir datos, flujos principales y reglas del proceso.',
      'Preparar una base visual simple antes de construir.'
    ],
    output: 'Mapa funcional para desarrollar sin improvisar.'
  },
  {
    label: 'Construcción',
    tasks: [
      'Desarrollar componentes, pantallas y lógica principal.',
      'Integrar APIs, base de datos, formularios o automatizaciones.',
      'Revisar avances por bloques para corregir temprano.'
    ],
    output: 'Versión funcional lista para pruebas y ajustes.'
  },
  {
    label: 'Cierre y mejora',
    tasks: [
      'Validar el flujo completo y corregir detalles finales.',
      'Dejar instrucciones básicas de uso o mantenimiento.',
      'Proponer mejoras futuras solo si aportan valor real.'
    ],
    output: 'Solución operativa, documentada y lista para evolucionar.'
  }
];

const stepAccents = [
  {
    number: 'bg-blue-500 shadow-blue-500/20',
    icon: 'text-blue-200',
    border: 'border-blue-300/35',
    button: 'border-blue-300/40 bg-blue-500/12 text-blue-100',
    glow: 'from-blue-500/18'
  },
  {
    number: 'bg-violet-500 shadow-violet-500/20',
    icon: 'text-violet-200',
    border: 'border-violet-300/35',
    button: 'border-violet-300/40 bg-violet-500/12 text-violet-100',
    glow: 'from-violet-500/18'
  },
  {
    number: 'bg-cyan-500 shadow-cyan-500/20',
    icon: 'text-cyan-200',
    border: 'border-cyan-300/35',
    button: 'border-cyan-300/40 bg-cyan-500/12 text-cyan-100',
    glow: 'from-cyan-500/18'
  },
  {
    number: 'bg-emerald-500 shadow-emerald-500/20',
    icon: 'text-emerald-200',
    border: 'border-emerald-300/35',
    button: 'border-emerald-300/40 bg-emerald-500/12 text-emerald-100',
    glow: 'from-emerald-500/18'
  },
  {
    number: 'bg-amber-500 shadow-amber-500/20',
    icon: 'text-amber-200',
    border: 'border-amber-300/35',
    button: 'border-amber-300/40 bg-amber-500/12 text-amber-100',
    glow: 'from-amber-500/18'
  }
];

export function Process() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStep = processSteps[activeIndex];
  const activeDetail = stepDetails[activeIndex];
  const ActiveIcon = stepIcons[activeIndex];
  const activeAccent = stepAccents[activeIndex];

  const goToPrevious = () => setActiveIndex((current) => Math.max(current - 1, 0));
  const goToNext = () => setActiveIndex((current) => Math.min(current + 1, processSteps.length - 1));

  return (
    <section id="process" className="relative overflow-hidden bg-[#07111f] py-20 text-white lg:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30 motion-safe:animate-[gridDrift_24s_linear_infinite]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Proceso de trabajo"
          title="Un flujo simple, paso a paso, para convertir una necesidad en una solución usable."
          description="Cada etapa se revisa con entregables claros. Avanzas por bloques, ves qué se decide y qué se construye antes de pasar al siguiente paso."
          tone="dark"
        />

        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.42fr_1fr] lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-lg border border-white/10 bg-white/[0.05] p-3 shadow-lg shadow-black/20 backdrop-blur"
          >
            <div className="mb-3 px-2 py-2">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Navegación</p>
              <p className="mt-1 text-sm text-slate-300">Elige un paso o avanza con las flechas.</p>
            </div>

            <div className="grid gap-2">
              {processSteps.map((step, index) => {
                const Icon = stepIcons[index];
                const accent = stepAccents[index];
                const isActive = index === activeIndex;

                return (
                  <button
                    key={step.number}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`group flex items-center gap-3 rounded-lg border px-3 py-3 text-left transition duration-300 ${
                      isActive
                        ? accent.button
                        : 'border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/20 hover:bg-white/[0.07] hover:text-white'
                    }`}
                  >
                    <span
                      className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg text-sm font-black transition ${
                        isActive ? `${accent.number} text-white shadow-lg` : 'bg-white/8 text-slate-300 group-hover:bg-white/12'
                      }`}
                    >
                      {step.number}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-black">{step.title}</span>
                      <span className="mt-0.5 block truncate text-xs opacity-75">{stepDetails[index].label}</span>
                    </span>
                    <Icon className={`h-4 w-4 flex-shrink-0 ${isActive ? accent.icon : 'text-slate-500 group-hover:text-slate-300'}`} />
                  </button>
                );
              })}
            </div>
          </motion.div>

          <div className="relative min-h-[520px] overflow-hidden rounded-lg border border-white/10 bg-white/[0.06] shadow-2xl shadow-black/25 backdrop-blur">
            <AnimatePresence mode="wait">
              <motion.article
                key={activeStep.number}
                initial={{ opacity: 0, x: 26, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -26, scale: 0.98 }}
                transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                className={`relative h-full overflow-hidden border ${activeAccent.border} bg-slate-950/20 p-6 sm:p-8`}
              >
                <div className={`absolute inset-x-0 top-0 h-44 bg-gradient-to-b ${activeAccent.glow} to-transparent opacity-90`} />
                <div className="relative flex flex-col gap-8 lg:min-h-[464px]">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-4">
                      <span className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg font-black text-white shadow-lg ${activeAccent.number}`}>
                        {activeStep.number}
                      </span>
                      <div>
                        <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-400">Paso {activeStep.number} de {processSteps.length}</p>
                        <h3 className="mt-2 text-3xl font-black leading-tight text-white sm:text-4xl">{activeStep.title}</h3>
                        <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300">{activeStep.description}</p>
                      </div>
                    </div>

                    <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/8 ${activeAccent.icon}`}>
                      <ActiveIcon className="h-6 w-6" />
                    </div>
                  </div>

                  <div className="grid gap-5 lg:grid-cols-[1fr_0.72fr] lg:items-start">
                    <div className="rounded-lg border border-white/10 bg-white/[0.06] p-5">
                      <p className="text-sm font-black text-white">Subtareas de esta etapa</p>
                      <div className="mt-5 grid gap-3">
                        {activeDetail.tasks.map((task, index) => (
                          <motion.div
                            key={task}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.32, delay: index * 0.08 }}
                            className="flex gap-3 rounded-lg border border-white/10 bg-slate-950/35 p-4"
                          >
                            <CheckCircle2 className={`mt-0.5 h-5 w-5 flex-shrink-0 ${activeAccent.icon}`} />
                            <span className="text-sm leading-6 text-slate-200">{task}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-lg border border-white/10 bg-white/[0.06] p-5">
                      <p className="text-sm font-black text-white">Resultado esperado</p>
                      <p className="mt-3 text-sm leading-7 text-slate-300">{activeDetail.output}</p>
                      <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          key={activeStep.number}
                          initial={{ width: 0 }}
                          animate={{ width: `${((activeIndex + 1) / processSteps.length) * 100}%` }}
                          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                          className="h-full rounded-full bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-300"
                        />
                      </div>
                      <p className="mt-3 text-xs font-semibold text-slate-400">{activeIndex + 1} de {processSteps.length} etapas revisadas</p>
                    </div>
                  </div>

                  <div className="mt-auto flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <button
                      type="button"
                      onClick={goToPrevious}
                      disabled={activeIndex === 0}
                      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-35"
                    >
                      <ChevronLeft className="h-4 w-4" />
                      Anterior
                    </button>

                    <div className="flex justify-center gap-2">
                      {processSteps.map((step, index) => (
                        <button
                          key={step.number}
                          type="button"
                          onClick={() => setActiveIndex(index)}
                          className={`h-2.5 rounded-full transition-all duration-300 ${
                            index === activeIndex ? 'w-8 bg-white' : 'w-2.5 bg-white/25 hover:bg-white/45'
                          }`}
                          aria-label={`Ver paso ${step.number}`}
                        />
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={goToNext}
                      disabled={activeIndex === processSteps.length - 1}
                      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-black text-slate-950 transition hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-35"
                    >
                      Siguiente
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
