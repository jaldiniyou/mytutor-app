import React from 'react';
import { MapPin } from 'lucide-react';

interface Region {
  id: string;
  name: string;
  count: number;
}

const regions: Region[] = [
  { id: '1', name: 'Casablanca Centre', count: 45 },
  { id: '2', name: 'Ain Diab', count: 23 },
  { id: '3', name: 'Maarif', count: 31 },
  { id: '4', name: 'Anfa', count: 28 },
  { id: '5', name: 'Sidi Belyout', count: 19 },
];

interface RegionSelectorProps {
  onRegionSelect: (regionId: string) => void;
}

export default function RegionSelector({ onRegionSelect }: RegionSelectorProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Quartiers populaires</h3>
      <div className="space-y-2">
        {regions.map((region) => (
          <button
            key={region.id}
            onClick={() => onRegionSelect(region.id)}
            className="w-full flex items-center justify-between p-3 rounded-md hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-gray-400 mr-2" />
              <span className="text-gray-700">{region.name}</span>
            </div>
            <span className="text-sm text-gray-500">{region.count} tuteurs</span>
          </button>
        ))}
      </div>
    </div>
  );
}