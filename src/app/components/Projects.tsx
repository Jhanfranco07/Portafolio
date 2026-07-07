import { Bot, BriefcaseBusiness, ChartNoAxesCombined, ExternalLink, FileCog, Globe2, Landmark } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { projects } from '../data/content';
import { Project } from '../data/types';
import { SectionHeader } from './SectionHeader';

const projectIcons: Record<string, LucideIcon> = {
  'Portfolio web': Globe2,
  'SaaS interno': BriefcaseBusiness,
  'IA aplicada': Bot,
  Datos: ChartNoAxesCombined,
  Automatización: FileCog,
  'Gestión pública': Landmark
};

export function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden bg-slate-950 py-20 lg:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(37,99,235,0.12),transparent_34%,rgba(124,58,237,0.10))]" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Proyectos realizados"
          title="Aplicaciones reales de desarrollo web, automatización e inteligencia artificial."
          description="Explora los proyectos y abre cada aplicación para verla funcionando."
          tone="dark"
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Icon = projectIcons[project.category] ?? Globe2;

  return (
    <motion.a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-colors duration-300 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/70"
    >
      <ProjectVisual project={project} icon={Icon} />

      <div className="p-6">
        <div className="mb-3 inline-flex rounded-md bg-blue-50 px-2.5 py-1 text-xs font-bold text-blue-700">
          {project.category}
        </div>
        <h3 className="text-xl font-black leading-snug text-slate-950">{project.title}</h3>
        <p className="mt-3 min-h-[84px] leading-7 text-slate-600">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-700">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-500">+{project.technologies.length - 3}</span>
          )}
        </div>

        <div className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-bold text-white transition group-hover:bg-blue-700">
          Ver proyecto
          <ExternalLink className="h-4 w-4" />
        </div>
      </div>
    </motion.a>
  );
}

function ProjectVisual({ project, icon: Icon }: { project: Project; icon: LucideIcon }) {
  return (
    <div className="relative h-52 overflow-hidden border-b border-slate-200 bg-slate-100">
      {project.image && (
        <img
          src={project.image}
          alt={`Preview referencial de ${project.title}`}
          className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-white/10 opacity-70 transition duration-500 group-hover:opacity-45" />
      <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-950 text-white shadow-lg">
        <Icon className="h-5 w-5" />
      </div>
      <div className="absolute right-4 top-4 rounded-md bg-white/90 px-2.5 py-1 text-xs font-bold text-slate-700 shadow-sm backdrop-blur">
        {project.category}
      </div>
    </div>
  );
}

