import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const ProjectCard = ({ project, onClick }) => {
    const { t } = useLanguage();

    return (
        <div
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group border border-gray-100 dark:border-gray-700 h-full flex flex-col"
            onClick={() => onClick(project)}
        >
            {/* If image exists, show it. If not, maybe showing a placeholder or just title/desc */}
            {project.image ? (
                <div className="relative overflow-hidden h-48">
                    <img
                        src={project.image}
                        alt={t(project.title)}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
                </div>
            ) : (
                <div className="h-2 bg-indigo-500 w-full"></div>
            )}

            <div className="p-6 flex-grow flex flex-col">
                <div className="text-xs font-semibold tracking-wide uppercase text-indigo-600 dark:text-indigo-400 mb-1">
                    {project.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {t(project.title)}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 mb-4 flex-grow">
                    {t(project.description)}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies && project.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="px-2 py-1 text-xs font-medium rounded-md bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
