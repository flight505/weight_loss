import Image from 'next/image';
import Link from 'next/link';
import { styles } from '@/lib/theme';
import BeforeAfterSlider from '@/components/before-after/slider';

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[80vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/Weight Loss Expectations.png"
            alt="Weight loss transformation"
            fill
            className="object-cover object-right-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/60"></div>
        </div>

        <div className="relative z-10 w-full">
          <div className="max-w-2xl mx-6 md:mx-12 lg:mx-24">
            {/* Main Content */}
            <div className="space-y-4">
              <h2 className="text-base md:text-lg font-medium text-accent-rose-dark tracking-wide">
                OVERVÆGT & VÆGTTAB
              </h2>

              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-gray-800 mb-2">
                  Start dit vægttab nu
                </h1>
                <p className="text-lg md:text-xl text-neutral-gray-600 font-light">
                  - online og uden sult
                </p>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-rose-dark"></div>
                <p className="text-lg md:text-xl font-semibold text-accent-rose-dark">
                  Danmarks bedst bedømte vægttabsklinik
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-3 pt-4">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-rose-main mt-2"></div>
                  <p className="text-base md:text-lg text-neutral-gray-700">
                    Vægttab eller pengene tilbage – har du ikke tabt dig efter 3 måneder, refunderer vi dit abonnement
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-rose-main mt-2"></div>
                  <p className="text-base md:text-lg text-neutral-gray-700">
                    Gratis app og stort Facebook community med støtte og inspiration
                  </p>
                </div>
              </div>

              {/* Doctor Info */}
              <div className="pt-6 border-t border-neutral-gray-200">
                <h2 className="text-xl font-semibold text-neutral-gray-800 mb-2">
                  Start dit vægttab nu med Dr. Peyman Pedrampour
                </h2>
                <p className="text-base md:text-lg text-neutral-gray-600">
                  Medicinsk vægttab med Wegovy® fra Novo Nordisk i trygge rammer
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Link 
                  href="/booking"
                  className={`${styles.buttons.primary} px-6 py-3 text-base hover:scale-105 transition-transform`}
                >
                  Se om du er egnet
                </Link>
                <Link
                  href="/contact"
                  className="text-neutral-gray-700 hover:text-neutral-gray-900 underline underline-offset-4 py-3 text-base"
                >
                  Kontakt os
                </Link>
              </div>

              {/* Price Tag */}
              <div className="absolute top-6 right-6 md:top-8 md:right-8 bg-accent-rose-dark text-white rounded-full p-6 text-center transform rotate-6 shadow-lg">
                <p className="text-base font-medium">Medlemskab</p>
                <p className="text-2xl font-bold">kun 249,-</p>
                <p className="text-sm">hver 4. uge</p>
                <p className="text-xs font-light">- ingen binding -</p>
              </div>
            </div>
          </div>
        </div>
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
                className={`${styles.cards.glass} p-10 text-center transform hover:-translate-y-2 transition-transform duration-300`}
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

      {/* Getting Started Steps Section */}
      <section className="py-32 relative bg-neutral-50">
        <div className={styles.containers.default}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-gray-800 mb-4">
              Sådan kommer du i gang
            </h2>
            <p className="text-xl text-neutral-gray-600 max-w-2xl mx-auto">
              Til video-forundersøgelsen
            </p>
            <p className="text-lg text-neutral-gray-600 max-w-3xl mx-auto mt-4">
              Hvis du ligger i den lave ende af BMI-grænsen, kan vi bede dig om at vise dig i tætsiddende tøj.
              Eventuelt skal du kunne trække op i tøjet og fremvise maven, veje dig og måle taljen under konsultationen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
            {[
              {
                icon: "badge",
                title: "1. Tegn et medlemskab",
                description: "Vi mailer dig et oprettelseslink til Patientportalen."
              },
              {
                icon: "medical_services",
                title: "2. Book en tid",
                description: "Du får spørgeskema og velkomstmail. Vi gennemgår mål, kost, livsstil, mv. via video."
              },
              {
                icon: "medication",
                title: "3. Du får udskrevet en recept",
                description: "på vægttabsmedicin."
              },
              {
                icon: "forum",
                title: "4. Dit online vægttabsforløb starter",
                description: "Du har ubegrænset adgang til os."
              }
            ].map((step, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 rounded-full bg-accent-rose-light flex items-center justify-center mb-6 group-hover:bg-accent-rose-main transition-colors duration-300">
                  <span className="material-symbols-outlined text-4xl text-white">
                    {step.icon}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-neutral-gray-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-neutral-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/booking"
              className={`${styles.buttons.primary} px-8 py-4 text-lg inline-block hover:scale-105 transition-transform`}
            >
              Kom i gang nu
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-32 relative bg-neutral-50">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-gray-800 mb-4">
            Succeshistorier
          </h2>
          <p className="text-xl text-neutral-gray-600 max-w-2xl mx-auto">
            Se de fantastiske resultater og læs om vores patienters rejse mod et sundere liv
          </p>
        </div>
        <BeforeAfterSlider />
      </section>
    </div>
  );
}
