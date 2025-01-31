import React from 'react';
import Navbar from './Navbar';
import { FaGraduationCap, FaCode, FaLanguage, FaCertificate, FaProjectDiagram } from 'react-icons/fa';

const ResumePage = () => {
  return (
    <div className="my-16 ml-5 mr-20 h-auto w-full flex flex-col bg-white text-black div-shadow rounded-2xl border-gray-300 p-7 font-poppins">
      <div className='flex justify-between'>
        <h1 className="text-4xl font-bold mt-3 text-shadow-xl">Resume</h1>
        <Navbar />
      </div>
      <div className='w-10 h-1.5 mb-4 mt-6 bg-custom-blue rounded'></div>

      {/* Eğitim bölümü */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <FaGraduationCap className="text-2xl text-custom-blue mr-2" />
          <h2 className="text-2xl font-bold">Education</h2>
        </div>
        <div className="ml-8 border-l-2 border-custom-blue pl-4">
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Altınbaş University</h3>
            <p className="text-gray-600">Software Engineering</p>
            <p className="text-gray-500">2023 - Present</p>
          </div>
        </div>
      </div>

      {/* Teknik yeteneklerim */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <FaCode className="text-2xl text-custom-blue mr-2" />
          <h2 className="text-2xl font-bold">Technical Skills</h2>
        </div>
        <div className="ml-8 grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold mb-2">Programming Languages</h3>
            <div className="space-y-2">
              <SkillBar skill="React" percentage={75} />
              <SkillBar skill="HTML/CSS" percentage={90} />
              <SkillBar skill="Java" percentage={80} />
              <SkillBar skill="JavaScript" percentage={80} />
              <skillBar skill="C" percentage={70} />
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Other Skills</h3>
            <div className="space-y-2">
              <SkillBar skill="Git" percentage={70} />
              <SkillBar skill="SQL" percentage={65} />
              <SkillBar skill="Tailwind CSS" percentage={85} />
              <SkillBar skill="Node.js" percentage={60} />
            </div>
          </div>
        </div>
      </div>

      {/* Dil Bölümü */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <FaLanguage className="text-2xl text-custom-blue mr-2" />
          <h2 className="text-2xl font-bold">Languages</h2>
        </div>
        <div className="ml-8 grid grid-cols-2 gap-4">
          <SkillBar skill="Turkish (Native)" percentage={100} />
          <SkillBar skill="English" percentage={85} />
        </div>
      </div>

      {/* Sertifikalar bölümü */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <FaCertificate className="text-2xl text-custom-blue mr-2" />
          <h2 className="text-2xl font-bold">Certificates</h2>
        </div>
        <div className="ml-8 space-y-4">
          <div>
            <h3 className="font-semibold">Web Development Bootcamp</h3>
            <p className="text-gray-600">Udemy (2023)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Skill Bar Component
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

export default ResumePage;