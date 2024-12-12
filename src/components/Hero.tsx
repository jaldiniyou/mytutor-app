import React from 'react';
import { Search } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-white pt-16">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
          alt="Students studying"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/90 to-purple-600/90 mix-blend-multiply" />
      </div>

      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Trouvez le tuteur parfait pour réussir
        </h1>
        <p className="mt-6 text-xl text-white max-w-3xl">
          Des cours particuliers en ligne avec des experts qualifiés dans toutes les matières.
          Apprenez à votre rythme, où que vous soyez.
        </p>

        <div className="mt-10 max-w-xl">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="flex items-center space-x-4">
              <div className="flex-grow">
                <input
                  type="text"
                  placeholder="Quelle matière souhaitez-vous étudier ?"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 flex items-center">
                <Search className="h-5 w-5 mr-2" />
                Rechercher
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}