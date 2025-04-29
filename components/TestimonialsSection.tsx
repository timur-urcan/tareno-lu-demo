'use client';

import { useState, useEffect } from 'react';

const testimonials = [
  {
    quote: 'With Tareno\'s expertise, we\'ve seen remarkable growth in our portfolio while maintaining a balanced risk profile.',
    author: 'John Smith',
    position: 'CEO, Tech Innovations Ltd'
  },
  {
    quote: 'The team\'s dedication to understanding our unique needs has made all the difference in our investment journey.',
    author: 'Sarah Johnson',
    position: 'CFO, Global Solutions Inc'
  },
  {
    quote: 'Tareno\'s approach to sustainable investing aligns perfectly with our values and long-term financial goals.',
    author: 'Michael Chen',
    position: 'Director, Green Future Foundation'
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 animate-gradient-x" id="testimonials">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">What Our Clients Say</h2>
        <div className="max-w-4xl mx-auto relative min-h-[200px] flex items-center">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`flex items-center transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'} absolute w-full`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-white mr-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3m0 0v3m0-3H9m0 0v-3m0 0h3M15 12h3m0 0v3m0-3h-3m0 0v-3m0 0h3" />
              </svg>
              <div>
                <blockquote className="text-xl italic mb-4 text-white">
                  "{testimonial.quote}"
                </blockquote>
                <p className="text-white font-semibold">{testimonial.author}</p>
                <p className="text-white text-sm">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full mx-1 ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
