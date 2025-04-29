'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type LanguageContextType = {
  currentLanguage: string;
  changeLanguage: (lang: string) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const changeLanguage = (lang: string) => {
    localStorage.setItem('lang', lang);
    setCurrentLanguage(lang);
  };

  useEffect(() => {
    const storedLanguage = localStorage.getItem('lang');
    if (storedLanguage) {
      setCurrentLanguage(storedLanguage);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;
