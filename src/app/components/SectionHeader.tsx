import { motion } from 'motion/react';

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
};

export function SectionHeader({ eyebrow, title, description, align = 'center', tone = 'light' }: SectionHeaderProps) {
  const isCentered = align === 'center';
  const isDark = tone === 'dark';

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className={isCentered ? 'mx-auto mb-12 max-w-3xl text-center' : 'mb-10 max-w-3xl'}
    >
      {eyebrow && (
        <span
          className={`mb-3 inline-flex items-center rounded-md border px-3 py-1 text-sm font-semibold ${
            isDark ? 'border-white/10 bg-white/10 text-blue-100' : 'border-blue-100 bg-blue-50 text-blue-700'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl font-bold leading-tight sm:text-4xl ${isDark ? 'text-white' : 'text-slate-950'}`}>{title}</h2>
      {description && (
        <p
          className={`${isCentered ? 'mx-auto mt-4 max-w-2xl' : 'mt-4'} text-lg leading-8 ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
