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
    <div className="container mx-auto px-4 pt-20 relative z-10">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">Education Journey</h2>
      
      <div className="max-w-2xl mx-auto relative">
        {/* Central Line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-0.5 h-full bg-white opacity-30"></div>
        
        {educationPath.map((edu, index) => (
          <div key={index} className="relative flex flex-col items-center mb-16">
            {/* Node */}
            <div className="w-4 h-4 bg-black rounded-full border-2 border-white flex items-center justify-center z-20">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            
            {/* Card */}
            <div className="w-full bg-black rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-white/20 mt-4 border border-white/30">
              <div className="h-1 w-full bg-gradient-to-r from-white to-transparent rounded-t-lg opacity-30"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2 text-center">{edu.year}</h3>
                <h4 className="text-xl font-semibold mb-2 text-white text-center">{edu.degree}</h4>
                <p className="text-white mb-2 text-center">{edu.institution}</p>
                <p className="text-sm text-white bg-black/30 p-2 rounded-lg border border-white/30 text-center">
                  {edu.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;