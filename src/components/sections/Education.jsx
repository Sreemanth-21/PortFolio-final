function Education() {
  const educationPath = [
    {
      year: "2023-2027",
      degree: "B.Tech in Computer Science Engineering",
      institution: "VNR Vignana Jyothi Institute of Engineering and Technology",
      description: "Specialization in AI/ML"
    },
    {
      year: "2021-2023",
      degree: "Intermediate",
      institution: "Little Flower Junior Collge",
      description: "In Mathematics"
    },
  ];

  return (
    <section id="education" className="min-h-screen flex items-center justify-center py-20 relative z-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white group relative">
          Education Journey
          <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute inset-0">
            Education Journey
          </span>
        </h2>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-0.5 h-full bg-white opacity-30"></div>
          
          <div className="grid grid-cols-1 gap-16">
            {educationPath.map((edu, index) => (
              <div key={index} className="relative">
                <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-4 h-4 bg-black rounded-full border-2 border-white flex items-center justify-center z-20">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                
                <div className="relative group w-full">
                  <div className="absolute -inset-2 bg-gradient-to-r from-white via-gray-400 to-white rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 blur"></div>
                  <div className="relative bg-black rounded-lg p-8 min-h-[300px] flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4 text-center">{edu.year}</h3>
                      <h4 className="text-xl font-semibold mb-4 text-white text-center">{edu.degree}</h4>
                      <p className="text-white mb-4 text-center">{edu.institution}</p>
                    </div>
                    <div className="text-sm text-white bg-black/30 p-4 rounded-lg border border-white/30 text-center mt-auto">
                      {edu.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;