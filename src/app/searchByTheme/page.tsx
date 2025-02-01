'use client';

import { useState } from 'react';
import { faRedo } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header';
import InputButton from '../components/InputButton';
import ActionButton from '../components/ActionButton';
import NavTab from '../components/NavTab';
import { processTheme } from '@/lib/gemini';
import type { ThemeResult } from '@/types';
import LoadingSpinner from '../components/LoadingSpinner';
import SkeletonNavTab from '../components/SkeletonNavTab';
import Footer from '../components/Footer';

export default function SearchByTheme() {
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showOtherQuestion, setShowOtherQuestion] = useState(false);
  const [results, setResults] = useState<ThemeResult>({ 
    aula: '', 
    links: '', 
    exercicios: '' 
  });

  const tabs = [
    { id: 'aula' as const, label: 'Aula Completa', icon: 'fa-chalkboard-teacher' },
    { id: 'exercicios' as const, label: 'Exercícios Resolvidos', icon: 'fa-book' },
    { id: 'links' as const, label: 'Materiais de Apoio', icon: 'fa-link' },
  ];

  const handleTextSubmit = async () => {
    if (!inputText.trim()) return;
    
    setIsLoading(true);
    setResults({ aula: '', links: '', exercicios: '' }); // Limpa resultados anteriores
    
    try {
      const response = await processTheme(inputText);
      setResults(response);
      setShowOtherQuestion(true);
    } catch (error) {
      console.error('Erro:', error);
      alert('Ocorreu um erro ao processar sua solicitação.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleNewQuestion = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-[#000000] text-white p-6">
      <Header showBackButton isLoading={isLoading} />
      
      <main className="max-w-4xl mx-auto space-y-8">
        {/* Seção de Input */}
        <section className="bg-[#080c0e] rounded-lg p-6 space-y-6">
          <InputButton
            value={inputText}
            onChange={setInputText}
            onSubmit={handleTextSubmit}
            placeholder="Digite o tema que deseja estudar..."
            disabled={isLoading || showOtherQuestion}
          />

          {showOtherQuestion && (
            <div className="flex justify-center">
              <ActionButton
                icon={faRedo}
                onClick={handleNewQuestion}
                disabled={isLoading}
              >
                Outro Tema
              </ActionButton>
            </div>
          )}
        </section>

        {/* Seção de Resultados */}
        {(isLoading || results.aula || results.links || results.exercicios) && (
          <section className="bg-[#080c0e] rounded-lg p-6">
            {isLoading ? (
              <div className="space-y-6">
                <LoadingSpinner />
                <SkeletonNavTab />
              </div>
            ) : (
             
                <NavTab tabs={tabs} contents={results} />
               
            )}
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
} 