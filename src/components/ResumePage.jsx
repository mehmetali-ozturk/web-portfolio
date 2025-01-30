import React from 'react';
import Navbar from './Navbar';

const ResumePage = () => {
  return (
    <div className="my-16 ml-5 mr-20 h-auto w-full flex flex-col bg-white text-black div-shadow rounded-2xl border-gray-300 p-7 font-poppins">
      <div className='flex justify-between'>
        <h1 className="text-4xl font-bold mt-3 text-shadow-xl">Resume</h1>
        <Navbar />
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default ResumePage;