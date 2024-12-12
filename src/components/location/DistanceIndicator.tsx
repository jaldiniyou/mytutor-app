import React from 'react';
import { Navigation2 } from 'lucide-react';

interface DistanceIndicatorProps {
  distance: string;
  transportMode?: 'walking' | 'cycling' | 'driving' | 'transit';
}

const transportIcons = {
  walking: '🚶',
  cycling: '🚲',
  driving: '🚗',
  transit: '🚌',
};

export default function DistanceIndicator({ distance, transportMode = 'walking' }: DistanceIndicatorProps) {
  return (
    <div className="flex items-center space-x-2 text-sm text-gray-600">
      <Navigation2 className="h-4 w-4" />
      <span>{distance}</span>
      <span>{transportIcons[transportMode]}</span>
    </div>
  );
}