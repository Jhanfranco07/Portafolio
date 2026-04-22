import type { ReactNode } from 'react';

type TechLogoProps = {
  name: string;
  className?: string;
};

type LogoShellProps = {
  children: ReactNode;
  background?: string;
  border?: string;
  className?: string;
};

function LogoShell({ children, background = '#ffffff', border = '#e2e8f0', className = '' }: LogoShellProps) {
  return (
    <span
      className={`flex h-12 w-12 items-center justify-center rounded-lg border shadow-sm ${className}`}
      style={{ backgroundColor: background, borderColor: border }}
    >
      {children}
    </span>
  );
}

function LetterLogo({ label, background, color = '#ffffff' }: { label: string; background: string; color?: string }) {
  return (
    <LogoShell background={background} border={background}>
      <span className="text-sm font-black leading-none" style={{ color }}>
        {label}
      </span>
    </LogoShell>
  );
}

export function TechLogo({ name, className = '' }: TechLogoProps) {
  return (
    <span className={className} aria-label={`${name} logo`} role="img">
      {renderLogo(name)}
    </span>
  );
}

function renderLogo(name: string) {
  switch (name) {
    case 'Python':
      return (
        <LogoShell background="#f8fafc">
          <svg viewBox="0 0 48 48" className="h-9 w-9" aria-hidden="true">
            <path d="M24 6c-7 0-10 3-10 8v5h14c2 0 3 1 3 3s-1 3-3 3H12c-4 0-7 3-7 8s3 9 9 9h5v-7c0-5 4-9 9-9h6c5 0 8-4 8-9v-3c0-5-4-8-10-8h-8Z" fill="#3776AB" />
            <path d="M24 42c7 0 10-3 10-8v-5H20c-2 0-3-1-3-3s1-3 3-3h16c4 0 7-3 7-8s-3-9-9-9h-5v7c0 5-4 9-9 9h-6c-5 0-8 4-8 9v3c0 5 4 8 10 8h8Z" fill="#FFD43B" />
            <circle cx="19" cy="13" r="2" fill="#fff" />
            <circle cx="29" cy="35" r="2" fill="#1e293b" />
          </svg>
        </LogoShell>
      );
    case 'TypeScript':
      return <LetterLogo label="TS" background="#3178C6" />;
    case 'JavaScript':
      return <LetterLogo label="JS" background="#F7DF1E" color="#111827" />;
    case 'HTML':
      return (
        <LogoShell background="#fff7ed" border="#fed7aa">
          <svg viewBox="0 0 48 48" className="h-8 w-8" aria-hidden="true">
            <path d="M10 6h28l-3 32-11 4-11-4L10 6Z" fill="#E34F26" />
            <path d="M24 10h10l-2 25-8 3V10Z" fill="#FF6D3A" />
            <path d="M17 16h14l-.3 4H21l.2 4h9.1l-.7 8-5.6 2-5.5-2-.3-5h4l.1 2 1.7.6 1.8-.6.2-2H18l-1-12Z" fill="#fff" />
          </svg>
        </LogoShell>
      );
    case 'CSS':
      return (
        <LogoShell background="#eff6ff" border="#bfdbfe">
          <svg viewBox="0 0 48 48" className="h-8 w-8" aria-hidden="true">
            <path d="M10 6h28l-3 32-11 4-11-4L10 6Z" fill="#1572B6" />
            <path d="M24 10h10l-2 25-8 3V10Z" fill="#33A9DC" />
            <path d="M17 16h14l-.3 4h-9.5l.2 4h9l-.9 9-5.5 2-5.4-2-.4-5h4l.2 2 1.6.6 1.8-.6.2-2H18l-1-12Z" fill="#fff" />
          </svg>
        </LogoShell>
      );
    case 'SQL':
      return (
        <LogoShell background="#f0f9ff" border="#bae6fd">
          <svg viewBox="0 0 48 48" className="h-9 w-9" aria-hidden="true">
            <ellipse cx="24" cy="12" rx="14" ry="6" fill="#0ea5e9" />
            <path d="M10 12v19c0 3 6 6 14 6s14-3 14-6V12c0 3-6 6-14 6s-14-3-14-6Z" fill="#38bdf8" />
            <path d="M10 22c0 3 6 6 14 6s14-3 14-6" fill="none" stroke="#e0f2fe" strokeWidth="2" />
            <text x="24" y="34" textAnchor="middle" fontSize="8" fontWeight="800" fill="#075985">
              SQL
            </text>
          </svg>
        </LogoShell>
      );
    case 'Next.js':
      return (
        <LogoShell background="#0f172a" border="#0f172a">
          <svg viewBox="0 0 48 48" className="h-9 w-9" aria-hidden="true">
            <circle cx="24" cy="24" r="18" fill="#0f172a" stroke="#ffffff" strokeWidth="2" />
            <path d="M16 32V16h4l12 16h-4L20 21v11h-4Z" fill="#fff" />
            <path d="M31 16h3v16h-3z" fill="#fff" />
          </svg>
        </LogoShell>
      );
    case 'React':
      return (
        <LogoShell background="#ecfeff" border="#a5f3fc">
          <svg viewBox="0 0 48 48" className="h-9 w-9" aria-hidden="true">
            <circle cx="24" cy="24" r="4" fill="#61DAFB" />
            <ellipse cx="24" cy="24" rx="18" ry="7" fill="none" stroke="#0891b2" strokeWidth="2" />
            <ellipse cx="24" cy="24" rx="18" ry="7" fill="none" stroke="#0891b2" strokeWidth="2" transform="rotate(60 24 24)" />
            <ellipse cx="24" cy="24" rx="18" ry="7" fill="none" stroke="#0891b2" strokeWidth="2" transform="rotate(120 24 24)" />
          </svg>
        </LogoShell>
      );
    case 'Tailwind CSS':
      return (
        <LogoShell background="#ecfeff" border="#a5f3fc">
          <svg viewBox="0 0 48 48" className="h-9 w-9" aria-hidden="true">
            <path d="M12 25c3-8 8-12 15-12 5 0 8 2 10 6-3-2-6-2-9 0-3 2-4 6-8 7-3 1-6 0-8-1Z" fill="#38BDF8" />
            <path d="M11 33c3-5 7-8 13-8 4 0 7 1 10 4 2 2 4 3 7 2-3 5-7 8-13 8-4 0-7-1-10-4-2-2-4-3-7-2Z" fill="#0EA5E9" />
          </svg>
        </LogoShell>
      );
    case 'Node.js':
      return <LetterLogo label="node" background="#339933" />;
    case 'Express':
      return <LetterLogo label="ex" background="#111827" />;
    case 'Prisma':
      return (
        <LogoShell background="#f8fafc">
          <svg viewBox="0 0 48 48" className="h-9 w-9" aria-hidden="true">
            <path d="M29 6 10 32c-1 2 0 4 3 4l22 6c3 1 5-2 4-4L31 8c0-2-2-3-2-2Z" fill="#0f172a" />
            <path d="M28 13 18 32l15 4-5-23Z" fill="#94a3b8" />
          </svg>
        </LogoShell>
      );
    case 'scikit-learn':
      return (
        <LogoShell background="#fff7ed" border="#fed7aa">
          <svg viewBox="0 0 48 48" className="h-9 w-9" aria-hidden="true">
            <circle cx="18" cy="18" r="7" fill="#F7931E" />
            <circle cx="31" cy="30" r="8" fill="#3499CD" />
            <circle cx="29" cy="14" r="4" fill="#F7931E" />
            <text x="24" y="28" textAnchor="middle" fontSize="9" fontWeight="800" fill="#fff">
              sk
            </text>
          </svg>
        </LogoShell>
      );
    case 'Figma':
      return (
        <LogoShell background="#fff7ed" border="#fed7aa">
          <svg viewBox="0 0 48 48" className="h-9 w-9" aria-hidden="true">
            <circle cx="19" cy="12" r="6" fill="#F24E1E" />
            <circle cx="29" cy="12" r="6" fill="#FF7262" />
            <circle cx="19" cy="24" r="6" fill="#A259FF" />
            <circle cx="29" cy="24" r="6" fill="#1ABCFE" />
            <circle cx="19" cy="36" r="6" fill="#0ACF83" />
          </svg>
        </LogoShell>
      );
    case 'GitHub':
      return <LetterLogo label="GH" background="#181717" />;
    case 'Vercel':
      return (
        <LogoShell background="#111827" border="#111827">
          <svg viewBox="0 0 48 48" className="h-8 w-8" aria-hidden="true">
            <path d="M24 10 42 40H6L24 10Z" fill="#fff" />
          </svg>
        </LogoShell>
      );
    case 'Neon':
      return <LetterLogo label="N" background="#00E599" color="#06251b" />;
    case 'PostgreSQL':
      return (
        <LogoShell background="#eff6ff" border="#bfdbfe">
          <svg viewBox="0 0 48 48" className="h-9 w-9" aria-hidden="true">
            <ellipse cx="24" cy="13" rx="13" ry="6" fill="#336791" />
            <path d="M11 13v20c0 3 6 6 13 6s13-3 13-6V13c0 3-6 6-13 6s-13-3-13-6Z" fill="#4169E1" />
            <path d="M14 25c3 2 17 2 20 0" fill="none" stroke="#dbeafe" strokeWidth="2" />
            <text x="24" y="34" textAnchor="middle" fontSize="8" fontWeight="800" fill="#fff">
              PG
            </text>
          </svg>
        </LogoShell>
      );
    case 'Supabase':
      return (
        <LogoShell background="#ecfdf5" border="#bbf7d0">
          <svg viewBox="0 0 48 48" className="h-9 w-9" aria-hidden="true">
            <path d="M28 5 11 26h13l-4 17 17-22H24l4-16Z" fill="#3ECF8E" />
          </svg>
        </LogoShell>
      );
    case 'n8n':
      return (
        <LogoShell background="#fff1f2" border="#fecdd3">
          <svg viewBox="0 0 48 48" className="h-9 w-9" aria-hidden="true">
            <path d="M12 24h24" stroke="#EA4B71" strokeWidth="4" strokeLinecap="round" />
            <circle cx="12" cy="24" r="5" fill="#EA4B71" />
            <circle cx="24" cy="16" r="5" fill="#EA4B71" />
            <circle cx="24" cy="32" r="5" fill="#EA4B71" />
            <circle cx="36" cy="24" r="5" fill="#EA4B71" />
          </svg>
        </LogoShell>
      );
    case 'Streamlit':
      return <LetterLogo label="S" background="#FF4B4B" />;
    case 'Google Sheets API':
      return (
        <LogoShell background="#ecfdf5" border="#bbf7d0">
          <svg viewBox="0 0 48 48" className="h-9 w-9" aria-hidden="true">
            <path d="M14 6h15l7 7v29H14V6Z" fill="#0F9D58" />
            <path d="M29 6v8h7" fill="#A7F3D0" />
            <path d="M18 20h16M18 26h16M18 32h16M24 18v18" stroke="#fff" strokeWidth="2" />
          </svg>
        </LogoShell>
      );
    case 'Postman':
      return <LetterLogo label="P" background="#FF6C37" />;
    default:
      return <LetterLogo label={name.slice(0, 2).toUpperCase()} background="#475569" />;
  }
}
