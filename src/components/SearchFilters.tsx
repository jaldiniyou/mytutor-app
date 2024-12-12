import React from 'react';
import { Search, Sliders } from 'lucide-react';

interface SearchFiltersProps {
  onSearch: (filters: any) => void;
}

export default function SearchFilters({ onSearch }: SearchFiltersProps) {
  const subjects = ['Mathématiques', 'Physique', 'Chimie', 'Français', 'Anglais', 'Histoire', 'Géographie'];
  const levels = ['Primaire', 'Collège', 'Lycée', 'Université', 'Adulte'];
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="space-y-6">
        <div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Rechercher un tuteur ou une matière..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-2">Matières</h3>
          <div className="grid grid-cols-2 gap-2">
            {subjects.map((subject) => (
              <label key={subject} className="flex items-center">
                <input type="checkbox" className="rounded text-indigo-600 focus:ring-indigo-500" />
                <span className="ml-2 text-sm text-gray-600">{subject}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-2">Niveau</h3>
          <div className="space-y-2">
            {levels.map((level) => (
              <label key={level} className="flex items-center">
                <input type="checkbox" className="rounded text-indigo-600 focus:ring-indigo-500" />
                <span className="ml-2 text-sm text-gray-600">{level}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-2">Prix par heure</h3>
          <div className="flex items-center space-x-4">
            <input
              type="number"
              placeholder="Min"
              className="w-24 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <span className="text-gray-500">-</span>
            <input
              type="number"
              placeholder="Max"
              className="w-24 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <span className="text-gray-500">€</span>
          </div>
        </div>

        <button
          className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <Sliders className="h-4 w-4 mr-2" />
          Appliquer les filtres
        </button>
      </div>
    </div>
  );
}