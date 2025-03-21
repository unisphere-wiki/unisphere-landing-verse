
import React, { useState } from "react";
import GlassCard from "./ui-components/GlassCard";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  content: string;
  name: string;
  role: string;
  company: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      content: "UniSphere's BizQuery has fundamentally transformed how our executive team approaches strategic decision-making. The depth of insights is unparalleled.",
      name: "Alexandra Chen",
      role: "Chief Strategy Officer",
      company: "Global Innovations Inc."
    },
    {
      content: "As someone who needs to stay at the cutting edge of business intelligence, BizQuery has become my daily essential. It's like having the world's business knowledge at my fingertips.",
      name: "Marcus Johnson",
      role: "VP of Operations",
      company: "Frontier Technologies"
    },
    {
      content: "The knowledge certification programs offered by UniSphere have become the gold standard in our industry. Our entire team has benefited immensely from this resource.",
      name: "Sophia Rodriguez",
      role: "Director of Learning",
      company: "Elevate Enterprises"
    },
    {
      content: "I was skeptical at first, but BizQuery has proven to be the most valuable business intelligence tool we've ever invested in. The ROI has been extraordinary.",
      name: "Jonathan Williams",
      role: "CEO",
      company: "Momentum Ventures"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="relative section-padding bg-gradient-to-b from-background to-unisphere-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block rounded-full px-3 py-1 text-xs font-medium bg-unisphere-100 text-unisphere-800 mb-4 animate-fade-in">
            Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Trusted by Business <span className="text-gradient">Leaders</span> Worldwide
          </h2>
          <p className="text-foreground/70 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Discover how professionals across industries are leveraging UniSphere's BizQuery to transform their approach to business intelligence.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <GlassCard className="h-full flex flex-col justify-between mx-auto max-w-2xl">
                    <Quote className="w-10 h-10 text-unisphere-300 mb-4" />
                    <p className="text-lg mb-6 text-foreground/90 italic">"{testimonial.content}"</p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-unisphere-500 to-knowledge-500"></div>
                      <div className="ml-4">
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-foreground/70">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all duration-300",
                  index === currentIndex 
                    ? "bg-primary w-6" 
                    : "bg-primary/30 hover:bg-primary/50"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center focus:outline-none hover:bg-gray-50 transition-colors duration-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center focus:outline-none hover:bg-gray-50 transition-colors duration-200"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
