'use client';

import { useState } from 'react';

export default function BookingPage() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [bmiMessage, setBmiMessage] = useState('');

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = parseInt(height) / 100;
      const weightInKg = parseInt(weight);
      const calculatedBMI = weightInKg / (heightInMeters * heightInMeters);
      setBmi(Math.round(calculatedBMI * 10) / 10);

      // Set message based on BMI
      if (calculatedBMI < 25) {
        setBmiMessage('Du er normalvægtig og ikke egnet til medicinsk vægttab');
      } else if (calculatedBMI >= 25 && calculatedBMI < 30) {
        setBmiMessage('Du er lettere overvægtig. Kontakt os for at vurdere din egnethed til behandling.');
      } else {
        setBmiMessage('Du er egnet til medicinsk vægttab. Book en konsultation for at komme i gang.');
      }
    }
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Book konsultation
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Start din rejse mod et sundere liv med Dr. Peyman Pedrampour
            </p>
          </div>
        </div>
      </section>

      {/* BMI Calculator Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Beregn dit BMI
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="space-y-4">
                <div>
                  <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-1">
                    Højde (cm)
                  </label>
                  <input
                    type="number"
                    id="height"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="F.eks. 170"
                  />
                </div>
                <div>
                  <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-1">
                    Vægt (kg)
                  </label>
                  <input
                    type="number"
                    id="weight"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="F.eks. 70"
                  />
                </div>
                <button
                  onClick={calculateBMI}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Beregn BMI
                </button>
                {bmi && (
                  <div className="mt-4 p-4 bg-gray-50 rounded-md">
                    <p className="text-lg font-semibold mb-2">Dit BMI er: {bmi}</p>
                    <p className="text-gray-600">{bmiMessage}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Book din første konsultation
            </h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Fulde navn
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Besked (valgfrit)
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Send booking forespørgsel
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Praktisk information
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Konsultation</h3>
                  <p className="text-gray-600">
                    Din første konsultation varer ca. 30 minutter. Her gennemgår vi din sundhedstilstand,
                    diskuterer dine mål og lægger en behandlingsplan.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Forberedelse</h3>
                  <p className="text-gray-600">
                    Medbring gerne en liste over eventuel medicin du tager, samt relevante helbredsoplysninger.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Betaling</h3>
                  <p className="text-gray-600">
                    Vi accepterer alle almindelige betalingskort. Prisen for første konsultation er 800 kr.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 