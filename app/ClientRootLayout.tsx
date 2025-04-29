'use client';

import React, { useEffect } from 'react';
import { LanguageProvider } from "../lib/LanguageContext";
import i18n from '../lib/i18n';

export default function ClientRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Ensure i18n is initialized on client side
  useEffect(() => {
    if (i18n.isInitialized) {
      // Force a language detection/reload on client side
      const currentLang = localStorage.getItem('i18nextLng') || 'en';
      i18n.changeLanguage(currentLang);
    }
  }, []);

  return (
    <LanguageProvider>
      {children}
    </LanguageProvider>
  );
}
