import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'red' | 'graphite' | 'outline' | 'pulse';
  className?: string;
}

export function Badge({ children, variant = 'graphite', className = '' }: BadgeProps) {
  const baseClasses =
    'inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[11px] font-mono uppercase tracking-widest font-semibold border transition-colors';

  const variants = {
    red: 'bg-[#E62935]/15 text-[#FF4552] border-[#E62935]/40',
    graphite: 'bg-[#141619] text-[#A4A7AC] border-white/10',
    outline: 'bg-transparent text-[#F5F5F3] border-white/20',
    pulse: 'bg-[#E62935]/10 text-[#FF4552] border-[#E62935]/40 animate-pulseSubtle',
  };

  return <span className={`${baseClasses} ${variants[variant]} ${className}`}>{children}</span>;
}
