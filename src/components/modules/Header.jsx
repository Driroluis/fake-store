import React from "react";

function Header() {
  return (
    <header className="p-4 bg-yellow-600">
      <nav className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="logo">
            <img
              src="https://i.pinimg.com/originals/99/b0/e5/99b0e593f9237abf16df5cb1b1a87735.png"
              alt="Logo de Fake Store"
              className="w-24 h-24"
            />
          </div>
          <ul className="flex space-x-4 nav-links">
            <li>
              <a href="/" className="font-bold text-white hover:text-amber-900">
                Inicio
              </a>
            </li>
            <li>
              <a href="/" className="font-bold text-white hover:text-amber-900">
                Productos
              </a>
            </li>
            <li>
              <a href="/" className="font-bold text-white hover:text-amber-900">
                Categorias
              </a>
            </li>
            
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
