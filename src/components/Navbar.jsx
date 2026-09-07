import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { path: '/', label: 'Inicio' },
    { path: '/productos', label: 'Productos' },
    { path: '/servicios', label: 'Servicios' },
    { path: '/contacto', label: 'Contacto' },
  ];

  const handleWhatsApp = () => {
    const phone = "51946143102";
    const msg = "Hola Grupo Maderero, deseo cotizar productos/servicios.";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <nav className="bg-white border-b border-stone-200 sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo Corporativo Unificado */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[#3D2514] text-amber-100 rounded-xl flex items-center justify-center text-xl font-black shadow-md group-hover:bg-amber-900 transition">
              🌲
            </div>
            <div>
              <span className="text-lg font-black text-[#3D2514] tracking-tight block leading-none">
                GRUPO MADERERO
              </span>
              <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block mt-0.5">
                Buenos Amigos & PROYDEFOR
              </span>
            </div>
          </Link>

          {/* Menú de Navegación Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs font-bold transition-colors ${
                  location.pathname === link.path
                    ? 'text-[#3D2514] border-b-2 border-[#3D2514] pb-1'
                    : 'text-stone-600 hover:text-[#3D2514]'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <button
              onClick={handleWhatsApp}
              className="bg-[#25D366] hover:bg-emerald-600 text-white font-bold text-xs py-2.5 px-4 rounded-xl transition shadow flex items-center gap-2"
            >
              <span>💬 Cotizar por WhatsApp</span>
            </button>
          </div>

          {/* Botón Menú Móvil */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-stone-700 hover:text-[#3D2514] p-2 rounded-lg text-xl"
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Móvil Desplegable */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-stone-100 px-4 pt-2 pb-6 space-y-3">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`block px-3 py-2 rounded-lg text-xs font-bold ${
                location.pathname === link.path
                  ? 'bg-amber-50 text-[#3D2514]'
                  : 'text-stone-600 hover:bg-stone-50'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => {
              setMenuOpen(false);
              handleWhatsApp();
            }}
            className="w-full bg-[#25D366] text-white font-bold text-xs py-3 rounded-xl transition shadow flex items-center justify-center gap-2 mt-2"
          >
            <span>💬 Cotizar por WhatsApp</span>
          </button>
        </div>
      )}
    </nav>
  );
}