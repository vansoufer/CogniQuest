'use client';

import { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import NavButton from './components/NavButton';
import Image from 'next/image';
import Loading from './components/Loading';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isNavigating, setIsNavigating] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Simular tempo de carregamento inicial
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleNavigation = (path: string) => {
    setIsNavigating(true);
    router.push(path);
  };

  if (isLoading || isNavigating) {
    return <Loading showText={false} />;
  }

  return (
    <div className="min-h-screen bg-[#04040a] flex items-center justify-center p-6">
      <div className="w-full max-w-4xl flex flex-col items-center gap-10">
        {/* Header */}
        <header className="flex items-center justify-center w-full">
          <div className={`flex flex-col items-center text-center`}>
            <Image 
              src="/favicon.svg" 
              alt="Logo CogniQuest" 
              width={100} 
              height={100} 
              className="mx-auto"
              priority
            />
            <h1 className="gradient-title">
              CogniQuest
            </h1>
            <h2 className="text-white text-xl font-normal text-center px-4 sm:px-0">
              Seu assistente de estudos inteligente
            </h2>
          </div>
        </header>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <NavButton 
            href="/searchByQuestion" 
            ariaLabel='Pesquisar por Questão'
            onClick={() => handleNavigation('/searchByQuestion')}
          >
            Pesquisar por Questão
          </NavButton>
          
          <NavButton 
            href="/searchByTheme" 
            ariaLabel='Pesquisar por Tema'
            onClick={() => handleNavigation('/searchByTheme')}
          >
            Pesquisar por Tema
          </NavButton>
        </div>
      </div>
      <Footer />
    </div>
  );
}
