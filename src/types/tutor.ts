export interface Location {
  lat: number;
  lng: number;
}

export interface TutorType {
  id: string;
  name: string;
  avatar: string;
  subjects: string[];
  rating: number;
  reviewCount: number;
  hourlyRate: number;
  languages: string[];
  description: string;
  location?: Location;
  distance: string;
}