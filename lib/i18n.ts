import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// English translations
const enTranslations = {
  navigation: {
    about: 'About',
    assetManagement: 'Asset Management',
    testimonials: 'Testimonials',
    services: 'Services',
    caseStudies: 'Case Studies',
    newsInsights: 'News & Insights',
    contact: 'Contact',
  },
  hero: {
    title: 'Independent Wealth and Asset Management',
    subtitle: 'Expert financial guidance for individuals and institutions',
    description: 'Your asset management should not only suit your life situation, but also your personality. As an independent asset manager with over 25 years of experience and multiple award-winning asset manager of the year, we develop customized investment strategies - individual, forward-looking and tailored to your goals.',
  },
  about: {
    title: 'About Tareno S.A.',
    headline: 'As a bank-independent asset management company, we can perceive your interests objectively, professionally and individually.',
    description: 'Tareno (Luxembourg) S.A. was founded in 2005 as a subsidiary of Tareno AG Basel. As a partnership-based asset management company, we can draw on a team of financial experts with many years of experience in financial markets.',
    link: 'ABOUT US',
  },
  assetManagement: {
    approach: {
      title: 'Our Approach',
      description: 'We focus on long-term value creation through disciplined investment processes and personalized strategies.',
    },
    benefits: {
      title: 'Benefits of Independence',
      description: 'As an independent firm, we offer objective advice without conflicts of interest, always putting our clients\' needs first.',
    },
  },
  services: {
    title: 'Our Services',
    button: 'FIND OUT MORE',
  },
  caseStudies: {
    title: 'Case Studies',
    button: 'READ MORE',
  },
  news: {
    title: 'News & Insights',
    button: 'READ MORE',
  },
  newsletter: {
    title: 'Stay Updated',
    description: 'Subscribe to our newsletter for the latest insights and market updates.',
    button: 'SUBSCRIBE',
    placeholder: 'Your email address',
    success: 'Thank you for subscribing!',
    privacy: 'We respect your privacy and will never share your information.',
  },
  contact: {
    title: 'Contact Us',
    heading: 'We look forward to discussing how we can navigate the path to success together.',
    experts: 'Contact our experts',
    firstName: 'First Name*',
    surname: 'Surname*',
    email: 'Email*',
    interest: 'Point of Interest',
    message: 'Message*',
    privacy: 'I have agreed with the Privacy Declaration terms.',
    mandatory: 'Mandatory Fields*',
    button: 'SUBMIT MESSAGE',
    success: 'Thank you for your message! We will get back to you shortly.',
  },
  footer: {
    description: 'Expert asset management services for individuals and institutions.',
    copyright: ' 2025 Tareno S.A. All rights reserved.',
    quickLinks: 'Quick Links',
    contact: 'Contact',
    legal: 'Legal',
  },
  chatbot: {
    welcome: 'Hello! Welcome to Tareno S.A. How can I assist you today?',
    placeholder: 'Type your message...',
    suggested: 'Suggested questions:',
  },
  languages: {
    english: 'English',
    german: 'German',
    french: 'French',
    dutch: 'Dutch',
  },
};

