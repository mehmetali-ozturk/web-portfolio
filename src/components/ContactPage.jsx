import React, { useState } from 'react';
import Navbar from './Navbar';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add form submission logic here
  };

  return (
    <div className="mr-50 h-auto w-full flex flex-col bg-white text-black div-shadow rounded-2xl border-gray-300 p-7 font-poppins">
      <div className='flex justify-between'>
        <h1 className="text-4xl font-bold mt-3 text-shadow-xl">Contact</h1>
        <Navbar />
      </div>
      <div className='w-10 h-1.5 mb-4 mt-6 bg-custom-blue rounded'></div>
      
      <form onSubmit={handleSubmit} className="mt-8 space-y-6 max-w-2xl">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-blue focus:border-transparent outline-none transition-all duration-300"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-blue focus:border-transparent outline-none transition-all duration-300"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-blue focus:border-transparent outline-none transition-all duration-300 resize-none"
            placeholder="Enter your message"
          />
        </div>

        <button
          type="submit"
          className="px-6 py-3 bg-custom-blue text-white rounded-lg hover:bg-opacity-90 transition-all duration-300 font-medium"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
