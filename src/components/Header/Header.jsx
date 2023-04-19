import React from "react";
import { Link } from "react-router-dom";
import "../../index.css";
import "../../App.css";
import cart from "./img/cart.png";
import logo from "./img/felcan.png"

const Header = () => {
  return (
    <header className="h-20 flex justify-around h-20 " >
      <div className="flex w-4/12 justify-center ">
        <img src={logo} alt="" className="h-20 "/>
      </div>
      <div className="flex items-center justify-around w-4/12 justify-center w-full bg-white  shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        <div className="mx-auto max-w-xl">
          <nav className="relative z-0 ">
            <Link to="/" className="peer/home flex-1 px-5">
              Inicio
            </Link>
            
            <Link to="/contact" className="peer/services flex-1 px-5">
              Contacto
            </Link>
            <Link to="/products" className="peer/services flex-1 px-5  text-center">
              Alimentos
            </Link>

            
          </nav>
        </div>
      </div>

      <div className="flex w-4/12 justify-center">
        <img src={cart} alt="carrito" />
        <span className="text-red-500">0</span>
      </div>
    </header>
  );
};
export default Header;
