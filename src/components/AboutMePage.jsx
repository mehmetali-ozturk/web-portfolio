import React from 'react';
import { FaDesktop, FaCode, FaDatabase, FaGamepad, FaClipboardCheck, FaBrain, FaCloud, FaUsers, FaShieldAlt } from 'react-icons/fa';
import Navbar from './Navbar';
import { useTranslation } from 'react-i18next';

const SkillCard = ({ Icon, title, description }) => (
    <div className='flex items-center p-4 rounded-lg bg-white hover:bg-gray-50 card transition-all duration-300 dark:bg-custom-gray'>
        <div className="min-w-[45px] mr-4">
            <Icon className="text-2xl text-custom-blue hover:text-gray-700 transition-colors duration-300" />
        </div>
        <div>
            <h2 className='text-base font-bold mb-1 dark:text-white'>{title}</h2>
            <p className='text-xs font-medium text-gray-800 dark:text-white'>{description}</p>
        </div>
    </div>
);

const AboutMePage = () => {
    const { t } = useTranslation();

    const skills = [
        {
            id: 'web-dev',
            Icon: FaDesktop,
            title: t("about.skills.webDev"),
            description: t("about.skillDescriptions.webDev")
        },
        {
            id: 'fullstack',
            Icon: FaCloud,
            title: t("about.skills.fullstack"),
            description: t("about.skillDescriptions.fullstack")
        },
        {
            id: 'database',
            Icon: FaDatabase,
            title: t("about.skills.database"),
            description: t("about.skillDescriptions.database")
        },
        {
            id: 'software-dev',
            Icon: FaCode,
            title: t("about.skills.softwareDev"),
            description: t("about.skillDescriptions.softwareDev")
        },
        {
            id: 'user-management',
            Icon: FaUsers,
            title: t("about.skills.userManagement"),
            description: t("about.skillDescriptions.userManagement")
        },
        {
            id: 'security',
            Icon: FaShieldAlt,
            title: t("about.skills.security"),
            description: t("about.skillDescriptions.security")
        },
        {
            id: 'game-dev',
            Icon: FaGamepad,
            title: t("about.skills.gameDev"),
            description: t("about.skillDescriptions.gameDev")
        },
        {
            id: 'testing',
            Icon: FaClipboardCheck,
            title: t("about.skills.testing"),
            description: t("about.skillDescriptions.testing")
        },
        {
            id: 'algorithms',
            Icon: FaBrain,
            title: t("about.skills.algorithms"),
            description: t("about.skillDescriptions.algorithms")
        }
    ];

    return (
        <div className="base-container dark:bg-custom-gray transition-colors duration-300">
            <div className='flex justify-between'>
                <p className='lg:text-2xl text-xl font-bold text-shadow-xl mt-2 dark:text-white'>{t("about.title")}</p>
                <Navbar />
            </div>
            <div>
                <div className='w-8 h-1 mb-3 mt-4 bg-custom-blue rounded'></div>
                <p className='py-1 mb-2 text-shadow-lg text-xs lg:text-sm dark:text-white'>
                    {t("about.description1")}
                </p>
                <p className='py-1 mb-2 text-shadow-lg text-xs lg:text-sm dark:text-white'>
                    {t("about.description2")}
                </p>
            </div>
            
            <div className='mt-4'>
                <h1 className='text-xl font-bold m-2 dark:text-white'>{t("about.whatImDoing")}</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5">
                    {skills.map((skill) => (
                        <SkillCard 
                            key={skill.id}
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