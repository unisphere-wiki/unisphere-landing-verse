
import React from "react";
import GlassCard from "./ui-components/GlassCard";
import { Brain, Lightbulb, Globe, Trophy, Database, Award } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay, className }) => (
  <GlassCard 
    className={cn(
      "h-full animate-fade-in", 
      className
    )}
    style={{ animationDelay: delay }}
  >
    <div className="flex flex-col space-y-4">
      <div className="p-3 bg-primary/10 rounded-xl w-12 h-12 flex items-center justify-center text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-foreground/70 text-sm">{description}</p>
    </div>
  </GlassCard>
);

const Features: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Insights",
      description: "Advanced algorithms analyze business patterns and deliver personalized insights tailored to your industry.",
      delay: "0s"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Knowledge Discovery",
      description: "Uncover hidden connections and opportunities through our proprietary knowledge graph technology.",
      delay: "0.1s"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Perspective",
      description: "Access business intelligence from every corner of the knowledge verse, breaking geographical barriers.",
      delay: "0.2s"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Competitive Edge",
      description: "Stay ahead with real-time analysis of market trends and competitor strategies.",
      delay: "0.3s"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Comprehensive Database",
      description: "Tap into our vast repository of business case studies, market analyses, and industry reports.",
      delay: "0.4s"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certification Programs",
      description: "Enhance your credibility with our industry-recognized business knowledge certification.",
      delay: "0.5s"
    }
  ];

  return (
    <section id="features" className="relative section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block rounded-full px-3 py-1 text-xs font-medium bg-unisphere-100 text-unisphere-800 mb-4 animate-fade-in">
            Powerful Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Navigate the <span className="text-gradient">Knowledge Verse</span> with Precision
          </h2>
          <p className="text-foreground/70 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            BizQuiz combines cutting-edge technology with comprehensive business intelligence to provide you with the tools you need to excel in today's competitive landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
