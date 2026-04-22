import { ArrowDownRight, ArrowRight, Bot, CheckCircle2, Code2, Database, LineChart, MessageCircle, Workflow } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { openWhatsApp } from '../utils/whatsapp';

export function Hero() {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-slate-200 bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_72%)] pt-28 sm:pt-32 lg:pt-36"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.05)_1px,transparent_1px)] bg-[size:44px_44px] opacity-60" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 sm:px-6 lg:grid-cols-[1fr_0.92fr] lg:px-8 lg:pb-20">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 rounded-lg border border-blue-100 bg-white px-3 py-2 text-sm font-semibold text-blue-700 shadow-sm"
          >
            <CheckCircle2 className="h-4 w-4" />
            Desarrollo freelance para productos web reales
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="max-w-4xl text-4xl font-black leading-tight text-slate-950 sm:text-5xl lg:text-6xl"
          >
            Jhan Freelance construye soluciones web, automatización e IA para procesos reales.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl"
          >
            Diseño y desarrollo landing pages, sistemas tipo SaaS, dashboards, asistentes inteligentes y herramientas internas para negocios, profesionales y sector público.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <button
              type="button"
              onClick={() => openWhatsApp()}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-base font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
            >
              <MessageCircle className="h-5 w-5" />
              Hablemos por WhatsApp
            </button>
            <button
              type="button"
              onClick={scrollToProjects}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-bold text-slate-800 shadow-sm transition hover:border-slate-400 hover:bg-slate-50"
            >
              Ver proyectos
              <ArrowRight className="h-5 w-5" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-8 grid gap-3 text-sm font-semibold text-slate-600 sm:grid-cols-3"
          >
            {['Webs profesionales', 'Automatización útil', 'Sistemas a medida'].map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-violet-500" />
                {item}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 26, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.2 }}
        >
          <HeroMockup />
        </motion.div>
      </div>
    </section>
  );
}

function HeroMockup() {
  return (
    <div className="relative mx-auto max-w-xl">
      <div className="rounded-lg border border-slate-200 bg-white shadow-2xl shadow-slate-200/70">
        <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
          </div>
          <span className="rounded-md bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500">dashboard.jhan.dev</span>
        </div>

        <div className="grid gap-4 p-4 sm:p-5">
          <div className="grid gap-4 sm:grid-cols-[1fr_0.82fr]">
            <div className="rounded-lg border border-slate-200 bg-slate-950 p-5 text-white">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-blue-200">Proyecto activo</p>
                  <h3 className="mt-1 text-xl font-black">Sistema de gestión</h3>
                </div>
                <span className="rounded-md bg-blue-500/20 px-2.5 py-1 text-xs font-bold text-blue-100">MVP</span>
              </div>
              <div className="space-y-3">
                {[
                  { label: 'Arquitectura', value: '85%' },
                  { label: 'Frontend', value: '70%' },
                  { label: 'Automatización', value: '55%' }
                ].map((item) => (
                  <div key={item.label}>
                    <div className="mb-1 flex justify-between text-xs font-semibold text-slate-300">
                      <span>{item.label}</span>
                      <span>{item.value}</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full rounded-full bg-gradient-to-r from-blue-400 to-violet-400" style={{ width: item.value }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              <MiniPanel icon={Bot} label="Asistente IA" value="Consultas ordenadas" color="violet" />
              <MiniPanel icon={Database} label="Datos" value="PostgreSQL + Prisma" color="blue" />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <MetricCard icon={Code2} label="Componentes" value="Reutilizables" />
            <MetricCard icon={Workflow} label="Flujos" value="Automatizados" />
            <MetricCard icon={LineChart} label="Reportes" value="Visuales" />
          </div>

          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm font-bold text-slate-900">Roadmap técnico</span>
              <ArrowDownRight className="h-4 w-4 text-violet-600" />
            </div>
            <div className="grid gap-2">
              {['Definir módulos principales', 'Conectar datos reales', 'Desplegar versión inicial'].map((task) => (
                <div key={task} className="flex items-center gap-2 rounded-md bg-white px-3 py-2 text-sm font-semibold text-slate-600">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  {task}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type MiniPanelProps = {
  icon: LucideIcon;
  label: string;
  value: string;
  color: 'blue' | 'violet';
};

function MiniPanel({ icon: Icon, label, value, color }: MiniPanelProps) {
  const styles = color === 'blue' ? 'bg-blue-50 text-blue-700 border-blue-100' : 'bg-violet-50 text-violet-700 border-violet-100';

  return (
    <div className={`rounded-lg border p-4 ${styles}`}>
      <Icon className="mb-4 h-6 w-6" />
      <p className="text-sm font-bold">{label}</p>
      <p className="mt-1 text-sm text-slate-600">{value}</p>
    </div>
  );
}

function MetricCard({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4">
      <Icon className="mb-3 h-5 w-5 text-blue-600" />
      <p className="text-xs font-bold uppercase text-slate-400">{label}</p>
      <p className="mt-1 text-sm font-bold text-slate-900">{value}</p>
    </div>
  );
}
