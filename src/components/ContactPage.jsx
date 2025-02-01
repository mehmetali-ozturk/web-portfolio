import React, { useState } from 'react';
import Navbar from './Navbar';

const ContactPage = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      const response = await fetch('https://formspree.io/f/xvgzrqbz', {
        method: 'POST',
        body: new FormData(e.target),
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        e.target.reset(); // Clear the form
        setStatus('success');
        setTimeout(() => setStatus(''), 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus(''), 3000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
    }
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
            required
            rows="6"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-blue focus:border-transparent outline-none transition-all duration-300 resize-none"
            placeholder="Enter your message"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'sending'}
          className={`px-6 py-3 bg-custom-blue text-white rounded-lg hover:bg-opacity-90 transition-all duration-300 font-medium ${status === 'sending' ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>

        {status === 'success' && (
          <div className="p-4 bg-green-100 text-green-700 rounded-lg">
            Message sent successfully! 🎉
          </div>
        )}
        {status === 'error' && (
          <div className="p-4 bg-red-100 text-red-700 rounded-lg">
            Oops! Something went wrong. Please try again.
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactPage;