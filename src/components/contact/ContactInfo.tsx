import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const contactDetails = [
  {
    icon: MapPin,
    title: 'Adresse',
    content: 'Boulevard Anfaa N°216, Maarif, Casablanca, Maroc',
  },
  {
    icon: Phone,
    title: 'Téléphone',
    content: '+212 687 392 243',
    href: 'tel:+212687392243',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'Mytutor.maroc@gmail.com',
    href: 'mailto:Mytutor.maroc@gmail.com',
  },
  {
    icon: Clock,
    title: 'Heures d\'ouverture',
    content: ['Lundi - Vendredi: 9h00 - 18h00', 'Samedi: 9h00 - 13h00'],
  },
];

export default function ContactInfo() {
  return (
    <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">
        Informations de contact
      </h3>
      <div className="space-y-6">
        {contactDetails.map((detail) => (
          <div key={detail.title} className="flex items-start">
            <detail.icon className="h-6 w-6 text-indigo-600 mt-1" />
            <div className="ml-4">
              <p className="text-gray-900 font-medium">{detail.title}</p>
              {Array.isArray(detail.content) ? (
                detail.content.map((line, index) => (
                  <p key={index} className="text-gray-600 mt-1">
                    {line}
                  </p>
                ))
              ) : detail.href ? (
                <a
                  href={detail.href}
                  className="text-gray-600 hover:text-indigo-600 mt-1"
                >
                  {detail.content}
                </a>
              ) : (
                <p className="text-gray-600 mt-1">{detail.content}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}