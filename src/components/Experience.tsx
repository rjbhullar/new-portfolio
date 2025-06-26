
const experiences = [
  {
    title: "Sr. Software Engineer",
    company: "Harman Connected Services",
    location: "Gurgaon, India",
    period: "02/2025 - 05/2025",
    description: "Worked on a client project for EEZE, a leading provider of live-casino gaming platforms, as part of the UI Core Team.",
    achievements: [
      "Responsible for building and maintaining a shared React-based component library used across multiple game applications.",
      "Led the revamp of the notification system in the shared common component module, introducing a modular architecture that decoupled logic from presentation and improved developer experience across consuming teams.",
      "Drove DX (Developer Experience) initiatives such as CI-friendly testing practices, data-testid automation, and Storybook-driven development, improving code quality and team velocity."
    ],
    technologies: ["React.js", "TypeScript", "Storybook", "Component Library", "CI/CD"]
  },
  {
    title: "Sr. Software Engineer",
    company: "Blazesoft",
    location: "Toronto, Canada",
    period: "10/2023 - 10/2024",
    description: "Blazesoft is a leading provider of online social gaming casinos with 4M+ registered users in the U.S. and Canada.",
    achievements: [
      "Spearheaded the development of Zula Casino, the company's latest social gaming platform, leveraging Next.js and TypeScript with server-side rendering (SSR) for optimal performance and SEO.",
      "Contributed to a company-wide architectural overhaul by implementing a monorepo structure, streamlining development and maintenance processes across Blazesoft's three social gaming brands.",
      "Redesigned and modernized Fortune Coins, Blazesoft's legacy casino platform with 1M+ users, as a solo contributor, improving user experience and scalability.",
      "Migrated client-side React based casino applications to server-side rendering (SSR) using Next.js, achieving significant improvements in performance, load times, and SEO optimization.",
      "Authored comprehensive unit and integration test cases with Jest and React Testing Library, reducing production issues and ensuring code quality."
    ],
    technologies: ["Next.js", "React.js", "TypeScript", "SSR", "Jest", "Monorepo"]
  },
  {
    title: "Software Engineer",
    company: "IoT-83",
    location: "Toronto (Remote)",
    period: "04/2022 - 08/2023",
    description: "IoT-83 is a technology startup that specializes in delivering industrial IoT solutions to its clients, effectively managing a staggering portfolio of over 50 million smart assets.",
    achievements: [
      "Designed and developed Flex-83, a low-code IoT Platform for diverse industrial and commercial needs. Leveraged React.js to create a scalable, secure, and user-friendly framework with intuitive workflows.",
      "Spearheaded the revamping and management of Flex83's Dashboard Studio, utilizing AmCharts and D3.js to deliver actionable insights from complex datasets.",
      "Engineered a lightweight data-table library in React with client-side and server-side filtering/sorting capabilities that improved data presentation, reduced development time, and enhanced data accuracy.",
      "Implemented MQTT protocol to develop app-wide notification system for delivering real-time updates to users and creating dynamic dashboards with live data.",
      "Implemented code and asset optimizations to enhance application accessibility and performance, resulting in a significant improvement in user experience."
    ],
    technologies: ["React.js", "D3.js", "AmCharts", "MQTT", "IoT", "Dashboard"]
  },
  {
    title: "Sr. Software Engineer",
    company: "Bharti Airtel Limited",
    location: "Gurgaon, India",
    period: "05/2021 - 12/2021",
    description: "Bharti Airtel Limited is a telecommunications conglomerate with massive user base of 574 million, offers mobile services, DTH broadcasting, broadband, and innovative mobile applications.",
    achievements: [
      "Part of a 3-person UI team building Airtel Ads project from scratch, leveraging digital assets to deliver targeted ads to a user base of 184+ million, resulting in a remarkable 150% increase in ad revenue within the third quarter.",
      "Played a key role in the development of SMS marketing feature for businesses based on cohorts like demographics, age, gender, and affinity, enhancing targeted marketing capabilities.",
      "Revamped UPI payments Journey in Airtel Thanks App using React Native and TypeScript, resulting in increased daily payments count and customer satisfaction. The team achieved Airtel Ace Award (2022).",
      "Integrated Google Maps into the application, leveraging Google Places API to develop reusable address field with geofencing capabilities."
    ],
    technologies: ["React Native", "TypeScript", "Google Maps API", "UPI Integration"]
  },
  {
    title: "Software Engineer",
    company: "IoT-83",
    location: "Gurgaon, India",
    period: "08/2019 - 05/2021",
    description: "Worked on a client project for Keysight Technologies, involving the design and development of a web-based application that allows remote access to data from electronic measurement equipment.",
    achievements: [
      "Played a key role in the successful migration of Angular-based application to React, ensuring seamless integration and improved performance and functionality.",
      "Revamped authentication process for the platform, and implemented OAuth authentication to enable users to securely log in using their existing Microsoft, Gmail, and other third-party accounts.",
      "Divided the app into small easily maintainable and reusable modules to enhance performance, readability, and optimization.",
      "Work with the quality assurance (QA) team to ensure the applications are thoroughly tested and meet the highest standards of quality."
    ],
    technologies: ["React.js", "Angular", "OAuth", "Migration"]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-electric-blue to-neon-cyan bg-clip-text text-transparent">
            Professional Experience
          </span>
        </h2>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-electric-blue via-neon-cyan to-deep-purple"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start group">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-electric-blue to-neon-cyan rounded-full border-4 border-slate-900 group-hover:scale-125 transition-transform duration-300"></div>
                
                {/* Content */}
                <div className="ml-16 flex-1">
                  <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/40 transition-all duration-300 hover:border-neon-cyan/30 group">
                    <div className="flex flex-wrap justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                        <div className="text-neon-cyan font-medium">{exp.company}</div>
                        <div className="text-gray-400 text-sm">{exp.location}</div>
                      </div>
                      <div className="text-electric-blue font-mono text-sm bg-slate-700/50 px-3 py-1 rounded-full">
                        {exp.period}
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-neon-cyan rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-300 text-sm leading-relaxed">{achievement}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-slate-700/70 text-gray-300 text-xs rounded-full border border-slate-600/50 hover:border-neon-cyan/50 hover:text-neon-cyan transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
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
};
