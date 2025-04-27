import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Home() {
  const sequences = [
    "I'm a Developer",
    2000,
    "I'm passionate about AI",
    2000,
    "I build amazing things",
    2000
  ];

  const name = "Hi, I'm Sreemanth";
  const letters = Array.from(name);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative z-10">
      <div className="w-full max-w-4xl mx-auto flex items-center justify-center min-h-screen">
        <div className="text-center space-y-12">
          <h1 className="text-6xl md:text-8xl font-bold text-white group relative inline-block">
            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
              className="flex justify-center"
            >
              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  variants={child}
                  className="inline-block"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
                {name}
              </span>
            </div>
          </h1>

          <div className="text-xl md:text-3xl group relative">
            <div className="relative z-10 text-white">
              <TypeAnimation
                sequence={sequences}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                <TypeAnimation
                  sequence={sequences}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-8">
            {[
              {
                href: "https://github.com/Sreemanth-21",
                icon: FaGithub,
                label: "GitHub"
              },
              {
                href: "mailto:sreemanth1234@gmail.com",
                icon: FaEnvelope,
                label: "Email"
              },
              {
                href: "https://www.linkedin.com/in/sreemanth-palakurthi-b75849292/",
                icon: FaLinkedin,
                label: "LinkedIn"
              }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-white via-gray-400 to-white rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 blur"></div>
                <div className="relative p-4 bg-black rounded-lg">
                  <social.icon className="text-3xl md:text-4xl text-white" />
                </div>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  {social.label}
                </span>
              </motion.a>
            ))}
          </div>

          <div>
            <button
              onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-6 py-3 text-lg font-semibold"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-white via-gray-400 to-white rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 blur"></div>
              <div className="relative bg-black rounded-lg px-6 py-3 text-white">
                Explore More
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;