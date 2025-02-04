import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import "./globals.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faArrowLeft,
  faCamera,
  faUpload,
  faPaste,
  faRedo,
  faPaperPlane,
  faChalkboardTeacher,
  faLink,
  faBook
} from '@fortawesome/free-solid-svg-icons';
import Analytics from '@/components/Analytics';

library.add(
  faArrowLeft,
  faCamera,
  faUpload,
  faPaste,
  faRedo,
  faPaperPlane,
  faChalkboardTeacher,
  faLink,
  faBook
);
// Previne o Font Awesome de adicionar seu CSS automaticamente
config.autoAddCss = false;

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: "CogniQuest - Seu Assistente de Estudos com IA",
  description: "Assistente de estudos inteligente que usa IA para ajudar você a estudar, resolver questões, exercícios e problemas. Perfeito para ENEM, vestibulares e concursos.",
  keywords: [
    "assistente de estudos",
    "inteligência artificial",
    "IA para estudos",
    "resolver questões",
    "ENEM",
    "vestibular",
    "concursos",
    "exercícios resolvidos",
    "ajuda para estudar",
    "simulados",
    "questões comentadas",
    "explicação passo a passo",
    "tutor virtual",
    "educação com IA",
    "AI estudos",
    "material de estudo",
    "preparação ENEM",
    "resolver problemas",
    "estudar online",
    "professor virtual"
  ],
  authors: [{ name: "Vanessa Souto" }],
  creator: "Vanessa Souto",
  publisher: "CogniQuest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://cogniquest.vercel.app',
    title: 'CogniQuest - Seu Assistente de Estudos com IA',
    description: 'Assistente de estudos inteligente que usa IA para ajudar você a estudar, resolver questões, exercícios e problemas. Perfeito para ENEM, vestibulares e concursos.',
    siteName: 'CogniQuest',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'CogniQuest - Assistente de Estudos com IA'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CogniQuest - Seu Assistente de Estudos com IA',
    description: 'Assistente de estudos inteligente que usa IA para ajudar você a estudar, resolver questões, exercícios e problemas.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://cogniquest.vercel.app',
  },
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      }
    ]
  },
  manifest: '/manifest.json',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={quicksand.variable}>
      <head>
       <meta 
          name="google-site-verification" 
          content="qX3f6bfpsPruqhF2qtyOBlKr9qAFUb21t9uTxRf_nvE" 
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body className="font-sans antialiased">
        <Analytics />
        {children}
      </body>
    </html>
  );
}
