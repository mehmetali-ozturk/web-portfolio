import React from 'react';
import Navbar from './Navbar';
import { FaProjectDiagram, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Project = ({ title, description, technologies, githubUrl, liveUrl }) => {
  const { t } = useTranslation();
  
  return (
    <div className="p-6 rounded-lg dark:text-white transition-theme card dark:bg-custom-gray">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 dark:text-gray-300 transition-theme">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span 
            key={index} 
            className="px-3 py-1 text-sm bg-gray-100 rounded-full text-gray-700 dark:bg-custom-gray-2 dark:text-gray-300 transition-theme"
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
        >
          <FaGithub size={20} />
        </a>
        {liveUrl && (
          <a 
            href={liveUrl} 
            target='_blank' 
            rel="noopener noreferrer"
            className="text-custom-blue hover:text-gray-600 dark:hover:text-gray-300 transition-theme"
          >
            <FaExternalLinkAlt size={20} />
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
      title: t('projects.portfolioProject.title'),
      description: t('projects.portfolioProject.description'),
      technologies: [
        t('projects.portfolioProject.technologies.react'),
        t('projects.portfolioProject.technologies.tailwind'),
        t('projects.portfolioProject.technologies.framer')
      ],
      githubUrl: "https://github.com/mehmetali-ozturk/web-portfolio",
      liveUrl: "https://memedali.live/"
    },
    {
      title: t('projects.hospitalProject.title'),
      description: t('projects.hospitalProject.description'),
      technologies: [
        t('projects.hospitalProject.technologies.react'),
        t('projects.hospitalProject.technologies.spring'),
        t('projects.hospitalProject.technologies.mysql'),
        t('projects.hospitalProject.technologies.jwt')
      ],
      githubUrl: "https://github.com/mehmetali-ozturk/hospital-appointment",
      liveUrl: "https://hospital.memedali.live/"
    }
  ];

  return (
    <div className="base-container dark:bg-custom-gray transition-theme">
      <div className='flex justify-between dark:text-white transition-theme'>
        <h1 className="text-4xl font-bold mt-3 text-shadow-xl">{t('projects.title')}</h1>
        <Navbar />
      </div>
      <div className='w-10 h-1.5 mb-4 mt-6 bg-custom-blue rounded'></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {projects.map((project, index) => (
          <Project 
            key={index}
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