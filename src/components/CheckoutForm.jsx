import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { createOrder } from '../firebase/db';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Crear el objeto de orden
    const order = {
      buyer: { name, email, phone },
      items: cart.map((item) => ({ name: item.name, price: item.price, quantity: item.quantity })),
      total: cartTotal(),
    };

    // Guardar la orden en Firebase
    const orderId = await createOrder(order);
    clearCart();

    // Redirigir a la página de confirmación con el ID de la orden
    navigate(`/confirmation/${orderId}`);
  };

  return (
    <div className="text-white p-4">
      <h2 className="text-xl font-bold">Formulario de Compra</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label className="block mb-2">Nombre</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 bg-black border border-green-400 text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Correo Electrónico</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 bg-black border border-green-400 text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Teléfono</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="w-full px-4 py-2 bg-black border border-green-400 text-white"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <p className="text-xl font-bold">Total: ${cartTotal()}</p>
          <button
            type="submit"
            className="bg-green-400 text-black px-4 py-2 rounded-md hover:bg-green-500"
          >
            Confirmar Compra
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
