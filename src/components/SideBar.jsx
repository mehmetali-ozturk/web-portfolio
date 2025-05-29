import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaCalendar, FaMapMarkerAlt, FaInstagram, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const InfoCard = ({ Icon, title, text }) => (
    <li className='flex items-center lg:mb-8'>
        <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center  rounded-lg mr-4 ">
            <Icon className="text-lg text-custom-blue" />
        </div>
        <div className="lg:w-48 max-w-fit overflow-hidden">
            <p className='text-sm text-gray-600 dark:text-gray-400'>{title}</p>
            <p className="text-sm text-gray-800 truncate dark:text-gray-200">{text}</p>
        </div>
    </li>
);

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();
    
    
    const contactInfo = [
        {
            Icon: FaEnvelope,
            title: t('personalInfo.contact.email.label'),
            text: t('personalInfo.contact.email.value')
        },
        {
            Icon: FaPhone,
            title: t('personalInfo.contact.phone.label'),
            text: t('personalInfo.contact.phone.value')
        },
        {
            Icon: FaCalendar,
            title: t('personalInfo.contact.birthday.label'),
            text: t('personalInfo.contact.birthday.value')
        },
        {
            Icon: FaMapMarkerAlt,
            title: t('personalInfo.contact.location.label'),
            text: t('personalInfo.contact.location.value')
        }
    ];

    return (
        <>
            {/* Mobile View */}
            <div className="lg:hidden w-full bg-white div-shadow rounded-2xl border-gray-300 p-4 mb-5 dark:bg-custom-gray transition-colors duration-300 ">
                <div className="flex items-center justify-between">
                    <div className='flex items-center space-x-4'>
                        <img src='/pp.png' alt={t('name')} 
                            className="w-16 h-16 rounded-2xl bg-gray-100 p-2 dark:bg-custom-gray-2 transition-colors duration-300 " />
                        <div>
                            <h1 className="text-xl font-bold dark:text-white transition-colors duration-300">{t('personalInfo.name')}</h1>
                            <p className="text-sm bg-gray-100 rounded-lg px-3 py-1 mt-1 max-w-max dark:bg-cusstom-gray-2 dark:text-white dark:bg-custom-gray-2 transition-colors duration-300">{t('personalInfo.title')}</p>
                        </div>
                    </div>
                    <button 
                        onClick={() => setIsOpen(!isOpen)}
                        className="ml-0 p-2 hover:bg-gray-100 dark:hover:bg-custom-gray-2 dark:text-white rounded-lg transition-colors" 
                    >
                        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                </div>
                
                {/* Mobile Dropdown */}
                
                <AnimatePresence>
                    {isOpen && (
                        <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.5 }}
                            className="overflow-hidden"
                        >
                            <div className="mt-4 border-t pt-4 dark:border-custom-gray-2 transition-colors duration-300">
                                <ul className="space-y-4">
                                    {contactInfo.map((info, index) => (
                                        <InfoCard 
                                            key={index}
                                            Icon={info.Icon}
                                            title={info.title}
                                            text={info.text}
                                        />
                                    ))}
                                </ul>
                                <div className="flex justify-center space-x-4 mt-4 pt-4 border-t border-gray-200 dark:border-custom-gray-2 transition-colors duration-300">
                                    <a href="https://www.linkedin.com/in/mehmet-ali-ozturk-" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-custom-blue dark:text-gray-400 dark:hover:text-custom-blue transition-colors duration-300">
                                    <FaLinkedin size={24} />
                                    </a>
                                    <a href="https://github.com/mehmetali-ozturk" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-custom-blue dark:text-gray-400 dark:hover:text-custom-blue transition-colors duration-300">
                                        <FaGithub size={24} />
                                    </a>
                                    <a href="https://instagram.com/lahmacuncu.memo" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-custom-blue dark:text-gray-400 dark:hover:text-custom-blue transition-colors duration-300">
                                        <FaInstagram size={24} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Desktop View */}
            <div className="hidden lg:flex h-auto max-w-min flex-col bg-white text-black div-shadow rounded-2xl border-gray-300 p-8 font-poppins mr-7 dark:bg-custom-gray transition-colors duration-300">
                <div className="flex flex-col items-center">
                    <img src='/pp.png' alt="Mehmet Ali Öztürk" className="w-40 h-40 rounded-3xl mt-10 my-7 bg-gray-100 p-3 dark:bg-custom-gray-2 transition-colors duration-300" />
                    <h1 className="text-2xl font-bold mb-5 text-center dark:text-white transition-colors duration-300">Mehmet Ali Öztürk</h1>
                    <p className="text-sm rounded-lg p-1 px-4 bg-gray-100 mb-0 dark:bg-custom-gray-2 dark:text-white transition-colors duration-300">{t('personalInfo.title')}</p>
                    
                    <div className='w-full h-0.5 m-10 bg-gray-200 dark:bg-custom-gray-2 transition-colors duration-300'></div>
                    
                    <ul className="w-full">
                        {contactInfo.map((info, index) => (
                            <InfoCard 
                                key={index}
                                Icon={info.Icon}
                                title={info.title}
                                text={info.text}
                            />
                        ))}
                    </ul>

                    <div className='w-full h-0.5 m-10 bg-gray-200 dark:bg-custom-gray-2 transition-colors duration-300'></div>
                    
                    <div className="flex justify-around w-full transition-colors duration-300">
                        <a href="https://www.linkedin.com/in/mehmet-ali-ozturk-" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-custom-blue dark:text-gray-400 dark:hover:text-custom-blue transition-colors duration-300">
                            <FaLinkedin size={24} />
                        </a>
                        <a href="https://github.com/mehmetali-ozturk" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-custom-blue dark:text-gray-400 dark:hover:text-custom-blue transition-colors duration-300">
                            <FaGithub size={24} />
                        </a>
                        <a href="https://instagram.com/lahmacuncu.memo" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-custom-blue dark:text-gray-400 dark:hover:text-custom-blue transition-colors duration-300">
                            <FaInstagram size={24} />
                        </a>
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default SideBar;