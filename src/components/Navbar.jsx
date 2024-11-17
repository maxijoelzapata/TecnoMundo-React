import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const Navbar = () => {
  return (
    <nav className="bg-black border-b-2 border-green-400 p-4 flex justify-between items-center">
      <h1 className="text-green-400 text-2xl font-bold">
        <Link to="/">TecnoMundo</Link>
      </h1>
      <div>
        <Link to="/category/celulares" className="mr-4 text-green-300 hover:text-green-500">
          Celulares
        </Link>
        <Link to="/category/computadoras" className="text-green-300 hover:text-green-500">
          Computadoras
        </Link>
      </div>
      <CartWidget />
    </nav>
  );
};

export default Navbar;
