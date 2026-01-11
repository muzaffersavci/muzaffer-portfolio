import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import projectsData from '../data/projects.json';
import ProjectCard from '../components/ProjectCard';
import Modal from '../components/Modal';

const Projects = () => {
    const { t } = useLanguage();
    const [filter, setFilter] = useState('All'); // 'All' matches the default state
    const [selectedProject, setSelectedProject] = useState(null);

    const categories = ['All', ...new Set(projectsData.map(p => p.category))];

    const filteredProjects = useMemo(() => {
        if (filter === 'All' || filter === t('projects.filterAll')) return projectsData;
        return projectsData.filter(p => p.category === filter);
    }, [filter, t]);

    const handleFilterClick = (category) => {
        setFilter(category);
    }

    return (
        <div className="py-12">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b pb-4 border-gray-200 dark:border-gray-700">
                {t('projects.title')}
            </h1>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => handleFilterClick(category)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === category || (filter === 'All' && category === 'All')
                            ? 'bg-indigo-600 text-white shadow-lg'
                            : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                            }`}
                    >
                        {category === 'All' ? t('projects.filterAll') : category}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map(project => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        onClick={setSelectedProject}
                    />
                ))}
            </div>

            {/* Modal */}
            <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
                {selectedProject && (
                    <div>
                        {selectedProject.image && (
                            <div className="h-64 rounded-xl overflow-hidden mb-6">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )}
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{t(selectedProject.title)}</h2>
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 mb-4">
                            {selectedProject.category}
                        </span>
                        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                            {t(selectedProject.description)}
                        </p>

                        <div className="mb-6">
                            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Technologies</h3>
                            <div className="flex flex-wrap gap-2">
                                {selectedProject.technologies && selectedProject.technologies.map(t => (
                                    <span key={t} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-md">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex gap-4">
                            {selectedProject.demoUrl && (
                                <a href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer" className="flex-1 text-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors">
                                    Live Demo
                                </a>
                            )}
                            {selectedProject.githubUrl && (
                                <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1 text-center px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-lg transition-colors">
                                    GitHub Repo
                                </a>
                            )}
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default Projects;
