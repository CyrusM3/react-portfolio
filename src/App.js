import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Educations from './components/Educations';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './config.css';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Educations />
      <Works />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
