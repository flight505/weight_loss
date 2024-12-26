import { styles } from '@/lib/theme';
import BeforeAfterSlider from '@/components/testimonials/before-after-slider';

export default function TreatmentPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0" style={{ background: styles.gradients.multiTone }}></div>
        <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>
        <div className={`${styles.containers.narrow} relative`}>
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-neutral-gray-800 mb-6">
              Medicinsk Vægttab med Wegovy®
            </h1>
            <p className="text-xl md:text-2xl text-neutral-gray-600 mb-8">
              Dokumenteret effektiv behandling med personlig opfølgning
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Treatment Information */}
      <section className="py-24 bg-white">
        <div className={styles.containers.narrow}>
          <div className="space-y-16">
            <div className={`${styles.cards.glass} p-10 space-y-6`}>
              <h2 className="text-3xl font-bold text-neutral-gray-800">
                Om Wegovy® Behandling
              </h2>
              <div className="space-y-4 text-neutral-gray-600 text-lg">
                <p>
                  Wegovy® er et banebrydende lægemiddel fra Novo Nordisk, der hjælper med vægttab
                  ved at efterligne kroppens naturlige mæthedsfornemmelse. Behandlingen gives som
                  en ugentlig injektion og har vist imponerende resultater i kliniske studier.
                </p>
                <p>
                  Kombineret med vores personlige vejledning og opfølgning, hjælper vi dig med at
                  opnå og vedligeholde et sundt vægttab.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className={`${styles.cards.glass} p-10 space-y-6`}>
                <h3 className="text-2xl font-semibold text-neutral-gray-800">
                  Fordele ved Behandlingen
                </h3>
                <ul className="space-y-4 text-neutral-gray-600">
                  <li className="flex items-start space-x-3">
                    <span className="text-accent-rose-main">•</span>
                    <span>Dokumenteret effektivt vægttab</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-accent-rose-main">•</span>
                    <span>Reduceret appetit og madtrang</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-accent-rose-main">•</span>
                    <span>Bedre kontrol over spisevaner</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-accent-rose-main">•</span>
                    <span>Langsigtet vægtvedligeholdelse</span>
                  </li>
                </ul>
              </div>

              <div className={`${styles.cards.glass} p-10 space-y-6`}>
                <h3 className="text-2xl font-semibold text-neutral-gray-800">
                  Vores Support
                </h3>
                <ul className="space-y-4 text-neutral-gray-600">
                  <li className="flex items-start space-x-3">
                    <span className="text-accent-rose-main">•</span>
                    <span>Personlig vejledning og opfølgning</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-accent-rose-main">•</span>
                    <span>Løbende tilpasning af behandlingen</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-accent-rose-main">•</span>
                    <span>24/7 support ved behov</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-accent-rose-main">•</span>
                    <span>Vejledning i kost og livsstil</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-24 bg-gradient-to-b from-white to-accent-rose-light/30">
        <div className={styles.containers.default}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-gray-800 mb-6">
              Vores Patienters Succeser
            </h2>
            <p className="text-xl text-neutral-gray-600">
              Se de imponerende resultater fra vores tilfredse patienter
            </p>
          </div>
          <BeforeAfterSlider />
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="py-24 bg-white">
        <div className={styles.containers.narrow}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-gray-800 mb-6">
              Medlemsfordele
            </h2>
            <p className="text-xl text-neutral-gray-600">
              Som medlem hos SlankLet.dk får du adgang til en omfattende behandlingspakke
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              'Rådgivning af speciallæge og sygeplejerske med vægttabsekspertise',
              'Recept på receptpligtig slankemedicin fra Novo Nordisk eller Eli Lilly',
              'Vores metode til at undgå bivirkninger erfaret fra over 17.000 forløb',
              'Vejledning i injektionsteknik',
              'Ubegrænset antal opfølgende samtaler efter behov',
              'Ingen binding eller opsigelsesperiode',
              'Gratis app for medlemmer',
            ].map((benefit, index) => (
              <div
                key={index}
                className={`${styles.cards.glass} p-8 transform hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent-rose-light rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-accent-rose-dark font-semibold">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-neutral-gray-600 text-lg">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 