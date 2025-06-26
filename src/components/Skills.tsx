
const skillsData = [
  {
    category: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "ES6+", "Swift", "Kotlin"]
  },
  {
    category: "Libraries & Frameworks",
    skills: ["React.js", "Next.js", "React Native", "Angular", "Node.js", "Redux"]
  },
  {
    category: "Styling & Design",
    skills: ["CSS3", "SASS/SCSS", "Tailwind CSS", "Material UI", "Figma"]
  },
  {
    category: "Testing & APIs",
    skills: ["Jest", "React Testing Library", "REST APIs", "GraphQL", "MQTT", "WebSockets"]
  },
  {
    category: "Build & Development",
    skills: ["Webpack", "Babel", "npm", "yarn", "Git/GitHub", "Storybook"]
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS", "Microsoft Azure", "CI/CD", "Scrum/Agile", "Jira"]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-electric-blue to-neon-cyan bg-clip-text text-transparent">
            Skills & Expertise
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillsData.map((category, categoryIndex) => (
            <div 
              key={category.category}
              className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              <h3 className="text-lg font-semibold text-white mb-4 pb-3 border-b border-slate-600">
                {category.category}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, index) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 bg-gradient-to-r from-electric-blue/20 to-neon-cyan/20 text-gray-200 text-sm rounded-full border border-electric-blue/30 hover:border-neon-cyan/50 transition-all duration-200 hover:bg-gradient-to-r hover:from-electric-blue/30 hover:to-neon-cyan/30"
                    style={{ animationDelay: `${categoryIndex * 0.1 + index * 0.05}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
