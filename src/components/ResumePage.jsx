import React from 'react';
import Navbar from './Navbar';
import { FaGraduationCap, FaCode, FaLanguage, FaCertificate } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const SkillBar = ({ skill, percentage }) => (
  <div>
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium">{skill}</span>
      <span className="text-sm font-medium">{percentage}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div
        className="bg-custom-blue h-2 rounded-full transition-all duration-500"
        style={{ width: `${percentage}%` }}
      />
    </div>
  </div>
);

const ResumePage = () => {
  const { t } = useTranslation();

  return (
    <div className="mr-50 h-auto w-full flex flex-col bg-white text-black div-shadow rounded-2xl border-gray-300 p-7 font-poppins">
      <div className='flex justify-between'>
        <h1 className="text-4xl font-bold mt-3 text-shadow-xl">{t('resume.title')}</h1>
        <Navbar />
      </div>
      <div className='w-10 h-1.5 mb-4 mt-6 bg-custom-blue rounded'></div>

      {/* Eğitim bölümü */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <FaGraduationCap className="text-2xl text-custom-blue mr-2" />
          <h2 className="text-2xl font-bold">{t('resume.education.title')}</h2>
        </div>
        <div className="ml-8 border-l-2 border-custom-blue pl-4">
          <div className="mb-4">
            <h3 className="text-xl font-semibold">{t('resume.education.university.name')}</h3>
            <p className="text-gray-600">{t('resume.education.university.department')}</p>
            <p className="text-gray-500">{t('resume.education.university.period')}</p>
          </div>
        </div>
      </div>

      {/* Teknik yetenekler */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <FaCode className="text-2xl text-custom-blue mr-2" />
          <h2 className="text-2xl font-bold">{t('resume.technicalSkills.title')}</h2>
        </div>
        <div className="ml-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div>
            <h3 className="font-semibold mb-2">{t('resume.technicalSkills.programmingLanguages.title')}</h3>
            <div className="space-y-2">
              <SkillBar skill={t('resume.technicalSkills.programmingLanguages.skills.react')} percentage={75} />
              <SkillBar skill={t('resume.technicalSkills.programmingLanguages.skills.htmlCss')} percentage={90} />
              <SkillBar skill={t('resume.technicalSkills.programmingLanguages.skills.java')} percentage={80} />
              <SkillBar skill={t('resume.technicalSkills.programmingLanguages.skills.javascript')} percentage={80} />
              <SkillBar skill={t('resume.technicalSkills.programmingLanguages.skills.c')} percentage={70} />
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-2">{t('resume.technicalSkills.otherSkills.title')}</h3>
            <div className="space-y-2">
              <SkillBar skill={t('resume.technicalSkills.otherSkills.skills.git')} percentage={70} />
              <SkillBar skill={t('resume.technicalSkills.otherSkills.skills.sql')} percentage={65} />
              <SkillBar skill={t('resume.technicalSkills.otherSkills.skills.tailwind')} percentage={85} />
              <SkillBar skill={t('resume.technicalSkills.otherSkills.skills.nodejs')} percentage={60} />
            </div>
          </div>
        </div>
      </div>

      {/* Diller */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <FaLanguage className="text-2xl text-custom-blue mr-2" />
          <h2 className="text-2xl font-bold">{t('resume.languages.title')}</h2>
        </div>
        <div className="ml-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <SkillBar skill={t('resume.languages.turkish')} percentage={100} />
          <SkillBar skill={t('resume.languages.english')} percentage={85} />
        </div>
      </div>

      {/* Sertifikalar */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <FaCertificate className="text-2xl text-custom-blue mr-2" />
          <h2 className="text-2xl font-bold">{t('resume.certificates.title')}</h2>
        </div>
        <div className="ml-8 space-y-4">
          <div>
            <h3 className="font-semibold">{t('resume.certificates.webDev.title')}</h3>
            <p className="text-gray-600">{t('resume.certificates.webDev.institution')} ({t('resume.certificates.webDev.year')})</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;