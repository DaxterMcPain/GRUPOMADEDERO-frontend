import axios from 'axios';

// Detecta automáticamente si está en Render o en Localhost
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://grupomaderero-backend.onrender.com';

export const api = axios.create({
  baseURL: `${API_BASE_URL}/api`,
});

export const obtenerProductos = () => api.get('/productos');
export const obtenerServicios = () => api.get('/servicios');