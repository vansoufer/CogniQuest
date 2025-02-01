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
  title: "CogniQuest",
  description: "Seu assistente de estudos inteligente",
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={quicksand.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
