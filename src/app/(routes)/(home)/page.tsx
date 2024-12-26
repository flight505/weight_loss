import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Start dit vægttab nu med Dr. Peyman Pedrampour
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Medicinsk vægttab med Wegovy® fra Novo Nordisk i trygge rammer
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/booking"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Book konsultation
              </Link>
              <Link
                href="/treatment"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Læs mere om behandlingen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Erfaren specialist
              </h3>
              <p className="text-gray-600">
                Dr. Peyman Pedrampour har omfattende erfaring med medicinsk vægttab
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Dokumenteret effekt
              </h3>
              <p className="text-gray-600">
                Wegovy® er klinisk dokumenteret til effektivt vægttab
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Personlig opfølgning
              </h3>
              <p className="text-gray-600">
                Tæt opfølgning og støtte gennem hele dit vægttabsforløb
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 