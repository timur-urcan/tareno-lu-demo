import Image from 'next/image';
import Link from 'next/link';

interface ServicesSectionProps {
  lang?: string;
}

interface Translations {
  [key: string]: string;
}

const services = [
  {
    id: 1,
    title: "Portfolio Management",
    description: "Customized investment portfolios designed to meet your specific financial goals and risk tolerance.",
    image: "/service_01.jpg",
    number: "01"
  },
  {
    id: 2,
    title: "Wealth Planning",
    description: "Comprehensive wealth planning services to help you build and preserve your assets for generations.",
    image: "/service_02.jpg",
    number: "02"
  },
  {
    id: 3,
    title: "Retirement Planning",
    description: "Strategic planning to ensure financial security and maintain your lifestyle during retirement.",
    image: "/service_03.jpg",
    number: "03"
  },
  {
    id: 4,
    title: "Tax Optimization",
    description: "Strategies to minimize tax impact and maximize after-tax returns on your investments.",
    image: "/service_04.jpg",
    number: "04"
  },
  {
    id: 5,
    title: "Estate Planning",
    description: "Comprehensive estate planning services to protect and transfer your wealth according to your wishes.",
    image: "/service_05.jpg",
    number: "05"
  },
  {
    id: 6,
    title: "International Investments",
    description: "Access to global investment opportunities with expert guidance on international markets.",
    image: "/service_06.jpg",
    number: "06"
  }
];

const servicesTranslations: Translations = {
  en: 'Our Services',
  de: 'Unsere Dienstleistungen',
  fr: 'Nos services',
  nl: 'Onze diensten'
};

const ServicesSection = ({ lang = 'en' }: ServicesSectionProps) => {
  return (
    <section id="services" className="py-20 bg-[#f0f2f5]">
      <div className="container mx-auto px-6">
        <div className="border-t border-[#0a2e74]/20 pt-8 mb-10">
          <p className="text-sm text-[#0a2e74]/70 font-['campaign-serif']">{servicesTranslations[lang] || servicesTranslations['en']}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className="relative rounded-lg overflow-hidden group h-[400px]">
              {/* Image with overlay */}
              <div className="absolute inset-0">
                <Image 
                  src={service.image} 
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                {/* Dark overlay that's always present but light */}
                <div className="absolute inset-0 bg-black/20"></div>
                
                {/* Darker overlay on hover */}
                <div className="absolute inset-0 bg-[#2d4a6d]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
                {/* Service number - always visible */}
                <div className="text-sm opacity-80">
                  {service.number}
                </div>
                
                {/* Title and description */}
                <div>
                  {/* Title - always visible */}
                  <h3 className="text-3xl font-['campaign-serif'] mb-2 group-hover:mb-4 transition-all">{service.title}</h3>
                  
                  {/* Description - only visible on hover */}
                  <div className="max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 overflow-hidden transition-all duration-300 ease-in-out">
                    <p className="text-white/80 mb-6">{service.description}</p>
                    
                    <Link 
                      href="#" 
                      className="inline-flex items-center text-white hover:text-white/80 transition-colors"
                    >
                      <span className="text-sm">FIND OUT MORE</span>
                      <div className="ml-3 w-8 h-8 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#2d4a6d] transition-all">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
