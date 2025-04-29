'use client';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    quote: "With Tareno's expertise, we've seen remarkable growth in our portfolio while maintaining a balanced risk profile.",
    author: "John Smith",
    position: "CEO, Tech Innovations Ltd"
  },
  {
    quote: "The team's dedication to understanding our unique needs has made all the difference in our investment journey.",
    author: "Sarah Johnson",
    position: "CFO, Global Solutions Inc"
  },
  {
    quote: "Tareno's approach to sustainable investing aligns perfectly with our values and long-term financial goals.",
    author: "Michael Chen",
    position: "Director, Green Future Foundation"
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
    <section className="py-20 bg-gray-50" id="testimonials">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="max-w-3xl mx-auto relative min-h-[200px]">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'}`}
            >
              <blockquote className="text-xl italic text-center mb-8">
                &quot;{testimonial.quote}&quot;
              </blockquote>
              <div className="text-center">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-gray-600">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
