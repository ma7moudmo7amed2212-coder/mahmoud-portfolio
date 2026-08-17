import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import IntroExplosion from "./components/IntroExplosion";

function App() {
  return (
    <>
    <>
  <IntroExplosion />

  <Navbar />

  {/* باقي الموقع */}
</>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
