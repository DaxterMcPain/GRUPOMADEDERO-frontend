import React, { useState } from 'react';

const CATALOGO_AGRUPADO = [
  // --- CATEGORÍA 1: PARIHUELAS Y TARIMAS ---
  {
    id: 'parihuelas-durmientes',
    categoria: 'parihuelas',
    nombre: 'Parihuelas con Durmientes',
    etiqueta: 'Parihuelas y Tarimas',
    resumen: 'Diseños estructurales fabricados a medida en madera oreada o tratada.',
    imagen: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80',
    detalles: [
      'Parihuelas con durmientes (según requerimiento específico).',
      'Parihuela con durmientes cerradas y tablas inferiores.',
      'Parihuelas de madera a medida (madera oreada / tratada).'
    ]
  },
  {
    id: 'tarimas-pesadas',
    categoria: 'parihuelas',
    nombre: 'Tarimas Industriales y Carga Pesada',
    etiqueta: 'Parihuelas y Tarimas',
    resumen: 'Soportes de alta resistencia diseñados para maquinaria y productos siderúrgicos.',
    imagen: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80',
    detalles: [
      'Tarimas con durmientes cerradas (para equipos pesados, maquinaria y rollos).',
      'Tarimas abiertas diseñadas para planchas de acero.',
      'Aptas para manipulación con montacargas de gran tonelaje.'
    ]
  },

  // --- CATEGORÍA 2: CAJAS Y EMBALAJES INDUSTRIALES ---
  {
    id: 'cajas-jaulas',
    categoria: 'cajas',
    nombre: 'Cajas Tipo Jaula y Cajas Abiertas',
    etiqueta: 'Cajas y Embalajes Industriales',
    resumen: 'Protección ventilada e ideal para componentes metálicos y estructurales.',
    imagen: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=600&q=80',
    detalles: [
      'Cajas tipo jaula (para equipos industriales, componentes metálicos, etc.).',
      'Cajas abiertas y estructurales.',
      'Cajas con base tipo palet y con tapa de rápida apertura.'
    ]
  },
  {
    id: 'cajas-exportacion',
    categoria: 'cajas',
    nombre: 'Cajas Cerradas y de Exportación',
    etiqueta: 'Cajas y Embalajes Industriales',
    resumen: 'Embalajes de alta seguridad con forrado interno y tratamiento fitosanitario.',
    imagen: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=600&q=80',
    detalles: [
      'Cajas cerradas con tratamiento térmico certificado para exportación (NIMF 15).',
      'Cajas con refuerzo metálico exterior.',
      'Cajas forradas con OSB y durmientes de madera.',
      'Cajas con forrado interno de triplay / forradas integralmente con triplay.'
    ]
  },

  // --- CATEGORÍA 3: ACCESORIOS, TACOS Y COMPLEMENTOS ---
  {
    id: 'tacos-complementos',
    categoria: 'accesorios',
    nombre: 'Tacos Especiales y Tapas Reforzadas',
    etiqueta: 'Accesorios y Complementos',
    resumen: 'Elementos mecánicos de fijación y separación para aseguramiento de carga.',
    imagen: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=600&q=80',
    detalles: [
      'Tacos pintados, tipo V, tipo faixa, con asa y con destajo.',
      'Tacos tipo torre y tacos cuadrados con destajo especial para zuncho.',
      'Tapas de madera reforzadas con pernos y asas de sujeción.'
    ]
  },
  {
    id: 'escoriadores-listones',
    categoria: 'accesorios',
    nombre: 'Escoriadores, Podios y Listones',
    etiqueta: 'Accesorios y Complementos',
    resumen: 'Complementos de madera habilitada para soporte en piso y líneas de ensamblaje.',
    imagen: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80',
    detalles: [
      'Escoriadores chico (2" x 4" x 26 cm) y grande (2" x 4" x 36 cm con agujero de 7/8").',
      'Listones para base (electrodomésticos y uso industrial general).',
      'Podios de madera empernados.'
    ]
  },

  // --- CATEGORÍA 4: ESTRUCTURAS ESPECÍFICAS Y MODULARES ---
  {
    id: 'estructuras-tubos',
    categoria: 'estructuras',
    nombre: 'Soportes y Estructuras Especiales',
    etiqueta: 'Estructuras y Modulares',
    resumen: 'Sistemas de empaque a medida para tuberías y protección temporal.',
    imagen: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80',
    detalles: [
      'Estructuras de madera a medida para tubos (acero, PVC, conduit, industria petrolera).',
      'Estructuras de madera forradas con triplay.',
      'Estructuras de madera armadas con pernos y tuercas.',
      'Tableros de madera como soportes temporales para protección de pisos.'
    ]
  },
  {
    id: 'casetas-bebederos',
    categoria: 'estructuras',
    nombre: 'Casetas, Bebederos y Estacas',
    etiqueta: 'Estructuras y Modulares',
    resumen: 'Módulos prefabricados de madera para obra, almacén y señalización.',
    imagen: 'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?auto=format&fit=crop&w=600&q=80',
    detalles: [
      'Casetas de madera en distintos formatos (vigilancia, ventanilla/control de acceso, almacén).',
      'Bebederos de agua (con puerta, pedestal, tipo gabinete).',
      'Estacas (cortas y largas, punta simple o reforzada de 5 cm a 10 cm) y tarugos.'
    ]
  },

  // --- CATEGORÍA 5: MATERIA PRIMA E INSUMOS ---
  {
    id: 'insumos-maderas',
    categoria: 'insumos',
    nombre: 'Planchas de Triplay y Especies de Madera',
    etiqueta: 'Materia Prima e Insumos',
    resumen: 'Materia prima certificada para construcción y procesos de embalaje.',
    imagen: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80',
    detalles: [
      'Planchas de triplay (diferentes espesores y calidades).',
      'Venta de distintas especies de madera (madera oreada / tratada).'
    ]
  }
];

export default function Productos() {
  const [filtroActivo, setFiltroActivo] = useState('todos');
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const productosFiltrados = filtroActivo === 'todos'
    ? CATALOGO_AGRUPADO
    : CATALOGO_AGRUPADO.filter(p => p.categoria === filtroActivo);

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

      {/* Grilla de Tarjetas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {productosFiltrados.map((prod) => (
          <article
            key={prod.id}
            onClick={() => setProductoSeleccionado(prod)}
            className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between group"
          >
            <div>
              <div className="relative overflow-hidden h-52">
                <img
                  src={prod.imagen}
                  alt={prod.nombre}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-[#3D2514]/90 backdrop-blur-md text-amber-200 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-amber-500/20">
                  {prod.etiqueta}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-black text-[#3D2514] group-hover:text-amber-800 transition-colors mb-2">
                  {prod.nombre}
                </h3>
                <p className="text-stone-600 text-xs leading-relaxed">
                  {prod.resumen}
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
            <div className="relative h-48 sm:h-56">
              <img 
                src={productoSeleccionado.imagen} 
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
                  {productoSeleccionado.etiqueta}
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <h3 className="text-2xl font-black text-[#3D2514]">
                {productoSeleccionado.nombre}
              </h3>
              
              <div className="space-y-2">
                <p className="text-xs font-bold uppercase text-amber-900 tracking-wider">
                  Modelos y especificaciones incluidas:
                </p>
                <ul className="space-y-2">
                  {productoSeleccionado.detalles.map((item, idx) => (
                    <li key={idx} className="flex items-start text-xs text-stone-700 leading-relaxed">
                      <span className="text-amber-800 font-bold mr-2">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
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