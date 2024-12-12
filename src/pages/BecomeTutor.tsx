import React from 'react';
import { ChevronRight, BookOpen, DollarSign, Clock, Users } from 'lucide-react';
import TutorApplicationForm from '../components/TutorApplicationForm';

const benefits = [
  {
    icon: Clock,
    title: 'Flexibilité totale',
    description: 'Définissez vos propres horaires et enseignez quand vous le souhaitez',
  },
  {
    icon: DollarSign,
    title: 'Revenus attractifs',
    description: 'Fixez vos tarifs et gagnez jusqu à 2000€ par mois',
  },
  {
    icon: Users,
    title: 'Communauté active',
    description: 'Rejoignez une communauté de tuteurs passionnés et échangez vos expériences',
  },
  {
    icon: BookOpen,
    title: 'Développement professionnel',
    description: 'Améliorez vos compétences pédagogiques et enrichissez votre CV',
  },
];

const stats = [
  { value: '2000+', label: 'Tuteurs actifs' },
  { value: '50000+', label: 'Cours donnés' },
  { value: '95%', label: 'Taux de satisfaction' },
  { value: '35€/h', label: 'Tarif moyen' },
];

export default function BecomeTutor() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <div className="relative bg-indigo-700">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover mix-blend-multiply"
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Teaching background"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Devenez tuteur sur EduConnect
          </h1>
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
            Partagez votre expertise, inspirez la prochaine génération et gagnez un revenu complémentaire
            en enseignant ce que vous aimez.
          </p>
          <div className="mt-10">
            <a
              href="#application-form"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50"
            >
              Commencer maintenant
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-extrabold text-indigo-600">{stat.value}</div>
                <div className="mt-2 text-sm font-medium text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Pourquoi devenir tuteur ?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Découvrez les avantages de rejoindre notre plateforme
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="relative">
                <div className="absolute h-12 w-12 rounded-md bg-indigo-600 flex items-center justify-center">
                  <benefit.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div className="ml-16 pt-1">
                  <h3 className="text-lg font-medium text-gray-900">{benefit.title}</h3>
                  <p className="mt-2 text-base text-gray-500">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Form Section */}
      <div id="application-form" className="bg-gray-50 py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Rejoignez notre communauté de tuteurs
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Remplissez le formulaire ci-dessous pour commencer votre aventure
            </p>
          </div>
          <TutorApplicationForm />
        </div>
      </div>
    </main>
  );
}