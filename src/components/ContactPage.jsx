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
        e.target.reset();
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
    <div className="base-container dark:bg-custom-gray transition-colors duration-300">
      <div className='flex justify-between'>
        <h1 className="text-2xl font-bold mt-2 text-shadow-xl dark:text-white transition-colors duration-300">{t('contact.title')}</h1>
        <Navbar />
      </div>
      <div className='w-8 h-1 mb-3 mt-4 bg-custom-blue rounded'></div>
      
      <form onSubmit={handleSubmit} className="mt-6 space-y-4 max-w-xl">
        <div>
          <label htmlFor="name" className="block text-xs font-medium text-gray-700 mb-1 dark:text-gray-300 transition-colors duration-300">
            {t('contact.form.name.label')}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-blue focus:border-transparent outline-none dark:bg-custom-gray dark:border-gray-700 dark:text-white transition-all duration-300 text-sm"
            placeholder={t('contact.form.name.placeholder')}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1 dark:text-gray-300 transition-colors duration-300">
            {t('contact.form.email.label')}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-blue focus:border-transparent outline-none dark:bg-custom-gray dark:border-gray-700 dark:text-white transition-all duration-300 text-sm"
            placeholder={t('contact.form.email.placeholder')}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-xs font-medium text-gray-700 mb-1 dark:text-gray-300 transition-colors duration-300">
            {t('contact.form.message.label')}
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-blue focus:border-transparent outline-none dark:bg-custom-gray dark:border-gray-700 transition-all duration-300 dark:text-white resize-none text-sm"
            placeholder={t('contact.form.message.placeholder')}
          />
        </div>

        <button
          type="submit"
          disabled={status === 'sending'}
          className={`px-4 py-2 bg-custom-blue text-white rounded-lg hover:bg-opacity-90 transition-all duration-300 font-medium text-sm ${status === 'sending' ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          {status === 'sending' ? t('contact.form.button.sending') : t('contact.form.button.send')}
        </button>

        {status === 'success' && (
          <div className="p-3 bg-green-100 text-green-700 rounded-lg text-sm">
            {t('contact.form.status.success')}
          </div>
        )}
        {status === 'error' && (
          <div className="p-3 bg-red-100 text-red-700 rounded-lg text-sm">
            {t('contact.form.status.error')}
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactPage;