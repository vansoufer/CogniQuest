'use client';

import Header from './components/Header';
import NavButton from './components/NavButton';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#04040a] flex items-center justify-center p-6">
      <div className="w-full max-w-4xl flex flex-col items-center gap-10">
        {/* Header */}
        <header className="flex items-center justify-center w-full mb-10">
          <div className={`flex flex-col items-center text-center`}>
            <Image 
              src="/favicon.svg" 
              alt="Logo CogniQuest" 
              width={100} 
              height={100} 
              className="mx-auto mb-4"
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
          <NavButton href="/searchByQuestion">
            Pesquisar por Questão
          </NavButton>
          
          <NavButton href="/searchByTheme">
            Pesquisar por Tema
          </NavButton>
        </div>
      </div>
    </div>
  );
}
