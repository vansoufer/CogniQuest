'use client';

import { useState } from 'react';
import { marked } from 'marked';

interface Tab {
  id: 'aula' | 'links' | 'exercicios';  // Restringindo os IDs possíveis
  label: string;
  icon: string;
}

interface NavTabProps {
  tabs: Tab[];
  contents: {
    aula: string;
    links: string;
    exercicios?: string;
  };
}

export default function NavTab({ tabs, contents }: NavTabProps) {
  const [activeTab, setActiveTab] = useState<Tab['id']>(tabs[0].id);


  return (
    <div className="w-full">
      <div className="flex gap-4 border-b border-gray-700 mb-4">
      {tabs.map((tab) => (
      <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-white flex items-center gap-2
              ${activeTab === tab.id ? 'border-b-2 border-[#5f0dff]' : ''}`}
          >
            <i className={`fas ${tab.icon}`}/>
            {tab.label}
          </button>
      ))}
      </div>

      

      <div className="prose prose-invert max-w-none">
      {contents[activeTab] && (
          <div dangerouslySetInnerHTML={{ 
            __html: marked(contents[activeTab], { breaks: true }) 
          }} />
        )}
      </div>
    </div>
  );
}
