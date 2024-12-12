import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';
import { useGeolocation } from '../../hooks/useGeolocation';

interface LocationSearchProps {
  onLocationSelect: (location: string) => void;
}

export default function LocationSearch({ onLocationSelect }: LocationSearchProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const { getCurrentLocation, loading } = useGeolocation();

  const handleUseCurrentLocation = async () => {
    const location = await getCurrentLocation();
    if (location) {
      onLocationSelect(`${location.city}, ${location.region}`);
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Entrez votre ville ou code postal"
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      
      <button
        onClick={handleUseCurrentLocation}
        disabled={loading}
        className="mt-2 w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
      >
        <MapPin className="h-4 w-4 mr-2 text-gray-500" />
        {loading ? 'Localisation...' : 'Utiliser ma position actuelle'}
      </button>
    </div>
  );
}