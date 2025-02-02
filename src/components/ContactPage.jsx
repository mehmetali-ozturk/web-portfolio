import React, { useState } from 'react';
import Navbar from './Navbar';
import { useTranslation } from 'react-i18next';

const ContactPage = () => {
  const [status, setStatus] = useState('');
  const { t } = useTranslation();

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
        <h1 className="text-4xl font-bold mt-3 text-shadow-xl">{t('contact.title')}</h1>
        <Navbar />
      </div>
      <div className='w-10 h-1.5 mb-4 mt-6 bg-custom-blue rounded'></div>
      
      <form onSubmit={handleSubmit} className="mt-8 space-y-6 max-w-2xl">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            {t('contact.form.name.label')}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-blue focus:border-transparent outline-none transition-all duration-300"
            placeholder={t('contact.form.name.placeholder')}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            {t('contact.form.email.label')}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-blue focus:border-transparent outline-none transition-all duration-300"
            placeholder={t('contact.form.email.placeholder')}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            {t('contact.form.message.label')}
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows="6"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-blue focus:border-transparent outline-none transition-all duration-300 resize-none"
            placeholder={t('contact.form.message.placeholder')}
          />
        </div>

        <button
          type="submit"
          disabled={status === 'sending'}
          className={`px-6 py-3 bg-custom-blue text-white rounded-lg hover:bg-opacity-90 transition-all duration-300 font-medium ${status === 'sending' ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          {status === 'sending' ? t('contact.form.button.sending') : t('contact.form.button.send')}
        </button>

        {status === 'success' && (
          <div className="p-4 bg-green-100 text-green-700 rounded-lg">
            {t('contact.form.status.success')}
          </div>
        )}
        {status === 'error' && (
          <div className="p-4 bg-red-100 text-red-700 rounded-lg">
            {t('contact.form.status.error')}
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactPage;