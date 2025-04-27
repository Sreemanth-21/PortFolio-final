import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen relative z-10">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">Hi, I'm Sreemanth</h1>
        <div className="text-xl md:text-2xl text-white mb-6">
          <TypeAnimation
            sequence={[
              "I'm a developer",
              2000,
              "I'm passionate about Artificial Intelligence",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/Sreemanth-21"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl transition duration-300 hover:text-white hover:drop-shadow-[0_0_6px_#ffffff]"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:sreemanth1234@gmail.com"
            className="text-white text-3xl transition duration-300 hover:text-white hover:drop-shadow-[0_0_6px_#ffffff]"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/sreemanth-palakurthi-b75849292/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl transition duration-300 hover:text-white hover:drop-shadow-[0_0_6px_#ffffff]"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
