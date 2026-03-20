// components/WorkCard.tsx
interface WorkCardProps {
  role: string;
  company: string;
  location?: string;
  duration: string;
  description: string[];
}

const WorkCard = ({ role, company, location, duration, description }: WorkCardProps) => {
  return (
    <div className="modern-card bg-white p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start md:items-center overflow-hidden">
      {/* Columna Izquierda: Puesto y Empresa */}
      <div className="md:w-1/3 flex flex-col">
        <span className="text-[10px] font-black uppercase tracking-widest text-petrol-dark opacity-60 mb-2">
          {duration}
        </span>
        <h3 className="text-xl md:text-2xl font-serif font-black text-petrol-dark leading-tight">
          {role}
        </h3>
        <p className="text-sm font-bold text-petrol-dark mt-1 uppercase tracking-wider">
          {company} {location && `— ${location}`}
        </p>
      </div>
      
      {/* Columna Derecha: Descripción separada por una línea fina */}
      <div className="md:w-2/3 md:border-l md:border-petrol-dark/10 md:pl-6">
        <ul className="space-y-2">
          {description?.map((item, i) => (
            <li key={i} className="text-sm text-petrol-dark opacity-80 flex gap-3">
              <span className="text-yellow-brutal font-black">▹</span> {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkCard;