
import { useEffect, useState } from "react";
import { Mail, Github, Linkedin } from "lucide-react";

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div
          className="absolute w-96 h-96 bg-electric-blue/20 rounded-full blur-3xl animate-float"
          style={{
            top: "20%",
            left: "10%",
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        />
        <div
          className="absolute w-80 h-80 bg-deep-purple/20 rounded-full blur-3xl animate-float"
          style={{
            top: "60%",
            right: "10%",
            animationDelay: "1s",
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
          }}
        />
        <div
          className="absolute w-64 h-64 bg-neon-cyan/20 rounded-full blur-3xl animate-float"
          style={{
            bottom: "30%",
            left: "60%",
            animationDelay: "2s",
            transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`,
          }}
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-slide-up">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Hi, I'm{" "}
            </span>
            <span className="bg-gradient-to-r from-electric-blue via-neon-cyan to-deep-purple bg-clip-text text-transparent">
              Rajdeep
            </span>
          </h1>
          
          <div className="text-lg md:text-2xl text-gray-300 mb-8 animate-fade-in-delayed">
            Frontend Developer
          </div>
          
          <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-delayed px-4">
            Building high-performance web and mobile applications with{" "}
            <span className="text-electric-blue font-semibold">5+ years</span> of experience 
            in the JavaScript ecosystem. Specialized in React, Next.js, and modern web technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-16 animate-fade-in-delayed px-4">
            <a
              href="mailto:rjbhullar28@gmail.com"
              className="group flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-electric-blue to-neon-cyan text-white rounded-lg hover:shadow-xl hover:shadow-neon-cyan/25 transition-all duration-300 hover:scale-105"
            >
              <Mail size={20} />
              <span className="font-medium">Get In Touch</span>
            </a>
            
            <a
              href="#experience"
              className="group flex items-center justify-center gap-3 px-6 py-3 border border-slate-600 text-white rounded-lg hover:border-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300 hover:scale-105"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="font-medium">View Experience</span>
            </a>
          </div>
          
          <div className="flex justify-center gap-6 animate-fade-in-delayed mb-16 sm:mb-8">
            <a
              href="mailto:rjbhullar28@gmail.com"
              className="p-3 border border-slate-600 rounded-lg hover:border-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300 group"
            >
              <Mail size={24} className="text-gray-400 group-hover:text-neon-cyan transition-colors" />
            </a>
            <a
              href="https://github.com/rjbhullar/"
              className="p-3 border border-slate-600 rounded-lg hover:border-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300 group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={24} className="text-gray-400 group-hover:text-neon-cyan transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/rajdeepbhullar/"
              className="p-3 border border-slate-600 rounded-lg hover:border-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300 group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} className="text-gray-400 group-hover:text-neon-cyan transition-colors" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator - positioned to avoid overlap on mobile */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neon-cyan rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
