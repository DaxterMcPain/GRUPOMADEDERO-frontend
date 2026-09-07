import React, { useState } from 'react';

const SERVICIOS_AGRUPADOS = [
  {
    id: 'fitosanitario',
    title: 'Tratamiento Térmico Fitosanitario (NIMF-15)',
    icon: '🔥',
    tag: 'Certificado SENASA',
    resumen: 'Procesamiento térmico en horno propio para madera de exportación.',
    detalles: [
      'Procesamiento térmico certificado por SENASA (sello HT / NIMF-15).',
      'Apto para embalajes, parihuelas y estiba destinada al comercio internacional.',
      'Control riguroso de temperatura para erradicación de plagas xilófagas.',
      'Emisión de certificado de tratamiento térmico por lote.'
    ]
  },
  {
    id: 'dimensionado',
    title: 'Dimensionado y Habilitado de Madera',
    icon: '📐',
    tag: 'Corte a Medida',
    resumen: 'Corte exacto y maquinado según planos o especificaciones de obra.',
    detalles: [
      'Corte de precisión para minimizar desperdicio en obra.',
      'Maquinado y trozado según planos arquitectónicos o estructurales.',
      'Dimensionado de piezas en madera oreada o tratada.'
    ]
  },
  {
    id: 'cepillado',
    title: 'Servicio de Cepillado y Canto',
    icon: '🪵',
    tag: 'Acabados Finos',
    resumen: 'Acabado superficial terso para estructuras vistas y machihembrados.',
    detalles: [
      'Superficie lisa y libre de astillas para un acabado decorativo o estructural.',
      'Cepillado en 1, 2 o 4 caras según requerimiento.',
      'Apto para vigas vistas, machihembrados y estructuras especiales.'
    ]
  },
  {
    id: 'secado-preservacion',
    title: 'Secado en Cámara y Preservación',
    icon: '🛡️',
    tag: 'Protección Integral',
    resumen: 'Tratamiento preventivo y bañado de preservantes contra insectos y hongos.',
    detalles: [
      'Bañado de preservantes para protección contra hongos xilófagos e insectos.',
      'Tratamiento preventivo para aumentar la vida útil de la madera.',
      'Secado asistido en cámara para estabilizar el nivel de humedad.'
    ]
  },
  {
    id: 'armado-campo',
    title: 'Servicio de Armado y Montaje de Embalajes',
    icon: '🛠️',
    tag: 'Servicio en Planta/Obra',
    resumen: 'Armado de estructuras de madera junto con el producto a embalar.',
    detalles: [
      'Ensamble y fijación de cajas, jaulas o estructuras en las instalaciones del cliente.',
      'Montaje de estructuras especiales con pernos, tuercas y refuerzos metálicos.',
      'Embalaje técnico in situ para maquinaria y componentes de gran tamaño.'
    ]
  }
];

export default function Servicios() {
  const [servicioSeleccionado, setServicioSeleccionado] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Encabezado */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs bg-amber-100 text-[#3D2514] font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider border border-amber-200">
          Especialización Industrial
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-[#3D2514]">Nuestros Servicios</h1>
        <p className="text-stone-600 text-sm leading-relaxed">
          Ofrecemos transformación, tratamiento, preservación y armado técnico de madera para constructoras e industrias exigentes.
        </p>
      </div>

      {/* Tarjetas de Servicios */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICIOS_AGRUPADOS.map((s) => (
          <div 
            key={s.id} 
            onClick={() => setServicioSeleccionado(s)}
            className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group cursor-pointer"
          >
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div className="w-14 h-14 bg-amber-50 text-3xl rounded-2xl flex items-center justify-center border border-amber-200/60 group-hover:scale-110 transition-transform">
                  {s.icon}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-900 bg-amber-50 border border-amber-200/80 px-2.5 py-1 rounded-md">
                  {s.tag}
                </span>
              </div>
              <h3 className="text-xl font-black text-[#3D2514] group-hover:text-amber-800 transition-colors">
                {s.title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {s.resumen}
              </p>
            </div>

            <div className="pt-2 flex items-center text-xs font-bold text-[#3D2514] group-hover:text-amber-700">
              <span>Ver detalles del servicio</span>
              <svg className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Banner General de Contacto */}
      <div className="bg-[#2A180B] text-amber-50 rounded-3xl p-8 text-center space-y-4 shadow-2xl border border-amber-900/30">
        <h3 className="text-2xl font-bold">¿Necesitas un servicio a medida o cubicaje especial?</h3>
        <p className="text-xs sm:text-sm text-amber-100/80 max-w-2xl mx-auto">
          Atendemos requerimientos de grandes volúmenes para obras de construcción y despachos industriales a nivel nacional.
        </p>
        <div className="pt-2">
          <a
            href="https://wa.me/51946143102?text=Hola,%20requiero%20una%20cotización%20especial%20de%20servicios"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-[#D97736] hover:bg-[#c06528] text-white font-bold px-8 py-3 rounded-xl text-xs transition shadow-lg"
          >
            Hablar con un Asesor Técnico
          </a>
        </div>
      </div>

      {/* Ventana Emergente (Modal) con Detalles del Servicio */}
      {servicioSeleccionado && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity"
          onClick={() => setServicioSeleccionado(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-stone-200 animate-in fade-in zoom-in duration-200 p-6 sm:p-8 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start">
              <div className="w-16 h-16 bg-amber-50 text-4xl rounded-2xl flex items-center justify-center border border-amber-200">
                {servicioSeleccionado.icon}
              </div>
              <button 
                onClick={() => setServicioSeleccionado(null)}
                className="bg-stone-100 hover:bg-stone-200 text-stone-600 w-8 h-8 rounded-full flex items-center justify-center transition"
              >
                ✕
              </button>
            </div>

            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-900 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-md">
                {servicioSeleccionado.tag}
              </span>
              <h3 className="text-2xl font-black text-[#3D2514] mt-2">
                {servicioSeleccionado.title}
              </h3>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-bold uppercase text-amber-900 tracking-wider">
                Especificaciones del servicio:
              </p>
              <ul className="space-y-2">
                {servicioSeleccionado.detalles.map((item, idx) => (
                  <li key={idx} className="flex items-start text-xs text-stone-700 leading-relaxed">
                    <span className="text-amber-800 font-bold mr-2">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-stone-100 flex justify-end">
              <button
                onClick={() => setServicioSeleccionado(null)}
                className="bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs py-2.5 px-5 rounded-xl transition"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}