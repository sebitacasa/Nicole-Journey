// components/TravelCard.tsx
import Link from 'next/link';

interface TravelCardProps {
  title: string;
  location: string;
  image: string;
  slug: string;
  guestbookCount?: number;
}

const TravelCard = ({ title, location, image, slug, guestbookCount = 0 }: TravelCardProps) => {
  return (
    <Link href={`/journeys/${slug}`} className="group block h-full">
      <div className="modern-card bg-white p-3 md:p-4 flex flex-col h-full overflow-hidden">
        
        {/* Contenedor de la Imagen con bordes redondeados (rounded-xl) */}
        <div className="relative aspect-[4/5] overflow-hidden bg-petrol-dark mb-5 rounded-xl">
          
          {/* ETIQUETA ACTUALIZADA: Fondo petrol claro translúcido, texto petrol oscuro, y fuente ligeramente menos agresiva (font-bold en vez de black) */}
          <div className="absolute top-0 left-0 z-10 bg-petrol-light/95 backdrop-blur-sm text-petrol-dark border-b border-r border-petrol-dark/10 rounded-br-lg px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest">
            {location}
          </div>

          <img 
            src={image} 
            alt={title}
            className="absolute inset-0 w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
          />
        </div>

        <div className="flex flex-col flex-grow px-2 pb-2">
          <h3 className="text-2xl md:text-3xl font-serif font-black text-petrol-dark leading-none tracking-tight mb-6">
            {title}
          </h3>
          
          {/* Footer de la tarjeta separado por una línea fina */}
          <div className="mt-auto pt-4 border-t border-petrol-dark/10 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-petrol-dark">
            <span className="group-hover:text-petrol-dark transition-colors flex items-center gap-2">
              Read Diary <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
            <span className="opacity-60">
              {guestbookCount > 0 ? `${guestbookCount} Stories` : 'Index'}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TravelCard;