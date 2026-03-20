// app/page.tsx
import CategoryCard from '@/components/CategoryCard';
import TravelCard from '@/components/TravelCard';
import WorkCard from '@/components/WorkCard';
import StudyCard from '@/components/StudyCard';
import { client } from '@/sanity/client';
import imagen from '../assets/foundry-library-869061_1920.jpg';

export const dynamic = 'force-dynamic';

const CATEGORIES = [
  {
    title: "Life Experiences",
    description: "Personal journals from my travels around the world, from Peru to the Greek Islands.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
    targetId: "journeys"
  },
  {
    title: "Professional Path",
    description: "My career journey in logistics, production, and international operations.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop",
    targetId: "work"
  },
  {
    title: "Education & Training",
    description: "Academic background and technical certifications in development and management.",
    image: imagen.src,
    targetId: "studies"
  }
];

export default async function Home() {
  
  // --- CONSULTAS A SANITY ---
  
  // 1. Obtenemos la configuración global (Hero) - Tomamos el primer documento de 'settings'
  const siteSettings = await client.fetch(`*[_type == "settings"][0]`);

  // (Consultas existentes)
  const realJourneys = await client.fetch(`*[_type == "journey"]{
    _id,
    title,
    location,
    "slug": slug.current,
    "image": mainImage.asset->url
  }`);

  const realWork = await client.fetch(`*[_type == "work"] | order(_createdAt desc) {
    _id,
    role,
    company,
    location,
    "duration": period,
    "description": descriptionPoints
  }`);

  const realStudies = await client.fetch(`*[_type == "study"] | order(_createdAt desc) {
    _id,
    degree,
    institution,
    "year": date,
    "details": description,
    skills
  }`);

  // Fallbacks seguros por si aún no has publicado el documento en Sanity
  const heroTitle = siteSettings?.heroTitle || "Nicole's Journey";
  const heroSubtitle = siteSettings?.heroSubtitle || "Curated Portfolio & Journal";
  const heroDescription = siteSettings?.heroDescription || "A detailed record spanning international travel logs, strategic professional growth, and continuous academic learning.";

  // Para poder estilizar la última palabra del título, lo dividimos:
  const titleWords = heroTitle.split(' ');
  const lastWord = titleWords.pop();
  const restOfTitle = titleWords.join(' ');

  return (
    <main className="min-h-screen bg-cream text-petrol-dark font-sans">
      
      {/* HERO SECTION - Ahora Centrado */}
      <section className="relative pt-32 pb-40 bg-petrol-dark text-cream border-b-4 border-petrol-dark flex items-center justify-center text-center">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
          
          <span className="inline-block border border-cream/30 px-4 py-1.5 text-[10px] uppercase tracking-widest font-bold mb-10 text-petrol-light bg-white/5 backdrop-blur-sm rounded-full">
            {heroSubtitle}
          </span>
          
          <h1 className="text-5xl md:text-8xl font-serif font-black leading-[1.05] tracking-tighter mb-10">
            {restOfTitle} <span className="italic text-cream opacity-80">{lastWord}</span>
          </h1>
          
          <p className="text-lg md:text-xl font-medium leading-relaxed opacity-80 max-w-2xl text-petrol-light">
            {heroDescription}
          </p>

        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pb-32 space-y-32">
        
        {/* MENÚ DE CATEGORÍAS */}
        <section className="-mt-16 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {CATEGORIES.map((cat) => (
              <CategoryCard key={cat.targetId} {...cat} />
            ))}
          </div>
        </section>

        {/* 1. SECCIÓN DE VIAJES */}
        <section id="journeys" className="scroll-mt-24 pt-10">
          <div className="mb-12 border-b border-petrol-dark/20 pb-6 flex flex-col md:flex-row md:items-baseline justify-between gap-4">
            <h2 className="text-3xl md:text-5xl font-serif font-black text-petrol-dark tracking-tight">
              Detailed Journeys
            </h2>
            <span className="text-xs font-bold uppercase tracking-widest text-petrol-dark opacity-70">
              01 — Life Experiences
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {realJourneys.length > 0 ? (
              realJourneys.map((journey: any) => (
                <TravelCard key={journey._id} {...journey} />
              ))
            ) : (
              <p className="text-petrol font-bold">No journeys published yet.</p>
            )}
          </div>
        </section>

        {/* 2. SECCIÓN DE TRABAJO */}
        <section id="work" className="scroll-mt-24 pt-10">
          <div className="mb-12 border-b border-petrol-dark/20 pb-6 flex flex-col md:flex-row md:items-baseline justify-between gap-4">
            <h2 className="text-3xl md:text-5xl font-serif font-black text-petrol-dark tracking-tight">
              Professional Path
            </h2>
            <span className="text-xs font-bold uppercase tracking-widest text-petrol-dark opacity-70">
              02 — Work Experience
            </span>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {realWork.length > 0 ? (
              realWork.map((job: any) => (
                <WorkCard key={job._id} {...job} />
              ))
            ) : (
              <p className="text-petrol font-bold">No work experience published yet.</p>
            )}
          </div>
        </section>

        {/* 3. SECCIÓN DE ESTUDIOS */}
        <section id="studies" className="scroll-mt-24 pt-10">
          <div className="mb-12 border-b border-petrol-dark/20 pb-6 flex flex-col md:flex-row md:items-baseline justify-between gap-4">
            <h2 className="text-3xl md:text-5xl font-serif font-black text-petrol-dark tracking-tight">
              Education & Training
            </h2>
            <span className="text-xs font-bold uppercase tracking-widest text-petrol-dark opacity-70">
              03 — Academic Background
            </span>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {realStudies.length > 0 ? (
              realStudies.map((study: any) => (
                <StudyCard key={study._id} {...study} />
              ))
            ) : (
              <p className="text-petrol font-bold">No education records published yet.</p>
            )}
          </div>
        </section>

      </div>
    </main>
  );
}