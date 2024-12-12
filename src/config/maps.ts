// Google Maps configuration
export const MAPS_CONFIG = {
  apiKey: 'AIzaSyDNA_UMOOpBkmV-fQ2GV8uO-b8KBHzGjfk',
  defaultCenter: {
    lat: 33.5731, // Casablanca coordinates
    lng: -7.5898,
  },
  defaultZoom: 12,
  styles: [
    {
      featureType: 'poi',
      elementType: 'labels',
      stylers: [{ visibility: 'off' }],
    },
  ],
};