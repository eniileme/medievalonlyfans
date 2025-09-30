interface MedievalButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'gold' | 'silver' | 'blood' | 'bronze';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
}

export function MedievalButton({ 
  children, 
  onClick, 
  variant = 'gold', 
  size = 'md',
  disabled = false,
  className = ''
}: MedievalButtonProps) {
  const baseClasses = "font-cinzel font-semibold rounded-lg transition-all duration-300 hover:scale-105 medieval-text-shadow medieval-border disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100";
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-lg",
    lg: "px-8 py-4 text-xl"
  };
  
  const variantClasses = {
    gold: "bg-medieval-gold text-medieval-dark hover:bg-yellow-600 medieval-glow",
    silver: "bg-medieval-silver text-medieval-dark hover:bg-gray-400", 
    blood: "bg-medieval-blood text-white hover:bg-red-800",
    bronze: "bg-medieval-bronze text-white hover:bg-orange-700"
  };
  
  return (
    <button 
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
