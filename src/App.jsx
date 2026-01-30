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
      <ScrollIndicator />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
