import React, { useState, useEffect } from 'react';

const API_URL = 'http://localhost:5000/api/servicios';

export default function AdminServicios() {
  const [servicios, setServicios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [modoEdicion, setModoEdicion] = useState(false);

  const [form, setForm] = useState({
    id: null,
    titulo: '',
    resumen: '',
    imagen: '',
    caracteristicasTexto: ''
  });

  const cargarServicios = async () => {
    try {
      setLoading(true);
      const res = await fetch(API_URL);
      const data = await res.json();
      if (data.ok) setServicios(data.data);
    } catch (err) {
      console.error('Error al cargar servicios:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarServicios();
  }, []);

  const abrirModalCrear = () => {
    setModoEdicion(false);
    setForm({ id: null, titulo: '', resumen: '', imagen: '', caracteristicasTexto: '' });
    setModalAbierto(true);
  };

  const abrirModalEditar = (serv) => {
    setModoEdicion(true);
    setForm({
      id: serv.id,
      titulo: serv.titulo,
      resumen: serv.resumen || '',
      imagen: serv.imagen || '',
      caracteristicasTexto: Array.isArray(serv.caracteristicas) ? serv.caracteristicas.join('\n') : ''
    });
    setModalAbierto(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token_admin');

    const caracteristicasArray = form.caracteristicasTexto
      .split('\n')
      .map(l => l.trim())
      .filter(l => l.length > 0);

    const payload = {
      titulo: form.titulo,
      resumen: form.resumen,
      imagen: form.imagen,
      caracteristicas: caracteristicasArray
    };

    try {
      const url = modoEdicion ? `${API_URL}/${form.id}` : API_URL;
      const method = modoEdicion ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        setModalAbierto(false);
        cargarServicios();
      } else {
        alert('Error al guardar el servicio');
      }
    } catch (err) {
      console.error('Error:', err);
    }
  };

  const handleEliminar = async (id) => {
    if (!window.confirm('¿Confirmas eliminar este servicio?')) return;
    const token = localStorage.getItem('token_admin');

    try {
      const res = await fetch(`${API_URL}/${id}`, { 
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) cargarServicios();
    } catch (err) {
      console.error('Error al eliminar:', err);
    }
  };

  return (
    <div className="mt-16 pt-10 border-t border-stone-200">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-black text-[#3D2514]">Gestión de Servicios</h2>
          <p className="text-stone-600 text-xs mt-1">Administra la lista de servicios ofrecidos.</p>
        </div>
        <button
          onClick={abrirModalCrear}
          className="bg-[#3D2514] hover:bg-amber-900 text-white font-bold text-xs px-5 py-3 rounded-xl transition shadow-md"
        >
          + Agregar Nuevo Servicio
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm">
        <table className="w-full text-left text-xs text-stone-700">
          <thead className="bg-stone-100 text-[#3D2514] font-bold uppercase tracking-wider border-b border-stone-200">
            <tr>
              <th className="p-4">Imagen</th>
              <th className="p-4">Título del Servicio</th>
              <th className="p-4">Resumen</th>
              <th className="p-4 text-right">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-200">
            {loading ? (
              <tr><td colSpan="4" className="text-center p-8">Cargando servicios...</td></tr>
            ) : servicios.length === 0 ? (
              <tr><td colSpan="4" className="text-center p-8">No hay servicios registrados.</td></tr>
            ) : (
              servicios.map((s) => (
                <tr key={s.id} className="hover:bg-stone-50 transition">
                  <td className="p-4">
                    <img src={s.imagen} alt={s.titulo} className="w-12 h-12 object-cover rounded-lg border border-stone-200" />
                  </td>
                  <td className="p-4 font-bold text-[#3D2514]">{s.titulo}</td>
                  <td className="p-4 text-stone-600 max-w-xs truncate">{s.resumen}</td>
                  <td className="p-4 text-right space-x-2">
                    <button onClick={() => abrirModalEditar(s)} className="bg-amber-100 text-amber-900 font-bold px-3 py-1.5 rounded-lg hover:bg-amber-200">Editar</button>
                    <button onClick={() => handleEliminar(s.id)} className="bg-red-100 text-red-700 font-bold px-3 py-1.5 rounded-lg hover:bg-red-200">Eliminar</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {modalAbierto && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-stone-200">
            <h3 className="text-xl font-black text-[#3D2514] mb-4">
              {modoEdicion ? 'Editar Servicio' : 'Crear Nuevo Servicio'}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-stone-700 mb-1">Título</label>
                <input type="text" required value={form.titulo} onChange={(e) => setForm({ ...form, titulo: e.target.value })} className="w-full p-2.5 rounded-xl border border-stone-300" />
              </div>
              <div>
                <label className="block font-bold text-stone-700 mb-1">Resumen</label>
                <textarea rows="2" value={form.resumen} onChange={(e) => setForm({ ...form, resumen: e.target.value })} className="w-full p-2.5 rounded-xl border border-stone-300"></textarea>
              </div>
              <div>
                <label className="block font-bold text-stone-700 mb-1">URL Imagen</label>
                <input type="url" required value={form.imagen} onChange={(e) => setForm({ ...form, imagen: e.target.value })} className="w-full p-2.5 rounded-xl border border-stone-300" />
              </div>
              <div>
                <label className="block font-bold text-stone-700 mb-1">Características (Una por línea)</label>
                <textarea rows="3" value={form.caracteristicasTexto} onChange={(e) => setForm({ ...form, caracteristicasTexto: e.target.value })} className="w-full p-2.5 rounded-xl border border-stone-300"></textarea>
              </div>
              <div className="flex justify-end space-x-3 pt-4 border-t border-stone-100">
                <button type="button" onClick={() => setModalAbierto(false)} className="px-4 py-2 rounded-xl bg-stone-100 font-bold">Cancelar</button>
                <button type="submit" className="px-5 py-2 rounded-xl bg-[#3D2514] text-white font-bold">{modoEdicion ? 'Actualizar' : 'Guardar'}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}