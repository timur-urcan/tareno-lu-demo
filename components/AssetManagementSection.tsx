import Image from 'next/image';

interface AssetManagementSectionProps {
  lang?: string;
}

interface Translations {
  [key: string]: string;
}

const assetTranslations: Translations = {
  en: 'Asset Management: Secure your future with Tareno.',
  de: 'Vermögensverwaltung: Sichern Sie Ihre Zukunft mit Tareno.',
  fr: 'Gestion d’actifs : Sécurisez votre avenir avec Tareno.',
  nl: 'Vermogensbeheer: Zeker uw toekomst met Tareno.'
};

const ourApproachTranslations: Translations = {
  en: 'Our Approach',
  de: 'Unser Ansatz',
  fr: 'Notre approche',
  nl: 'Onze aanpak'
};

const benefitsOfIndependenceTranslations: Translations = {
  en: 'Benefits of Independence',
  de: 'Vorteile der Unabhängigkeit',
  fr: 'Avantages de l’indépendance',
  nl: 'Voordelen van onafhankelijkheid'
};

const AssetManagementSection = ({ lang = 'en' }: AssetManagementSectionProps) => {
  return (
    <section id="asset-management" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="border-t border-[#0a2e74]/20 pt-8 mb-10">
          <p className="text-sm text-[#0a2e74]/70 font-['campaign-serif']">{assetTranslations[lang] || assetTranslations['en']}</p>
        </div>
        
        {/* Our Approach - Content left, Image right */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-6 text-[#0a2e74] font-['campaign-serif']">{ourApproachTranslations[lang] || ourApproachTranslations['en']}</h3>
            <p className="text-[#4a5568] mb-6">
              As an independent asset manager, we are not tied to any specific financial products or institutions. 
              This allows us to provide truly unbiased advice and select the best investment opportunities for our clients.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#0a2e74] mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Personalized investment strategies</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#0a2e74] mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Objective financial advice</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#0a2e74] mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Transparent fee structure</span>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 relative h-80">
            <Image 
              src="/approach.jpg" 
              alt="Our approach to asset management" 
              fill
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
        
        {/* Benefits - Image left, Content right */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="md:w-1/2 relative h-80">
            <Image 
              src="/hero-img.jpg" 
              alt="Benefits of our asset management" 
              fill
              className="object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-6 text-[#0a2e74] font-['campaign-serif']">{benefitsOfIndependenceTranslations[lang] || benefitsOfIndependenceTranslations['en']}</h3>
            <p className="text-[#4a5568] mb-6">
              Our independence allows us to focus solely on your financial goals without any conflicts of interest. 
              We can access a wide range of investment products and services from various providers to create the optimal portfolio for you.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#0a2e74] mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>No product bias or sales pressure</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#0a2e74] mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Access to best-in-class investment solutions</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#0a2e74] mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Long-term relationship focused on your success</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssetManagementSection;
