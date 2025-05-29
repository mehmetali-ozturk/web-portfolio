import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaCalendar, FaMapMarkerAlt, FaInstagram, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const InfoCard = ({ Icon, title, text }) => (
    <li className='flex items-center lg:mb-5'>
        <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-lg mr-3">
            <Icon className="text-base text-custom-blue" />
        </div>
        <div className="lg:w-40 max-w-fit overflow-hidden">
            <p className='text-xs text-gray-600 dark:text-gray-400'>{title}</p>
            <p className="text-xs text-gray-800 truncate dark:text-gray-200">{text}</p>
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
            <div className="lg:hidden w-full bg-white div-shadow rounded-2xl border-gray-300 p-3 mb-4 dark:bg-custom-gray transition-colors duration-300">
                <div className="flex items-center justify-between">
                    <div className='flex items-center space-x-3'>
                        <img src='/pp.png' alt={t('name')} 
                            className="w-12 h-12 rounded-xl bg-gray-100 p-2 dark:bg-custom-gray-2 transition-colors duration-300" />
                        <div>
                            <h1 className="text-lg font-bold dark:text-white transition-colors duration-300">{t('personalInfo.name')}</h1>
                            <p className="text-xs bg-gray-100 rounded-lg px-2 py-1 mt-1 max-w-max dark:bg-custom-gray-2 dark:text-white transition-colors duration-300">{t('personalInfo.title')}</p>
                        </div>
                    </div>
                    <button 
                        onClick={() => setIsOpen(!isOpen)}
                        className="ml-0 p-2 hover:bg-gray-100 dark:hover:bg-custom-gray-2 dark:text-white rounded-lg transition-colors" 
                    >
                        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                </div>
                
                <AnimatePresence>
                    {isOpen && (
                        <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.5 }}
                            className="overflow-hidden"
                        >
                            <div className="mt-3 border-t pt-3 dark:border-custom-gray-2 transition-colors duration-300">
                                <ul className="space-y-3">
                                    {contactInfo.map((info, index) => (
                                        <InfoCard 
                                            key={index}
                                            Icon={info.Icon}
                                            title={info.title}
                                            text={info.text}
                                        />
                                    ))}
                                </ul>
                                <div className="flex justify-center space-x-4 mt-3 pt-3 border-t border-gray-200 dark:border-custom-gray-2 transition-colors duration-300">
                                    <a href="https://www.linkedin.com/in/mehmet-ali-ozturk-" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-custom-blue dark:text-gray-400 dark:hover:text-custom-blue transition-colors duration-300">
                                        <FaLinkedin size={20} />
                                    </a>
                                    <a href="https://github.com/mehmetali-ozturk" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-custom-blue dark:text-gray-400 dark:hover:text-custom-blue transition-colors duration-300">
                                        <FaGithub size={20} />
                                    </a>
                                    <a href="https://instagram.com/lahmacuncu.memo" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-custom-blue dark:text-gray-400 dark:hover:text-custom-blue transition-colors duration-300">
                                        <FaInstagram size={20} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Desktop View */}
            <div className="hidden lg:flex h-auto max-w-min flex-col bg-white text-black div-shadow rounded-2xl border-gray-300 p-6 font-poppins mr-6 dark:bg-custom-gray transition-colors duration-300">
                <div className="flex flex-col items-center">
                    <img src='/pp.png' alt="Mehmet Ali Öztürk" className="w-32 h-32 rounded-2xl mt-6 my-5 bg-gray-100 p-2 dark:bg-custom-gray-2 transition-colors duration-300" />
                    <h1 className="text-xl font-bold mb-3 text-center dark:text-white transition-colors duration-300">Mehmet Ali Öztürk</h1>
                    <p className="text-xs rounded-lg p-1 px-3 bg-gray-100 mb-0 dark:bg-custom-gray-2 dark:text-white transition-colors duration-300">{t('personalInfo.title')}</p>
                    
                    <div className='w-full h-0.5 m-6 bg-gray-200 dark:bg-custom-gray-2 transition-colors duration-300'></div>
                    
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

                    <div className='w-full h-0.5 m-6 bg-gray-200 dark:bg-custom-gray-2 transition-colors duration-300'></div>
                    
                    <div className="flex justify-around w-full transition-colors duration-300">
                        <a href="https://www.linkedin.com/in/mehmet-ali-ozturk-" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-custom-blue dark:text-gray-400 dark:hover:text-custom-blue transition-colors duration-300">
                            <FaLinkedin size={20} />
                        </a>
                        <a href="https://github.com/mehmetali-ozturk" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-custom-blue dark:text-gray-400 dark:hover:text-custom-blue transition-colors duration-300">
                            <FaGithub size={20} />
                        </a>
                        <a href="https://instagram.com/lahmacuncu.memo" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-custom-blue dark:text-gray-400 dark:hover:text-custom-blue transition-colors duration-300">
                            <FaInstagram size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SideBar;