import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { contactInfo } from '../data/content';
import { openWhatsApp } from '../utils/whatsapp';

const footerLinks = [
  { name: 'Inicio', href: '#hero' },
  { name: 'Soluciones', href: '#solutions' },
  { name: 'Tecnologías', href: '#technologies' },
  { name: 'Proyectos', href: '#projects' },
  { name: 'Contacto', href: '#contact' }
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-sm font-black text-slate-950">JF</span>
              <h3 className="text-xl font-black text-white">Jhan Freelance</h3>
            </div>
            <p className="mt-4 max-w-md leading-7 text-slate-400">
              Desarrollo web, automatización, IA aplicada y herramientas digitales para resolver procesos reales con claridad.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-300 transition hover:bg-white/10 hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-300 transition hover:bg-white/10 hover:text-white"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-black text-white">Navegación</h4>
            <div className="mt-4 grid gap-2">
              {footerLinks.map((link) => (
                <button
                  key={link.name}
                  type="button"
                  onClick={() => scrollToSection(link.href)}
                  className="w-fit text-sm font-semibold text-slate-400 transition hover:text-white"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black text-white">Contacto</h4>
            <div className="mt-4 grid gap-3">
              <a href={`mailto:${contactInfo.email}`} className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-white">
                <Mail className="h-4 w-4 text-blue-300" />
                {contactInfo.email}
              </a>
              <button
                type="button"
                onClick={() => openWhatsApp()}
                className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-white"
              >
                <MessageCircle className="h-4 w-4 text-emerald-300" />
                WhatsApp
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-500">
          © {currentYear} Jhan Freelance. Hecho para crecer con proyectos reales.
        </div>
      </div>
    </footer>
  );
}
