import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import skillsData from '../data/skills.json';
import certificatesData from '../data/certificates.json';
import SkillBar from '../components/SkillBar';

const Skills = () => {
    const { t } = useLanguage();

    return (
        <div className="py-12">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b pb-4 border-gray-200 dark:border-gray-700">
                {t('skills.title')}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                {skillsData.map((category) => (
                    <div key={category.category} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                        <h2 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
                            {t(category.category)}
                        </h2>
                        <div className="space-y-6">
                            {category.items.map((skill) => (
                                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Certificates Section */}
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b pb-4 border-gray-200 dark:border-gray-700">
                {t('skills.certificates')}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certificatesData.map((cert) => (
                    <div key={cert.id} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border-l-4 border-indigo-500 hover:shadow-xl transition-shadow">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                            {cert.title}
                        </h3>
                        <p className="text-sm text-indigo-600 dark:text-indigo-400 mb-2 font-medium">
                            {cert.issuer}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                            {cert.date}
                        </p>
                        {/* Optional Description if needed, fetched via t() */}
                        {/* <p className="text-sm text-gray-600 dark:text-gray-300">
                             {t(cert.descriptionKey)}
                         </p> */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
