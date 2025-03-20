
import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedGradientProps {
  className?: string;
  children?: React.ReactNode;
}

const AnimatedGradient: React.FC<AnimatedGradientProps> = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "absolute inset-0 bg-gradient-to-r from-unisphere-400/30 via-knowledge-400/20 to-unisphere-500/30 animate-gradient-x opacity-70 rounded-full blur-3xl -z-10",
        className
      )}
    >
      {children}
    </div>
  );
};

export default AnimatedGradient;
