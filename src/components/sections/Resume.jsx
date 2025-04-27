function Resume() {
  const certifications = [
    "Prompt Design in Vertex AI - Google",
    "Develop GenAI Apps with Gemini and Streamlit - Google",
    "Analyze Images with the Cloud Vision API - Google",
    "Python Essentials - Cisco",
    "Getting Started with Artificial Intelligence - IBM",
    "Certified in Tableau - Internshala"
  ];

  return (
    <section id="resume" className="min-h-screen flex items-center justify-center py-20 relative z-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white group relative">
          Resume
          <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute inset-0">
            Resume
          </span>
        </h2>
        <div className="max-w-2xl mx-auto relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-white via-gray-400 to-white rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 blur"></div>
          <div className="relative bg-black p-8 rounded-lg">
            <div className="text-center mb-8">
              <a
                href="https://drive.google.com/file/d/1SkmVPwdg8RqtxKXqkiSpEzMXUR20qGJ7/view?usp=drive_link"
                className="group relative inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-white via-gray-400 to-white rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 blur"></div>
                <span className="relative bg-black text-white px-6 py-3 rounded-lg font-bold block border border-white/30 hover:border-white/60 transition-all duration-300">
                  Download Resume
                </span>
              </a>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Certifications</h3>
                <ul className="space-y-3">
                  {certifications.map((cert, index) => (
                    <li
                      key={index}
                      className="flex items-center text-gray-300"
                    >
                      <span className="mr-2">•</span>
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;