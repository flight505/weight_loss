import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Mød Dr. Peyman Pedrampour
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Specialist i medicinsk vægttab og livsstilsændringer
            </p>
          </div>
        </div>
      </section>

      {/* Doctor Profile Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              {/* Replace with actual image of Dr. Peyman */}
              <div className="absolute inset-0 bg-blue-100 flex items-center justify-center">
                <span className="text-blue-500">Billede af Dr. Peyman</span>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Ekspertise og Erfaring
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Dr. Peyman Pedrampour er en anerkendt specialist inden for medicinsk vægttab og har hjulpet
                  hundredvis af patienter med at opnå deres vægttabsmål gennem sikker og effektiv behandling.
                </p>
                <p>
                  Med omfattende erfaring i brugen af Wegovy® og andre GLP-1 præparater, tilbyder Dr. Pedrampour
                  skræddersyede behandlingsforløb, der tager højde for den enkelte patients behov og livssituation.
                </p>
                <p>
                  Vores tilgang kombinerer medicinsk ekspertise med personlig vejledning for at sikre langvarige
                  resultater og en sundere livsstil.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
                <p className="text-gray-600">
                  af vores patienter opnår betydeligt vægttab inden for de første 3 måneder
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">5-15%</div>
                <p className="text-gray-600">
                  gennemsnitligt vægttab af udgangsvægten inden for 3-6 måneder
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                <p className="text-gray-600">
                  support og vejledning gennem hele behandlingsforløbet
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Vores Tilgang
            </h2>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Personlig Behandling
                </h3>
                <p className="text-gray-600">
                  Vi tror på, at hver patient er unik. Derfor skræddersyr vi behandlingen til dine specifikke
                  behov, mål og livssituation. Vi tager os tid til at lytte og forstå din historie.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Videnskabeligt Funderet
                </h3>
                <p className="text-gray-600">
                  Vores behandlingsmetoder er baseret på den nyeste forskning inden for medicinsk vægttab.
                  Vi arbejder kun med godkendte og dokumenteret effektive behandlinger.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Langsigtet Support
                </h3>
                <p className="text-gray-600">
                  Vi er med dig gennem hele rejsen. Fra den første konsultation til opfølgende samtaler
                  og løbende support. Dit succesfulde vægttab er vores mission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Stories Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Hvad Vores Patienter Siger
            </h2>
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-gray-600 italic mb-6">
                "Dr. Peyman og hans team har givet mig den støtte og vejledning, jeg havde brug for til at
                opnå mit vægttabsmål. Deres professionelle tilgang og konstante opbakning har gjort hele
                forskellen i min rejse mod et sundere liv."
              </p>
              <p className="font-semibold text-gray-900">- Maria H.</p>
              <p className="text-gray-600">Tabte 15 kg på 4 måneder</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Tag det første skridt mod et sundere liv
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Book en konsultation med Dr. Peyman Pedrampour i dag
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Book konsultation
          </Link>
        </div>
      </section>
    </div>
  );
} 