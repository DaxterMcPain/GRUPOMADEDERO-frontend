import React from 'react';

export default function WhatsAppBtn() {
  const handleClick = () => {
    const phone = "51995746583";
    const msg = encodeURIComponent("Hola Maderera Buenos Amigos, deseo información de productos.");
    window.open(`https://wa.me/${phone}?text=${msg}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-emerald-600 text-white p-4 rounded-full shadow-2xl transition hover:scale-110 flex items-center gap-2 group"
      title="Cotizar por WhatsApp"
    >
      <span className="text-2xl">💬</span>
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 text-xs font-bold px-1">
        Cotizar Ahora
      </span>
    </button>
  );
}