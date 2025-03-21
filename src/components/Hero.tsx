
import React, { useEffect, useRef } from "react";
import AnimatedGradient from "./ui-components/AnimatedGradient";
import GlassCard from "./ui-components/GlassCard";
import { Globe, Brain, Users, Search } from "lucide-react";

const Hero: React.FC = () => {
  const orbitRef = useRef<HTMLDivElement>(null);

  // Animation effect for the orbit
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!orbitRef.current) return;
      
      const rect = orbitRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      // Calculate distance from center (0-1)
      const distance = Math.min(1, Math.sqrt(x*x + y*y) / (rect.width / 2));
      
      // Move orbit slightly based on mouse position
      orbitRef.current.style.transform = `perspective(1000px) rotateX(${y * 0.01}deg) rotateY(${x * -0.01}deg)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16 section-padding">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatedGradient className="-top-[30%] -left-[10%] w-[70%] h-[70%] opacity-30" />
        <AnimatedGradient className="-bottom-[30%] -right-[10%] w-[70%] h-[70%] opacity-30" />
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 z-10 w-full">
        <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
          <div className="space-y-2">
            <div className="inline-block rounded-full px-3 py-1 text-xs font-medium bg-unisphere-100 text-unisphere-800 mb-4 animate-fade-in">
              The future of business knowledge
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
              The Center of the <span className="text-gradient">Knowledge Verse</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mt-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Unlock the universal business insights with <a href="https://bizquery.unisphere.wiki" className="text-primary hover:underline">BizQuery</a>, the revolutionary platform that connects you to the center of all business knowledge.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <a href="https://bizquery.unisphere.wiki" className="px-8 py-3 text-white button-gradient rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-medium w-full sm:w-auto text-center">
              Start Your Journey
            </a>
            <a href="#demo" className="px-8 py-3 bg-white/90 text-foreground rounded-full shadow-md hover:shadow-lg transition-all duration-300 font-medium w-full sm:w-auto text-center border border-gray-200">
              Watch Demo
            </a>
          </div>
          
          <div className="flex items-center justify-center lg:justify-start space-x-8 pt-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white" />
              ))}
            </div>
            <div className="text-sm text-foreground/70">
              Trusted by <span className="font-medium text-foreground">10,000+</span> companies
            </div>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 flex items-center justify-center relative animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <div ref={orbitRef} className="relative w-[400px] h-[400px] transition-transform duration-200 ease-out">
            {/* Center Element */}
            <a href="https://bizquery.unisphere.wiki" className="block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              <GlassCard className="w-32 h-32 rounded-2xl flex items-center justify-center">
                <div className="text-2xl font-bold text-gradient">BizQuery</div>
              </GlassCard>
            </a>
            
            {/* Orbiting Elements */}
            <div className="absolute inset-0 animate-rotate-slow">
              <GlassCard className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl w-24 h-24 flex items-center justify-center">
                <Globe className="w-8 h-8 text-unisphere-500" />
              </GlassCard>
            </div>
            
            <div className="absolute inset-0 animate-rotate-slow" style={{ animationDelay: "-5s" }}>
              <GlassCard className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 rounded-xl w-24 h-24 flex items-center justify-center">
                <Brain className="w-8 h-8 text-knowledge-500" />
              </GlassCard>
            </div>
            
            <div className="absolute inset-0 animate-rotate-slow" style={{ animationDelay: "-10s" }}>
              <GlassCard className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rounded-xl w-24 h-24 flex items-center justify-center">
                <Users className="w-8 h-8 text-unisphere-600" />
              </GlassCard>
            </div>
            
            <div className="absolute inset-0 animate-rotate-slow" style={{ animationDelay: "-15s" }}>
              <GlassCard className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 rounded-xl w-24 h-24 flex items-center justify-center">
                <Search className="w-8 h-8 text-knowledge-600" />
              </GlassCard>
            </div>
            
            {/* Connecting Lines */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-gray-200/50"></div>
            <div className="absolute inset-[15%] rounded-full border-2 border-dashed border-gray-200/40"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-pulse-subtle">
        <div className="text-xs uppercase tracking-wider text-foreground/60 mb-2">Scroll to explore</div>
        <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-foreground/60 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
