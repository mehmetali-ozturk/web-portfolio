import React from 'react';
import { FaDesktop, FaCode, FaMobile, FaDatabase, FaGamepad, FaCogs, FaClipboardCheck, FaObjectGroup, FaBrain, FaSearch, FaJava, FaJsSquare, FaPhp, FaUnity, FaHtml5, FaGit } from 'react-icons/fa';
import Navbar from './Navbar';
// Yetenek kartlarını oluşturmak için InfoCard adında bir bileşen oluşturdum.
// Bileşenle birlikte icon, title ve description adında üç adet prop alıyorum.
const SkillCard = ({ Icon, title, description }) => (
    <div className='flex items-center p-6 rounded-lg bg-white hover:bg-gray-50 transition-all duration-300 div-shadow-inset'>
        <div className="min-w-[60px] mr-6">
            <Icon className="text-4xl text-custom-blue hover:text-gray-700 transition-colors duration-300" />
        </div>
        <div>
            <h2 className='text-lg font-bold mb-2 '>{title}</h2>
            <p className='text-sm font-medium text-gray-800'>{description}</p>
        </div>
    </div>
);

// ...rest of your component remains the same
const AboutMePage = () => {
    // InfoCard bileşenine göndereceğim verileri bu dizi içerisinde tutuyorum.
    const skills = [
        {
            Icon: FaDesktop,
            title: 'Web Design & Development',
            description: 'Design and develop responsive, user-friendly websites and web apps.'
        },
        {
            Icon: FaDatabase,
            title: 'Database Management',
            description: 'Design, optimize databases, and write SQL queries for efficient data handling.'
        },
        {
            Icon: FaCode,
            title: 'Software Development & Architecture',
            description: 'Develop scalable software solutions using best architecture practices.'
        },
        {
            Icon: FaGamepad,
            title: 'Game Development',
            description: 'Create engaging games using Unity and optimize gameplay.'
        },
        {
            Icon: FaClipboardCheck,
            title: 'Software Testing',
            description: 'Implement testing strategies to ensure app quality and minimize bugs.'
        },
        {
            Icon: FaBrain,
            title: 'Algorithms & Problem Solving',
            description: 'Design efficient algorithms focused on performance and scalability.'
        },
        {
            Icon: FaSearch,
            title: 'Search Engine Optimization (SEO)',
            description: 'Optimize websites to improve visibility and increase web traffic.'
        },
        
    ];

    return (
        <div className="mr-50 h-auto w-full flex flex-col bg-white text-black div-shadow rounded-2xl border-gray-300 p-7 font-poppins">
            <div className='flex justify-between'>
                <p className='lg:text-4xl text-3xl font-bold text-shadow-xl mt-3'>About Me</p>
                <Navbar />
            </div>
            <div>
                
                <div className='w-10 h-1.5 mb-4 mt-6 bg-custom-blue rounded'></div>
                <p className='py-1 mb-2 text-shadow-lg text-sm lg:text-lg'>
                Hey! I'm Mehmet Ali Öztürk, a Software Engineering student at Altınbaş University driven by a passion for creating innovative digital solutions.
                </p>
                <p className='py-1 mb-2 text-shadow-lg text-sm lg:text-lg'>
                I specialize in building modern web applications that blend user-friendly interfaces with solid backend systems. Always learning and growing, I'm committed to crafting impactful projects that push boundaries.
                </p>

            </div> 
            
            <div className='mt-5'>
                <h1 className='text-3xl font-bold m-2'>What I'm Doing</h1>
                {/* Yetenek kartlarını oluşturmak için SkillCard bileşenini kullanıyorum. */}
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