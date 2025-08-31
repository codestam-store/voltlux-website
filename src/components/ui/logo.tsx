interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ className = '', size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  return (
    <svg
      className={`${sizeClasses[size]} ${className}`}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="logo-title logo-desc"
      role="img"
    >
      <title id="logo-title">NexusFlow</title>
      <desc id="logo-desc">NexusFlow - Innovative Digital Solutions</desc>
      
      {/* Background circle */}
      <circle cx="20" cy="20" r="18" fill="url(#gradient)" stroke="currentColor" strokeWidth="2"/>
      
      {/* Abstract geometric shapes */}
      <path
        d="M12 16L20 8L28 16L20 24L12 16Z"
        fill="currentColor"
        opacity="0.8"
      />
      <path
        d="M16 20L20 16L24 20L20 24L16 20Z"
        fill="currentColor"
        opacity="0.6"
      />
      <circle cx="20" cy="20" r="3" fill="currentColor" opacity="0.9"/>
      
      {/* Connecting lines */}
      <path
        d="M8 20H12M28 20H32M20 8V12M20 28V32"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.5"
      />
      
      {/* Gradient definition */}
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.1"/>
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.05"/>
        </linearGradient>
      </defs>
    </svg>
  );
}
