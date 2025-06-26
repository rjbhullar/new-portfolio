export const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-electric-blue to-neon-cyan bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Profile Card */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/30 rounded-2xl p-8 border border-slate-700/50 backdrop-blur-sm sticky top-24">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-electric-blue to-neon-cyan rounded-full flex items-center justify-center mb-6 mx-auto">
                    <span className="text-2xl font-bold text-white">RB</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Rajdeep S. Bhullar</h3>
                  <p className="text-gray-400 mb-4">Senior Frontend Developer</p>
                  <div className="flex justify-center mb-6">
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full border border-green-500/30 flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      Available for opportunities
                    </span>
                  </div>
                  
                  {/* Key Highlights */}
                  <div className="space-y-4">
                    <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                      <div className="text-2xl font-bold text-neon-cyan mb-1">5+</div>
                      <div className="text-gray-400 text-sm">Years Experience</div>
                    </div>
                    <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                      <div className="text-2xl font-bold text-electric-blue mb-1">4M+</div>
                      <div className="text-gray-400 text-sm">Users Reached</div>
                    </div>
                    <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                      <div className="text-lg font-bold text-deep-purple mb-1">JavaScript</div>
                      <div className="text-gray-400 text-sm">Ecosystem Expert</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-slate-800/20 rounded-xl p-8 border border-slate-700/30 backdrop-blur-sm">
                <h4 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                  <div className="w-1 h-8 bg-gradient-to-b from-electric-blue to-neon-cyan rounded-full"></div>
                  My Journey
                </h4>
                <div className="space-y-6">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    I'm a passionate Frontend Developer with over 5 years of experience building 
                    scalable web and mobile applications. My journey spans across diverse sectors 
                    including IoT, Ad-tech, and Online Gaming platforms.
                  </p>
                  
                  <p className="text-lg text-gray-300 leading-relaxed">
                    I specialize in the JavaScript ecosystem, with deep expertise in React, Next.js, 
                    TypeScript, and modern development tools. I'm driven by creating exceptional user 
                    experiences and solving complex technical challenges.
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-800/20 rounded-xl p-6 border border-slate-700/30 backdrop-blur-sm">
                  <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                    <div className="w-3 h-3 bg-electric-blue rounded-full"></div>
                    What I Do
                  </h4>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-neon-cyan rounded-full mt-2 flex-shrink-0"></div>
                      <span>Build scalable web applications</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-neon-cyan rounded-full mt-2 flex-shrink-0"></div>
                      <span>Design responsive user interfaces</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-neon-cyan rounded-full mt-2 flex-shrink-0"></div>
                      <span>Optimize application performance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-neon-cyan rounded-full mt-2 flex-shrink-0"></div>
                      <span>Implement modern development practices</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-slate-800/20 rounded-xl p-6 border border-slate-700/30 backdrop-blur-sm">
                  <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                    <div className="w-3 h-3 bg-deep-purple rounded-full"></div>
                    Expertise Areas
                  </h4>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-neon-cyan rounded-full mt-2 flex-shrink-0"></div>
                      <span>React & Next.js Development</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-neon-cyan rounded-full mt-2 flex-shrink-0"></div>
                      <span>TypeScript & Modern JS</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-neon-cyan rounded-full mt-2 flex-shrink-0"></div>
                      <span>Mobile App Development</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-neon-cyan rounded-full mt-2 flex-shrink-0"></div>
                      <span>IoT & Real-time Systems</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};