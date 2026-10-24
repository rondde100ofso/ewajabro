import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'red' | 'graphite' | 'outline' | 'pulse';
  className?: string;
}

export function Badge({ children, variant = 'graphite', className = '' }: BadgeProps) {
  const baseClasses =
    'inline-flex items-center px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full transition-colors select-none';

  const variants = {
    red: 'bg-[#E62935] text-white shadow-sm',
    graphite: 'bg-white/10 text-[#F5F5F3] border border-white/10',
    outline: 'bg-transparent text-[#F5F5F3] border border-white/20',
    pulse: 'bg-[#E62935] text-white',
  };

  return <span className={`${baseClasses} ${variants[variant]} ${className}`}>{children}</span>;
}
