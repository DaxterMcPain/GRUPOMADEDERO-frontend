import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const stats = [
    { label: 'Años de Trayectoria', value: '27+' },
    { label: 'Tratamiento Térmico', value: 'NIMF 15' },
    { label: 'Cadena de Custodia', value: 'FSC®' },
    { label: 'Plantas y Horno', value: 'Ate, Lima' }
  ];

  const clientes = [
    "Southern Perú", "Volcan", "Geotec", "Metso", "Weir Minerals", 
    "Boart Longyear", "Siderperu", "Aceros Arequipa", "Tuboandina (Tupemesa)",
    "Grupo Bimbo", "CBC", "Softys", "Quimpac", "Crossland", 
    "Induparck", "Fadic", "Bermad Perú", "Europlast", "Pisopak", 
    "San Martín Contratistas General", "Tecsur", "Delcrosa", "SEW-Eurodrive"
  ];

  const serviciosPrincipales = [
    {
      titulo: "Tratamiento Térmico Fitosanitario (NIMF 15)",
      descripcion: "Horno propio certificado por SENASA para el embalaje y la exportación segura.",
      icono: "🌲"
    },
    {
      titulo: "Dimensionado y Habilitado a Medida",
      descripcion: "Corte de alta precisión para minimizar mermas en grandes obras y minería.",
      icono: "📐"
    },
    {
      titulo: "Fabricación de Parihuelas y Embalajes",
      descripcion: "Parihuelas de durmientes, cajas de madera, jaulas y bases industriales.",
      icono: "📦"
    }
  ];

  return (
    <div className="space-y-16 py-6 bg-[#FAF8F5]">
      
      {/* 1. HERO BANNER - FOTO CLARA Y BRICLANTE DE BOSQUE Y ÁRBOLES */}
      <section className="relative rounded-3xl overflow-hidden shadow-2xl mx-4 sm:mx-6 lg:mx-8 border border-stone-300 min-h-[460px] flex items-center justify-center bg-stone-900">
        
        {/* Imagen de Bosque Soleado y Vibrante */}
        <img 
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1920&q=80" 
          alt="Bosque verde y árboles iluminados por el sol" 
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Gradiente sutil solo en la parte central para resaltar los textos */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/30 z-10" />

        <div className="relative z-20 max-w-5xl mx-auto px-6 py-20 text-center space-y-6">
          <span className="inline-flex items-center gap-2 bg-[#2A180B]/85 border border-amber-500/40 text-amber-200 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-wider backdrop-blur-md shadow-md">
            <span>🌲</span> Maderera Buenos Amigos & PROYDEFOR S.A.C.
          </span>
          
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight drop-shadow-lg">
            GRUPO MADERERO
          </h1>
          
          <p className="text-stone-100 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed font-normal drop-shadow">
            Conectamos el origen de nuestros bosques con la solidez de la industria nacional. Especialistas en madera tratada, parihuelas y soluciones forestales sostenibles.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              to="/productos"
              className="bg-[#3D2514] hover:bg-[#52331c] text-amber-100 font-bold px-8 py-3.5 rounded-xl text-xs sm:text-sm transition shadow-xl border border-amber-800/50 hover:scale-105"
            >
              Explorar Catálogo
            </Link>
            <Link
              to="/contacto"
              className="bg-black/40 hover:bg-black/60 text-white font-bold px-8 py-3.5 rounded-xl text-xs sm:text-sm border border-white/40 transition backdrop-blur-md"
            >
              Contactar Asesor
            </Link>
          </div>
        </div>
      </section>

      {/* 2. MÉTRICAS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <p className="text-2xl sm:text-4xl font-black text-[#3D2514]">{stat.value}</p>
              <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PRESENTACIÓN CON FOTO NÍTIDA DE ÁRBOLES Y BOSQUE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center bg-stone-100/80 p-8 sm:p-12 rounded-3xl border border-stone-200">
          <div className="space-y-4">
            <span className="text-xs bg-amber-100 text-[#3D2514] font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider border border-amber-200">
              Compromiso Forestal e Industrial
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#2A180B]">
              Calidad desde el Origen, Seguridad en cada Entrega
            </h2>
            <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
              <strong>Grupo Maderero</strong> integra el trabajo de Maderera Buenos Amigos y PROYDEFOR S.A.C., alineando el procesamiento de madera con estándares ecológicos y de exportación.
            </p>
            <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
              Disponemos de horno fitosanitario propio (NIMF 15 SENASA) y certificación FSC® (CU-COC-915915), asegurando que cada proyecto respete el manejo sostenible de nuestros recursos.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-200 group">
            {/* Foto clara de troncos y bosque verde */}
            <img 
              src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1000&q=80" 
              alt="Bosque de pino y recursos forestales" 
              className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-6">
              <p className="text-white text-xs font-semibold">Procesos certificados FSC® para la conservación ambiental.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICIOS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black text-[#2A180B]">Nuestras Soluciones Forestales</h2>
          <p className="text-stone-600 text-xs sm:text-sm">Adaptadas a los requerimientos de la industria, la minería y el comercio exterior.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {serviciosPrincipales.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm hover:shadow-md transition space-y-4">
              <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center text-2xl border border-amber-200/60">
                {item.icono}
              </div>
              <h3 className="text-base font-bold text-[#2A180B]">{item.titulo}</h3>
              <p className="text-xs text-stone-600 leading-relaxed">{item.descripcion}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CLIENTES DESTACADOS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs bg-amber-100 text-[#3D2514] font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider border border-amber-200">
            Confianza Empresarial
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#2A180B]">Nuestros Clientes</h2>
          <p className="text-stone-600 text-xs sm:text-sm">Empresas mineras e industriales líderes confían en nuestras soluciones forestales.</p>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm">
          <div className="flex flex-wrap justify-center items-center gap-3">
            {clientes.map((cliente, idx) => (
              <span 
                key={idx}
                className="bg-stone-50 hover:bg-amber-50 text-stone-800 font-bold text-xs px-4 py-2.5 rounded-xl border border-stone-200 transition duration-200"
              >
                {cliente}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BANNER FINAL HARMONIZADO CON LA PALETA MADERERA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#2A180B] text-amber-50 rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-xl border border-amber-900/60">
          <div className="max-w-3xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-3xl font-black text-amber-100">
              ¿Requiere cotizar volúmenes o pedidos a medida?
            </h3>
            <p className="text-xs sm:text-sm text-amber-100/80 max-w-xl mx-auto leading-relaxed">
              Atendemos requerimientos de corte, dimensionado, tratamiento fitosanitario y entregas directas a planta u obra.
            </p>
            <div className="pt-2">
              <Link
                to="/contacto"
                className="inline-block bg-amber-600 hover:bg-amber-500 text-white font-bold px-8 py-3.5 rounded-xl text-xs sm:text-sm transition shadow-lg hover:scale-105"
              >
                Contactar Asesor de Ventas
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}