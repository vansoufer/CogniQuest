'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#04040a] flex flex-col items-center justify-center p-6">
      <div className="text-center space-y-4">
        <h1 className="gradient-title text-8xl">
          404
        </h1>
        <h2 className="text-white text-2xl font-normal mb-8">
          Conteúdo não encontrado
        </h2>
        <Link 
          href="/"
          className="inline-block gradient-button rounded-[10px] px-6 py-3 font-medium transition-all duration-200 hover:opacity-90 hover:scale-105"
        >
          <span className="flex items-center justify-center gap-2 rounded-[10px] bg-[#000000eb] w-full h-full px-4 py-2 hover:bg-[#000000d9]">
            Voltar para a página inicial
          </span>
        </Link>
      </div>
    </div>
  );
} 