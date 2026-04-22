import { useEffect, useState } from 'react';
import type { MouseEvent } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { openWhatsApp } from '../utils/whatsapp';

export function WhatsAppButton() {
  const [showHint, setShowHint] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (!isDismissed) setShowHint(true);
    }, 2500);

    return () => window.clearTimeout(timer);
  }, [isDismissed]);

  const dismissHint = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setShowHint(false);
    setIsDismissed(true);
  };

  return (
    <>
      <motion.button
        initial={{ opacity: 0, scale: 0.94, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.25 }}
        type="button"
        onClick={() => openWhatsApp()}
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-lg bg-emerald-500 text-white shadow-xl shadow-emerald-900/20 transition hover:bg-emerald-600 sm:bottom-6 sm:right-6"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </motion.button>

      <AnimatePresence>
        {showHint && !isDismissed && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            className="fixed bottom-24 right-5 z-40 max-w-[280px] rounded-lg border border-slate-200 bg-white p-4 shadow-2xl sm:right-6"
          >
            <button
              type="button"
              onClick={dismissHint}
              className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-md text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
              aria-label="Cerrar aviso de WhatsApp"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="pr-7">
              <p className="font-black text-slate-950">¿Tienes una idea?</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">Escríbeme por WhatsApp y revisamos el alcance inicial.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
