import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Project";
import ScrollIndicator from "./components/ScrollIndicator";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <main className="px-2 md:p-8 lg:p-0">
        <ScrollIndicator />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
