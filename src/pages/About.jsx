import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
    const { t } = useLanguage();
    // Stages: 'closed', 'opening', 'open'
    const [animationStage, setAnimationStage] = useState('closed');

    const handleOpen = () => {
        if (animationStage !== 'closed') return;
        setAnimationStage('opening');

        // Wait for animation to finish before showing full letter
        setTimeout(() => {
            setAnimationStage('open');
        }, 1500); // 1.5s for flap open + letter slide up
    };

    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center p-4">
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 mb-12">
                {t('about.title')}
            </h1>

            <div className="relative w-full max-w-2xl perspective-1000 h-[400px] flex items-center justify-center">
                {animationStage !== 'open' ? (
                    // ENVELOPE ANIMATION CONTAINER
                    <div
                        onClick={handleOpen}
                        className={`w-full max-w-md mx-auto aspect-[4/3] bg-indigo-100 dark:bg-indigo-900 cursor-pointer shadow-2xl rounded-lg relative transition-transform ${animationStage === 'closed' ? 'hover:scale-105' : ''}`}
                    >
                        {/* Letter Preview that slides out */}
                        <div className={`absolute left-4 right-4 bg-white dark:bg-gray-100 h-[80%] bottom-2 transition-all duration-1000 ease-in-out z-10 
                            ${animationStage === 'opening' ? 'transform -translate-y-24' : 'transform translate-y-0'}`}>
                            <div className="p-4 space-y-2 opacity-50">
                                <div className="h-2 bg-gray-300 rounded w-3/4"></div>
                                <div className="h-2 bg-gray-300 rounded w-full"></div>
                                <div className="h-2 bg-gray-300 rounded w-1/2"></div>
                            </div>
                        </div>

                        {/* Envelope Flap - Top Triangle */}
                        <div className={`absolute top-0 left-0 w-full h-[50%] bg-indigo-200 dark:bg-indigo-800 clip-path-polygon-[0%_0%,50%_100%,100%_0%] z-20 origin-top transition-transform duration-700 ease-in-out
                            ${animationStage === 'opening' ? 'rotate-x-180 z-0' : 'z-20 group-hover:rotate-x-12'}`}>
                        </div>

                        {/* Envelope Body - Bottom & Sides */}
                        <div className="absolute bottom-0 left-0 w-full h-full clip-path-polygon-[0%_100%,50%_50%,100%_100%] bg-indigo-300 dark:bg-indigo-700 z-30 pointer-events-none"></div>
                        <div className="absolute top-0 left-0 w-full h-full clip-path-polygon-[0%_0%,0%_100%,50%_50%] bg-indigo-50 dark:bg-indigo-950 z-20 opacity-50 pointer-events-none"></div>
                        <div className="absolute top-0 right-0 w-full h-full clip-path-polygon-[100%_0%,100%_100%,50%_50%] bg-indigo-50 dark:bg-indigo-950 z-20 opacity-50 pointer-events-none"></div>

                        {/* Stamp / Seal */}
                        <div className={`absolute top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-40 transition-all duration-300 ${animationStage === 'opening' ? 'opacity-0 scale-150' : 'opacity-100'}`}>
                            <div className="w-16 h-16 bg-purple-600 rounded-full border-4 border-purple-800 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                <span className="text-white font-bold text-xl font-serif">MS</span>
                            </div>
                        </div>

                        <div className={`absolute bottom-10 w-full text-center z-50 transition-opacity duration-300 ${animationStage === 'opening' ? 'opacity-0' : 'opacity-0 hover:opacity-100'}`}>
                            <p className="text-indigo-800 dark:text-indigo-200 font-serif italic text-lg">
                                {t('about.click_to_open')}
                            </p>
                        </div>
                    </div>
                ) : (
                    // FULL OPEN LETTER VIEW
                    <div className="w-full bg-[#fffdf0] dark:bg-gray-100 text-gray-800 p-8 md:p-12 rounded-sm shadow-2xl relative animate-paperExpand min-h-[400px] font-serif overflow-hidden">
                        {/* Paper Texture/Fold lines */}
                        <div className="absolute top-0 left-0 w-full h-px bg-gray-200 shadow-sm"></div>
                        <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl from-gray-300 to-transparent opacity-20 transform rotate-45 translate-x-1/2 translate-y-1/2"></div>

                        {/* Close Button - Desktop & Top */}
                        <button
                            onClick={(e) => { e.stopPropagation(); setAnimationStage('closed'); }}
                            className="absolute top-4 right-4 text-gray-500 hover:text-red-600 transition-colors z-[60] bg-white/50 rounded-full p-2 hover:bg-white"
                            title="Close Letter"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Mobile Bottom Close Button - Fixed for accessibility */}
                        <div className="md:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-[100]">
                            <button
                                onClick={(e) => { e.stopPropagation(); setAnimationStage('closed'); }}
                                className="bg-red-500 text-white px-6 py-2 rounded-full shadow-lg font-bold tracking-wide active:scale-95 transition-transform"
                            >
                                KAPAT
                            </button>
                        </div>

                        <div className="prose max-w-none animate-fadeInContent" style={{ animationDelay: '0.4s' }}>
                            <div className="mb-6 text-center border-b-2 border-gray-300 pb-4">
                                <h2 className="text-2xl font-bold text-gray-900 italic">Muzaffer Savcıoğlu</h2>
                                <p className="text-sm text-gray-500">{new Date().getFullYear()}</p>
                            </div>

                            {t('about.description').split('\n\n').map((paragraph, index) => (
                                <p key={index} className="text-lg leading-loose mb-4">
                                    {paragraph}
                                </p>
                            ))}

                            <div className="mt-8 text-right font-handwriting text-2xl text-indigo-900 border-t pt-4">
                                <span style={{ fontFamily: "'Dancing Script', cursive" }}>Sevgilerimle...</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <style jsx>{`
        .perspective-1000 {
            perspective: 1000px;
        }
        .rotate-x-180 {
            transform: rotateX(180deg);
        }
        .clip-path-polygon-\\[0%_0%\\,50%_100%\\,100%_0%\\] {
            clip-path: polygon(0% 0%, 50% 50%, 100% 0%);
        }
        .clip-path-polygon-\\[0%_100%\\,50%_50%\\,100%_100%\\] {
            clip-path: polygon(0% 100%, 50% 50%, 100% 100%);
        }
        .clip-path-polygon-\\[0%_0%\\,0%_100%\\,50%_50%\\] {
            clip-path: polygon(0% 0%, 0% 100%, 50% 50%);
        }
        .clip-path-polygon-\\[100%_0%\\,100%_100%\\,50%_50%\\] {
            clip-path: polygon(100% 0%, 100% 100%, 50% 50%);
        }
        
        @keyframes paperExpand {
            0% { 
                opacity: 0; 
                transform: scale(0.4) translateY(100px); 
                clip-path: polygon(10% 0, 90% 0, 90% 100%, 10% 100%);
            }
            50% {
                opacity: 1;
                transform: scale(1) translateY(0);
                clip-path: polygon(10% 0, 90% 0, 90% 100%, 10% 100%);
            }
            100% { 
                opacity: 1; 
                transform: scale(1) translateY(0); 
                clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            }
        }
        .animate-paperExpand {
            animation: paperExpand 0.8s ease-out forwards;
        }
        
        @keyframes fadeInContent {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInContent {
            opacity: 0;
            animation: fadeInContent 1s ease-out forwards;
        }
      `}</style>
        </div>
    );
};

export default About;
