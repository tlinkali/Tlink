import React from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  distance?: number;
}

export const ScrollReveal = ({ children, width = "100%" }: ScrollRevealProps) => {
  return <div style={{ width }}>{children}</div>;
};
