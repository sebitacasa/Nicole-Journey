// components/JourneyCarousel.tsx
'use client'; // <-- ESTO ES VITAL. Le dice a Next.js que este componente tiene interactividad.

import React, { useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

interface CarouselProps {
  images: string[];
}

export default function JourneyCarousel({ images }: CarouselProps) {
  // Inicializamos el carrusel (Interactividad)
  const [emblaRef] = useEmblaCarousel({ align: 'start', loop: true });
  
  // Estado para el modal/lightbox (Interactividad)
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  // Función de blindaje para imágenes (Fallback defensivo)
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = 'https://placehold.co/800x600/FDFCFB/c6cacf?text=Moment+Photo+Fails';
    target.className = 'w-full h-full object-cover grayscale-0';
  };

  if (!images || images.length === 0) {
    return <p className="text-center text-slate-400 italic">No moments captured yet.</p>;
  }

  return (
    <div className="relative group mt-16 pt-16 border-t border-slate-100">
      

      {/* EL CARRUSEL */}
      <div className="overflow-hidden cursor-grab active:cursor-grabbing rounded-[2rem] bg-slate-50 p-4" ref={emblaRef}>
        <div className="flex gap-4">
          {images.map((src, index) => (
            <div key={index} className="flex-[0_0_80%] md:flex-[0_0_40%] min-w-0">
              <div 
                className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all"
                onClick={() => setSelectedImg(src)}
              >
                <img 
                  src={src} 
                  alt={`Moment ${index}`} 
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-500 cursor-zoom-in"
                  // Blindaje interno de la imagen
                  onError={handleImageError}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* INDICADOR DE NAVEGACIÓN (Sutil) */}
      <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-6 text-right">
        ← Desliza — Click para ampliar →
      </p>

      {/* MODAL / LIGHTBOX (Se activa al hacer click) */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 transition-all cursor-zoom-out"
          onClick={() => setSelectedImg(null)}
        >
          <button className="absolute top-10 right-10 text-white text-3xl font-light">×</button>
          <img 
            src={selectedImg} 
            className="max-w-full max-h-full rounded-lg shadow-2xl animate-in zoom-in-95 duration-300" 
            alt="Enlarged" 
          />
        </div>
      )}
    </div>
  );
}