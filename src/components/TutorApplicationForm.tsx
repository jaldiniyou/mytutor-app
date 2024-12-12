import React, { useState } from 'react';
import { Upload, Plus, Trash2 } from 'lucide-react';

interface Subject {
  name: string;
  level: string;
  rate: number;
}

export default function TutorApplicationForm() {
  const [subjects, setSubjects] = useState<Subject[]>([
    { name: '', level: '', rate: 0 },
  ]);

  const addSubject = () => {
    setSubjects([...subjects, { name: '', level: '', rate: 0 }]);
  };

  const removeSubject = (index: number) => {
    setSubjects(subjects.filter((_, i) => i !== index));
  };

  const updateSubject = (index: number, field: keyof Subject, value: string | number) => {
    const newSubjects = [...subjects];
    newSubjects[index] = { ...newSubjects[index], [field]: value };
    setSubjects(newSubjects);
  };

  return (
    <form className="space-y-8">
      {/* Personal Information */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-medium text-gray-900 mb-6">Informations personnelles</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Prénom</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Nom</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Téléphone</label>
            <input
              type="tel"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
        </div>
      </div>

      {/* Qualifications */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-medium text-gray-900 mb-6">Qualifications</h3>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Plus haut niveau d'études</label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
              <option>Bac</option>
              <option>Licence</option>
              <option>Master</option>
              <option>Doctorat</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Diplômes et certifications
              <span className="text-sm text-gray-500 ml-2">(PDF, JPG, PNG, max 5MB)</span>
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-600">
                  <label className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500">
                    <span>Télécharger un fichier</span>
                    <input type="file" className="sr-only" multiple accept=".pdf,.jpg,.jpeg,.png" />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Teaching Subjects */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-medium text-gray-900 mb-6">Matières enseignées</h3>
        <div className="space-y-4">
          {subjects.map((subject, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Matière</label>
                  <input
                    type="text"
                    value={subject.name}
                    onChange={(e) => updateSubject(index, 'name', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Niveau</label>
                  <select
                    value={subject.level}
                    onChange={(e) => updateSubject(index, 'level', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  >
                    <option value="">Sélectionner un niveau</option>
                    <option>Primaire</option>
                    <option>Collège</option>
                    <option>Lycée</option>
                    <option>Université</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Tarif horaire (€)</label>
                  <input
                    type="number"
                    value={subject.rate}
                    onChange={(e) => updateSubject(index, 'rate', Number(e.target.value))}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
              </div>
              {subjects.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeSubject(index)}
                  className="mt-6 p-2 text-gray-400 hover:text-red-500"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addSubject}
            className="mt-4 flex items-center text-sm text-indigo-600 hover:text-indigo-500"
          >
            <Plus className="h-4 w-4 mr-1" />
            Ajouter une matière
          </button>
        </div>
      </div>

      {/* Description */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-medium text-gray-900 mb-6">Présentation</h3>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Décrivez votre expérience et votre approche pédagogique
          </label>
          <textarea
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Parlez de votre expérience d'enseignement, de votre approche pédagogique et de ce qui vous motive à devenir tuteur..."
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Soumettre ma candidature
        </button>
      </div>
    </form>
  );
}