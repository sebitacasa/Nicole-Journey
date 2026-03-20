// components/SafeImage.tsx
'use client';

import React from 'react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  type?: 'hero' | 'moment';
}

export default function SafeImage({ src, alt, className, type = 'moment' }: SafeImageProps) {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    const aspect = type === 'hero' ? '2100x900' : '800x600';
    const text = type === 'hero' ? 'Hero+Image+Fails' : 'Moment+Photo+Fails';
    
    target.src = `https://placehold.co/${aspect}/FDFCFB/c6cacf?text=${text}`;
    // Quitamos filtros si falla para que el placeholder se vea bien
    target.className = className?.replace('grayscale-[10%]', 'grayscale-0') || '';
  };

  return (
    <img 
      src={src} 
      alt={alt} 
      className={className} 
      onError={handleImageError} 
    />
  );
}