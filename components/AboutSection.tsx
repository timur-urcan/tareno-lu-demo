'use client';

// Component for the About section
import Image from 'next/image';
import Link from 'next/link';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-[#f0f4ff]">
      <div className="container mx-auto px-6">
        <div className="border-t border-[#0a2e74]/20 pt-8 mb-10">
          <p className="text-sm text-[#0a2e74]/70 font-['campaign-serif'] mt-4">
            About Tareno S.A.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-4xl text-[#0a2e74] font-['campaign-serif'] font-light mb-8">
              As a bank-independent asset management company, we can perceive your interests objectively, professionally and individually.
            </h2>
          </div>
          <div className="md:w-1/2">
            <p className="text-[#4a5568] mb-6">
              Tareno (Luxembourg) S.A. was founded in 2005 as a subsidiary of Tareno AG Basel. As a partnership-based asset management company, we can draw on a team of financial experts with many years of experience in financial markets.
            </p>
            <Link 
              href="#" 
              className="inline-flex items-center justify-center w-10 h-10 border-2 border-[#0a2e74] rounded-full text-[#0a2e74] hover:bg-[#0a2e74] hover:text-white transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
