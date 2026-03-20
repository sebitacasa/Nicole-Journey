// app/journeys/[slug]/page.tsx
import Link from 'next/link';
import { notFound } from 'next/navigation';
import SafeImage from '@/components/SafeImage';
import { client } from '@/sanity/client';

export const dynamic = 'force-dynamic';

export default async function JourneyDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const query = `*[_type == "journey" && slug.current == $slug][0]{
    title,
    location,
    date,
    "mainImage": mainImage.asset->url,
    firstChar,
    restContent,
    "gallery": gallery[].asset->url
  }`;

  const journey = await client.fetch(query, { slug });

  if (!journey) notFound();

  const galleryImages = journey.gallery || [];

  const getDynamicGridClasses = (index: number) => {
    const patterns = [
      'col-span-2 md:col-span-2 aspect-[4/3]', 
      'col-span-1 md:col-span-1 aspect-[3/4]', 
      'col-span-1 md:col-span-1 aspect-square',
      'col-span-2 md:col-span-2 aspect-[16/9]',
    ];
    return patterns[index % patterns.length];
  };

  return (
    <article className="min-h-screen pb-32 bg-cream text-petrol-dark font-sans">
      
      {/* Navbar Minimalista (Fijo arriba) - Ahora con borde sutil */}
      <nav className="fixed top-0 w-full bg-cream/90 backdrop-blur-md z-50 border-b border-petrol-dark/10">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/#journeys" className="text-xs font-bold uppercase tracking-widest hover:text-petrol transition-colors">
            ← Home
          </Link>
          <span className="text-xs font-black uppercase tracking-widest">
            Nicole's Journeys
          </span>
        </div>
      </nav>

      <div className="pt-28 px-4 sm:px-6 max-w-6xl mx-auto">
        
        {/* SECCIÓN SUPERIOR: Hero */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
          
          {/* Bloque Izquierdo: Textos (Tarjeta Moderna) */}
          <div className="md:col-span-7 modern-card bg-white p-8 md:p-12 flex flex-col justify-start space-y-8">
            <div>
              {/* Etiqueta suave y moderna (reemplaza al amarillo brutalista) */}
              <span className="inline-block bg-petrol-light text-petrol-dark text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 border border-petrol-dark/10 rounded-md mb-6">
                {journey.location} • {journey.date}
              </span>
              
              <h1 className="text-4xl md:text-6xl font-serif font-black leading-[1.1] tracking-tight mb-8">
                {journey.title}
              </h1>
            </div>

            <div className="font-serif italic text-xl md:text-2xl text-petrol-dark leading-relaxed antialiased">
              <span className="drop-cap">
                {journey.firstChar}
              </span>
              <p className="whitespace-pre-wrap">
                {journey.restContent}
              </p>
            </div>
          </div>

          {/* Bloque Derecho: Imagen Principal (Tarjeta Moderna) */}
          <div className="md:col-span-5 modern-card bg-white p-3 md:p-4 relative flex flex-col">
            <div className="flex-1 w-full relative min-h-[400px] rounded-xl overflow-hidden bg-petrol-light">
              <SafeImage 
                src={journey.mainImage} 
                alt={journey.title}
                type="hero"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="mt-4 pt-4 border-t border-petrol-dark/10">
              <p className="text-xs font-bold uppercase tracking-widest text-right opacity-60">Hero Shot</p>
            </div>
          </div>
        </section>

        {/* SECCIÓN INFERIOR: Mosaico de Galería Compacto */}
        {galleryImages.length > 0 && (
          <section className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-10">
            {galleryImages.map((src: string, index: number) => (
              <div 
                key={index} 
                className={`modern-card bg-white p-2 md:p-3 relative flex flex-col ${getDynamicGridClasses(index)}`}
              >
                {/* Etiqueta de numeración estilo "cristal" sutil */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-petrol-dark text-[9px] font-bold px-2 py-1 rounded shadow-sm border border-petrol-dark/10 z-10">
                  FIG. 0{index + 1}
                </div>
                {/* Imagen con bordes redondeados internos */}
                <div className="relative w-full h-full overflow-hidden rounded-lg bg-petrol-light">
                  <SafeImage 
                    src={src} 
                    alt={`Gallery ${index + 1}`} 
                    className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out" 
                  />
                </div>
              </div>
            ))}
          </section>
        )}

        {/* Footer / Navegación */}
        <div className="mt-20 pt-10 border-t border-petrol-dark/20 flex justify-between items-center font-bold uppercase tracking-widest text-xs">
          {/* <span>Escrito en Austria</span> */}
          <Link href="/#journeys" className="hover:text-petrol transition-colors flex items-center gap-2">
            Close Diary <span className="text-lg leading-none">×</span>
          </Link>
        </div>

      </div>
    </article>
  );
}