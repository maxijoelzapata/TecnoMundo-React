import { getFirestore, collection, getDocs, doc, getDoc, addDoc } from 'firebase/firestore';
import app from './config';

const db = getFirestore(app);

// Obtener todos los productos o filtrados por categoría
export const fetchProducts = async (category) => {
  const productsRef = collection(db, 'products');
  const snapshot = await getDocs(productsRef);
  const products = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return category ? products.filter((product) => product.category === category) : products;
};

// Obtener los detalles de un producto
export const fetchProductById = async (id) => {
  const productRef = doc(db, 'products', id);
  const snapshot = await getDoc(productRef);
  return { id: snapshot.id, ...snapshot.data() };
};

// Crear un nuevo documento para la orden de compra
export const createOrder = async (order) => {
  const ordersRef = collection(db, 'orders');
  const docRef = await addDoc(ordersRef, order);
  return docRef.id;
};
