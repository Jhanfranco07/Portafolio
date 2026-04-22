import { ArrowRight, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { openWhatsApp } from '../utils/whatsapp';

export function CTA() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-slate-950 py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center"
        >
          <div>
            <p className="mb-3 text-sm font-bold uppercase text-blue-300">Construyamos algo útil</p>
            <h2 className="max-w-3xl text-3xl font-black leading-tight sm:text-4xl">
              Si tienes una idea, un proceso manual o una herramienta pendiente, podemos aterrizarla en una solución web.
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              Cuéntame qué necesitas resolver y preparo una ruta clara para empezar sin inflar el alcance.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <button
              type="button"
              onClick={() => openWhatsApp()}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-base font-black text-slate-950 transition hover:bg-blue-50"
            >
              <MessageCircle className="h-5 w-5 text-blue-600" />
              Escríbeme por WhatsApp
            </button>
            <button
              type="button"
              onClick={scrollToContact}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/25 px-6 py-3 text-base font-black text-white transition hover:bg-white/10"
            >
              Ir al formulario
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