// German translations
const deTranslations = {
  navigation: {
    about: 'Über uns',
    assetManagement: 'Vermögensverwaltung',
    testimonials: 'Referenzen',
    services: 'Dienstleistungen',
    caseStudies: 'Fallstudien',
    newsInsights: 'News & Einblicke',
    contact: 'Kontakt',
  },
  hero: {
    title: 'Unabhängige Vermögens- und Anlageverwaltung',
    subtitle: 'Professionelle Finanzberatung für Privatpersonen und Institutionen',
    description: 'Ihre Vermögensverwaltung sollte nicht nur zu Ihrer Lebenssituation passen, sondern auch zu Ihrer Persönlichkeit. Als unabhängiger Vermögensverwalter mit über 25 Jahren Erfahrung und mehrfach ausgezeichneter Vermögensverwalter des Jahres entwickeln wir maßgeschneiderte Anlagestrategien - individuell, zukunftsorientiert und auf Ihre Ziele abgestimmt.',
  },
  about: {
    title: 'Über Tareno S.A.',
    headline: 'Als bankenunabhängige Vermögensverwaltungsgesellschaft können wir Ihre Interessen objektiv, professionell und individuell wahrnehmen.',
    description: 'Tareno (Luxemburg) S.A. wurde 2005 als Tochtergesellschaft der Tareno AG Basel gegründet. Als partnerschaftlich geführte Vermögensverwaltungsgesellschaft können wir auf ein Team von Finanzexperten mit langjähriger Erfahrung an den Finanzmärkten zurückgreifen.',
    link: 'ÜBER UNS',
  },
  assetManagement: {
    approach: {
      title: 'Unser Ansatz',
      description: 'Wir konzentrieren uns auf langfristige Wertschöpfung durch disziplinierte Anlageprozesse und personalisierte Strategien.',
    },
    benefits: {
      title: 'Vorteile der Unabhängigkeit',
      description: 'Als unabhängiges Unternehmen bieten wir objektive Beratung ohne Interessenkonflikte und stellen die Bedürfnisse unserer Kunden stets an erste Stelle.',
    },
  },
  services: {
    title: 'Unsere Dienstleistungen',
    button: 'MEHR ERFAHREN',
  },
  caseStudies: {
    title: 'Fallstudien',
    button: 'MEHR LESEN',
  },
  news: {
    title: 'News & Einblicke',
    button: 'MEHR LESEN',
  },
  newsletter: {
    title: 'Bleiben Sie informiert',
    description: 'Abonnieren Sie unseren Newsletter für die neuesten Einblicke und Marktaktualisierungen.',
    button: 'ABONNIEREN',
    placeholder: 'Ihre E-Mail-Adresse',
    success: 'Vielen Dank für Ihr Abonnement!',
    privacy: 'Wir respektieren Ihre Privatsphäre und werden Ihre Daten niemals weitergeben.',
  },
  contact: {
    title: 'Kontakt',
    heading: 'Wir freuen uns darauf, mit Ihnen zu besprechen, wie wir gemeinsam den Weg zum Erfolg gestalten können.',
    experts: 'Kontaktieren Sie unsere Experten',
    firstName: 'Vorname*',
    surname: 'Nachname*',
    email: 'E-Mail*',
    interest: 'Interessengebiet',
    message: 'Nachricht*',
    privacy: 'Ich habe den Datenschutzbestimmungen zugestimmt.',
    mandatory: 'Pflichtfelder*',
    button: 'NACHRICHT SENDEN',
    success: 'Vielen Dank für Ihre Nachricht! Wir werden uns in Kürze bei Ihnen melden.',
  },
  footer: {
    description: 'Professionelle Vermögensverwaltungsdienste für Privatpersonen und Institutionen.',
    copyright: ' 2025 Tareno S.A. Alle Rechte vorbehalten.',
    quickLinks: 'Schnelllinks',
    contact: 'Kontakt',
    legal: 'Rechtliches',
  },
  chatbot: {
    welcome: 'Hallo! Willkommen bei Tareno S.A. Wie kann ich Ihnen heute helfen?',
    placeholder: 'Nachricht eingeben...',
    suggested: 'Vorgeschlagene Fragen:',
  },
  languages: {
    english: 'Englisch',
    german: 'Deutsch',
    french: 'Französisch',
    dutch: 'Niederländisch',
  },
};

