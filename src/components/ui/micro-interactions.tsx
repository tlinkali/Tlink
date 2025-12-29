import React from 'react';

export const Tilt = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  return <div className={className}>{children}</div>;
};

export const Magnetic = ({ children }: { children: React.ReactElement }) => {
  return children;
};
