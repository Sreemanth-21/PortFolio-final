function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "Java", "C"]
    },
    {
      title: "Developer Tools",
      skills: ["VS Code", "PowerBI", "Tableau", "Jupyter"]
    },
    {
      title: "Web Development",
      skills: ["React", "Node.js", "HTML/CSS", "Express"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "AutoCAD", "Linux"]
    }
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-20 relative z-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white group relative">
          Skills
          <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute inset-0">
            Skills
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-white via-gray-400 to-white rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 blur"></div>
              <div className="relative bg-black p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-white">{category.title}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex} 
                      className="bg-black/50 p-2 rounded text-center border border-white/30 text-white hover:opacity-100 hover:border-white/60 transition-all duration-300"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills