import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppBtn from './components/WhatsAppBtn';

import Home from './pages/Home';
import Productos from './pages/Productos';
import Servicios from './pages/Servicios';
import Contacto from './pages/Contacto';

// Importación de componentes de Administración
import AdminProductos from './components/AdminProductos';
import LoginAdmin from './components/LoginAdmin';

function App() {
  // Estado para verificar si existe sesión activa
  const [autenticado, setAutenticado] = useState(
    !!localStorage.getItem('token_admin')
  );

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col justify-between bg-[#FDFBF7]">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            {/* Rutas Públicas */}
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/contacto" element={<Contacto />} />

            {/* Ruta Protegida de Administración */}
            <Route 
              path="/admin" 
              element={
                autenticado ? (
                  <AdminProductos />
                ) : (
                  <LoginAdmin onLoginExitoso={() => setAutenticado(true)} />
                )
              } 
            />
          </Routes>
        </main>

        <Footer />
        <WhatsAppBtn />
      </div>
    </BrowserRouter>
  );
}

export default App;