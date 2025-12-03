import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Animated cursor follower */}
      <div className="pointer-events-none fixed inset-0 z-30 transition duration-300" 
        style={{
          background: 'radial-gradient(600px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(189, 95, 52, 0.15), transparent 80%)',
        }}
      />
      
      <Navigation />
      <main className="overflow-x-hidden relative">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
