import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-black text-white p-4 border border-green-400 rounded-md shadow-lg">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover mb-2 border-b-2 border-green-400"
      />
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-sm">{product.description}</p>
      <p className="text-green-400 font-bold">${product.price}</p>
      <Link to={`/product/${product.id}`}>
        <button className="mt-2 px-4 py-2 bg-green-400 text-black rounded-md hover:bg-green-500">
          Ver Detalles
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
