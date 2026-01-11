import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const ContactForm = () => {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Mailto bağlantısını oluştur
        const mailtoLink = `mailto:231201015@stu.rumeli.edu.tr?subject=Portfolio Contact from ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;

        // E-posta istemcisini aç
        window.location.href = mailtoLink;

        // İsteğe bağlı: Formu sıfırla veya mesaj göster
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
            <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-700 dark:text-gray-200 mb-1">
                    {t('contact.name')}
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border-2 border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 p-3 transition-colors"
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-700 dark:text-gray-200 mb-1">
                    {t('contact.email')}
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border-2 border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 p-3 transition-colors"
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 dark:text-gray-200 mb-1">
                    {t('contact.message')}
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border-2 border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 p-3 transition-colors"
                />
            </div>

            <div>
                <button
                    type="submit"
                    className="w-full flex justify-center py-4 px-4 border border-transparent rounded-lg shadow-md text-base font-bold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                >
                    {t('contact.send')}
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
