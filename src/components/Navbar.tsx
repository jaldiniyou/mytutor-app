import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GraduationCap, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <GraduationCap className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">Mytutor</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/find-tutor" className="text-gray-600 hover:text-indigo-600">
              Trouver un tuteur
            </Link>
            <Link to="/become-tutor" className="text-gray-600 hover:text-indigo-600">
              Devenir tuteur
            </Link>
            <Link to="/how-it-works" className="text-gray-600 hover:text-indigo-600">
              Comment ça marche
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-indigo-600">
              Contact
            </Link>
            <button 
              onClick={() => navigate('/login')}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
            >
              Se connecter
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/find-tutor"
              className="block px-3 py-2 text-gray-600 hover:text-indigo-600"
              onClick={() => setIsOpen(false)}
            >
              Trouver un tuteur
            </Link>
            <Link 
              to="/become-tutor"
              className="block px-3 py-2 text-gray-600 hover:text-indigo-600"
              onClick={() => setIsOpen(false)}
            >
              Devenir tuteur
            </Link>
            <Link 
              to="/how-it-works"
              className="block px-3 py-2 text-gray-600 hover:text-indigo-600"
              onClick={() => setIsOpen(false)}
            >
              Comment ça marche
            </Link>
            <Link 
              to="/contact"
              className="block px-3 py-2 text-gray-600 hover:text-indigo-600"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/login"
              className="block px-3 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              onClick={() => setIsOpen(false)}
            >
              Se connecter
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}