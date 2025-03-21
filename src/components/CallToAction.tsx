
import React from "react";
import GlassCard from "./ui-components/GlassCard";
import AnimatedGradient from "./ui-components/AnimatedGradient";

const CallToAction: React.FC = () => {
  return (
    <section id="start" className="relative section-padding overflow-hidden">
      <div className="max-w-5xl mx-auto relative">
        <AnimatedGradient className="opacity-40" />
        
        <GlassCard className="relative z-10 py-16 px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
              Begin Your Journey to the Center of the <span className="text-gradient">Knowledge Verse</span>
            </h2>
            
            <p className="text-lg text-foreground/80 mb-10 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Join thousands of forward-thinking businesses that have already discovered the power of UniSphere's <a href="https://bizquery.unisphere.wiki" className="text-primary hover:underline">BizQuery</a> platform.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold text-gradient mb-2">10,000+</div>
                <div className="text-sm text-foreground/70">Active Users</div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold text-gradient mb-2">95%</div>
                <div className="text-sm text-foreground/70">Satisfaction Rate</div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold text-gradient mb-2">300%</div>
                <div className="text-sm text-foreground/70">Average ROI</div>
              </div>
            </div>
            
            <form className="max-w-md mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}
                  onSubmit={(e) => {
                    e.preventDefault();
                    window.location.href = "https://bizquery.unisphere.wiki";
                  }}>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 text-white button-gradient rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
                >
                  Get Early Access
                </button>
              </div>
              <p className="text-xs text-foreground/60 mt-3">
                By signing up, you agree to our Terms of Service and Privacy Policy.
              </p>
            </form>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default CallToAction;
