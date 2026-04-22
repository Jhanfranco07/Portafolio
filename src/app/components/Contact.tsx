import { useState } from 'react';
import type { ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import { CheckCircle2, Github, Linkedin, Loader2, Mail, MapPin, MessageCircle, Send } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { contactInfo, projectTypes } from '../data/content';
import { FormData } from '../data/types';
import { getWhatsAppUrl, openWhatsApp } from '../utils/whatsapp';
import { SectionHeader } from './SectionHeader';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    setIsSubmitting(true);

    const message = [
      'Hola Jhan, me gustaría conversar sobre un proyecto.',
      '',
      `Nombre: ${data.name}`,
      `Email: ${data.email}`,
      `Tipo de proyecto: ${data.projectType}`,
      `Mensaje: ${data.message}`
    ].join('\n');

    openWhatsApp(message);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    window.setTimeout(() => setIsSuccess(false), 4500);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#eef6ff_52%,#ffffff_100%)] py-20 lg:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-45 motion-safe:animate-[gridDrift_28s_linear_infinite]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Contacto"
          title="Cuéntame qué necesitas construir."
          description="Puedes enviar un resumen desde el formulario o escribir directo por WhatsApp si ya tienes una idea clara del proyecto."
        />

        <div className="grid gap-8 lg:grid-cols-[0.78fr_1fr] lg:items-start">
          <motion.aside
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.45 }}
            className="rounded-lg border border-slate-200 bg-slate-950 p-6 text-white shadow-xl shadow-slate-200/70 sm:p-8"
          >
            <h3 className="text-2xl font-black">Jhan Freelance</h3>
            <p className="mt-3 leading-7 text-slate-300">
              Disponible para proyectos freelance de desarrollo web, automatización, dashboards, asistentes inteligentes y herramientas internas.
            </p>

            <div className="mt-8 grid gap-4">
              <ContactLink icon={Mail} label="Email" value={contactInfo.email} href={`mailto:${contactInfo.email}`} />
              <ContactLink icon={MessageCircle} label="WhatsApp" value={contactInfo.whatsapp} href={getWhatsAppUrl()} />
              <ContactLink icon={MapPin} label="Ubicación" value={contactInfo.location} />
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-white/10"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-white/10"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </motion.aside>

          <motion.form
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.45, delay: 0.08 }}
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-lg border border-white/80 bg-white/85 p-6 shadow-xl shadow-blue-100/60 backdrop-blur sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="name" label="Nombre" error={errors.name?.message}>
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  {...register('name', {
                    required: 'Escribe tu nombre.',
                    minLength: { value: 2, message: 'Usa al menos 2 caracteres.' }
                  })}
                  className={inputClass(Boolean(errors.name))}
                  placeholder="Tu nombre"
                />
              </Field>

              <Field id="email" label="Email" error={errors.email?.message}>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  {...register('email', {
                    required: 'Escribe tu email.',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Escribe un email válido.'
                    }
                  })}
                  className={inputClass(Boolean(errors.email))}
                  placeholder="tu@email.com"
                />
              </Field>
            </div>

            <Field id="projectType" label="Tipo de proyecto" error={errors.projectType?.message}>
              <select
                id="projectType"
                {...register('projectType', { required: 'Selecciona un tipo de proyecto.' })}
                className={inputClass(Boolean(errors.projectType))}
                defaultValue=""
              >
                <option value="" disabled>
                  Selecciona una opción
                </option>
                {projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </Field>

            <Field id="message" label="Mensaje" error={errors.message?.message}>
              <textarea
                id="message"
                rows={6}
                {...register('message', {
                  required: 'Cuéntame brevemente qué necesitas.',
                  minLength: { value: 20, message: 'Usa al menos 20 caracteres.' }
                })}
                className={`${inputClass(Boolean(errors.message))} resize-none`}
                placeholder="Describe el problema, el objetivo o la herramienta que quieres construir."
              />
            </Field>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-base font-black text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Preparando mensaje
                </>
              ) : (
                <>
                  Enviar consulta
                  <Send className="h-5 w-5" />
                </>
              )}
            </button>

            {isSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 flex items-start gap-3 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm font-semibold text-emerald-900"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                Se abrió WhatsApp con el resumen de tu consulta.
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: ReactNode }) {
  return (
    <div className="mt-5 first:mt-0">
      <label htmlFor={id} className="mb-2 block text-sm font-bold text-slate-800">
        {label}
      </label>
      {children}
      {error && <p className="mt-2 text-sm font-semibold text-red-600">{error}</p>}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return `w-full rounded-lg border bg-white px-4 py-3 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:ring-4 ${
    hasError ? 'border-red-400 focus:border-red-500 focus:ring-red-100' : 'border-slate-300 focus:border-blue-500 focus:ring-blue-100'
  }`;
}

function ContactLink({
  icon: Icon,
  label,
  value,
  href
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-4">
      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white/10">
        <Icon className="h-5 w-5 text-blue-200" />
      </span>
      <div>
        <p className="text-sm font-bold text-slate-400">{label}</p>
        <p className="mt-1 break-words text-sm font-bold text-white">{value}</p>
      </div>
    </div>
  );

  if (!href) return content;

  return (
    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
      {content}
    </a>
  );
}
