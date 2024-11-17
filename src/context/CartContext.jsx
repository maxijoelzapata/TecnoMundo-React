// src/context/CartContext.jsx

import React, { createContext, useState, useContext } from 'react';

// Crear el contexto para el carrito
const CartContext = createContext();

// Crear un hook personalizado para usar el contexto
const useCart = () => {
  return useContext(CartContext);
};

// Proveedor del contexto para envolver la aplicación
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar un producto al carrito
  const addToCart = (product, quantity) => {
    const productInCart = cart.find((item) => item.id === product.id);
    if (productInCart) {
      setCart(cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  // Calcular el total del carrito
  const cartTotal = () => cart.reduce((total, product) => total + product.price * product.quantity, 0);

  // Eliminar un producto del carrito
  const removeFromCart = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  // Limpiar el carrito
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, cartTotal, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, useCart }; // Exportación de CartProvider y useCart
