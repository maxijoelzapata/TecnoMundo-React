import React from 'react';
import { useParams } from 'react-router-dom';

const Confirmation = () => {
  const { orderId } = useParams();

  return (
    <div className="text-white p-4">
      <h2 className="text-xl font-bold">¡Gracias por tu compra!</h2>
      <p>Tu ID de compra es: <strong>{orderId}</strong></p>
    </div>
  );
};

export default Confirmation;
