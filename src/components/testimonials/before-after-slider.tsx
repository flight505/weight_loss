'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { styles } from '@/lib/theme';

const testimonials = [
  {
    id: 1,
    name: 'Louise M.',
    age: 34,
    weightLoss: '18 kg',
    duration: '6 måneder',
    story: 'Efter min anden graviditet kæmpede jeg med at tabe de ekstra kilo. Gennem Dr. Peymans program og Wegovy har jeg ikke bare tabt vægten, men også fået en helt ny energi i hverdagen. Nu kan jeg nemt følge med mine børn og føler mig som mig selv igen.',
    beforeImage: '/images/before1.jpg',
    afterImage: '/images/after1.jpg',
  },
  {
    id: 2,
    name: 'Sofia K.',
    age: 42,
    weightLoss: '22 kg',
    duration: '8 måneder',
    story: 'Som karrierekvinde havde jeg altid svært ved at finde tid til motion og sund mad. Dr. Peymans tilgang med Wegovy gav mig endelig muligheden for at tage kontrol over min vægt uden at gå på kompromis med min travle hverdag. Det har ændret mit liv både professionelt og personligt.',
    beforeImage: '/images/before2.jpg',
    afterImage: '/images/after2.jpg',
  },
  {
    id: 3,
    name: 'Maria H.',
    age: 29,
    weightLoss: '15 kg',
    duration: '4 måneder',
    story: 'Efter års kamp med yo-yo vægt fandt jeg endelig en løsning der virkede. Dr. Peymans program gav mig ikke bare vægttab, men også værktøjerne til at vedligeholde det. Den personlige vejledning og støtte gjorde hele forskellen.',
    beforeImage: '/images/before3.jpg',
    afterImage: '/images/after3.jpg',
  },
  {
    id: 4,
    name: 'Christina B.',
    age: 38,
    weightLoss: '25 kg',
    duration: '9 måneder',
    story: 'Min vægt havde altid påvirket min selvtillid. Med Dr. Peymans hjælp og Wegovy behandling har jeg ikke bare opnået mit vægttabsmål, men også fundet en indre styrke jeg ikke vidste jeg havde. Det har været en transformerende rejse både fysisk og mentalt.',
    beforeImage: '/images/before4.jpg',
    afterImage: '/images/after4.jpg',
  },
];

export default function BeforeAfterSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative py-16">
      <div className={`${styles.cards.glass} p-8 md:p-12`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Images Section */}
          <div className="space-y-6">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
              <div className="absolute inset-0 flex">
                <div className="w-1/2 relative">
                  <Image
                    src={testimonials[currentSlide].beforeImage}
                    alt="Før behandling"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-accent-rose-light/80 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-neutral-gray-800 font-medium">Før</span>
                  </div>
                </div>
                <div className="w-1/2 relative">
                  <Image
                    src={testimonials[currentSlide].afterImage}
                    alt="Efter behandling"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 right-4 bg-accent-rose-main/80 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-neutral-gray-800 font-medium">Efter</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation Dots */}
            <div className="flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-accent-rose-main w-8'
                      : 'bg-accent-rose-light'
                  }`}
                  aria-label={`Gå til slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-neutral-gray-800">
                {testimonials[currentSlide].name}, {testimonials[currentSlide].age} år
              </h3>
              <div className="flex space-x-6">
                <div className="bg-accent-rose-light/30 px-4 py-2 rounded-full">
                  <span className="text-neutral-gray-800">
                    Tabte {testimonials[currentSlide].weightLoss}
                  </span>
                </div>
                <div className="bg-accent-rose-light/30 px-4 py-2 rounded-full">
                  <span className="text-neutral-gray-800">
                    {testimonials[currentSlide].duration}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-neutral-gray-600 text-lg leading-relaxed italic">
              &ldquo;{testimonials[currentSlide].story}&rdquo;
            </p>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center pt-6">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-accent-rose-light/50 hover:bg-accent-rose-light transition-colors"
                aria-label="Forrige"
              >
                <ChevronLeft className="w-6 h-6 text-neutral-gray-800" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-accent-rose-light/50 hover:bg-accent-rose-light transition-colors"
                aria-label="Næste"
              >
                <ChevronRight className="w-6 h-6 text-neutral-gray-800" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 