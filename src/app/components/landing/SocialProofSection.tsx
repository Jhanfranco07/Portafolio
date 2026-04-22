import { useEffect, useRef } from 'react';

const videoUrl =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260308_114720_3dabeb9e-2c39-4907-b747-bc3544e2d5b7.mp4';

const stackItems = ['Next.js', 'React', 'TypeScript', 'Python', 'Tailwind CSS', 'PostgreSQL', 'Supabase', 'n8n'];
const marqueeItems = [...stackItems, ...stackItems];

export function SocialProofSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let frameId = 0;
    let restartTimer: number | undefined;
    const fadeDuration = 0.5;

    const updateOpacity = () => {
      const { currentTime, duration } = video;

      if (Number.isFinite(duration) && duration > 0) {
        const fadeIn = Math.min(currentTime / fadeDuration, 1);
        const fadeOut = Math.min((duration - currentTime) / fadeDuration, 1);
        video.style.opacity = String(Math.max(0, Math.min(fadeIn, fadeOut, 1)));
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

    const startVideo = () => {
      video.style.opacity = '0';
      void video.play();
      frameId = requestAnimationFrame(updateOpacity);
    };

    video.addEventListener('ended', restartVideo);
    startVideo();

    return () => {
      cancelAnimationFrame(frameId);
      window.clearTimeout(restartTimer);
      video.removeEventListener('ended', restartVideo);
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-background">
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

      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="absolute inset-0 bg-background/20" />

      <div className="relative z-10 flex flex-col items-center gap-20 px-4 pb-24 pt-16">
        <div className="h-40" />
        <LogoMarquee />
      </div>
    </section>
  );
}

function LogoMarquee() {
  return (
    <div className="grid w-full max-w-5xl items-center gap-8 md:grid-cols-[auto_1fr]">
      <p className="shrink-0 whitespace-nowrap text-sm font-medium leading-6 text-foreground/50">
        Stack y herramientas
        <br />
        que uso en proyectos
      </p>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />

        <div className="flex w-max animate-marquee items-center gap-16">
          {marqueeItems.map((item, index) => (
            <div key={`${item}-${index}`} className="flex items-center gap-3">
              <span className="liquid-glass flex h-6 w-6 items-center justify-center rounded-lg text-xs font-semibold text-foreground">
                {item[0]}
              </span>
              <span className="text-base font-semibold text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
