function Navbar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm border-b border-white/30">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <button onClick={() => scrollToSection('home')} className="text-2xl font-bold text-white">Portfolio</button>
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-white hover:text-gray-300 transition-colors">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-white hover:text-gray-300 transition-colors">About</button>
            <button onClick={() => scrollToSection('skills')} className="text-white hover:text-gray-300 transition-colors">Skills</button>
            <button onClick={() => scrollToSection('education')} className="text-white hover:text-gray-300 transition-colors">Education</button>
            <button onClick={() => scrollToSection('projects')} className="text-white hover:text-gray-300 transition-colors">Projects</button>
            <button onClick={() => scrollToSection('resume')} className="text-white hover:text-gray-300 transition-colors">Resume</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;