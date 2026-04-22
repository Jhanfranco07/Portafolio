import * as Icons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { services } from '../data/content';
import { SectionHeader } from './SectionHeader';

const accentStyles: Record<string, string> = {
  blue: 'bg-blue-400/12 text-blue-200 border-blue-300/20',
  violet: 'bg-violet-400/12 text-violet-200 border-violet-300/20',
  cyan: 'bg-cyan-400/12 text-cyan-200 border-cyan-300/20',
  emerald: 'bg-emerald-400/12 text-emerald-200 border-emerald-300/20',
  sky: 'bg-sky-400/12 text-sky-200 border-sky-300/20',
  slate: 'bg-white/10 text-slate-200 border-white/15'
};

export function Solutions() {
  return (
    <section id="solutions" className="relative overflow-hidden bg-[#08111f] py-20 text-white lg:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:56px_56px] opacity-35 motion-safe:animate-[gridDrift_22s_linear_infinite]" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#f8fafc] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Qué construyo"
          title="Soluciones digitales con foco en utilidad, mantenimiento y claridad."
          description="Cada solución se diseña según el proceso, el equipo y el nivel de madurez del proyecto. La idea es construir lo necesario, bien hecho y listo para mejorar."
          tone="dark"
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = Icons[service.icon as keyof typeof Icons] as LucideIcon;
            const accent = accentStyles[service.accent] ?? accentStyles.blue;

            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -7 }}
                className="group rounded-lg border border-white/10 bg-white/[0.06] p-6 shadow-sm shadow-black/20 backdrop-blur transition-colors duration-300 hover:border-blue-300/40 hover:bg-white/[0.09]"
              >
                <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-lg border ${accent}`}>
                  {Icon && <Icon className="h-6 w-6" />}
                </div>
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{service.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
