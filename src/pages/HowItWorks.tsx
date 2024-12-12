import React from 'react';
import { BookOpen, Search, Calendar, Video, MessageCircle, Star } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Trouvez votre tuteur idéal',
    description: 'Parcourez les profils de nos tuteurs qualifiés et choisissez celui qui correspond le mieux à vos besoins en fonction de la matière, du niveau et des avis.',
  },
  {
    icon: Calendar,
    title: 'Réservez votre cours',
    description: 'Sélectionnez un créneau horaire qui vous convient dans le calendrier du tuteur et effectuez votre réservation en quelques clics.',
  },
  {
    icon: Video,
    title: 'Suivez votre cours en ligne',
    description: 'Connectez-vous à la plateforme au moment prévu et profitez de votre cours particulier en visioconférence avec des outils pédagogiques interactifs.',
  },
  {
    icon: MessageCircle,
    title: 'Échangez avec votre tuteur',
    description: 'Gardez le contact avec votre tuteur entre les cours via notre messagerie intégrée pour poser vos questions ou planifier les prochaines sessions.',
  },
  {
    icon: Star,
    title: 'Donnez votre avis',
    description: 'Après chaque cours, partagez votre expérience et notez votre tuteur pour aider les autres élèves dans leur choix.',
  },
  {
    icon: BookOpen,
    title: 'Progressez à votre rythme',
    description: 'Suivez vos progrès et accédez à l\'historique de vos cours. Adaptez votre planning selon vos objectifs d\'apprentissage.',
  },
];

export default function HowItWorks() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl">
              Comment fonctionne Mytutor ?
            </h1>
            <p className="mt-6 text-xl max-w-2xl mx-auto">
              Une plateforme simple et intuitive pour apprendre avec des tuteurs experts
            </p>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="bg-white rounded-lg shadow-lg p-8 transform transition-transform hover:scale-105"
            >
              <div className="h-12 w-12 rounded-md bg-indigo-600 text-white flex items-center justify-center mb-6">
                <step.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {index + 1}. {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Prêt à commencer votre apprentissage ?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Rejoignez des milliers d'élèves qui progressent chaque jour avec Mytutor
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <button className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors">
                Trouver un tuteur
              </button>
              <button className="bg-white text-indigo-600 px-6 py-3 rounded-md border border-indigo-600 hover:bg-indigo-50 transition-colors">
                Devenir tuteur
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}