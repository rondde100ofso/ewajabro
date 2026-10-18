import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'store';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  target?: string;
  rel?: string;
  'aria-label'?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  disabled = false,
  className = '',
  type = 'button',
  target,
  rel,
  'aria-label': ariaLabel,
  icon,
  iconPosition = 'left',
}: ButtonProps) {
  const baseClasses =
    'relative inline-flex items-center justify-center font-display uppercase tracking-wider font-bold transition-all duration-200 select-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E62935] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090B]';

  const sizeClasses = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-7 py-3.5 gap-2.5',
    xl: 'text-lg px-9 py-4 gap-3 tracking-widest',
  };

  const variantClasses = {
    primary:
      'bg-[#E62935] text-white hover:bg-[#FF3846] active:bg-[#B81520] shadow-[0_4px_20px_rgba(230,41,53,0.3)] hover:shadow-[0_4px_30px_rgba(230,41,53,0.5)] border border-[#FF5763]/30',
    secondary:
      'bg-[#141619] text-[#F5F5F3] hover:text-white hover:bg-[#1D2024] border border-white/10 hover:border-[#E62935]/50 shadow-sm',
    ghost: 'bg-transparent text-[#A4A7AC] hover:text-[#F5F5F3] hover:bg-white/5',
    outline:
      'bg-transparent text-[#F5F5F3] border border-white/20 hover:border-[#E62935] hover:text-white hover:bg-[#E62935]/10',
    store:
      'bg-[#141619] text-[#F5F5F3] border border-white/10 hover:border-[#E62935] hover:bg-[#1A1D21] text-left p-3 rounded-none shadow-md transition-all',
  };

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}
    </>
  );

  if (href && !disabled) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:');
    if (isExternal) {
      return (
        <a
          href={href}
          target={target || (href.startsWith('http') ? '_blank' : undefined)}
          rel={rel || (href.startsWith('http') ? 'noopener noreferrer' : undefined)}
          className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
          aria-label={ariaLabel}
          onClick={onClick}
        >
          {content}
        </a>
      );
    }

    return (
      <Link
        href={href}
        className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
