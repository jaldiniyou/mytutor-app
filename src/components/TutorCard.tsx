import React from 'react';
import { Star, Clock, Globe } from 'lucide-react';

interface TutorCardProps {
  tutor: {
    id: string;
    name: string;
    avatar: string;
    subjects: string[];
    rating: number;
    reviewCount: number;
    hourlyRate: number;
    languages: string[];
    description: string;
  };
}

export default function TutorCard({ tutor }: TutorCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex items-start space-x-4">
          <img
            src={tutor.avatar}
            alt={tutor.name}
            className="h-16 w-16 rounded-full object-cover"
          />
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900">{tutor.name}</h3>
            <div className="flex items-center mt-1">
              <Star className="h-4 w-4 text-yellow-400" />
              <span className="ml-1 text-sm text-gray-600">
                {tutor.rating} ({tutor.reviewCount} avis)
              </span>
            </div>
            <div className="flex items-center mt-1 text-sm text-gray-500">
              <Clock className="h-4 w-4 mr-1" />
              <span>{tutor.hourlyRate}€/heure</span>
              <Globe className="h-4 w-4 ml-4 mr-1" />
              <span>{tutor.languages.join(', ')}</span>
            </div>
          </div>
        </div>
        
        <div className="mt-4">
          <div className="flex flex-wrap gap-2">
            {tutor.subjects.map((subject) => (
              <span
                key={subject}
                className="px-2 py-1 text-xs font-medium text-indigo-600 bg-indigo-50 rounded-full"
              >
                {subject}
              </span>
            ))}
          </div>
          <p className="mt-3 text-sm text-gray-600 line-clamp-2">{tutor.description}</p>
        </div>
        
        <div className="mt-6">
          <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
            Réserver un cours
          </button>
        </div>
      </div>
    </div>
  );
}