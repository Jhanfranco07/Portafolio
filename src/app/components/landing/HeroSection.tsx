import { useEffect, useRef } from 'react';
import logo from '@/assets/logo.png';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { openWhatsApp } from '../../utils/whatsapp';
import { TechLogo } from '../TechLogo';
import { Button } from '../ui/button';

const videoUrl =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260308_114720_3dabeb9e-2c39-4907-b747-bc3544e2d5b7.mp4';

const navItems = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Sobre mí', href: '#about' },
  { label: 'Soluciones', href: '#solutions' },
  { label: 'Tecnologías', href: '#technologies' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Contacto', href: '#contact' }
];

const stackItems = ['Next.js', 'React', 'TypeScript', 'Python', 'Tailwind CSS', 'PostgreSQL', 'Supabase', 'n8n'];
export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let frameId = 0;
    let restartTimer: number | undefined;
    const fadeDuration = 0.55;

    const updateOpacity = () => {
      const { currentTime, duration } = video;

      if (Number.isFinite(duration) && duration > 0) {
        const fadeIn = Math.min(currentTime / fadeDuration, 1);
        const fadeOut = Math.min((duration - currentTime) / fadeDuration, 1);
        video.style.opacity = String(Math.max(0, Math.min(fadeIn, fadeOut, 0.58)));
      }

      frameId = requestAnimationFrame(updateOpacity);
    };

    const restartVideo = () => {
      video.style.opacity = '0';
      restartTimer = window.setTimeout(() => {
        video.currentTime = 0;
        void video.play();
      }, 100);
    };

    video.addEventListener('ended', restartVideo);
    void video.play();
    frameId = requestAnimationFrame(updateOpacity);

    return () => {
      cancelAnimationFrame(frameId);
      window.clearTimeout(restartTimer);
      video.removeEventListener('ended', restartVideo);
    };
  }, []);

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-[#08020f] text-white">
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        style={{ opacity: 0 }}
      >
        <source src={videoUrl} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_24%,rgba(124,58,237,0.34),transparent_34%),linear-gradient(180deg,rgba(8,2,15,0.76)_0%,rgba(8,2,15,0.64)_42%,rgba(8,2,15,0.92)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#08020f] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-b from-transparent via-[#08020f]/90 to-white" />

      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-4 pb-10 pt-14 text-center sm:px-6 lg:px-8">
          <p className="liquid-glass mb-7 rounded-full px-4 py-2 text-sm font-medium text-white/80">
            Desarrollo freelance para productos web reales
          </p>

          <h1
            className="max-w-6xl bg-clip-text text-[clamp(3.7rem,10.5vw,9.5rem)] font-normal leading-[0.95] tracking-[-0.055em] text-transparent"
            style={{
              fontFamily: "'General Sans', 'Geist Sans', sans-serif",
              backgroundImage: 'linear-gradient(223deg, #F7F4EE 0%, #89B7EA 55%, #8B5CF6 112%)'
            }}
          >
            Jhan Franco
          </h1>

          <p className="mt-7 max-w-2xl text-balance text-center text-lg leading-8 text-white/78 sm:text-xl">
            Desarrollo landing pages, sistemas tipo SaaS, dashboards, automatizaciones y asistentes inteligentes para negocios, profesionales y sector público.
          </p>

          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => openWhatsApp()}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-base font-bold text-[#08020f] shadow-[0_18px_50px_rgba(255,255,255,0.18)] transition hover:-translate-y-0.5 hover:bg-blue-50"
            >
              <MessageCircle className="h-5 w-5" />
              Hablemos por WhatsApp
            </button>
            <button
              type="button"
              onClick={scrollToProjects}
              className="liquid-glass inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              Ver proyectos
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <TechBar />
      </div>
    </section>
  );
}

function Navbar() {
  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="flex w-full flex-row items-center justify-between px-5 py-5 sm:px-8">
      <button type="button" onClick={() => scrollToSection('#hero')} className="flex items-center gap-3" aria-label="Ir al inicio">
        <img src={logo} alt="Jhan Franco" className="h-8 w-auto" />
        <span className="hidden text-base font-semibold text-white/90 sm:inline">Jhan Franco</span>
      </button>

      <div className="hidden items-center gap-7 lg:flex">
        {navItems.map((item) => (
          <button
            key={item.label}
            type="button"
            onClick={() => scrollToSection(item.href)}
            className="text-base font-medium text-white/76 transition hover:text-white"
          >
            {item.label}
          </button>
        ))}
      </div>

      <Button variant="heroSecondary" size="sm" className="rounded-full px-4 py-2 text-white shadow-[0_10px_30px_rgba(255,255,255,0.08)]" onClick={() => openWhatsApp()}>
        Escríbeme
      </Button>
    </nav>
  );
}

function TechBar() {
  const carouselItems = [...stackItems, ...stackItems];

  return (
    <div className="mx-auto mb-14 w-full max-w-5xl px-4">
      <div className="px-5 py-4">
        <p className="mb-3 text-sm font-semibold leading-6 text-white/58">
          Stack principal
        </p>

        <div className="tech-carousel relative overflow-hidden py-2 [perspective:900px] [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="tech-carousel-track flex w-max gap-3 [transform-style:preserve-3d]">
            {carouselItems.map((item, index) => (
              <div
                key={`${item}-${index}`}
                aria-hidden={index >= stackItems.length}
                className="group flex min-w-[150px] items-center gap-3 px-3 py-3 drop-shadow-[0_12px_16px_rgba(0,0,0,0.55)] transition duration-300 [transform:rotateX(7deg)_translateZ(0)] hover:drop-shadow-[0_18px_24px_rgba(96,165,250,0.35)] hover:[transform:rotateX(0deg)_translateZ(28px)_scale(1.06)]"
              >
                <TechLogo name={item} className="shrink-0 [&>span]:h-10 [&>span]:w-10 [&_svg]:h-7 [&_svg]:w-7" />
                <span className="whitespace-nowrap text-sm font-bold text-white/90">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes tech-carousel-scroll {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(calc(-50% - 6px), 0, 0); }
        }
        .tech-carousel-track {
          animation: tech-carousel-scroll 26s linear infinite;
          will-change: transform;
        }
        .tech-carousel:hover .tech-carousel-track {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .tech-carousel-track { animation: none; }
        }
      `}</style>
    </div>
  );
}
