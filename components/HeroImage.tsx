// components/HeroImage.tsx
'use client'; // <-- Client Component para manejar el error

import React from 'react';

interface HeroImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function HeroImage({ src, alt, className }: HeroImageProps) {
  const handleHeroError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = 'https://placehold.co/2100x900/FDFCFB/c6cacf?text=Hero+Image+Fails';
    target.className = 'w-full h-full object-cover grayscale-0';
  };

  return (
    <img 
      src={src} 
      alt={alt} 
      className={className} 
      onError={handleHeroError} // <-- Gestionamos el error aquí
    />
  );
}