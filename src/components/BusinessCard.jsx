import React from 'react';
import { FaPhone, FaEnvelope, FaGlobe } from 'react-icons/fa';

const BusinessCard = () => {
    return (
        <div className="p-4 bg-white text-black border-gray-500 border-2">
            
            
            <div>
                <h1 className="text-xl font-bold justify-self-start">Mehmet Ali Öztürk</h1>
                <p className='pb-5'>Software Engineer</p>
                <p><FaPhone className="inline-block mr-2" />544 616 5198</p>
                <p><FaEnvelope className="inline-block mr-2" />mehmetali.ozturk@hotmail.com</p>
                <p><FaGlobe className="inline-block mr-2" />memedali.live</p>
            </div>
        </div>
    );
};

export default BusinessCard;