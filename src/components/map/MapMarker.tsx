import React from 'react';
import { Marker } from '@react-google-maps/api';
import { TutorType } from '../../types/tutor';
import { MAPS_CONFIG } from '../../config/maps';
import { createMarkerIcon } from '../../utils/mapUtils';

interface MapMarkerProps {
  tutor: TutorType;
  onClick: () => void;
}

export default function MapMarker({ tutor, onClick }: MapMarkerProps) {
  return (
    <Marker
      key={tutor.id}
      position={{
        lat: tutor.location?.lat || MAPS_CONFIG.defaultCenter.lat,
        lng: tutor.location?.lng || MAPS_CONFIG.defaultCenter.lng,
      }}
      onClick={onClick}
      icon={createMarkerIcon()}
    />
  );
}