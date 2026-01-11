import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import ContactForm from '../components/ContactForm';
import profileData from '../data/profile.json';

const Contact = () => {
    const { t } = useLanguage();

    return (
        <div className="max-w-2xl mx-auto py-12">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                {t('contact.title')}
            </h1>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                <ContactForm />
            </div>
        </div>
    );
};

export default Contact;
