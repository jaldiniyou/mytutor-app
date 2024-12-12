import React from 'react';
import ContactInfo from './contact/ContactInfo';
import ContactForm from './contact/ContactForm';
import Map from './contact/Map';

export default function Contact() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contactez-nous
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Notre équipe est là pour vous aider et répondre à toutes vos questions
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2">
          <ContactInfo />
          <ContactForm />
        </div>

        <Map />
      </div>
    </div>
  );
}