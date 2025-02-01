'use client';

import { useEffect, useState } from 'react';
import { faCamera, faUpload, faPaste, faRedo } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header';
import InputButton from '../components/InputButton';
import ActionButton from '../components/ActionButton';
import NavTab from '../components/NavTab';
import { processText, processImage } from '@/lib/gemini';
import type { SearchResult } from '@/types';
import LoadingSpinner from '../components/LoadingSpinner';
import SkeletonNavTab from '../components/SkeletonNavTab';

export default function SearchByQuestion() {
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showOtherQuestion, setShowOtherQuestion] = useState(false);
  const [results, setResults] = useState<SearchResult>({ aula: '', links: '' });
  const [hasCamera, setHasCamera] = useState(false);

  const tabs = [
    { id: 'aula' as const, label: 'Aula Completa', icon: 'fa-chalkboard-teacher' },
    { id: 'links' as const, label: 'Links e Referências', icon: 'fa-link' },
  ];

  useEffect(() => {
    // Check for camera availability AFTER mounting (on the client)
    setHasCamera('mediaDevices' in navigator);
  }, []);

  const handleTextSubmit = async () => {
    if (!inputText.trim()) return;
    
    setIsLoading(true);
    setResults({ aula: '', links: '' }); // Limpa resultados anteriores
    
    try {
      const response = await processText(inputText);
      setResults({
        aula: response.aula,
        links: response.links
      });
      setShowOtherQuestion(true);
    } catch (error) {
      console.error('Erro:', error);
      alert('Ocorreu um erro ao processar sua solicitação.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageUpload = async (file: File) => {
    setIsLoading(true);
    setResults({ aula: '', links: '' }); // Limpa resultados anteriores
    
    try {
      const reader = new FileReader();
      reader.onloadend = async () => {
        try {
          const base64Data = (reader.result as string).split(',')[1];
          const response = await processImage(base64Data);
          setResults({
            aula: response.aula,
            links: response.links
          });
          setShowOtherQuestion(true);
        } catch (error) {
          console.error('Erro:', error);
          alert('Ocorreu um erro ao processar sua imagem.');
        } finally {
          setIsLoading(false);
        }
      };
      reader.readAsDataURL(file);
    } catch (error) {
      console.error('Erro:', error);
      alert('Ocorreu um erro ao processar sua imagem.');
      setIsLoading(false);
    }
  };

  const handleClipboardPaste = async () => {
    try {
      const items = await navigator.clipboard.read();
      for (const item of items) {
        const imageType = item.types.find(type => type.startsWith('image/'));
        if (imageType) {
          const blob = await item.getType(imageType);
          const file = new File([blob], 'clipboard-image.png', { type: imageType });
          await handleImageUpload(file);
          break;
        }
      }
    } catch (error) {
      console.error('Erro ao acessar clipboard:', error);
      alert('Não foi possível acessar a área de transferência.');
    }
  };

  const handleNewQuestion = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-[#000000] text-white p-6">
      <Header showBackButton />
      
      <main className="max-w-4xl mx-auto space-y-8">
        {/* Seção de Input */}
        <section className="bg-[#080c0e] rounded-lg p-6 space-y-6">
          <InputButton
            value={inputText}
            onChange={setInputText}
            onSubmit={handleTextSubmit}
            placeholder="Digite sua questão aqui..."
            disabled={isLoading || showOtherQuestion}
          />

          <div className="text-center text-gray-400">ou</div>

          <div className="flex flex-wrap gap-4 justify-center">
            
            <ActionButton
              icon={faUpload}
              onClick={() => document.getElementById('fileInput')?.click()}
              disabled={isLoading || showOtherQuestion}
            >
              Enviar foto
            </ActionButton>
            
            <ActionButton
              icon={faPaste}
              onClick={handleClipboardPaste}
              disabled={isLoading || showOtherQuestion}
            >
              Enviar print
            </ActionButton>

            {showOtherQuestion && (
              <ActionButton
                icon={faRedo}
                onClick={handleNewQuestion}
                disabled={isLoading}
              >
                Outra Questão
              </ActionButton>
            )}
          </div>

          <input
            type="file"
            id="fileInput"
            className="hidden"
            accept="image/*"
            disabled={isLoading || showOtherQuestion}
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleImageUpload(file);
            }}
          />
        </section>

        {/* Seção de Resultados */}
        {(isLoading || results.aula || results.links) && (
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
    </div>
  );
} 