import { About } from './components/About';
import { Contact } from './components/Contact';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { HeroSection } from './components/landing/HeroSection';
import { Process } from './components/Process';
import { Projects } from './components/Projects';
import { Solutions } from './components/Solutions';
import { TargetAudience } from './components/TargetAudience';
import { Technologies } from './components/Technologies';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <main>
        <About />
        <Solutions />
        <Technologies />
        <Projects />
        <TargetAudience />
        <Process />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
