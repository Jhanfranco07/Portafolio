import { useState } from 'react';
import { Bot, BriefcaseBusiness, ChartNoAxesCombined, ExternalLink, FileCog, Globe2, Landmark, X } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { projects } from '../data/content';
import { Project } from '../data/types';
import { SectionHeader } from './SectionHeader';
import { TechLogo } from './TechLogo';

const projectIcons: Record<string, LucideIcon> = {
  'Portfolio web': Globe2,
  'SaaS interno': BriefcaseBusiness,
  'IA aplicada': Bot,
  Datos: ChartNoAxesCombined,
  Automatización: FileCog,
  'Gestión pública': Landmark
};

const featuredProjectIds = [3, 6, 7];
const orderedProjects = [...projects].sort((a, b) => {
  const aPosition = featuredProjectIds.indexOf(a.id);
  const bPosition = featuredProjectIds.indexOf(b.id);

  if (aPosition === -1 && bPosition === -1) return 0;
  if (aPosition === -1) return 1;
  if (bPosition === -1) return -1;
  return aPosition - bPosition;
});

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative overflow-hidden bg-slate-950 py-20 lg:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(37,99,235,0.12),transparent_34%,rgba(124,58,237,0.10))]" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Proyectos realizados"
          title="Aplicaciones reales de desarrollo web, automatización e inteligencia artificial."
          description="Revisa los detalles y tecnologías de cada proyecto. Los proyectos publicados incluyen acceso a la aplicación funcionando."
          tone="dark"
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {orderedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} onOpen={() => setSelectedProject(project)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>
    </section>
  );
}

function ProjectCard({ project, index, onOpen }: { project: Project; index: number; onOpen: () => void }) {
  const Icon = projectIcons[project.category] ?? Globe2;

  return (
    <motion.article
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

        <button type="button" onClick={onOpen} className="mt-6 inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-bold text-slate-800 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700">
          Ver más
          <ExternalLink className="h-4 w-4" />
        </button>
      </div>
    </motion.article>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const Icon = projectIcons[project.category] ?? Globe2;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
      <motion.div initial={{ opacity: 0, y: 24, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 24, scale: 0.98 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-lg bg-white shadow-2xl" onClick={(event) => event.stopPropagation()}>
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white px-5 py-4 sm:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-slate-950 text-white"><Icon className="h-5 w-5" /></span>
            <div className="min-w-0">
              <p className="text-sm font-bold text-blue-700">{project.category}</p>
              <h3 id="project-modal-title" className="truncate text-lg font-black text-slate-950 sm:text-2xl">{project.title}</h3>
            </div>
          </div>
          <button type="button" onClick={onClose} className="ml-3 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition hover:bg-slate-100" aria-label="Cerrar detalle"><X className="h-5 w-5" /></button>
        </div>

        <div className="grid gap-6 p-5 sm:p-6">
          <div className="overflow-hidden rounded-lg border border-slate-200">
            <img src={project.image} alt={`Preview de ${project.title}`} className="h-64 w-full object-cover" />
          </div>
          <p className="text-lg leading-8 text-slate-700">{project.longDescription}</p>

          <div>
            <h4 className="text-base font-black text-slate-950">Puntos clave</h4>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {project.highlights.map((highlight) => <div key={highlight} className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700">{highlight}</div>)}
            </div>
          </div>

          <div>
            <h4 className="text-base font-black text-slate-950">Tecnologías utilizadas</h4>
            <div className="mt-3 flex flex-wrap gap-3">
              {project.technologies.map((tech) => <div key={tech} className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 shadow-sm"><TechLogo name={tech} /><span className="text-sm font-bold text-slate-700">{tech}</span></div>)}
            </div>
          </div>

          {project.liveUrl && (
            <div className="border-t border-slate-200 pt-5">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-blue-700">
                Ver proyecto
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
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

