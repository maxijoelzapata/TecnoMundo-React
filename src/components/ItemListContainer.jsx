import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import { fetchProducts } from '../firebase/db';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    fetchProducts(categoryId).then(setProducts);
  }, [categoryId]);

  return (
    <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemListContainer;
