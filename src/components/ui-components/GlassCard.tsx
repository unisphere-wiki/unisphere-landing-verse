
import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  className?: string;
  children: React.ReactNode;
}

const GlassCard: React.FC<GlassCardProps> = ({ className, children }) => {
  return (
    <div
      className={cn(
        "glass-panel p-6 transition-all duration-300 hover:shadow-xl",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassCard;
