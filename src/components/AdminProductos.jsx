import React, { useState, useEffect } from 'react';
import AdminServicios from './AdminServicios';

const API_URL = 'http://localhost:5000/api/productos';

export default function AdminProductos() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [modalPasswordOpen, setModalPasswordOpen] = useState(false);
  const [passForm, setPassForm] = useState({ passwordActual: '', nuevaPassword: '' });

  // Función para enviar el cambio de contraseña al backend
  const handleCambiarPassword = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token_admin');

    try {
      const res = await fetch('http://localhost:5000/api/auth/cambiar-password', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(passForm)
      });

      const data = await res.json();

      if (res.ok && data.ok) {
        alert('¡Contraseña actualizada con éxito!');
        setModalPasswordOpen(false);
        setPassForm({ passwordActual: '', nuevaPassword: '' });
      } else {
        alert(data.mensaje || 'Error al cambiar la contraseña');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error de conexión con el servidor');
    }
  };

  // Formulario estado base
  const [form, setForm] = useState({
    id: null,
    nombre: '',
    categoria: 'parihuelas',
    etiqueta: '',
    resumen: '',
    imagen: '',
    detallesTexto: '' // Cadena separada por saltos de línea para facilitar edición
  });

  // Cargar catálogo desde la API
  const cargarProductos = async () => {
    try {
      setLoading(true);
      const res = await fetch(API_URL);
      const data = await res.json();
      if (data.ok) setProductos(data.data);
    } catch (err) {
      console.error('Error al cargar catálogo:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  // Abrir modal para crear
  const abrirModalCrear = () => {
    setModoEdicion(false);
    setForm({
      id: null,
      nombre: '',
      categoria: 'parihuelas',
      etiqueta: '',
      resumen: '',
      imagen: '',
      detallesTexto: ''
    });
    setModalAbierto(true);
  };

  // Abrir modal para editar
  const abrirModalEditar = (prod) => {
    setModoEdicion(true);
    setForm({
      id: prod.id,
      nombre: prod.nombre,
      categoria: prod.categoria,
      etiqueta: prod.etiqueta || '',
      resumen: prod.resumen || '',
      imagen: prod.imagen || '',
      detallesTexto: Array.isArray(prod.detalles) ? prod.detalles.join('\n') : ''
    });
    setModalAbierto(true);
  };

  // Guardar (Crear / Editar)
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Obtener token almacenado en el login
    const token = localStorage.getItem('token_admin');

    // Convertir detallesTexto en Array
    const detallesArray = form.detallesTexto
      .split('\n')
      .map(linea => linea.trim())
      .filter(linea => linea.length > 0);

    const payload = {
      nombre: form.nombre,
      categoria: form.categoria,
      etiqueta: form.etiqueta,
      resumen: form.resumen,
      imagen: form.imagen,
      detalles: detallesArray
    };

    try {
      const url = modoEdicion ? `${API_URL}/${form.id}` : API_URL;
      const method = modoEdicion ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` // <--- TOKEN AÑADIDO AQUÍ
        },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        setModalAbierto(false);
        cargarProductos();
      } else {
        alert('No tienes permisos o la sesión expiró');
      }
    } catch (err) {
      console.error('Error:', err);
    }
  };

  // Eliminar Producto
  const handleEliminar = async (id) => {
    if (!window.confirm('¿Confirmas que deseas eliminar este producto?')) return;

    // Obtener token almacenado en el login
    const token = localStorage.getItem('token_admin');

    try {
      const res = await fetch(`${API_URL}/${id}`, { 
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}` // <--- TOKEN AÑADIDO AQUÍ
        }
      });

      if (res.ok) {
        cargarProductos();
      } else {
        alert('No se pudo eliminar el producto (permiso denegado)');
      }
    } catch (err) {
      console.error('Error al eliminar:', err);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-black text-[#3D2514]">Panel de Control de Productos</h1>
          <p className="text-stone-600 text-xs mt-1">Gestiona los ítems visibles en la web corporativa.</p>
        </div>
        <button
          onClick={abrirModalCrear}
          className="bg-[#3D2514] hover:bg-amber-900 text-white font-bold text-xs px-5 py-3 rounded-xl transition shadow-md"
        >
          + Agregar Nuevo Producto
        </button>
        <button
          onClick={() => setModalPasswordOpen(true)}
          className="bg-amber-100 hover:bg-amber-200 text-[#3D2514] font-bold text-xs px-4 py-3 rounded-xl transition shadow-sm"
        >
          🔒 Cambiar Contraseña
        </button>
        <button
          onClick={() => {
            localStorage.removeItem('token_admin');
            window.location.reload();
          }}
          className="bg-red-100 text-red-700 hover:bg-red-200 font-bold text-xs px-4 py-3 rounded-xl transition"
        >
          Cerrar Sesión
        </button>
      </div>

      {/* Tabla de Productos */}
      <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm">
        <table className="w-full text-left text-xs text-stone-700">
          <thead className="bg-stone-100 text-[#3D2514] font-bold uppercase tracking-wider border-b border-stone-200">
            <tr>
              <th className="p-4">Imagen</th>
              <th className="p-4">Producto</th>
              <th className="p-4">Categoría</th>
              <th className="p-4">Etiqueta</th>
              <th className="p-4 text-right">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-200">
            {loading ? (
              <tr><td colSpan="5" className="text-center p-8">Cargando catálogo...</td></tr>
            ) : productos.length === 0 ? (
              <tr><td colSpan="5" className="text-center p-8">No hay productos registrados.</td></tr>
            ) : (
              productos.map((p) => (
                <tr key={p.id} className="hover:bg-stone-50 transition">
                  <td className="p-4">
                    <img src={p.imagen} alt={p.nombre} className="w-12 h-12 object-cover rounded-lg border border-stone-200" />
                  </td>
                  <td className="p-4 font-bold text-[#3D2514]">{p.nombre}</td>
                  <td className="p-4 uppercase text-[10px] font-bold text-amber-900">{p.categoria}</td>
                  <td className="p-4">{p.etiqueta}</td>
                  <td className="p-4 text-right space-x-2">
                    <button
                      onClick={() => abrirModalEditar(p)}
                      className="bg-amber-100 text-amber-900 font-bold px-3 py-1.5 rounded-lg hover:bg-amber-200"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleEliminar(p.id)}
                      className="bg-red-100 text-red-700 font-bold px-3 py-1.5 rounded-lg hover:bg-red-200"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Modal Formulario */}
      {modalAbierto && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-stone-200">
            <h2 className="text-xl font-black text-[#3D2514] mb-4">
              {modoEdicion ? 'Editar Producto' : 'Crear Nuevo Producto'}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-stone-700 mb-1">Nombre</label>
                <input
                  type="text"
                  required
                  value={form.nombre}
                  onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-stone-300 focus:outline-none focus:border-amber-800"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-stone-700 mb-1">Categoría</label>
                  <select
                    value={form.categoria}
                    onChange={(e) => setForm({ ...form, categoria: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-stone-300 focus:outline-none focus:border-amber-800"
                  >
                    <option value="parihuelas">Parihuelas y Tarimas</option>
                    <option value="cajas">Cajas y Embalajes</option>
                    <option value="accesorios">Accesorios y Tacos</option>
                    <option value="estructuras">Estructuras y Modulares</option>
                    <option value="insumos">Materia Prima</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-stone-700 mb-1">Etiqueta</label>
                  <input
                    type="text"
                    value={form.etiqueta}
                    onChange={(e) => setForm({ ...form, etiqueta: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-stone-300 focus:outline-none focus:border-amber-800"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-stone-700 mb-1">Resumen / Descripción corta</label>
                <textarea
                  rows="2"
                  value={form.resumen}
                  onChange={(e) => setForm({ ...form, resumen: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-stone-300 focus:outline-none focus:border-amber-800"
                ></textarea>
              </div>

              <div>
                <label className="block font-bold text-stone-700 mb-1">URL de la Imagen</label>
                <input
                  type="url"
                  required
                  value={form.imagen}
                  onChange={(e) => setForm({ ...form, imagen: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-stone-300 focus:outline-none focus:border-amber-800"
                />
              </div>

              <div>
                <label className="block font-bold text-stone-700 mb-1">
                  Especificaciones / Detalles (Una por línea)
                </label>
                <textarea
                  rows="3"
                  value={form.detallesTexto}
                  onChange={(e) => setForm({ ...form, detallesTexto: e.target.value })}
                  placeholder={'Ejemplo:\nMedidas personalizadas\nTratamiento NIMF 15'}
                  className="w-full p-2.5 rounded-xl border border-stone-300 focus:outline-none focus:border-amber-800"
                ></textarea>
              </div>

              <div className="flex justify-end space-x-3 pt-4 border-t border-stone-100">
                <button
                  type="button"
                  onClick={() => setModalAbierto(false)}
                  className="px-4 py-2 rounded-xl bg-stone-100 text-stone-700 font-bold"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#3D2514] text-white font-bold hover:bg-amber-900"
                >
                  {modoEdicion ? 'Actualizar' : 'Guardar Producto'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <AdminServicios />
      {/* Modal Cambiar Contraseña */}
      {modalPasswordOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-stone-200">
            <h3 className="text-xl font-black text-[#3D2514] mb-4">
              Cambiar Contraseña
            </h3>
            <form onSubmit={handleCambiarPassword} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-stone-700 mb-1">
                  Contraseña Actual
                </label>
                <input
                  type="password"
                  required
                  value={passForm.passwordActual}
                  onChange={(e) => setPassForm({ ...passForm, passwordActual: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-stone-300 focus:outline-none focus:border-[#3D2514]"
                />
              </div>
              <div>
                <label className="block font-bold text-stone-700 mb-1">
                  Nueva Contraseña
                </label>
                <input
                  type="password"
                  required
                  value={passForm.nuevaPassword}
                  onChange={(e) => setPassForm({ ...passForm, nuevaPassword: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-stone-300 focus:outline-none focus:border-[#3D2514]"
                />
              </div>
              <div className="flex justify-end space-x-3 pt-4 border-t border-stone-100">
                <button
                  type="button"
                  onClick={() => setModalPasswordOpen(false)}
                  className="px-4 py-2 rounded-xl bg-stone-100 font-bold text-stone-600 hover:bg-stone-200"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#3D2514] text-white font-bold hover:bg-amber-900"
                >
                  Actualizar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}