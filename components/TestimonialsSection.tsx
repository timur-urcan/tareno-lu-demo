'use client';
import { useState, useEffect } from 'react';

interface TestimonialsSectionProps {
  lang?: string;
}

const testimonials = [
  {
    id: 1,
    quote: "Tareno's expertise has significantly improved our investment portfolio. Their personalized approach and attention to detail sets them apart.",
    author: "Jean Dupont",
    position: "CEO, Global Enterprises"
  },
  {
    id: 2,
    quote: "Working with Tareno has been a game-changer for our financial planning. Their team provides clear guidance and exceptional results.",
    author: "Marie Lambert",
    position: "CFO, Tech Innovations"
  },
  {
    id: 3,
    quote: "I've been a client for over 10 years, and Tareno consistently delivers outstanding service and investment performance.",
    author: "Thomas Weber",
    position: "Private Client"
  }
];

const testimonialsTranslations = {
  en: 'Client Testimonials',
  de: 'Erfahrungsberichte',
  fr: 'Témoignages',
  nl: 'Getuigenissen'
};

const TestimonialsSection = ({ lang = 'en' }: TestimonialsSectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-[#0a2e74] text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 font-['campaign-serif']">{testimonialsTranslations[lang] || testimonialsTranslations['en']}</h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className={`transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'}`}
              >
                <blockquote className="text-xl italic text-center mb-8">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
                <div className="text-center">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-white/70">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-white/40'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
