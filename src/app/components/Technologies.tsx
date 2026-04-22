import { motion } from 'motion/react';
import { technologies } from '../data/content';
import { SectionHeader } from './SectionHeader';
import { TechLogo } from './TechLogo';

export function Technologies() {
  return (
    <section id="technologies" className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fafc_0%,#eaf3ff_45%,#ffffff_100%)] py-20 lg:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="absolute left-0 top-24 h-[70%] w-1/3 bg-[linear-gradient(90deg,rgba(59,130,246,0.08),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Tecnologías"
          title="Un stack práctico para crear interfaces, automatizaciones, datos y despliegues."
          description="Agrupado por uso real: lenguajes base, frameworks para producto y plataformas para trabajar con diseño, datos, integraciones y publicación."
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
              <div className="mb-5">
                <h3 className="text-xl font-black text-slate-950">{category.category}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{category.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
                {category.items.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: categoryIndex * 0.04 + index * 0.025 }}
                    whileHover={{ y: -3, scale: 1.02 }}
                    className="flex min-h-[118px] flex-col items-center justify-center rounded-lg border border-slate-200 bg-white p-3 text-center shadow-sm transition-colors duration-300 hover:border-blue-200 hover:shadow-md"
                  >
                    <TechLogo name={tech.name} />
                    <span className="mt-3 text-sm font-bold leading-tight text-slate-800">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
