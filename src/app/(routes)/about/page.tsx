import Link from 'next/link';
import { styles } from '@/lib/theme';

export default function AboutPage() {
  return (
    <div className="relative">
      {/* Hero Section with Multi-tone Gradient */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0" style={{ background: styles.gradients.multiTone }}></div>
        <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>
        <div className={`${styles.containers.narrow} relative`}>
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-neutral-gray-800 mb-6">
              Mød Dr. Peyman Pedrampour
            </h1>
            <p className="text-xl md:text-2xl text-neutral-gray-600 mb-8">
              Specialist i medicinsk vægttab og livsstilsændringer
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Doctor Profile Section with Glass Effect */}
      <section className="py-32 relative">
        <div className={styles.containers.default}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className={`${styles.cards.glass} aspect-[3/4] relative overflow-hidden transform hover:scale-[1.02] transition-all duration-500`}>
              <div className="absolute inset-0 bg-gradient-to-b from-accent-rose-light/50 to-accent-peach-light/50 flex items-center justify-center backdrop-blur-sm">
                <span className="text-neutral-gray-600 font-medium">Billede af Dr. Peyman</span>
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-neutral-gray-800 mb-8">
                Ekspertise og Erfaring
              </h2>
              <div className="space-y-6 text-neutral-gray-600 text-lg">
                <p className="leading-relaxed">
                  Dr. Peyman Pedrampour er en anerkendt specialist inden for medicinsk vægttab og har hjulpet
                  hundredvis af patienter med at opnå deres vægttabsmål gennem sikker og effektiv behandling.
                </p>
                <p className="leading-relaxed">
                  Med omfattende erfaring i brugen af Wegovy® og andre GLP-1 præparater, tilbyder Dr. Pedrampour
                  skræddersyede behandlingsforløb, der tager højde for den enkelte patients behov og livssituation.
                </p>
                <p className="leading-relaxed">
                  Vores tilgang kombinerer medicinsk ekspertise med personlig vejledning for at sikre langvarige
                  resultater og en sundere livsstil.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics with Elegant Glass Cards */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: styles.gradients.softRose }}></div>
        <div className="absolute inset-0 bg-white/50 backdrop-blur-sm"></div>
        <div className={`${styles.containers.default} relative`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                metric: '95%',
                description: 'af vores patienter opnår betydeligt vægttab inden for de første 3 måneder'
              },
              {
                metric: '5-15%',
                description: 'gennemsnitligt vægttab af udgangsvægten inden for 3-6 måneder'
              },
              {
                metric: '24/7',
                description: 'support og vejledning gennem hele behandlingsforløbet'
              }
            ].map((item, index) => (
              <div key={index} className={`${styles.cards.glass} p-10 transform hover:-translate-y-1`}>
                <div className="text-5xl font-bold text-accent-rose-dark mb-6">{item.metric}</div>
                <p className="text-neutral-gray-600 text-lg">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach with Decorative Cards */}
      <section className="py-32 bg-white relative">
        <div className={styles.containers.narrow}>
          <h2 className="text-4xl font-bold text-neutral-gray-800 mb-16 text-center">
            Vores Tilgang
          </h2>
          <div className="space-y-8">
            {[
              {
                title: 'Personlig Behandling',
                description: 'Vi tror på, at hver patient er unik. Derfor skræddersyr vi behandlingen til dine specifikke behov, mål og livssituation. Vi tager os tid til at lytte og forstå din historie.'
              },
              {
                title: 'Videnskabeligt Funderet',
                description: 'Vores behandlingsmetoder er baseret på den nyeste forskning inden for medicinsk vægttab. Vi arbejder kun med godkendte og dokumenteret effektive behandlinger.'
              },
              {
                title: 'Langsigtet Support',
                description: 'Vi er med dig gennem hele rejsen. Fra den første konsultation til opfølgende samtaler og løbende support. Dit succesfulde vægttab er vores mission.'
              }
            ].map((item, index) => (
              <div key={index} 
                className={`${styles.cards.glass} p-10 transform hover:-translate-y-1 ${styles.decorative.glowHover}`}>
                <h3 className="text-2xl font-semibold text-neutral-gray-800 mb-4">
                  {item.title}
                </h3>
                <p className="text-neutral-gray-600 text-lg leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Stories with Elegant Design */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: styles.gradients.peachToRose }}></div>
        <div className="absolute inset-0 bg-white/50 backdrop-blur-sm"></div>
        <div className={`${styles.containers.narrow} relative`}>
          <h2 className="text-4xl font-bold text-neutral-gray-800 mb-16 text-center">
            Hvad Vores Patienter Siger
          </h2>
          <div className={`${styles.cards.glass} p-12 ${styles.decorative.glowHover}`}>
            <p className="text-neutral-gray-600 italic mb-10 leading-relaxed text-xl">
              &ldquo;Dr. Peyman og hans team har givet mig den støtte og vejledning, jeg havde brug for til at
              opnå mit vægttabsmål. Deres professionelle tilgang og konstante opbakning har gjort hele
              forskellen i min rejse mod et sundere liv.&rdquo;
            </p>
            <div className="flex items-center justify-center space-x-6">
              <div className="w-20 h-20 bg-accent-rose-light rounded-full flex items-center justify-center shadow-glow">
                <span className="text-accent-rose-dark font-semibold text-2xl">MH</span>
              </div>
              <div>
                <p className="font-semibold text-neutral-gray-800 text-xl">Maria H.</p>
                <p className="text-neutral-gray-600 text-lg">Tabte 15 kg på 4 måneder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Elegant Gradient */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: styles.gradients.multiTone }}></div>
        <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>
        <div className={`${styles.containers.narrow} relative`}>
          <div className="text-center">
            <h2 className="text-4xl font-bold text-neutral-gray-800 mb-8">
              Tag det første skridt mod et sundere liv
            </h2>
            <p className="text-xl mb-12 text-neutral-gray-700">
              Book en konsultation med Dr. Peyman Pedrampour i dag
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