// French translations
const frTranslations = {
  navigation: {
    about: 'À propos',
    assetManagement: 'Gestion d\'actifs',
    testimonials: 'Témoignages',
    services: 'Services',
    caseStudies: 'Études de cas',
    newsInsights: 'Actualités & Perspectives',
    contact: 'Contact',
  },
  hero: {
    title: 'Gestion de patrimoine et d\'actifs indépendante',
    subtitle: 'Conseils financiers experts pour particuliers et institutions',
    description: 'Votre gestion d\'actifs ne doit pas seulement correspondre à votre situation de vie, mais aussi à votre personnalité. En tant que gestionnaire d\'actifs indépendant avec plus de 25 ans d\'expérience et plusieurs fois récompensé comme gestionnaire d\'actifs de l\'année, nous développons des stratégies d\'investissement personnalisées - individuelles, tournées vers l\'avenir et adaptées à vos objectifs.',
  },
  about: {
    title: 'À propos de Tareno S.A.',
    headline: 'En tant que société de gestion d\'actifs indépendante des banques, nous pouvons percevoir vos intérêts de manière objective, professionnelle et individuelle.',
    description: 'Tareno (Luxembourg) S.A. a été fondée en 2005 en tant que filiale de Tareno AG Bâle. En tant que société de gestion d\'actifs basée sur le partenariat, nous pouvons compter sur une équipe d\'experts financiers ayant de nombreuses années d\'expérience sur les marchés financiers.',
    link: 'À PROPOS DE NOUS',
  },
  assetManagement: {
    approach: {
      title: 'Notre approche',
      description: 'Nous nous concentrons sur la création de valeur à long terme grâce à des processus d\'investissement disciplinés et des stratégies personnalisées.',
    },
    benefits: {
      title: 'Avantages de l\'indépendance',
      description: 'En tant qu\'entreprise indépendante, nous offrons des conseils objectifs sans conflits d\'intérêts, en plaçant toujours les besoins de nos clients au premier plan.',
    },
  },
  services: {
    title: 'Nos services',
    button: 'EN SAVOIR PLUS',
  },
  caseStudies: {
    title: 'Études de cas',
    button: 'LIRE PLUS',
  },
  news: {
    title: 'Actualités & Perspectives',
    button: 'LIRE PLUS',
  },
  newsletter: {
    title: 'Restez informé',
    description: 'Abonnez-vous à notre newsletter pour les dernières perspectives et mises à jour du marché.',
    button: 'S\'ABONNER',
    placeholder: 'Votre adresse e-mail',
    success: 'Merci pour votre abonnement!',
    privacy: 'Nous respectons votre vie privée et ne partagerons jamais vos informations.',
  },
  contact: {
    title: 'Contactez-nous',
    heading: 'Nous sommes impatients de discuter comment nous pouvons naviguer ensemble sur le chemin du succès.',
    experts: 'Contactez nos experts',
    firstName: 'Prénom*',
    surname: 'Nom*',
    email: 'E-mail*',
    interest: 'Point d\'intérêt',
    message: 'Message*',
    privacy: 'J\'ai accepté les termes de la déclaration de confidentialité.',
    mandatory: 'Champs obligatoires*',
    button: 'ENVOYER LE MESSAGE',
    success: 'Merci pour votre message! Nous vous répondrons dans les plus brefs délais.',
  },
  footer: {
    description: 'Services de gestion d\'actifs experts pour particuliers et institutions.',
    copyright: ' 2025 Tareno S.A. Tous droits réservés.',
    quickLinks: 'Liens rapides',
    contact: 'Contact',
    legal: 'Mentions légales',
  },
  chatbot: {
    welcome: 'Bonjour! Bienvenue chez Tareno S.A. Comment puis-je vous aider aujourd\'hui?',
    placeholder: 'Tapez votre message...',
    suggested: 'Questions suggérées:',
  },
  languages: {
    english: 'Anglais',
    german: 'Allemand',
    french: 'Français',
    dutch: 'Néerlandais',
  },
};

