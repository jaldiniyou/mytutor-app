import React from 'react';
import { InfoWindow } from '@react-google-maps/api';
import TutorCard from '../TutorCard';
import { TutorType } from '../../types/tutor';
import { MAPS_CONFIG } from '../../config/maps';

interface MapInfoWindowProps {
  tutor: TutorType;
  onClose: () => void;
}

export default function MapInfoWindow({ tutor, onClose }: MapInfoWindowProps) {
  return (
    <InfoWindow
      position={{
        lat: tutor.location?.lat || MAPS_CONFIG.defaultCenter.lat,
        lng: tutor.location?.lng || MAPS_CONFIG.defaultCenter.lng,
      }}
      onCloseClick={onClose}
    >
      <div className="max-w-sm">
        <TutorCard tutor={tutor} />
      </div>
    </InfoWindow>
  );
}