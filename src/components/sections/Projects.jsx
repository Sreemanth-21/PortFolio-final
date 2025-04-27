function Projects() {
  const projects = [
    {
      title: "GeoSecureAI: Intelligent Crime Forecasting System",
      description: "Developed a crime forecasting system with interactive dashboards using ReactJS and data visualization libraries to predict crime trends with 85% accuracy.",
      technologies: ["ReactJS", "JavaScript", "HTML", "CSS"],
      link: "https://radiant-frangollo-94e871.netlify.app/"
    },
    {
      title: "NextInvest: AI-Powered Financial Chatbot",
      description: "Engineered an AI-driven chatbot using Natural Language Processing (NLP) to analyze spending habits and provide financial insights.",
      technologies: ["ReactJS", "SQL", "NLP", "Python"],
      link: "https://github.com/Sreemanth-21/nextInvest"
    },
    {
      title: "CineTix - Full-Stack Movie Ticketing Platform",
      description: "Designed and developed a full-stack movie booking system with Google Maps API, carpooling, and cost-sharing features, increasing user engagement by 25%.",
      technologies: ["Typescript", "React", "MongoDB"],
      link: "https://fp-cinetix.netlify.app/"
    },
    {
      title: "PowerFit - A Gym Website",
      description: "Developed PowerFit, a full-stack gym management website, with membership registration, workout tracking, and class scheduling for better user engagement.",
      technologies: ["Node.js", "ReactJS", "MongoDB"],
      link: "https://github.com/Sreemanth-21/PowerFit"
    },
    {
      title: "Blog App",
      description: "Developed a full-stack blogging platform with a seamless content creation experience, allowing users to write, edit, and publish articles effortlessly while ensuring a responsive and user-friendly interface.",
      technologies: ["Node.js", "ReactJS", "MongoDB"],
      link: "#"
    },
    {
      title: "AgriVision - AI-Based Plant Disease Detector",
      description: "Developing an autonomous plant disease detection system using a mounted camera and AI-based image processing, achieving 92% classification accuracy.",
      technologies: ["Python", "OpenCV", "Tensorflow"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20 relative z-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white group relative">
          Projects
          <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute inset-0">
            Projects
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-white via-gray-400 to-white rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 blur"></div>
              <div className="relative bg-black p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-black/50 px-3 py-1 rounded-full text-sm border border-white/30 text-white hover:border-white/60 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-white hover:opacity-100 transition-all duration-300 inline-flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project 
                  <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects