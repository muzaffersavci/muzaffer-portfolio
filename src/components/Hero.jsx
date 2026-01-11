import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import profileData from '../data/profile.json';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Hero = () => {
    const { t } = useLanguage();
    const [showCharacter, setShowCharacter] = React.useState(false);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setShowCharacter(prev => !prev);
        }, 4000); // Her 4 saniyede bir değiştir

        return () => clearInterval(interval);
    }, []);

    const getSocialIcon = (key) => {
        switch (key) {
            case 'github': return <FaGithub size={24} />;
            case 'linkedin': return <FaLinkedin size={24} />;
            case 'twitter': return <FaTwitter size={24} />;
            case 'instagram': return <FaInstagram size={24} />;
            default: return null;
        }
    };

    return (
        <section className="flex flex-col-reverse md:flex-row items-center justify-between py-12 md:py-24">
            <div className="w-full md:w-1/2 flex flex-col items-start space-y-6">
                <h2 className="text-xl text-indigo-600 dark:text-indigo-400 font-medium">
                    {t('hero.greeting')}
                </h2>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                    {profileData.name}
                </h1>
                <h3 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300">
                    {t('hero.title')}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
                    {t('hero.description')}
                </p>

                <div className="flex space-x-4 pt-4">
                    <a
                        href={profileData.cvFile}
                        download
                        className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl"
                    >
                        {t('hero.downloadCV')}
                    </a>

                    <a
                        href="/iletisim"
                        className="px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl"
                    >
                        {t('hero.contactMe')}
                    </a>

                    <div className="flex space-x-4 items-center ml-4">
                        {Object.entries(profileData.social).map(([platform, url]) => (
                            <a key={platform} href={url} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 text-2xl transition-colors capitalization">
                                {getSocialIcon(platform)}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-full md:w-1/2 flex justify-center md:justify-end mb-10 md:mb-0 perspective-1000">
                <div className={`relative w-64 h-64 md:w-80 md:h-80 transform-style-3d transition-transform duration-1000 ${showCharacter ? 'rotate-y-180' : ''}`}>

                    {/* Ön Yüz - Orijinal Profil */}
                    <div className="absolute inset-0 backface-hidden">
                        <img
                            src={profileData.avatar}
                            alt={profileData.name}
                            className="w-full h-full object-cover object-top rounded-full border-4 border-white dark:border-gray-800 shadow-2xl"
                        />
                    </div>

                    {/* Arka Yüz - Karakter Resmi */}
                    <div className="absolute inset-0 backface-hidden rotate-y-180">
                        <img
                            src="/hero-character.jpg"
                            alt={profileData.name}
                            className="w-full h-full object-cover object-center rounded-full border-4 border-white dark:border-gray-800 shadow-2xl"
                        />
                    </div>

                </div>

                <style jsx>{`
                    .perspective-1000 { perspective: 1000px; }
                    .transform-style-3d { transform-style: preserve-3d; }
                    .rotate-y-180 { transform: rotateY(180deg); }
                    .backface-hidden { backface-visibility: hidden; }
                `}</style>
            </div>
        </section>
    );
};

export default Hero;