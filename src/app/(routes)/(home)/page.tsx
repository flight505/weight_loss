import Link from 'next/link';
import { styles } from '@/lib/theme';

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section with Multi-tone Gradient */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0" style={{ background: styles.gradients.multiTone }}></div>
        <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>
        <div className={`${styles.containers.narrow} relative`}>
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-neutral-gray-800 mb-6">
              Start dit vægttab nu med Dr. Peyman Pedrampour
            </h1>
            <p className="text-xl md:text-2xl text-neutral-gray-600 mb-8">
              Medicinsk vægttab med Wegovy® fra Novo Nordisk i trygge rammer
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/booking"
                className={`${styles.buttons.primary} px-8 py-4 text-lg`}
              >
                Book konsultation
              </Link>
              <Link
                href="/treatment"
                className={`${styles.buttons.outline} px-8 py-4 text-lg`}
              >
                Læs mere om behandlingen
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Key Benefits Section with Glass Cards */}
      <section className="py-32 relative">
        <div className={styles.containers.default}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Erfaren specialist',
                description: 'Dr. Peyman Pedrampour har omfattende erfaring med medicinsk vægttab'
              },
              {
                title: 'Dokumenteret effekt',
                description: 'Wegovy® er klinisk dokumenteret til effektivt vægttab'
              },
              {
                title: 'Personlig opfølgning',
                description: 'Tæt opfølgning og støtte gennem hele dit vægttabsforløb'
              }
            ].map((benefit, index) => (
              <div 
                key={index} 
                className={`${styles.cards.glass} p-10 text-center transform hover:-translate-y-1`}
              >
                <h3 className="text-2xl font-semibold text-neutral-gray-800 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-neutral-gray-600 text-lg">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
