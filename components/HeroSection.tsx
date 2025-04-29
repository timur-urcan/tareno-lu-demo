'use client';

import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-start pt-24">
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a2e74] leading-tight mb-8 font-['campaign-serif'] text-left">
            Independent Wealth and Asset Management
          </h1>
          <p className="text-lg text-[#4a5568] max-w-3xl text-left">
            At Tareno, we offer independent, client-focused wealth and asset management tailored to your unique needs. Our experienced team is dedicated to helping you grow, preserve, and transfer your wealth with confidence and clarity. We combine deep market insight with a personal approach, ensuring your financial future is secure in an ever-changing world.
          </p>
        </div>
      </div>
      
      {/* Hero image */}
      <div className="w-full h-[35vh] relative">
        <Image 
          src="/hero-img.jpg" 
          alt="Scenic landscape image" 
          fill
          priority
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
