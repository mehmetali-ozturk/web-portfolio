import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaPhone, FaCalendar, FaMapMarkerAlt, FaInstagram } from 'react-icons/fa';


// Bilgi kartlarını oluşturmak için InfoCard adında bir bileşen oluşturdum.
// Bileşenle birlikte icon, title ve text adında üç adet prop alıyorum.

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
    // InfoCard bileşenine göndereceğim verileri bu dizi içerisinde tutuyorum.
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
        <div className="my-16 ml-20 h-auto w-[320px] flex flex-col bg-white text-black div-shadow rounded-2xl border-gray-300 p-8 font-poppins">
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
        </div>
        <div className="mt-auto flex justify-around w-full pt-4">
            <a href="https://www.linkedin.com/in/mehmet-ali-ozturk-/" target="_blank" rel="noopener noreferrer" className="text-black transition-all duration-500"><FaLinkedin size={24} /></a>
            <a href="https://github.com/mehmetali-ozturk" target="_blank" rel="noopener noreferrer" className="text-black transition-all duration-500"><FaGithub size={24} /></a>
            <a href="https://www.instagram.com/lahmacuncu.memo/" target="_blank" rel="noopener noreferrer" className="text-black transition-all duration-500"><FaInstagram size={24} /></a>
        </div>
    </div>
    );
};

export default SideBar;