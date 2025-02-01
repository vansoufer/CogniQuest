import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

interface ActionButtonProps {
  icon: IconDefinition;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export default function ActionButton({ 
  icon, 
  children, 
  onClick, 
  className = '',
  disabled = false 
}: ActionButtonProps) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative font-bold text-white rounded-[10px] gradient-button
        transition-all duration-200 ease-in-out
        min-w-[200px] h-[46px]
        focus:ring-4 focus:ring-[#5f0dff]/50 focus:outline-none
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90 transform hover:scale-105'}
        ${className}`}
    >
      <span className={`flex items-center justify-center gap-2 rounded-[10px] bg-[#000000eb] 
        w-[99%] h-[95%] justify-self-center font-medium
        transition-colors
        ${disabled ? 'text-[#ffffff6e]' : 'hover:bg-[#000000d9]'}`}>
         {hydrated ? ( // Conditionally render the icon
          <FontAwesomeIcon icon={icon} />
        ) : (
          <></> // Or a placeholder if you prefer
        )}
        {children}
      </span>
    </button>

  );
}
