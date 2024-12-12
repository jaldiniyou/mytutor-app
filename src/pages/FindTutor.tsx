import React, { useState } from 'react';
import { Map, List } from 'lucide-react';
import SearchFilters from '../components/SearchFilters';
import TutorCard from '../components/TutorCard';
import TutorMap from '../components/map/TutorMap';

// Enhanced mock data with location information
const MOCK_TUTORS = [
  {
    id: '1',
    name: 'Marie Dubois',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    subjects: ['Mathématiques', 'Physique'],
    rating: 4.9,
    reviewCount: 128,
    hourlyRate: 25,
    languages: ['Français', 'Anglais'],
    description: 'Professeure agrégée de mathématiques avec 8 ans d\'expérience. Spécialisée dans la préparation aux examens et concours.',
    location: { lat: 33.5731, lng: -7.5898 },
    distance: '2.5 km',
  },
  {
    id: '2',
    name: 'Thomas Martin',
    avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    subjects: ['Français', 'Histoire', 'Philosophie'],
    rating: 4.8,
    reviewCount: 89,
    hourlyRate: 30,
    languages: ['Français', 'Espagnol'],
    description: 'Docteur en lettres modernes, j\'accompagne les élèves dans leur progression en français et en culture générale.',
    location: { lat: 33.5821, lng: -7.6321 },
    distance: '3.8 km',
  },
  {
    id: '3',
    name: 'Sophie Bernard',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    subjects: ['Anglais', 'Allemand'],
    rating: 4.7,
    reviewCount: 56,
    hourlyRate: 28,
    languages: ['Français', 'Anglais', 'Allemand'],
    description: 'Professeure certifiée en langues vivantes, je propose des cours ludiques et efficaces pour progresser rapidement.',
    location: { lat: 33.5932, lng: -7.6198 },
    distance: '1.2 km',
  },
];

export default function FindTutor() {
  const [isMapView, setIsMapView] = useState(false);
  const [selectedTutor, setSelectedTutor] = useState(null);
  const [searchRadius, setSearchRadius] = useState(10);
  const [sortBy, setSortBy] = useState('distance');
  const [favorites, setFavorites] = useState<string[]>([]);

  const handleSearch = (filters: any) => {
    console.log('Search filters:', filters);
  };

  const toggleFavorite = (tutorId: string) => {
    setFavorites((prev) =>
      prev.includes(tutorId)
        ? prev.filter((id) => id !== tutorId)
        : [...prev, tutorId]
    );
  };

  const sortTutors = (tutors: any[]) => {
    return [...tutors].sort((a, b) => {
      switch (sortBy) {
        case 'distance':
          return parseFloat(a.distance) - parseFloat(b.distance);
        case 'rating':
          return b.rating - a.rating;
        case 'price':
          return a.hourlyRate - b.hourlyRate;
        default:
          return 0;
      }
    });
  };

  const sortedTutors = sortTutors(MOCK_TUTORS);

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar with filters */}
          <div className="md:w-80">
            <SearchFilters onSearch={handleSearch} />
            
            {/* Additional Filters */}
            <div className="mt-6 bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Options de recherche</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Rayon de recherche</label>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={searchRadius}
                    onChange={(e) => setSearchRadius(parseInt(e.target.value))}
                    className="w-full mt-2"
                  />
                  <span className="text-sm text-gray-500">{searchRadius} km</span>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Trier par</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  >
                    <option value="distance">Distance</option>
                    <option value="rating">Note</option>
                    <option value="price">Prix</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1">
            <div className="mb-6">
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Tuteurs disponibles</h1>
                  <p className="mt-1 text-sm text-gray-500">
                    {sortedTutors.length} tuteurs correspondent à vos critères
                  </p>
                </div>
                
                <div className="flex space-x-2">
                  <button
                    onClick={() => setIsMapView(false)}
                    className={`p-2 rounded-md ${
                      !isMapView ? 'bg-indigo-600 text-white' : 'bg-white text-gray-600'
                    }`}
                  >
                    <List className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => setIsMapView(true)}
                    className={`p-2 rounded-md ${
                      isMapView ? 'bg-indigo-600 text-white' : 'bg-white text-gray-600'
                    }`}
                  >
                    <Map className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            {isMapView ? (
              <TutorMap
                tutors={sortedTutors}
                selectedTutor={selectedTutor}
                setSelectedTutor={setSelectedTutor}
              />
            ) : (
              <div className="space-y-6">
                {sortedTutors.map((tutor) => (
                  <div key={tutor.id} className="relative">
                    <TutorCard tutor={tutor} />
                    <button
                      onClick={() => toggleFavorite(tutor.id)}
                      className={`absolute top-4 right-4 p-2 rounded-full ${
                        favorites.includes(tutor.id)
                          ? 'bg-red-100 text-red-600'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      ❤
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}