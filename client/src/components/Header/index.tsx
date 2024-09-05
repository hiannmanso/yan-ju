import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="bg-customBrown text-cream py-4 shadow-md opacity-80" style={{ fontFamily: '"Dancing Script", cursive', fontWeight: 600 }}>
      <div className="container mx-auto flex justify-around items-center">
      <Link to="/confirmar-presenca" className="text-lg md:text-xl lg:text-2xl hover:text-white transition-colors duration-300">Confirmar Presença</Link>
        <Link to="/lista-de-presentes" className="text-lg md:text-xl lg:text-2xl hover:text-white transition-colors duration-300">Lista de Presentes</Link>
        <Link to="/informacoes" className="text-lg md:text-xl lg:text-2xl hover:text-white transition-colors duration-300">Informações</Link>
        {/* <Link to="/fotos" className="text-lg md:text-xl lg:text-2xl hover:text-white transition-colors duration-300">Fotos</Link> */}
   
      </div>
    </header>
  );
}
