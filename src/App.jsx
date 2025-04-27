import Navbar from './components/Navbar';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Education from './components/sections/Education';
import Projects from './components/sections/Projects';
import Resume from './components/sections/Resume';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <ParticlesBackground />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Resume />
    </div>
  );
}

export default App;