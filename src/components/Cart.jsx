import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, cartTotal, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="text-white p-4">
        <p>No hay productos en el carrito.</p>
        <Link to="/" className="text-green-400">Ir a la tienda</Link>
      </div>
    );
  }

  return (
    <div className="text-white p-4">
      <h2 className="text-xl font-bold">Carrito de Compras</h2>
      <div className="my-4">
        {cart.map((product) => (
          <div key={product.id} className="flex justify-between mb-4">
            <div className="flex">
              <img src={product.image} alt={product.name} className="w-16 h-16 object-cover mr-4" />
              <div>
                <h3 className="font-bold">{product.name}</h3>
                <p>${product.price} x {product.quantity}</p>
              </div>
            </div>
            <button
              onClick={() => removeFromCart(product.id)}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <p className="text-xl font-bold">Total: ${cartTotal()}</p>
        <button
          onClick={clearCart}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
        >
          Limpiar Carrito
        </button>
      </div>
      <div className="mt-4">
        <Link to="/checkout">
          <button className="bg-green-400 text-black px-4 py-2 rounded-md hover:bg-green-500">
            Proceder a la compra
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
