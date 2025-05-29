import React from 'react';
import Navbar from './Navbar';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Project = ({ title, description, technologies, githubUrl, liveUrl }) => {
  return (
    <div className="p-4 rounded-lg dark:text-white transition-theme card dark:bg-custom-gray">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-3 text-sm dark:text-gray-300 transition-theme">
        {description}
      </p>
      <div className="flex flex-wrap gap-1 mb-3">
        {technologies.map((tech, index) => (
          <span 
            key={`tech-${index}-${tech}`}
            className="px-2 py-1 text-xs bg-gray-100 rounded-full text-gray-700 dark:bg-custom-gray-2 dark:text-gray-300 transition-theme"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex justify-between">
        <a 
          href={githubUrl} 
          target='_blank' 
          rel="noopener noreferrer"
          className="text-custom-blue hover:text-gray-600 dark:hover:text-gray-300 transition-theme"
          aria-label="GitHub repository"
        >
          <FaGithub size={18} />
        </a>
        {liveUrl && (
          <a 
            href={liveUrl} 
            target='_blank' 
            rel="noopener noreferrer"
            className="text-custom-blue hover:text-gray-600 dark:hover:text-gray-300 transition-theme"
            aria-label="Live demo"
          >
            <FaExternalLinkAlt size={18} />
          </a>
        )}
      </div>
    </div>
  );
};

const ProjectsPage = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 'portfolio-project',
      title: t('projects.portfolioProject.title'),
      description: t('projects.portfolioProject.description'),
      technologies: [
        t('projects.portfolioProject.technologies.react'),
        t('projects.portfolioProject.technologies.tailwind'),
        t('projects.portfolioProject.technologies.framer')
      ],
      githubUrl: "https://github.com/mehmetali-ozturk/web-portfolio",
      liveUrl: "https://mehmetali.tech/"
    },
    {
      id: 'westla-project',
      title: t('projects.westlaProject.title'),
      description: t('projects.westlaProject.description'),
      technologies: [
        t('projects.westlaProject.technologies.nextjs'),
        t('projects.westlaProject.technologies.typescript'),
        t('projects.westlaProject.technologies.tailwind'),
        t('projects.westlaProject.technologies.supabase'),
        t('projects.westlaProject.technologies.aws')
      ],
      githubUrl: "https://github.com/mehmetali-ozturk/westla",
      liveUrl: "https://westla.online/"
    },
  ];

  return (
    <div className="base-container dark:bg-custom-gray transition-theme">
      <div className='flex justify-between dark:text-white transition-theme'>
        <h1 className="text-2xl font-bold mt-2 text-shadow-xl">{t('projects.title')}</h1>
        <Navbar />
      </div>
      <div className='w-8 h-1 mb-3 mt-4 bg-custom-blue rounded'></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {projects.map((project) => (
          <Project 
            key={project.id}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;