import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaPhone, FaCalendar, FaMapMarkerAlt, FaInstagram, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const InfoCard = ({ Icon, title, text }) => (
    <li className='flex items-center mb-8'>
        <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-gray-100 rounded-lg mr-4 div-shadow-inset">
            <Icon className="text-lg text-custom-blue" />
        </div>
        <div className="w-48 overflow-hidden">
            <p className='text-sm text-gray-600'>{title}</p>
            <p className="text-sm text-gray-800 truncate">{text}</p>
        </div>
    </li>
);

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const contactInfo = [
        {
            Icon: FaEnvelope,
            title: 'EMAIL',
            text: 'mehmetali.ozturk@hotmail.com'
        },
        {
            Icon: FaPhone,
            title: 'PHONE',
            text: '+90 (544) 616 5198'
        },
        {
            Icon: FaCalendar,
            title: 'BIRTHDAY',
            text: 'July 16, 2005'
        },
        {
            Icon: FaMapMarkerAlt,
            title: 'LOCATION',
            text: 'Istanbul, Turkiye'
        }
    ];

    return (
        <>
            {/* Mobile View */}
            <div className="lg:hidden w-full bg-white div-shadow rounded-2xl border-gray-300 p-4 mb-5">
                <div className="flex items-center space-x-4">
                    <img src='/pp.png' alt="Mehmet Ali Öztürk" 
                        className="w-16 h-16 rounded-2xl bg-gray-100 p-2" />
                    <div>
                        <h1 className="text-xl font-bold">Mehmet Ali Öztürk</h1>
                        <p className="text-sm bg-gray-100 rounded-lg px-3 py-1 mt-1">Software Engineer</p>
                    </div>
                    <button 
                        onClick={() => setIsOpen(!isOpen)}
                        className="ml-auto p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                </div>
                
                {/* Mobile Dropdown */}
                {isOpen && (
                    <div className="mt-4 border-t pt-4">
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
                        <div className="flex justify-center space-x-4 mt-4 pt-4 border-t">
                            <a href="https://www.linkedin.com/in/mehmet-ali-ozturk-" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-custom-blue transition-colors duration-300">
                                <FaLinkedin size={24} />
                            </a>
                            <a href="https://github.com/mehmetali-ozturk" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-custom-blue transition-colors duration-300">
                                <FaGithub size={24} />
                            </a>
                            <a href="https://instagram.com/lahmacuncu.memo" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-custom-blue transition-colors duration-300">
                                <FaInstagram size={24} />
                            </a>
                        </div>
                    </div>
                )}
            </div>

            {/* Desktop View */}
            <div className="hidden lg:flex h-auto max-w-min flex-col bg-white text-black div-shadow rounded-2xl border-gray-300 p-8 font-poppins mr-7">
                <div className="flex flex-col items-center">
                    <img src='/pp.png' alt="Mehmet Ali Öztürk" className="w-40 h-40 rounded-3xl mt-10 my-7 bg-gray-100 p-3" />
                    <h1 className="text-2xl font-bold mb-5 text-center">Mehmet Ali Öztürk</h1>
                    <p className="text-sm rounded-lg p-1 px-4 bg-gray-100 mb-0">Software Engineer</p>
                    
                    <div className='w-full h-0.5 m-10 bg-gray-200'></div>
                    
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

                    <div className='w-full h-0.5 m-10 bg-gray-200'></div>
                    
                    <div className="flex justify-around w-full">
                        <a href="https://www.linkedin.com/in/mehmet-ali-ozturk-" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-custom-blue transition-colors duration-300">
                            <FaLinkedin size={24} />
                        </a>
                        <a href="https://github.com/mehmetali-ozturk" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-custom-blue transition-colors duration-300">
                            <FaGithub size={24} />
                        </a>
                        <a href="https://instagram.com/lahmacuncu.memo" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-custom-blue transition-colors duration-300">
                            <FaInstagram size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SideBar;