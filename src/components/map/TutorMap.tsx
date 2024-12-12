import React from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import { TutorType } from '../../types/tutor';
import { MAPS_CONFIG } from '../../config/maps';
import MapMarker from './MapMarker';
import MapInfoWindow from './MapInfoWindow';

const mapContainerStyle = {
  width: '100%',
  height: '600px',
};

interface TutorMapProps {
  tutors: TutorType[];
  selectedTutor: TutorType | null;
  setSelectedTutor: (tutor: TutorType | null) => void;
}

export default function TutorMap({ tutors, selectedTutor, setSelectedTutor }: TutorMapProps) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: MAPS_CONFIG.apiKey,
  });

  if (loadError) {
    return (
      <div className="bg-red-50 p-4 rounded-md">
        <p className="text-red-700">
          Erreur de chargement de la carte. Veuillez réessayer plus tard.
        </p>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center h-[600px] bg-gray-50">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="relative rounded-lg overflow-hidden shadow-md">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={MAPS_CONFIG.defaultZoom}
        center={MAPS_CONFIG.defaultCenter}
        options={{ styles: MAPS_CONFIG.styles }}
      >
        {tutors.map((tutor) => (
          <MapMarker
            key={tutor.id}
            tutor={tutor}
            onClick={() => setSelectedTutor(tutor)}
          />
        ))}

        {selectedTutor && (
          <MapInfoWindow
            tutor={selectedTutor}
            onClose={() => setSelectedTutor(null)}
          />
        )}
      </GoogleMap>
    </div>
  );
}