// Dutch translations
const nlTranslations = {
  navigation: {
    about: 'Over ons',
    assetManagement: 'Vermogensbeheer',
    testimonials: 'Getuigenissen',
    services: 'Diensten',
    caseStudies: 'Casestudies',
    newsInsights: 'Nieuws & Inzichten',
    contact: 'Contact',
  },
  hero: {
    title: 'Onafhankelijk Vermogens- en Vermogensbeheer',
    subtitle: 'Deskundige financiële begeleiding voor particulieren en instellingen',
    description: 'Uw vermogensbeheer moet niet alleen bij uw levenssituatie passen, maar ook bij uw persoonlijkheid. Als onafhankelijke vermogensbeheerder met meer dan 25 jaar ervaring en meervoudig bekroonde vermogensbeheerder van het jaar, ontwikkelen wij op maat gemaakte beleggingsstrategieën - individueel, toekomstgericht en afgestemd op uw doelen.',
  },
  about: {
    title: 'Over Tareno S.A.',
    headline: 'Als bankonafhankelijke vermogensbeheerder kunnen wij uw belangen objectief, professioneel en individueel behartigen.',
    description: 'Tareno (Luxemburg) S.A. werd in 2005 opgericht als dochteronderneming van Tareno AG Basel. Als partnerschapsgebaseerd vermogensbeheerbedrijf kunnen we putten uit een team van financiële experts met jarenlange ervaring op de financiële markten.',
    link: 'OVER ONS',
  },
  assetManagement: {
    approach: {
      title: 'Onze Aanpak',
      description: 'Wij richten ons op langetermijnwaardecreatie door gedisciplineerde beleggingsprocessen en gepersonaliseerde strategieën.',
    },
    benefits: {
      title: 'Voordelen van Onafhankelijkheid',
      description: 'Als onafhankelijk bedrijf bieden wij objectief advies zonder belangenconflicten, waarbij de behoeften van onze klanten altijd voorop staan.',
    },
  },
  services: {
    title: 'Onze Diensten',
    button: 'MEER INFORMATIE',
  },
  caseStudies: {
    title: 'Casestudies',
    button: 'LEES MEER',
  },
  news: {
    title: 'Nieuws & Inzichten',
    button: 'LEES MEER',
  },
  newsletter: {
    title: 'Blijf op de hoogte',
    description: 'Abonneer u op onze nieuwsbrief voor de laatste inzichten en marktupdates.',
    button: 'ABONNEREN',
    placeholder: 'Uw e-mailadres',
    success: 'Bedankt voor uw inschrijving!',
    privacy: 'Wij respecteren uw privacy en zullen uw gegevens nooit delen.',
  },
  contact: {
    title: 'Neem contact op',
    heading: 'Wij kijken ernaar uit om te bespreken hoe we samen de weg naar succes kunnen bewandelen.',
    experts: 'Neem contact op met onze experts',
    firstName: 'Voornaam*',
    surname: 'Achternaam*',
    email: 'E-mail*',
    interest: 'Interessepunt',
    message: 'Bericht*',
    privacy: 'Ik ga akkoord met de privacyverklaring.',
    mandatory: 'Verplichte velden*',
    button: 'BERICHT VERSTUREN',
    success: 'Bedankt voor uw bericht! We nemen zo snel mogelijk contact met u op.',
  },
  footer: {
    description: 'Deskundige vermogensbeheersdiensten voor particulieren en instellingen.',
    copyright: ' 2025 Tareno S.A. Alle rechten voorbehouden.',
    quickLinks: 'Snelle links',
    contact: 'Contact',
    legal: 'Juridisch',
  },
  chatbot: {
    welcome: 'Hallo! Welkom bij Tareno S.A. Hoe kan ik u vandaag helpen?',
    placeholder: 'Typ uw bericht...',
    suggested: 'Voorgestelde vragen:',
  },
  languages: {
    english: 'Engels',
    german: 'Duits',
    french: 'Frans',
    dutch: 'Nederlands',
  },
};

// Make sure i18n is not initialized multiple times
if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        en: { translation: enTranslations },
        de: { translation: deTranslations },
        fr: { translation: frTranslations },
        nl: { translation: nlTranslations },
      },
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false, // React already escapes values
      },
      detection: {
        order: ['localStorage', 'navigator'],
        caches: ['localStorage'],
      },
    });
}

export default i18n;
