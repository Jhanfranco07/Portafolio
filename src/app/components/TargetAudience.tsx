import * as Icons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { targetAudiences } from '../data/content';
import { SectionHeader } from './SectionHeader';

const audienceAccents = [
  {
    icon: 'bg-blue-50 text-blue-700 border-blue-100 shadow-blue-100/70',
    hover: 'hover:border-blue-200 hover:shadow-blue-100/80',
    line: 'from-blue-500/70'
  },
  {
    icon: 'bg-violet-50 text-violet-700 border-violet-100 shadow-violet-100/70',
    hover: 'hover:border-violet-200 hover:shadow-violet-100/80',
    line: 'from-violet-500/70'
  },
  {
    icon: 'bg-cyan-50 text-cyan-700 border-cyan-100 shadow-cyan-100/70',
    hover: 'hover:border-cyan-200 hover:shadow-cyan-100/80',
    line: 'from-cyan-500/70'
  },
  {
    icon: 'bg-emerald-50 text-emerald-700 border-emerald-100 shadow-emerald-100/70',
    hover: 'hover:border-emerald-200 hover:shadow-emerald-100/80',
    line: 'from-emerald-500/70'
  },
  {
    icon: 'bg-amber-50 text-amber-700 border-amber-100 shadow-amber-100/70',
    hover: 'hover:border-amber-200 hover:shadow-amber-100/80',
    line: 'from-amber-500/70'
  }
];

export function TargetAudience() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#eef6ff_0%,#ffffff_48%,#f5f3ff_100%)] py-20 lg:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.025)_1px,transparent_1px)] bg-[size:72px_72px] opacity-40 motion-safe:animate-[gridDrift_26s_linear_infinite]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Para quién trabajo"
          title="Soluciones para equipos pequeños, negocios y áreas que necesitan avanzar con claridad."
          description="El punto de partida puede ser una idea, una operación manual, una web desactualizada o un proceso que necesita ordenarse."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {targetAudiences.map((audience, index) => {
            const Icon = Icons[audience.icon as keyof typeof Icons] as LucideIcon;
            const accent = audienceAccents[index % audienceAccents.length];

            return (
              <motion.article
                key={audience.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.46, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -5 }}
                className={`relative overflow-hidden rounded-lg border border-white/80 bg-white/80 p-5 shadow-sm shadow-blue-100/50 backdrop-blur transition-colors duration-300 hover:shadow-lg ${accent.hover}`}
              >
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accent.line} to-transparent opacity-70`} />
                <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-lg border shadow-sm ${accent.icon}`}>
                  {Icon && <Icon className="h-6 w-6" />}
                </div>
                <h3 className="text-lg font-black text-slate-950">{audience.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{audience.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
