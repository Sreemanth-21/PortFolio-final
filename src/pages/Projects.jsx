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
      link: "#"
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
    <div className="container mx-auto px-4 pt-20 relative z-10">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-black rounded-lg shadow-lg overflow-hidden border border-white/30 hover:shadow-white/20 transition-all duration-300">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
              <p className="text-white mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-black px-3 py-1 rounded-full text-sm border border-white/30 text-white">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="text-white hover:text-gray-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;