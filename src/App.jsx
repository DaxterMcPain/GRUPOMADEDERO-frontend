import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppBtn from './components/WhatsAppBtn';

import Home from './pages/Home';
import Productos from './pages/Productos';
import Servicios from './pages/Servicios';
import Contacto from './pages/Contacto';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col justify-between bg-[#FDFBF7]">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>

        <Footer />
        <WhatsAppBtn />
      </div>
    </BrowserRouter>
  );
}

export default App;