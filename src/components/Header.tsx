
import React, { useState } from 'react';
import { Search, User, Menu, X, Car } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <Car size={24} className="mr-2 text-black" />
          <span className="text-black font-bold text-2xl">SYS Car</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-brand-gray-600 hover:text-brand-red font-medium">
            Comprar
          </Link>
          <Link to="/" className="text-brand-gray-600 hover:text-brand-red font-medium">
            Vender
          </Link>
          <Link to="/" className="text-brand-gray-600 hover:text-brand-red font-medium">
            Financiar
          </Link>
          <Link to="/" className="text-brand-gray-600 hover:text-brand-red font-medium">
            Ofertas
          </Link>
        </nav>

        {/* User Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="p-2 text-brand-gray-600 hover:text-brand-red rounded-full hover:bg-brand-gray-100">
            <Search size={22} />
          </button>
          <button className="p-2 text-brand-gray-600 hover:text-brand-red rounded-full hover:bg-brand-gray-100">
            <User size={22} />
          </button>
          <button className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-md font-medium transition">
            Criar conta
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-brand-gray-600" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md animate-fade-in">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link to="/" className="p-2 text-brand-gray-600 hover:text-brand-red font-medium">
                Comprar
              </Link>
              <Link to="/" className="p-2 text-brand-gray-600 hover:text-brand-red font-medium">
                Vender
              </Link>
              <Link to="/" className="p-2 text-brand-gray-600 hover:text-brand-red font-medium">
                Financiar
              </Link>
              <Link to="/" className="p-2 text-brand-gray-600 hover:text-brand-red font-medium">
                Ofertas
              </Link>
              <Link to="/" className="p-2 text-brand-gray-600 hover:text-brand-red font-medium">
                Buscar
              </Link>
              <Link to="/" className="p-2 text-brand-gray-600 hover:text-brand-red font-medium">
                Minha Conta
              </Link>
              <button className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-md font-medium transition">
                Criar conta
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
