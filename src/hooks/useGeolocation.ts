import { useState } from 'react';

interface Location {
  city: string;
  region: string;
  latitude: number;
  longitude: number;
}

export function useGeolocation() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getCurrentLocation = async (): Promise<Location | null> => {
    setLoading(true);
    setError(null);

    try {
      const position = await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      // In a real app, you would use a reverse geocoding service here
      // For demo purposes, we'll return mock data
      return {
        city: 'Casablanca',
        region: 'Casablanca-Settat',
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
    } catch (err) {
      setError('Impossible d\'obtenir votre position');
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { getCurrentLocation, loading, error };
}