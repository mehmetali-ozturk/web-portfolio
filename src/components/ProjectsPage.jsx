import React from 'react';
import Navbar from './Navbar';
import { FaProjectDiagram, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const ProjectsPage = () => {
  const { t } = useTranslation();

  return (
    <div className="base-container dark:bg-custom-gray transition-colors duration-300">
      <div className='flex justify-between dark:text-white transition-colors duration-300 '>
        <h1 className="text-4xl font-bold mt-3 text-shadow-xl">{t('projects.title')}</h1>
        <Navbar />
      </div>
      <div className='w-10 h-1.5 mb-4 mt-6 bg-custom-blue rounded '></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="p-6 rounded-lg  dark:text-white transition-colors duration-300 card dark:bg-custom-gray ">
          
          <h3 className="text-xl font-semibold mb-2">{t('projects.portfolioProject.title')}</h3>
          <p className="text-gray-600 mb-4 dark:text-gray-300 transition-colors duration-300 ">
            {t('projects.portfolioProject.description')}
          </p>
          <div className="flex flex-wrap gap-2 mb-4 ">
            <span className="px-3 py-1 text-sm bg-gray-100 rounded-full text-gray-700 dark:bg-custom-gray-2 dark:text-gray-300 transition-colors duration-300 ">
              {t('projects.portfolioProject.technologies.react')}
            </span>
            <span className="px-3 py-1 text-sm bg-gray-100 rounded-full text-gray-700 dark:bg-custom-gray-2 dark:text-gray-300 transition-colors duration-300 ">
              {t('projects.portfolioProject.technologies.tailwind')}
            </span>
            <span className="px-3 py-1 text-sm bg-gray-100 rounded-full text-gray-700 dark:bg-custom-gray-2 dark:text-gray-300 transition-colors duration-300 ">
              {t('projects.portfolioProject.technologies.framer')}
            </span>
          </div>
          <div className="flex justify-between">
            <a 
              href="https://github.com/mehmetali-ozturk/web-portfolio" 
              target='_blank' 
              rel="noopener noreferrer"
              className="text-custom-blue hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300"
            >
              <FaGithub size={20} />
            </a>
            <a 
              href="https://memedali.live/" 
              target='_blank' 
              rel="noopener noreferrer"
              className="text-custom-blue hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300"
            >
              <FaExternalLinkAlt size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;