
import { Mail, Github, Linkedin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-electric-blue to-neon-cyan bg-clip-text text-transparent">
            Let's Work Together
          </span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              I'm always interested in discussing new opportunities, innovative projects, 
              and collaborating with amazing teams. Let's create something extraordinary together.
            </p>
            
            <div className="flex justify-center">
              <a
                href="mailto:rjbhullar28@gmail.com"
                className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-electric-blue to-neon-cyan text-white rounded-lg hover:shadow-xl hover:shadow-neon-cyan/25 transition-all duration-300 hover:scale-105 font-medium"
              >
                <Mail size={24} />
                <span>Send Email</span>
              </a>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/40 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-electric-blue to-neon-cyan rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail size={28} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-400 text-sm mb-4">Get in touch via email</p>
              <a 
                href="mailto:rjbhullar28@gmail.com"
                className="text-neon-cyan hover:text-electric-blue transition-colors duration-200 text-sm font-medium"
              >
                rjbhullar28@gmail.com
              </a>
            </div>
            
            <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/40 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-deep-purple to-electric-blue rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Github size={28} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">GitHub</h3>
              <p className="text-gray-400 text-sm mb-4">Check out my projects</p>
              <a 
                href="https://github.com/rjbhullar/"
                className="text-neon-cyan hover:text-electric-blue transition-colors duration-200 text-sm font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Profile
              </a>
            </div>
            
            <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/40 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-neon-cyan to-deep-purple rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Linkedin size={28} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">LinkedIn</h3>
              <p className="text-gray-400 text-sm mb-4">Let's connect professionally</p>
              <a 
                href="https://www.linkedin.com/in/rajdeepbhullar/"
                className="text-neon-cyan hover:text-electric-blue transition-colors duration-200 text-sm font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-slate-700/50">
        <div className="text-center">
          <p className="text-gray-500 text-sm">
            © 2025 Rajdeep S. Bhullar. Built with React, TypeScript & Tailwind CSS.
          </p>
        </div>
      </footer>
    </section>
  );
};
