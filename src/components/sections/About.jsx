import { motion } from 'framer-motion';

function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 relative z-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white group relative">
          About Me
          <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute inset-0">
            About Me
          </span>
        </h2>
        <div className="max-w-2xl mx-auto relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-white via-gray-400 to-white rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 blur"></div>
          <div className="relative bg-black p-8 rounded-lg">
            <p className="text-lg mb-4 text-gray-300">
              I'm a passionate developer with a strong interest in Artificial Intelligence and Machine Learning.
              Currently pursuing my B.Tech in Computer Science with a specialization in AI/ML.
            </p>
            <p className="text-lg mb-4 text-gray-300">
              My journey in technology began with a curiosity about how computers think and make decisions.
              This led me to explore the fascinating world of AI and ML, where I've been developing various
              projects and expanding my knowledge.
            </p>
            <p className="text-lg text-gray-300">
              I'm always eager to learn new technologies and contribute to innovative projects that push
              the boundaries of what's possible with AI and ML.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About