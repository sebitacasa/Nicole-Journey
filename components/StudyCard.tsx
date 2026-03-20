// components/StudyCard.tsx
interface StudyCardProps {
  degree: string;
  institution: string;
  year: string;
  details: string;
  skills?: string[];
}

const StudyCard = ({ degree, institution, year, details, skills }: StudyCardProps) => {
  return (
    <div className="modern-card bg-white p-6 md:p-8 flex flex-col h-full overflow-hidden">
      {/* Cabecera estructurada */}
      <div className="flex justify-between items-start mb-6 border-b border-petrol-dark/10 pb-4">
        <div>
          <h3 className="text-xl md:text-2xl font-serif font-black text-petrol-dark leading-tight mb-1">
            {degree}
          </h3>
          <p className="text-xs font-bold uppercase tracking-widest text-petrol-dark opacity-70">
            {institution}
          </p>
        </div>
        {/* Etiqueta de año redondeada (rounded) */}
        <span className="bg-petrol-light border border-petrol-dark/20 text-petrol-dark text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded">
          {year}
        </span>
      </div>
      
      {/* Descripción */}
      <p className="text-sm text-petrol-dark opacity-80 leading-relaxed mb-6 flex-grow">
        {details}
      </p>
      
      {/* Tags de Habilidades (Opcional, muy útil para el CV) */}
      {skills && skills.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-auto">
          {skills.map((skill, i) => (
            <span key={i} className="text-[10px] font-bold uppercase tracking-widest text-petrol-dark bg-yellow-brutal/10 px-2 py-1 border border-petrol-dark/20 rounded">
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default StudyCard;