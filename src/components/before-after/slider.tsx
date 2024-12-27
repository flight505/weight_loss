'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { styles } from '@/lib/theme';

interface Testimonial {
  id: number;
  name: string;
  age: number;
  weightLoss: number;
  duration: string;
  story: string;
  imagePath: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Maria Hansen',
    age: 34,
    weightLoss: 25,
    duration: '6 måneder',
    story: 'Efter at have kæmpet med min vægt i årevis, fandt jeg endelig den rigtige støtte og vejledning. Nu føler jeg mig sundere og mere energisk end nogensinde.',
    imagePath: '/images/before and after 1.png'
  },
  {
    id: 2,
    name: 'Louise Nielsen',
    age: 42,
    weightLoss: 18,
    duration: '4 måneder',
    story: 'Det har været en fantastisk rejse. Ikke kun har jeg tabt mig, men jeg har også lært at opretholde en sundere livsstil.',
    imagePath: '/images/before and after 2.png'
  },
  {
    id: 3,
    name: 'Sofia Andersen',
    age: 29,
    weightLoss: 15,
    duration: '3 måneder',
    story: 'Programmet har ændret mit forhold til mad og motion. Jeg er så taknemmelig for den personlige vejledning og støtte.',
    imagePath: '/images/before and after 3.png'
  },
  {
    id: 4,
    name: 'Emma Pedersen',
    age: 38,
    weightLoss: 22,
    duration: '5 måneder',
    story: 'Jeg havde aldrig troet, at jeg kunne nå mine mål, men med den rette vejledning og motivation lykkedes det. Nu føler jeg mig som et nyt menneske.',
    imagePath: '/images/before and after 4.png'
  }
];

const AUTO_ROTATE_INTERVAL = 5000;

export default function BeforeAfterSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [isTransitioning]);

  const goToSlide = useCallback((index: number) => {
    if (!isTransitioning && index !== currentSlide) {
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [currentSlide, isTransitioning]);

  // Auto-rotate effect
  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        nextSlide();
      }, AUTO_ROTATE_INTERVAL);

      return () => clearInterval(timer);
    }
  }, [isPaused, nextSlide]);

  return (
    <div 
      className="relative w-full max-w-4xl mx-auto px-4 py-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Main Slider */}
      <div className={`${styles.cards.glass} overflow-hidden rounded-2xl`}>
        <div className="relative aspect-[16/7]">
          <div
            className={`absolute w-full h-full transition-transform duration-500 ease-in-out ${
              isTransitioning ? 'opacity-50' : 'opacity-100'
            }`}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="absolute top-0 left-0 w-full h-full"
                style={{ transform: `translateX(${index * 100}%)` }}
              >
                <Image
                  src={testimonial.imagePath}
                  alt={`Før og efter billede af ${testimonial.name}`}
                  fill
                  className="object-cover object-top"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Content */}
        <div className="p-6 bg-white/80 backdrop-blur-sm">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-semibold text-neutral-gray-800 mb-2">
              {testimonials[currentSlide].name}, {testimonials[currentSlide].age} år
            </h3>
            <p className="text-base text-neutral-gray-600 mb-3">
              Tabte {testimonials[currentSlide].weightLoss} kg på {testimonials[currentSlide].duration}
            </p>
            <p className="text-neutral-gray-700 italic text-sm">
              &ldquo;{testimonials[currentSlide].story}&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={() => {
          setIsPaused(true);
          prevSlide();
        }}
        className="absolute left-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/80 hover:bg-white shadow-lg transition-all"
        disabled={isTransitioning}
      >
        ←
      </button>
      <button
        onClick={() => {
          setIsPaused(true);
          nextSlide();
        }}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/80 hover:bg-white shadow-lg transition-all"
        disabled={isTransitioning}
      >
        →
      </button>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsPaused(true);
              goToSlide(index);
            }}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-accent-rose-main scale-110'
                : 'bg-neutral-gray-300 hover:bg-accent-rose-light'
            }`}
            disabled={isTransitioning}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="w-full h-1 bg-neutral-gray-200 mt-4 rounded-full overflow-hidden">
        <div
          className="h-full bg-accent-rose-main transition-all duration-300"
          style={{
            width: `${(currentSlide + 1) * (100 / testimonials.length)}%`
          }}
        />
      </div>
    </div>
  );
} 