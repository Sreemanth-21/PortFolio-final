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
    <div className="container mx-auto px-4 pt-20 relative z-10">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-black p-6 rounded-lg shadow-lg border border-white/30 hover:shadow-white/20 transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 text-white">{category.title}</h3>
            <div className="grid grid-cols-2 gap-3">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="bg-black p-2 rounded text-center border border-white/30 text-white">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;