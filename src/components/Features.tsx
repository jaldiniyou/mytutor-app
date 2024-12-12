import React from 'react';
import { Users, Calendar, Video, Award } from 'lucide-react';

const features = [
  {
    name: 'Tuteurs qualifiés',
    description: 'Des experts vérifiés dans leur domaine, passionnés par lenseignement.',
    icon: Users,
  },
  {
    name: 'Flexibilité totale',
    description: 'Planifiez vos cours quand vous voulez, 7j/7, selon vos disponibilités.',
    icon: Calendar,
  },
  {
    name: 'Cours en ligne',
    description: 'Apprenez depuis chez vous avec nos outils de visioconférence intégrés.',
    icon: Video,
  },
  {
    name: 'Satisfaction garantie',
    description: 'Nous vous remboursons si vous nêtes pas satisfait de votre premier cours.',
    icon: Award,
  },
];

export default function Features() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Pourquoi choisir Mytutor ?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Une plateforme conçue pour optimiser votre apprentissage
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute h-12 w-12 rounded-md bg-indigo-600 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}