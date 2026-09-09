import React, { useState, useEffect } from 'react';
import { obtenerProductos } from '../services/api';

export default function Productos() {
  const [catalogo, setCatalogo] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [filtroActivo, setFiltroActivo] = useState('todos');
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  useEffect(() => {
    obtenerProductos()
      .then((res) => {
        // Guarda en el estado la lista de productos enviada por el backend
        setCatalogo(res.data.data || []);
        setCargando(false);
      })
      .catch((err) => {
        console.error("Error al conectar con la API:", err);
        setCargando(false);
      });
  }, []);

  // Filtramos sobre el estado 'catalogo' (no sobre CATALOGO_AGRUPADO)
  const productosFiltrados = filtroActivo === 'todos'
    ? catalogo
    : catalogo.filter(p => p.categoria === filtroActivo);

  const botonesFiltro = [
    { id: 'todos', label: 'Todos' },
    { id: 'parihuelas', label: 'Parihuelas y Tarimas' },
    { id: 'cajas', label: 'Cajas y Embalajes' },
    { id: 'accesorios', label: 'Tacos y Complementos' },
    { id: 'estructuras', label: 'Estructuras y Modulares' },
    { id: 'insumos', label: 'Materia Prima' }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Título Principal */}
      <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
        <span className="text-xs bg-amber-100 text-[#3D2514] font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider border border-amber-200">
          Catálogo Unificado
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-[#3D2514]">
          Productos y Soluciones de Embalaje
        </h1>
        <p className="text-stone-600 text-sm leading-relaxed">
          Haz clic en cualquier categoría para desplegar la lista detallada de especificaciones y modelos disponibles.
        </p>
      </div>

      {/* Botones de Filtro Dinámicos */}
      <div className="flex flex-wrap justify-center gap-2.5 mb-12">
        {botonesFiltro.map((btn) => (
          <button
            key={btn.id}
            onClick={() => setFiltroActivo(btn.id)}
            className={`px-4 py-2 rounded-xl font-bold text-xs transition-all duration-200 ${
              filtroActivo === btn.id
                ? 'bg-[#3D2514] text-white shadow-md scale-105'
                : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-100'
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Mostrar estado de carga mientras responde el backend */}
      {cargando ? (
        <div className="text-center py-16">
          <p className="text-[#3D2514] font-bold text-base animate-pulse">
            Cargando catálogo desde el servidor...
          </p>
        </div>
      ) : (
        /* Grilla de Tarjetas */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productosFiltrados.map((prod) => (
            <article
              key={prod.id}
              onClick={() => setProductoSeleccionado(prod)}
              className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="relative overflow-hidden h-52 bg-stone-100">
                  <img
                    src={prod.imagen || "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=800&q=80"}
                    alt={prod.nombre}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-[#3D2514]/90 backdrop-blur-md text-amber-200 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-amber-500/20">
                    {prod.etiqueta || prod.categoria || 'Producto'}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-black text-[#3D2514] group-hover:text-amber-800 transition-colors mb-2">
                    {prod.nombre}
                  </h3>
                  <p className="text-stone-600 text-xs leading-relaxed">
                    {prod.resumen || prod.descripcion}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0 flex items-center text-xs font-bold text-[#3D2514] group-hover:text-amber-700">
                <span>Ver detalles y modelos</span>
                <svg className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Ventana Emergente (Modal) con Detalles del Producto */}
      {productoSeleccionado && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity"
          onClick={() => setProductoSeleccionado(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-stone-200 animate-in fade-in zoom-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-48 sm:h-56 bg-stone-100">
              <img 
                src={productoSeleccionado.imagen || "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=800&q=80"} 
                alt={productoSeleccionado.nombre} 
                className="w-full h-full object-cover"
              />
              <button 
                onClick={() => setProductoSeleccionado(null)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white w-9 h-9 rounded-full flex items-center justify-center transition"
              >
                ✕
              </button>
              <div className="absolute bottom-4 left-4">
                <span className="bg-[#3D2514] text-amber-200 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-amber-500/20">
                  {productoSeleccionado.etiqueta || productoSeleccionado.categoria || 'Producto'}
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <h3 className="text-2xl font-black text-[#3D2514]">
                {productoSeleccionado.nombre}
              </h3>
              
              <div className="space-y-2">
                <p className="text-xs font-bold uppercase text-amber-900 tracking-wider">
                  Especificaciones e Información:
                </p>
                <ul className="space-y-2">
                  {Array.isArray(productoSeleccionado.detalles) ? (
                    productoSeleccionado.detalles.map((item, idx) => (
                      <li key={idx} className="flex items-start text-xs text-stone-700 leading-relaxed">
                        <span className="text-amber-800 font-bold mr-2">✓</span>
                        <span>{item}</span>
                      </li>
                    ))
                  ) : (
                    <li className="flex items-start text-xs text-stone-700 leading-relaxed">
                      <span className="text-amber-800 font-bold mr-2">✓</span>
                      <span>{productoSeleccionado.descripcion}</span>
                    </li>
                  )}
                </ul>
              </div>

              <div className="pt-4 border-t border-stone-100 flex justify-end">
                <button
                  onClick={() => setProductoSeleccionado(null)}
                  className="bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs py-2.5 px-5 rounded-xl transition"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}