import Link from 'next/link';

export default function TreatmentPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Medicinsk Vægttab med Wegovy®
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Effektiv behandling med dokumenterede resultater
            </p>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Sådan virker medicinen</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 mb-6">
              Din trang til at spise mindskes effektivt, når du tager vægttabsmedicin. Medicinen efterligner kroppens naturlige mæthedshormon og sender mæthedssignaler til din hjerne.
            </p>
            <p className="text-gray-600 mb-6">
              Vægttabsmedicin hjælper dig med at regulere din appetit, så det bliver nemmere for dig at tabe dig. Vægttab med medicin gør, at maden bevares længere i maven, og mæthedssignalerne dæmper din sultfølelse, så du spiser mindre.
            </p>
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Sådan kommer du i gang</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="text-xl font-semibold mb-4">Book konsultation</h3>
              <p className="text-gray-600">Book en tid til forundersøgelse med Dr. Peyman Pedrampour</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-xl font-semibold mb-4">Forundersøgelse</h3>
              <p className="text-gray-600">Vi gennemgår din sundhedstilstand og diskuterer dine mål</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-xl font-semibold mb-4">Recept</h3>
              <p className="text-gray-600">Du får udskrevet recept på Wegovy® vægttabsmedicin</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="text-xl font-semibold mb-4">Opfølgning</h3>
              <p className="text-gray-600">Løbende opfølgning og støtte gennem hele forløbet</p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Er du egnet til behandlingen?</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 mb-6">
              Du kan være egnet til medicinsk vægttab, hvis du har en eller flere af følgende:
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-600 mb-8">
              <li>Forhøjet blodtryk</li>
              <li>Forhøjet kolesterol</li>
              <li>Søvnapnø eller vejrtrækningsproblemer</li>
              <li>Vægtrelaterede smertetilstande i led</li>
              <li>Prædiabetes</li>
              <li>Stort taljemål (mænd over 102 cm og kvinder over 88 cm)</li>
              <li>PCOs</li>
            </ul>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
              <p className="text-red-700 font-semibold">
                OBS: Du er ikke egnet til behandlingen hvis du:
              </p>
              <ul className="list-disc list-inside space-y-2 text-red-600 mt-2">
                <li>Har diabetes type 1 eller 2</li>
                <li>Er gravid eller ammer</li>
                <li>Påtænker at blive gravid</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Dokumenterede resultater</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 mb-6">
              Ved at kombinere GLP-1 lignende medicin med rådgivning i sund livsstil opnås et 3 gange højere vægttab, end hvis man kun vejledes om sund livsstil. Et godt mål er 1 kilos vægttab pr. uge.
            </p>
            <p className="text-gray-600 mb-8">
              Et nyt dansk studie har vist, at vægttabspatienter kunne opretholde deres vægttab et år efter afslutningen af medicineringen, hvis de samtidig dyrkede motion og fik pulsen op i mindst 2 timer om ugen.
            </p>
          </div>
        </div>
      </section>

      {/* Membership Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Dit medlemskab inkluderer</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Ekspert Rådgivning</h3>
                  <p className="text-gray-600">Rådgivning af speciallæge og sygeplejerske med vægttabsekspertise</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Medicinsk Behandling</h3>
                  <p className="text-gray-600">Recept på receptpligtig slankemedicin fra Novo Nordisk eller Eli Lilly</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Erfaren Metode</h3>
                  <p className="text-gray-600">Vores metode til at undgå bivirkninger erfaret fra over 17.000 forløb</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Grundig Vejledning</h3>
                  <p className="text-gray-600">Vejledning i injektionsteknik og løbende support</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Ubegrænset Support</h3>
                  <p className="text-gray-600">Ubegrænset antal opfølgende samtaler efter behov</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Fleksibelt Medlemskab</h3>
                  <p className="text-gray-600">Ingen binding eller opsigelsesperiode, inkl. gratis app for medlemmer</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-xl text-gray-600">
              Medlemskab kun 299,- hver 4. uge
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Klar til at starte din rejse?</h2>
          <Link
            href="/booking"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Book din første konsultation
          </Link>
        </div>
      </section>
    </div>
  );
} 