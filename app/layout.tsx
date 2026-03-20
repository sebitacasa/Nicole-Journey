// app/layout.tsx
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Footer from '@/components/Footer';

// 1. Configuramos las fuentes para que inyecten variables CSS
const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: 'swap',
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

// (Opcional) Metadatos básicos para SEO y la pestaña del navegador
export const metadata = {
  title: "Nicole's Journey",
  description: "A curated digital archive and portfolio.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // 2. scroll-smooth permite que el botón "Back to Top" del Footer suba con elegancia
    <html lang="es" className="scroll-smooth">
      <body 
        // 3. id="top" es el ancla para el botón del Footer
        id="top" 
        // 4. Inyectamos las variables, fijamos Inter como predeterminada y aplicamos la paleta Petrol global
        className={`${playfair.variable} ${inter.variable} font-sans bg-cream text-petrol-dark antialiased`}
      >
        
        {/* Aquí se renderiza el contenido de page.tsx o de los viajes */}
        {children}

        {/* 5. El Footer global que creamos, aparece al final de todas las páginas */}
        <Footer />
        
      </body>
    </html>
  );
}