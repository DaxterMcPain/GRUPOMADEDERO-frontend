import React, { useState } from 'react';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    telefono: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phone = "51946143102";
    const msg = `*CONSULTA DESDE LA WEB - GRUPO MADERERO*
- *Nombre:* ${formData.nombre}
- *Empresa:* ${formData.empresa || 'Particular'}
- *Teléfono:* ${formData.telefono}
- *Mensaje:* ${formData.mensaje}`;

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Encabezado */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs bg-amber-100 text-[#3D2514] font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider border border-amber-200">
          Atención Personalizada
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-[#3D2514]">Contáctanos</h1>
        <p className="text-stone-600 text-sm leading-relaxed">
          Estamos listos para asesorarte en tus requerimientos de madera tratada, parihuelas y embalajes industriales.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Formulario de Contacto Rápido */}
        <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-lg space-y-6">
          <div>
            <h3 className="text-xl font-bold text-[#3D2514]">Envíanos un mensaje</h3>
            <p className="text-xs text-stone-500 mt-1">Completa tus datos para enviarnos tu solicitud directamente por WhatsApp.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">Nombre Completo *</label>
              <input
                type="text"
                name="nombre"
                required
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Ej. Juan Pérez"
                className="w-full p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs focus:ring-2 focus:ring-[#3D2514] outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">Empresa / Razón Social</label>
              <input
                type="text"
                name="empresa"
                value={formData.empresa}
                onChange={handleChange}
                placeholder="Ej. Constructora ABC S.A.C."
                className="w-full p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs focus:ring-2 focus:ring-[#3D2514] outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">Teléfono / WhatsApp *</label>
              <input
                type="tel"
                name="telefono"
                required
                value={formData.telefono}
                onChange={handleChange}
                placeholder="Ej. 912345678"
                className="w-full p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs focus:ring-2 focus:ring-[#3D2514] outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">Mensaje / Detalle del pedido *</label>
              <textarea
                name="mensaje"
                rows="4"
                required
                value={formData.mensaje}
                onChange={handleChange}
                placeholder="Escribe aquí las medidas, cantidad de piezas o servicio que necesitas..."
                className="w-full p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs focus:ring-2 focus:ring-[#3D2514] outline-none resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#25D366] hover:bg-emerald-600 text-white font-bold py-3 px-4 rounded-xl text-xs transition shadow-md flex items-center justify-center gap-2"
            >
              <span>💬 Enviar Solicitud por WhatsApp</span>
            </button>
          </form>
        </div>

        {/* Canales e Información + Mapa Limpio */}
        <div className="lg:col-span-7 space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm space-y-2">
              <span className="text-2xl">📞</span>
              <h4 className="font-bold text-sm text-[#3D2514]">Central de Ventas</h4>
              <p className="text-xs text-stone-600">946 143 102 / 998 312 710</p>
              <p className="text-[11px] text-stone-400">Atención de Lunes a Sábado</p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm space-y-2">
              <span className="text-2xl">🏭</span>
              <h4 className="font-bold text-sm text-[#3D2514]">Planta Principal</h4>
              <p className="text-xs text-stone-600">Jr. Buenos Amigos N° 294, Ate, Lima</p>
              <p className="text-[11px] text-stone-400">Horno y Almacén Central</p>
            </div>
          </div>

          {/* Botón directo a GPS/Mapa */}
          <div className="flex justify-between items-center bg-white p-4 rounded-2xl border border-stone-200 shadow-sm">
            <div>
              <p className="text-xs font-bold text-[#3D2514]">¿Cómo llegar a la planta?</p>
              <p className="text-[11px] text-stone-500">Jr. Buenos Amigos N° 294, Ate</p>
            </div>
            <a
              href="https://maps.google.com/?q=Jr.+Buenos+Amigos+294,+Ate,+Lima"
              target="_blank"
              rel="noreferrer"
              className="bg-[#3D2514] hover:bg-[#2A180B] text-white font-bold text-xs py-2.5 px-4 rounded-xl transition shadow"
            >
              🗺️ Abrir GPS
            </a>
          </div>

          {/* Mapa de Google Completo sin tarjetas superpuestas */}
          <div className="w-full rounded-3xl overflow-hidden shadow-xl border border-stone-200">
            <iframe
              title="Ubicación Maderera Buenos Amigos"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.763481234567!2d-76.9538!3d-12.0512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c6f000000000%3A0x0!2sJr.+Buenos+Amigos+294%2C+Ate+15012!5e0!3m2!1ses!2spe!4v1700000000000!5d60"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="w-full h-[400px] md:h-[450px]"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}