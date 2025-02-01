import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

interface HeaderProps {
  showBackButton?: boolean;
  isLoading?: boolean;
}

export default function Header({ showBackButton = false, isLoading = false }: HeaderProps) {
  return (
    <>
      <header className="flex items-center justify-center p-[20px] rounded-lg bg-[#080c0e] w-full mb-10">
        {showBackButton && (
          <Link href="/" className="text-white hover:text-gray-300 transition-colors">
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
            <span className="hidden sm:inline">Voltar</span>
          </Link>
        )}
        <Link 
          href="/"
          className={`flex flex-row items-center gap-4 ${showBackButton ? 'mx-auto' : ''} 
            hover:opacity-80 transition-opacity`}
        >
          <Image 
            src="/favicon.svg" 
            alt="Logo CogniQuest" 
            width={40} 
            height={40} 
            className="mx-auto"
            priority
          />
          <h1 className="text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#0056b3] via-[#5f0dff] to-[#d58b05]">
            CogniQuest
          </h1>
        </Link>
        {showBackButton && <div className="w-[24px]" />}
      </header>
    </>
  );
}
