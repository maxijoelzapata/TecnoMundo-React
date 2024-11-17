// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext'; // Importación del contexto

// Importación de los componentes
import Navbar from './components/Navbar'; // Navbar con las categorías
import ItemListContainer from './components/ItemListContainer'; // Listado de productos
import ItemDetailContainer from './components/ItemDetailContainer'; // Detalles de producto
import CartWidget from './components/CartWidget'; // Icono del carrito en el navbar
import Cart from './components/Cart'; // Carrito de compras y checkout
import Footer from './components/Footer'; // Pie de página con información adicional

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar /> {/* Navbar con categorías */}

        {/* Rutas para las páginas de productos y carrito */}
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/product/:productId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

        <Footer /> {/* Pie de página (opcional) */}
      </Router>
    </CartProvider>
  );
}

export default App;
