// components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Título */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-slate-800 tracking-tight">
              Nicole's <span className="text-blue-600">Journeys</span>
            </Link>
          </div>

          {/* Enlaces de Navegación con Anclajes (#) */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8 text-sm font-medium text-slate-600">
              <Link href="#journeys" className="hover:text-blue-600 transition-colors">Journeys</Link>
              <Link href="#work" className="hover:text-blue-600 transition-colors">Work</Link>
              <Link href="#studies" className="hover:text-blue-600 transition-colors">Studies</Link>
            </div>
          </div>

          {/* Avatar Actualizado */}
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-slate-200 overflow-hidden border border-slate-300">
              <img 
                src="https://ui-avatars.com/api/?name=Nicole+Pirker&background=0066FF&color=fff" 
                alt="Profile" 
                className="object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;