import Image from 'next/image';
import Link from 'next/link';

interface CaseStudiesSectionProps {
  lang?: string;
}

interface Translations {
  [key: string]: string;
}

const caseStudies = [
  {
    id: 1,
    title: "Value creation options for existing portfolios",
    description: "Optimization of diversified investment portfolios through strategic reallocation, providing enhanced returns while maintaining risk parameters.",
    client: "Private Banking Client",
    image: "/service_01.jpg"
  },
  {
    id: 2,
    title: "Business development for sustainable investments",
    description: "Development of ESG-focused investment strategies that align with client values while delivering competitive financial performance.",
    client: "Institutional Investor",
    image: "/service_02.jpg"
  },
  {
    id: 3,
    title: "Strategic Partnership with technology startups",
    description: "Creating innovative investment vehicles for early-stage fintech companies, providing clients with access to high-growth potential opportunities.",
    client: "Family Office",
    image: "/service_03.jpg"
  }
];

const caseStudiesTranslations: Translations = {
  en: 'Case Studies: Real results for real clients.',
  de: 'Fallstudien: Echte Ergebnisse für echte Kunden.',
  fr: 'Études de cas : De vrais résultats pour de vrais clients.',
  nl: 'Case studies: Echte resultaten voor echte klanten.'
};

const CaseStudiesSection = ({ lang = 'en' }: CaseStudiesSectionProps) => {
  return (
    <section id="case-studies" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl text-[#4a5568] font-['campaign-serif'] font-light">
            {caseStudiesTranslations[lang] || caseStudiesTranslations['en']}
          </h2>
          
          <Link 
            href="#" 
            className="w-12 h-12 rounded-full border border-[#0a2e74] flex items-center justify-center hover:bg-[#0a2e74] hover:text-white text-[#0a2e74] transition-all"
            aria-label="View all case studies"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
        
        <div className="flex flex-col md:flex-row">
          {caseStudies.map((study, index) => (
            <div key={study.id} className="flex flex-col md:w-1/3 px-6 relative">
              {/* Vertical divider line */}
              {index > 0 && (
                <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-gray-200"></div>
              )}
              
              <div className="mb-6 relative">
                <div className="w-64 h-64 mx-auto rounded-full overflow-hidden">
                  <Image 
                    src={study.image} 
                    alt={study.title}
                    width={256}
                    height={256}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              
              <div className="text-center mb-2">
                <p className="text-sm text-[#0a2e74]">{study.client}</p>
              </div>
              
              <h3 className="text-xl text-[#0a2e74] font-['campaign-serif'] mb-3 text-center">
                {study.title}
              </h3>
              
              <p className="text-[#4a5568] mb-4 text-center">
                {study.description}
              </p>
              
              <div className="mt-auto flex justify-center">
                <Link 
                  href="#" 
                  className="inline-flex items-center text-[#0a2e74] hover:text-[#0a2e74]/80 transition-colors"
                >
                  <span className="text-sm">READ MORE</span>
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
