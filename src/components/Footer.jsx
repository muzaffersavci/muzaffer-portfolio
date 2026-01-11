import React from 'react';
import profileData from '../data/profile.json';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                    &copy; {year} Muzaffer Savcıoğlu.
                </p>
                <div className="mt-2 flex space-x-4">
                    <a href={profileData.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                        GitHub
                    </a>
                    <a href={profileData.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
