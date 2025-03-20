
import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const GlassCard: React.FC<GlassCardProps> = ({ className, children, style }) => {
  return (
    <div
      className={cn(
        "glass-panel p-6 transition-all duration-300 hover:shadow-xl",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
};

export default GlassCard;
