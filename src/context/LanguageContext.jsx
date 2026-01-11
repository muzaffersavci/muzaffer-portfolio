import React, { createContext, useContext, useState, useEffect } from 'react';
import tr from '../data/locales/tr.json';
import en from '../data/locales/en.json';

const LanguageContext = createContext();

const languages = { tr, en };

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState(() => {
        return localStorage.getItem('lang') || 'tr';
    });

    useEffect(() => {
        localStorage.setItem('lang', lang);
    }, [lang]);

    const t = (key) => {
        const keys = key.split('.');
        let value = languages[lang];
        for (const k of keys) {
            value = value?.[k];
        }
        return value || key;
    };

    return (
        <LanguageContext.Provider value={{ lang, setLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
};
