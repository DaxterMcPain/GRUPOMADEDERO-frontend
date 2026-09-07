import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#2A180B] text-amber-100/80 pt-12 pb-8 border-t border-amber-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        
        {/* Columna 1: Marca y Descripción */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-amber-100 text-[#3D2514] rounded-xl flex items-center justify-center text-lg font-black">
              🌲
            </div>
            <span className="text-lg font-black text-amber-50 tracking-wide">
              GRUPO MADERERO
            </span>
          </div>
          <p className="text-xs text-amber-100/70 leading-relaxed">
            Consorcio integrado por Maderera Buenos Amigos S.A.C. y Productos y Derivados Forestales S.A.C. (PROYDEFOR). Transformación y comercialización de maderas y embalajes para la industria nacional.
          </p>
        </div>

        {/* Columna 2: Navegación */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-amber-200">
            Navegación
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <Link to="/" className="hover:text-white transition">Inicio</Link>
            </li>
            <li>
              <Link to="/productos" className="hover:text-white transition">Catálogo de Productos</Link>
            </li>
            <li>
              <Link to="/servicios" className="hover:text-white transition">Servicios Industriales</Link>
            </li>
            <li>
              <Link to="/contacto" className="hover:text-white transition">Contacto y Planta</Link>
            </li>
          </ul>
        </div>

        {/* Columna 3: Contacto Oficial */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-amber-200">
            GRUPO MADERERO
          </h4>
          <ul className="space-y-2 text-xs text-amber-100/70">
            <li>📍 Jr. Buenos Amigos N° 294, Ate, Lima - Perú</li>
            <li>📞 Central Ventas: 946 143 102 / 998 312 710 / 955 343 945</li>
            <li>✉️ Ventas1@maderera-mba.com</li>
            <li>📜 RUC: 20258126034</li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 border-t border-amber-900/40 text-center text-[11px] text-amber-100/50">
        © {new Date().getFullYear()} Grupo Maderero (Maderera Buenos Amigos S.A.C. & PROYDEFOR S.A.C.). Todos los derechos reservados.
      </div>
    </footer>
  );
}