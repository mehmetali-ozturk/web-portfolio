import React from 'react';
import { FaDesktop, FaCode, FaMobile, FaDatabase, FaGamepad, FaCogs, FaClipboardCheck, FaObjectGroup, FaBrain, FaSearch, FaJava, FaJsSquare, FaPhp, FaUnity, FaHtml5, FaGit } from 'react-icons/fa';
import Navbar from './Navbar';
import { useTranslation } from 'react-i18next';

const SkillCard = ({ Icon, title, description }) => (
    <div className='flex items-center p-6 rounded-lg bg-white hover:bg-gray-50 card transition-all duration-300 dark:bg-custom-gray'>
        <div className="min-w-[60px] mr-6">
            <Icon className="text-4xl text-custom-blue hover:text-gray-700 transition-colors duration-300" />
        </div>
        <div>
            <h2 className='text-lg font-bold mb-2 dark:text-white'>{title}</h2>
            <p className='text-sm font-medium text-gray-800 dark:text-white'>{description}</p>
        </div>
    </div>
);

const AboutMePage = () => {
    const { t } = useTranslation();

    const skills = [
        {
            Icon: FaDesktop,
            title: t("about.skills.webDev"),
            description: t("about.skillDescriptions.webDev")
        },
        {
            Icon: FaDatabase,
            title: t("about.skills.database"),
            description: t("about.skillDescriptions.database")
        },
        {
            Icon: FaCode,
            title: t("about.skills.softwareDev"),
            description: t("about.skillDescriptions.softwareDev")
        },
        {
            Icon: FaGamepad,
            title: t("about.skills.gameDev"),
            description: t("about.skillDescriptions.gameDev")
        },
        {
            Icon: FaClipboardCheck,
            title: t("about.skills.testing"),
            description: t("about.skillDescriptions.testing")
        },
        {
            Icon: FaBrain,
            title: t("about.skills.algorithms"),
            description: t("about.skillDescriptions.algorithms")
        }
    ];

    return (
        <div className="base-container dark:bg-custom-gray transition-colors duration-300">
            <div className='flex justify-between'>
                <p className='lg:text-4xl text-3xl font-bold text-shadow-xl mt-3 dark:text-white'>{t("about.title")}</p>
                <Navbar />
            </div>
            <div>
                <div className='w-10 h-1.5 mb-4 mt-6 bg-custom-blue rounded'></div>
                <p className='py-1 mb-2 text-shadow-lg text-sm lg:text-lg dark:text-white'>
                    {t("about.description1")}
                </p>
                <p className='py-1 mb-2 text-shadow-lg text-sm lg:text-lg dark:text-white'>
                    {t("about.description2")}
                </p>
            </div>
            
            <div className='mt-5'>
                <h1 className='text-3xl font-bold m-2 dark:text-white'>{t("about.whatImDoing")}</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                    {skills.map((skill, index) => (
                        <SkillCard 
                            key={index}
                            Icon={skill.Icon}
                            title={skill.title}
                            description={skill.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutMePage;