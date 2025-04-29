import Image from 'next/image';
import Link from 'next/link';

interface NewsInsightsSectionProps {
  lang?: string;
}

const newsItems = [
  {
    id: 1,
    title: "Tareno's Market Outlook: Navigating Uncertainty in Global Markets",
    excerpt: "Our analysts provide insights on current market trends and investment opportunities in an uncertain economic landscape.",
    type: "News",
    date: "24th October 2024",
    image: "/service_01.jpg"
  },
  {
    id: 2,
    title: "Unveiling Our Comprehensive Investment Strategy Guide",
    excerpt: "A detailed overview of our approach to wealth management, asset allocation, and risk assessment methodologies.",
    type: "Article",
    date: "5th September 2024",
    image: "/service_02.jpg"
  },
  {
    id: 3,
    title: "Tareno Partners with Sustainable Investment Initiative",
    excerpt: "Expanding our ESG portfolio options to provide clients with more opportunities for sustainable investing.",
    type: "News",
    date: "29th July 2024",
    image: "/service_03.jpg"
  },
  {
    id: 4,
    title: "Understanding Portfolio Diversification in Volatile Markets",
    excerpt: "How strategic diversification can protect investments and create opportunities during market volatility.",
    type: "Article",
    date: "8th July 2024",
    image: "/service_04.jpg"
  }
];

const newsTranslations = {
  en: 'News & Insights',
  de: 'Nachrichten & Einblicke',
  fr: 'Actualités & perspectives',
  nl: 'Nieuws & inzichten'
};

const NewsInsightsSection = ({ lang = 'en' }: NewsInsightsSectionProps) => {
  return (
    <section id="news-insights" className="py-24 bg-[#f0f2f5]">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl text-[#4a5568] font-['campaign-serif'] font-light">
            {newsTranslations[lang] || newsTranslations['en']}
          </h2>
          
          <Link 
            href="#" 
            className="w-12 h-12 rounded-full border border-[#0a2e74] flex items-center justify-center hover:bg-[#0a2e74] hover:text-white text-[#0a2e74] transition-all"
            aria-label="View all news and insights"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Featured article on the left */}
          <div className="md:w-1/2 relative rounded-lg overflow-hidden group h-[600px] md:h-auto">
            <div className="absolute inset-0">
              <Image 
                src={newsItems[0].image} 
                alt={newsItems[0].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20"></div>
              <div className="absolute inset-0 bg-[#0a2e74]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
              <div className="mb-2">
                <span className="text-sm text-white/80">{newsItems[0].type} — {newsItems[0].date}</span>
              </div>
              <h3 className="text-2xl font-['campaign-serif'] mb-2 transform transition-transform duration-300 group-hover:translate-x-2">{newsItems[0].title}</h3>
              <p className="text-white/80 mb-4 max-w-xl">{newsItems[0].excerpt}</p>
              
              <div className="absolute bottom-8 right-8">
                <Link 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#0a2e74] text-white transition-all"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Right side with 2 articles on top, 1 on bottom */}
          <div className="md:w-1/2 flex flex-col gap-6">
            {/* Top row with 2 articles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
              {newsItems.slice(1, 3).map((item) => (
                <div key={item.id} className="relative rounded-lg overflow-hidden group h-[280px]">
                  <div className="absolute inset-0">
                    <Image 
                      src={item.image} 
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20"></div>
                    <div className="absolute inset-0 bg-[#0a2e74]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                    <div className="mb-2">
                      <span className="text-sm text-white/80">{item.type} — {item.date}</span>
                    </div>
                    <h3 className="text-xl font-['campaign-serif'] mb-2 transform transition-transform duration-300 group-hover:translate-x-2">{item.title}</h3>
                    
                    <div className="absolute bottom-6 right-6">
                      <Link 
                        href="#" 
                        className="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#0a2e74] text-white transition-all"
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Bottom row with 1 article */}
            <div className="flex-1">
              <div className="relative rounded-lg overflow-hidden group h-[280px]">
                <div className="absolute inset-0">
                  <Image 
                    src={newsItems[3].image} 
                    alt={newsItems[3].title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20"></div>
                  <div className="absolute inset-0 bg-[#0a2e74]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <div className="mb-2">
                    <span className="text-sm text-white/80">{newsItems[3].type} — {newsItems[3].date}</span>
                  </div>
                  <h3 className="text-xl font-['campaign-serif'] mb-2 transform transition-transform duration-300 group-hover:translate-x-2">{newsItems[3].title}</h3>
                  
                  <div className="absolute bottom-6 right-6">
                    <Link 
                      href="#" 
                      className="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#0a2e74] text-white transition-all"
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsInsightsSection;
