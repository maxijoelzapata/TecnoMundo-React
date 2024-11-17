import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../firebase/db';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    fetchProductById(productId).then(setProduct);
  }, [productId]);

  if (!product) return <p>Cargando...</p>;

  return (
    <div className="p-4 text-white">
      <img src={product.image} alt={product.name} className="w-full max-w-md mx-auto" />
      <h1 className="text-2xl">{product.name}</h1>
      <p>{product.description}</p>
      <p className="text-green-400 text-xl">${product.price}</p>
    </div>
  );
};

export default ItemDetailContainer;
