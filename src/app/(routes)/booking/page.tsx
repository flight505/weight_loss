import { styles } from '@/lib/theme';

export default function BookingPage() {
  return (
    <div className="relative">
      {/* Hero Section with Multi-tone Gradient */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0" style={{ background: styles.gradients.multiTone }}></div>
        <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>
        <div className={`${styles.containers.narrow} relative`}>
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-neutral-gray-800 mb-6">
              Book Konsultation
            </h1>
            <p className="text-xl md:text-2xl text-neutral-gray-600 mb-8">
              Tag det første skridt mod dit vægttabsmål
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* BMI Calculator and Booking Form */}
      <section className="py-32 relative">
        <div className={styles.containers.default}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* BMI Calculator */}
            <div className={`${styles.cards.glass} p-8`}>
              <h2 className="text-2xl font-semibold text-neutral-gray-800 mb-6">
                Beregn dit BMI
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-neutral-gray-600 mb-2">Højde (cm)</label>
                  <input
                    type="number"
                    className="w-full px-4 py-2 rounded-lg border border-accent-rose-light focus:border-accent-rose-main focus:outline-none"
                    placeholder="F.eks. 170"
                  />
                </div>
                <div>
                  <label className="block text-neutral-gray-600 mb-2">Vægt (kg)</label>
                  <input
                    type="number"
                    className="w-full px-4 py-2 rounded-lg border border-accent-rose-light focus:border-accent-rose-main focus:outline-none"
                    placeholder="F.eks. 80"
                  />
                </div>
                <button
                  className={`${styles.buttons.primary} w-full py-3`}
                >
                  Beregn BMI
                </button>
                <div className="text-center text-neutral-gray-600">
                  Dit BMI: <span className="font-semibold">--</span>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div className={`${styles.cards.glass} p-8`}>
              <h2 className="text-2xl font-semibold text-neutral-gray-800 mb-6">
                Book din første konsultation
              </h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-neutral-gray-600 mb-2">Navn</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-accent-rose-light focus:border-accent-rose-main focus:outline-none"
                    placeholder="Dit fulde navn"
                  />
                </div>
                <div>
                  <label className="block text-neutral-gray-600 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg border border-accent-rose-light focus:border-accent-rose-main focus:outline-none"
                    placeholder="din@email.dk"
                  />
                </div>
                <div>
                  <label className="block text-neutral-gray-600 mb-2">Telefon</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 rounded-lg border border-accent-rose-light focus:border-accent-rose-main focus:outline-none"
                    placeholder="+45 12 34 56 78"
                  />
                </div>
                <div>
                  <label className="block text-neutral-gray-600 mb-2">Besked (valgfrit)</label>
                  <textarea
                    className="w-full px-4 py-2 rounded-lg border border-accent-rose-light focus:border-accent-rose-main focus:outline-none h-32"
                    placeholder="Fortæl os gerne lidt om dine mål og eventuelle spørgsmål"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className={`${styles.buttons.primary} w-full py-3`}
                >
                  Send booking forespørgsel
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 