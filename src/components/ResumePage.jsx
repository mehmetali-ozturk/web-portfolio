import React from 'react';
import Navbar from './Navbar';
import { FaGraduationCap, FaCode, FaLanguage } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const SkillBar = ({ skill, percentage }) => (
  <div>
    <div className="flex justify-between mb-1">
      <span className="text-xs font-medium">{skill}</span>
      <span className="text-xs font-medium">{percentage}%</span>
    </div>
    <div className="w-full bg-gray-200 dark:bg-custom-gray-2 rounded-full h-1.5">
      <div
        className="bg-custom-blue h-1.5 rounded-full transition-all duration-500"
        style={{ width: `${percentage}%` }}
      />
    </div>
  </div>
);

const ResumePage = () => {
  const { t } = useTranslation();

  return (
    <div className="base-container dark:bg-custom-gray transition-colors duration-300">
      <div className='flex justify-between'>
        <h1 className="text-2xl font-bold mt-2 text-shadow-xl dark:text-white transition-colors duration-300">{t('resume.title')}</h1>
        <Navbar />
      </div>
      <div className='w-8 h-1 mb-3 mt-4 bg-custom-blue rounded'></div>

      {/* Eğitim bölümü */}
      <div className="mb-6">
        <div className="flex items-center mb-3">
          <FaGraduationCap className="text-xl text-custom-blue mr-2" />
          <h2 className="text-lg font-bold dark:text-white transition-colors duration-300">{t('resume.education.title')}</h2>
        </div>
        <div className="ml-6 border-l-2 border-custom-blue pl-3">
          <div className="mb-3">
            <h3 className="text-base font-semibold dark:text-white transition-colors duration-300">{t('resume.education.university.name')}</h3>
            <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300 text-sm">{t('resume.education.university.department')}</p>
            <p className="text-gray-500 dark:text-gray-400 transition-colors duration-300 text-xs">{t('resume.education.university.period')}</p>
          </div>
        </div>
      </div>

      {/* Teknik yetenekler */}
      <div className="mb-6">
        <div className="flex items-center mb-3">
          <FaCode className="text-xl text-custom-blue mr-2" />
          <h2 className="text-lg font-bold dark:text-white transition-colors duration-300">{t('resume.technicalSkills.title')}</h2>
        </div>
        <div className="ml-6 grid grid-cols-1 gap-3 lg:grid-cols-2 dark:text-white transition-colors duration-300">
          <div>
            <h3 className="font-semibold mb-2 text-sm">{t('resume.technicalSkills.programmingLanguages.title')}</h3>
            <div className="space-y-2">
              <SkillBar skill={t('resume.technicalSkills.programmingLanguages.skills.react')} percentage={80} />
              <SkillBar skill={t('resume.technicalSkills.programmingLanguages.skills.nextjs')} percentage={75} />
              <SkillBar skill={t('resume.technicalSkills.programmingLanguages.skills.typescript')} percentage={70} />
              <SkillBar skill={t('resume.technicalSkills.programmingLanguages.skills.htmlCss')} percentage={90} />
              <SkillBar skill={t('resume.technicalSkills.programmingLanguages.skills.java')} percentage={80} />
              <SkillBar skill={t('resume.technicalSkills.programmingLanguages.skills.javascript')} percentage={80} />
              <SkillBar skill={t('resume.technicalSkills.programmingLanguages.skills.c')} percentage={70} />
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-sm">{t('resume.technicalSkills.otherSkills.title')}</h3>
            <div className="space-y-2">
              <SkillBar skill={t('resume.technicalSkills.otherSkills.skills.git')} percentage={75} />
              <SkillBar skill={t('resume.technicalSkills.otherSkills.skills.sql')} percentage={65} />
              <SkillBar skill={t('resume.technicalSkills.otherSkills.skills.tailwind')} percentage={85} />
              <SkillBar skill={t('resume.technicalSkills.otherSkills.skills.nodejs')} percentage={65} />
              <SkillBar skill={t('resume.technicalSkills.otherSkills.skills.supabase')} percentage={70} />
              <SkillBar skill={t('resume.technicalSkills.otherSkills.skills.aws')} percentage={60} />
            </div>
          </div>
        </div>
      </div>

      {/* Diller */}
      <div className="mb-6 dark:text-white transition-colors duration-300">
        <div className="flex items-center mb-3">
          <FaLanguage className="text-xl text-custom-blue mr-2" />
          <h2 className="text-lg font-bold">{t('resume.languages.title')}</h2>
        </div>
        <div className="ml-6 grid grid-cols-1 lg:grid-cols-2 gap-3">
          <SkillBar skill={t('resume.languages.turkish')} percentage={100} />
          <SkillBar skill={t('resume.languages.english')} percentage={85} />
        </div>
      </div>
    </div>
  );
};

export default ResumePage;