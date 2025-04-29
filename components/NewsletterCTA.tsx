'use client';

import { useState } from 'react';

interface NewsletterCTAProps {
  lang?: string;
}

interface Translations {
  [key: string]: {
    stayInformed: string;
    subscribeText: string;
    subscribeButton: string;
    thankYouMessage: string;
    unsubscribeText: string;
  };
}

const newsletterTranslations: Translations = {
  en: {
    stayInformed: 'Stay Informed with Our Newsletter',
    subscribeText: 'Subscribe to receive our monthly market insights, investment strategies, and exclusive event invitations directly to your inbox.',
    subscribeButton: 'Subscribe',
    thankYouMessage: 'Thank you for subscribing! You will receive our next newsletter.',
    unsubscribeText: 'We respect your privacy. You can unsubscribe at any time.',
  },
  de: {
    stayInformed: 'Bleiben Sie mit unserem Newsletter informiert',
    subscribeText: 'Abonnieren Sie unseren monatlichen Marktbericht, Investitionsstrategien und exklusive Event-Einladungen direkt in Ihren Posteingang.',
    subscribeButton: 'Abonnieren',
    thankYouMessage: 'Vielen Dank für Ihre Anmeldung! Sie erhalten unseren nächsten Newsletter.',
    unsubscribeText: 'Wir respektieren Ihre Privatsphäre. Sie können sich jederzeit abmelden.',
  },
  fr: {
    stayInformed: 'Restez informé avec notre newsletter',
    subscribeText: 'Abonnez-vous pour recevoir nos insights mensuels sur le marché, nos stratégies d\'investissement et nos invitations à des événements exclusifs directement dans votre boîte de réception.',
    subscribeButton: 'S\'abonner',
    thankYouMessage: 'Merci de vous être abonné ! Vous recevrez notre prochaine newsletter.',
    unsubscribeText: 'Nous respectons votre vie privée. Vous pouvez vous désabonner à tout moment.',
  },
  nl: {
    stayInformed: 'Blijf op de hoogte met onze nieuwsbrief',
    subscribeText: 'Abonneer u op onze maandelijkse marktinzichten, beleggingsstrategieën en exclusieve evenementuitnodigingen rechtstreeks in uw inbox.',
    subscribeButton: 'Abonneren',
    thankYouMessage: 'Bedankt voor uw abonnement! U ontvangt onze volgende nieuwsbrief.',
    unsubscribeText: 'Wij respecteren uw privacy. U kunt zich op elk moment uitschrijven.',
  },
};

const NewsletterCTA = ({ lang = 'en' }: NewsletterCTAProps) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send the email to your backend
    console.log('Email submitted:', email);
    setIsSubmitted(true);
    setEmail('');
    
    // Reset the success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };
  
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-['campaign-serif'] text-[#0a2e74] mb-4">
            {newsletterTranslations[lang]?.stayInformed || newsletterTranslations['en'].stayInformed}
          </h3>
          <p className="text-[#4a5568] mb-8 max-w-2xl mx-auto">
            {newsletterTranslations[lang]?.subscribeText || newsletterTranslations['en'].subscribeText}
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <div className="flex-grow">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a2e74]/30 focus:border-[#0a2e74]"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-[#0a2e74] text-white rounded-lg hover:bg-[#0a2e74]/90 transition-colors focus:outline-none focus:ring-2 focus:ring-[#0a2e74]/50"
            >
              {newsletterTranslations[lang]?.subscribeButton || newsletterTranslations['en'].subscribeButton}
            </button>
          </form>
          
          {isSubmitted && (
            <div className="mt-4 text-green-600 animate-fade-in">
              {newsletterTranslations[lang]?.thankYouMessage || newsletterTranslations['en'].thankYouMessage}
            </div>
          )}
          
          <p className="text-sm text-gray-500 mt-4">
            {newsletterTranslations[lang]?.unsubscribeText || newsletterTranslations['en'].unsubscribeText}
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterCTA;
