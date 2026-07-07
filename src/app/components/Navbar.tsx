import { useEffect, useState } from 'react';
import { Menu, MessageCircle, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { openWhatsApp } from '../utils/whatsapp';

const navLinks = [
  { name: 'Inicio', href: '#hero' },
  { name: 'Sobre mí', href: '#about' },
  { name: 'Soluciones', href: '#solutions' },
  { name: 'Tecnologías', href: '#technologies' },
  { name: 'Proyectos', href: '#projects' },
  { name: 'Contacto', href: '#contact' }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        isScrolled ? 'border-slate-200 bg-white/92 shadow-sm backdrop-blur-xl' : 'border-transparent bg-white/75 backdrop-blur-lg'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        <button
          type="button"
          onClick={() => scrollToSection('#hero')}
          className="group inline-flex items-center gap-3"
          aria-label="Ir al inicio"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-950 text-sm font-black text-white shadow-sm">
            JF
          </span>
          <span className="text-lg font-bold text-slate-950 group-hover:text-blue-700 sm:text-xl">Jhan Franco</span>
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.name}
              type="button"
              onClick={() => scrollToSection(link.href)}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
            >
              {link.name}
            </button>
          ))}
        </div>

        <div className="hidden lg:block">
          <button
            type="button"
            onClick={() => openWhatsApp()}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm shadow-blue-600/20 transition hover:bg-blue-700"
          >
            <MessageCircle className="h-4 w-4" />
            Hablemos
          </button>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition hover:bg-slate-100 lg:hidden"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden border-t border-slate-200 bg-white lg:hidden"
          >
            <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
              <div className="grid gap-1">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    type="button"
                    onClick={() => scrollToSection(link.href)}
                    className="rounded-lg px-4 py-3 text-left text-base font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => openWhatsApp()}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-base font-bold text-white transition hover:bg-blue-700"
              >
                <MessageCircle className="h-5 w-5" />
                Escríbeme
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
