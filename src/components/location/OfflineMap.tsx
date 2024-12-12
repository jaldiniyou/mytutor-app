import React from 'react';
import { Download } from 'lucide-react';

interface OfflineMapProps {
  region: string;
  onDownload: () => void;
}

export default function OfflineMap({ region, onDownload }: OfflineMapProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-gray-900">Carte hors-ligne</h3>
        <button
          onClick={onDownload}
          className="flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          <Download className="h-4 w-4 mr-2" />
          Télécharger
        </button>
      </div>
      
      <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-md">
        <div className="p-4 flex items-center justify-center text-gray-500">
          Carte statique de {region}
        </div>
      </div>
      
      <p className="mt-2 text-sm text-gray-500">
        Téléchargez la carte pour une utilisation hors-ligne
      </p>
    </div>
  );
}