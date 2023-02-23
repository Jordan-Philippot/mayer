import React, { useState, useEffect, createContext, useContext } from 'react'

// import { createContext, useContext } from 'react';
import translations from '../locales/translations.js';

const TranslationContext = createContext({});

export const TranslationProvider = ({ children }) => {
    const { lang, setLang } = useLanguage();
    const t = (key) => translations[lang][key] || key;

    return (
        <TranslationContext.Provider value={{ t, lang, setLang }}>
            {children}
        </TranslationContext.Provider>
    );
};

export const useTranslation = () => useContext(TranslationContext);

export const useLanguage = () => {
    const [lang, setLang] = useState('fr');

    useEffect(() => {
        const currentLang = localStorage.getItem('lang');
        if (currentLang) {
            setLang(currentLang);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('lang', lang);
    }, [lang]);

    return { lang, setLang };
};