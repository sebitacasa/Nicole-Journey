// components/Footer.tsx
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-petrol-dark/10 bg-cream text-petrol-dark">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Izquierda: Copyright y Nombre */}
        <div className="text-[10px] font-bold uppercase tracking-widest opacity-80">
          © {currentYear} Nicole Pirker. All rights reserved.
        </div>

        {/* Derecha: Ubicación y Acción */}
        <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest">
          <span className="opacity-60">Based in Austria</span>
          
          {/* Botón sutil de Volver arriba */}
          <a 
            href="#top" 
            className="hover:text-petrol transition-colors flex items-center gap-2 border-l border-petrol-dark/10 pl-6"
          >
            Back to Top <span className="text-lg leading-none">↑</span>
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;