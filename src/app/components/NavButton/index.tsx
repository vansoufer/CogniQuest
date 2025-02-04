import { useRouter } from 'next/navigation';

interface NavButtonProps {
  href: string | (() => void);
  children: React.ReactNode;
  disabled?: boolean;
  ariaLabel?: string;
  onClick?: () => void;
}

export default function NavButton({ 
  href, 
  children, 
  disabled, 
  ariaLabel,
  onClick 
}: NavButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (typeof href === 'string') {
      router.push(href);
    } else {
      href();
    }
  };

  return (
    <button 
      onClick={handleClick}
      aria-label={ariaLabel}
      className={`relative font-bold text-white rounded-[10px] gradient-button
        transition-all duration-200 ease-in-out
        min-w-[200px] h-[46px]
        focus:ring-4 focus:ring-[#5f0dff]/50 focus:outline-none
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90 transform hover:scale-105'}`}
    >
      <span className="flex items-center justify-center gap-2 rounded-[10px] bg-[#000000eb] w-[99%] h-[95%] justify-self-center font-medium hover:bg-[#000000d9]">
        {children}
      </span>
    </button>
  );
} 