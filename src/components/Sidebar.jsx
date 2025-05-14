import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const modules = [
  { name: 'Módulo 1 - Introdução', path: '/modulo1' },
  { name: 'Módulo 2 - Database', path: '/modulo2'}
];

export default function Sidebar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside
      className={`transition-all duration-300 ease-in-out bg-white shadow-lg p-4 ${
        isOpen ? 'w-64' : 'w-16'
      }`}
    >
   

      <button
      className="mb-4 focus:outline-none cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
      >{isOpen ? '×' : '☰'}</button>

      {isOpen && (
        <>
          <h2 className="text-xl font-bold mb-4">Curso</h2>
          <nav className="space-y-2">
            {modules.map((mod) => (
              <Link
                key={mod.path}
                to={mod.path}
                className={`block px-4 py-2 rounded hover:bg-gray-200 ${
                  location.pathname === mod.path ? 'bg-gray-300 font-semibold' : ''
                }`}
              >
                {mod.name}
              </Link>
            ))}
          </nav>
        </>
      )}
    </aside>
  );
}
