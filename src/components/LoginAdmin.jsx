import React, { useState } from 'react';

export default function LoginAdmin({ onLoginExitoso }) {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const BASE_URL = import.meta.env.VITE_API_URL || 'https://grupomaderero-backend.onrender.com';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ usuario, password })
      });

      const data = await res.json();

      if (data.ok) {
        // Guardar token en el almacenamiento local del navegador
        localStorage.setItem('token_admin', data.token);
        localStorage.setItem('usuario_admin', data.usuario.usuario);
        onLoginExitoso();
      } else {
        setError(data.mensaje || 'Error al iniciar sesión');
      }
    } catch (err) {
      setError('Error de conexión con el servidor');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-12">
      <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-xl max-w-md w-full">
        <div className="text-center mb-6">
          <span className="text-[10px] bg-amber-100 text-[#3D2514] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Acceso Privado
          </span>
          <h2 className="text-2xl font-black text-[#3D2514] mt-3">Panel de Administración</h2>
          <p className="text-stone-500 text-xs mt-1">Ingresa tus credenciales autorizadas.</p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-700 text-xs font-bold p-3 rounded-xl mb-4 border border-red-200 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block font-bold text-stone-700 mb-1">Usuario</label>
            <input
              type="text"
              required
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              placeholder="Ej: admin"
              className="w-full p-3 rounded-xl border border-stone-300 focus:outline-none focus:border-amber-800"
            />
          </div>

          <div>
            <label className="block font-bold text-stone-700 mb-1">Contraseña</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full p-3 rounded-xl border border-stone-300 focus:outline-none focus:border-amber-800"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-[#3D2514] text-white font-bold rounded-xl hover:bg-amber-900 transition shadow-md disabled:opacity-50"
          >
            {loading ? 'Validando...' : 'Iniciar Sesión'}
          </button>
        </form>
      </div>
    </div>
  );
}