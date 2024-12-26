import Link from 'next/link';
import { styles } from '@/lib/theme';

export default function TreatmentPage() {
  return (
    <div className="relative">
      {/* Hero Section with Multi-tone Gradient */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0" style={{ background: styles.gradients.multiTone }}></div>
        <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>
        <div className={`${styles.containers.narrow} relative`}>
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-neutral-gray-800 mb-6">
              Medicinsk Vægttab med Wegovy®
            </h1>
            <p className="text-xl md:text-2xl text-neutral-gray-600 mb-8">
              Effektiv og sikker vægttabsbehandling under professionel vejledning
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Treatment Overview */}
      <section className="py-32 relative">
        <div className={styles.containers.default}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-neutral-gray-800 mb-8">
                Om Wegovy® Behandlingen
              </h2>
              <div className="space-y-6 text-neutral-gray-600 text-lg">
                <p className="leading-relaxed">
                  Wegovy® er et banebrydende lægemiddel fra Novo Nordisk, der hjælper dig med at opnå og
                  vedligeholde et betydeligt vægttab. Det virker ved at efterligne kroppens naturlige
                  mæthedshormoner og reducere appetitten.
                </p>
                <p className="leading-relaxed">
                  Behandlingen kombineres med personlig vejledning og opfølgning for at sikre de bedste
                  resultater og minimere eventuelle bivirkninger.
                </p>
              </div>
            </div>
            <div className={`${styles.cards.glass} p-8`}>
              <h3 className="text-2xl font-semibold text-neutral-gray-800 mb-6">
                Dokumenterede Resultater
              </h3>
              <ul className="space-y-4 text-neutral-gray-600">
                <li className="flex items-start gap-4">
                  <span className="text-accent-rose-dark">•</span>
                  <span>15-20% vægttab af udgangsvægten</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-accent-rose-dark">•</span>
                  <span>Reduceret risiko for følgesygdomme</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-accent-rose-dark">•</span>
                  <span>Forbedret livskvalitet og energiniveau</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: styles.gradients.softRose }}></div>
        <div className="absolute inset-0 bg-white/50 backdrop-blur-sm"></div>
        <div className={`${styles.containers.default} relative`}>
          <h2 className="text-4xl font-bold text-neutral-gray-800 mb-16 text-center">
            Medlemsfordele
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Rådgivning af speciallæge og sygeplejerske med vægttabsekspertise',
              'Recept på receptpligtig slankemedicin fra Novo Nordisk eller Eli Lilly',
              'Vores metode til at undgå bivirkninger erfaret fra over 17.000 forløb',
              'Vejledning i injektionsteknik',
              'Ubegrænset antal opfølgende samtaler efter behov',
              'Ingen binding eller opsigelsesperiode',
              'Gratis app for medlemmer'
            ].map((benefit, index) => (
              <div key={index} className={`${styles.cards.glass} p-8 transform hover:-translate-y-1`}>
                <p className="text-neutral-gray-600 text-lg leading-relaxed">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: styles.gradients.multiTone }}></div>
        <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>
        <div className={`${styles.containers.narrow} relative`}>
          <div className="text-center">
            <h2 className="text-4xl font-bold text-neutral-gray-800 mb-8">
              Start din vægttabsrejse i dag
            </h2>
            <p className="text-xl mb-12 text-neutral-gray-700">
              Book en konsultation og få en personlig behandlingsplan
            </p>
            <Link
              href="/booking"
              className={`${styles.buttons.primary} px-12 py-6 text-lg ${styles.decorative.glowHover}`}
            >
              Book konsultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 