// components/CategoryCard.tsx
import Link from 'next/link';

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  targetId: string;
}

const CategoryCard = ({ title, description, image, targetId }: CategoryCardProps) => {
  return (
    <Link href={`#${targetId}`} className="group block h-full">
      {/* Usamos nuestra clase 'modern-card' global */}
      <div className="modern-card bg-white flex flex-col h-full overflow-hidden">
        
        {/* Imagen con bordes superiores redondeados (rounded-t-2xl) */}
        <div className="relative h-56 md:h-64 overflow-hidden rounded-t-2xl">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
          />
        </div>

        {/* Contenido de la Tarjeta */}
        <div className="p-6 md:p-8 flex flex-col flex-grow bg-white">
          <h3 className="text-2xl md:text-3xl font-black font-serif text-petrol-dark mb-4 leading-none tracking-tight">
            {title}
          </h3>
          <p className="text-petrol-dark font-medium text-sm leading-relaxed mb-8 flex-grow opacity-80">
            {description}
          </p>

          {/* Enlace minimalista con efecto hover */}
          <div className="mt-auto self-start border-b border-transparent group-hover:border-petrol-dark transition-colors duration-300 pb-1">
            <div className="text-petrol-dark font-black text-xs uppercase tracking-widest flex items-center gap-2">
              Explore Section
              <span className="transform group-hover:translate-x-2 transition-transform duration-300">
                →
              </span>
            </div>
          </div>
        </div>
        
      </div>
    </Link>
  );
};

export default CategoryCard;