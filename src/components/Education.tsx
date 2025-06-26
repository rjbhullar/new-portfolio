
const education = [
  {
    degree: "Mobile Application Development",
    institution: "Fanshawe College",
    location: "London, Ontario",
    period: "01/2022 - 04/2023",
    type: "Diploma",
    description: "Advanced program focused on mobile app development across iOS and Android platforms, covering modern development frameworks and best practices."
  },
  {
    degree: "Bachelor of Computer Applications",
    institution: "Punjabi University",
    location: "Patiala, India",
    period: "05/2016 - 05/2019",
    type: "Bachelor's Degree",
    description: "Comprehensive undergraduate program covering computer science fundamentals, programming languages, database management, and software engineering principles."
  }
];

export const Education = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-electric-blue to-neon-cyan bg-clip-text text-transparent">
            Education & Training
          </span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
            {education.map((edu, index) => (
              <div 
                key={index}
                className="group relative w-full max-w-md"
              >
                <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/40 transition-all duration-300 hover:border-neon-cyan/30 hover:transform hover:scale-105 h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="text-electric-blue text-sm font-medium mb-1">{edu.type}</div>
                      <h3 className="text-xl font-semibold text-white mb-2">{edu.degree}</h3>
                      <div className="text-neon-cyan font-medium mb-1">{edu.institution}</div>
                      <div className="text-gray-400 text-sm">{edu.location}</div>
                    </div>
                    <div className="text-electric-blue font-mono text-xs sm:text-sm bg-slate-700/50 px-2 sm:px-3 py-1 rounded-full whitespace-nowrap ml-2 sm:ml-4">
                      {edu.period}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">{edu.description}</p>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-neon-cyan/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-electric-blue/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
