// src/components/CartWidget.jsx

import React from 'react';
import { useCart } from '../context/CartContext';  // Importar el hook useCart

const CartWidget = () => {
  const { cartTotal } = useCart();  // Usar el hook useCart para obtener el total del carrito

  return (
    <div className="text-green-400">
      🛒 {cartTotal() > 0 && <span>({cartTotal()})</span>}  {/* Mostrar el total si es mayor a 0 */}
    </div>
  );
};

export default CartWidget;
