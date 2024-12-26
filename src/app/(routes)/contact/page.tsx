'use client';

import { useState } from 'react';
import { styles } from '@/lib/theme';
import { submitContactForm } from './actions';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({});

    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      message: formData.get('message') as string,
    };

    try {
      const result = await submitContactForm(data);
      setSubmitStatus(result);
      if (result.success) {
        (event.target as HTMLFormElement).reset();
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setSubmitStatus({
        success: false,
        message: 'Der opstod en fejl. Prøv venligst igen senere.'
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0" style={{ background: styles.gradients.multiTone }}></div>
        <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>
        <div className={`${styles.containers.narrow} relative`}>
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-neutral-gray-800 mb-6">
              Kontakt Os
            </h1>
            <p className="text-xl md:text-2xl text-neutral-gray-600 mb-8">
              Vi er her for at hjælpe dig på din vægttabsrejse
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-32 relative">
        <div className={styles.containers.default}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className={`${styles.cards.glass} p-8`}>
              <h2 className="text-3xl font-semibold text-neutral-gray-800 mb-8">
                Send os en besked
              </h2>
              {submitStatus.message && (
                <div className={`p-4 rounded-lg mb-6 ${
                  submitStatus.success 
                    ? 'bg-green-50 text-green-800 border border-green-200'
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}>
                  {submitStatus.message}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-neutral-gray-600 mb-2" htmlFor="name">
                    Navn
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 rounded-lg border border-accent-rose-light focus:border-accent-rose-main focus:outline-none"
                    placeholder="Dit fulde navn"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block text-neutral-gray-600 mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 rounded-lg border border-accent-rose-light focus:border-accent-rose-main focus:outline-none"
                    placeholder="din@email.dk"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block text-neutral-gray-600 mb-2" htmlFor="phone">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 rounded-lg border border-accent-rose-light focus:border-accent-rose-main focus:outline-none"
                    placeholder="+45 12 34 56 78"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block text-neutral-gray-600 mb-2" htmlFor="message">
                    Besked
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border border-accent-rose-light focus:border-accent-rose-main focus:outline-none"
                    placeholder="Skriv din besked her..."
                    required
                    disabled={isSubmitting}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className={`${styles.buttons.primary} w-full py-3 relative`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <span className="animate-spin mr-2">⏳</span>
                      Sender...
                    </span>
                  ) : (
                    'Send besked'
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-12">
              {/* Clinic Info */}
              <div className={`${styles.cards.glass} p-8`}>
                <h3 className="text-2xl font-semibold text-neutral-gray-800 mb-6">
                  Klinik Information
                </h3>
                <div className="space-y-4 text-neutral-gray-600">
                  <p className="flex items-start gap-3">
                    <span className="text-accent-rose-dark">📍</span>
                    <span>
                      SlankLet Klinikken<br />
                      Adresse kommer snart<br />
                      København, Danmark
                    </span>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="text-accent-rose-dark">📞</span>
                    <a href="tel:+4512345678" className="hover:text-accent-rose-dark">
                      +45 12 34 56 78
                    </a>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="text-accent-rose-dark">✉️</span>
                    <a href="mailto:info@slanklet.dk" className="hover:text-accent-rose-dark">
                      info@slanklet.dk
                    </a>
                  </p>
                </div>
              </div>

              {/* Opening Hours */}
              <div className={`${styles.cards.glass} p-8`}>
                <h3 className="text-2xl font-semibold text-neutral-gray-800 mb-6">
                  Åbningstider
                </h3>
                <div className="space-y-2 text-neutral-gray-600">
                  <p className="flex justify-between">
                    <span>Mandag - Torsdag:</span>
                    <span>9:00 - 17:00</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Fredag:</span>
                    <span>9:00 - 16:00</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Lørdag - Søndag:</span>
                    <span>Lukket</span>
                  </p>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className={`${styles.cards.glass} aspect-video relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-br from-accent-rose-light to-accent-peach-light flex items-center justify-center">
                  <span className="text-neutral-gray-600">Kort kommer snart</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 