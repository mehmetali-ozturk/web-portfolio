import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SideBar from './components/SideBar';
import AboutMePage from './components/AboutMePage';
import ResumePage from './components/ResumePage';
import ContactPage from './components/ContactPage';
import ProjectsPage from './components/ProjectsPage';
import MobileNav from './components/MobileNav';
import { useTranslation } from 'react-i18next';
import { FaSun, FaMoon } from 'react-icons/fa';
import './i18n';

function AppContent() {
  const location = useLocation();
  const { i18n } = useTranslation();
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <div className={`min-h-screen h-full lg:m-10 p-5 lg:py-16 my-5 flex flex-col lg:flex-row pb-16 lg:pb-0  bg-transparent transition-colors duration-300`}>
      <div className="fixed top-4 right-4 z-50 flex space-x-2 bg-transparent transition-colors duration-300">
        <button 
          onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'tr' : 'en')}
          className="p-2 card dark:bg-custom-gray-2 dark:card-dark rounded-lg shadow-lg text-xs dark:text-white transition-colors duration-300"
        >
          {i18n.language === 'en' ? 'TR' : 'EN'}
        </button>
        <button 
          onClick={toggleDarkMode}
          className="p-2 card dark:bg-custom-gray-2 rounded-lg shadow-lg transition-colors duration-300"
        >
          {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-500" />}
        </button>
      </div>
      <AnimatePresence mode="wait">
        <motion.div 
          key="sidebar"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="lg:max-w-s lg:min-h-screen bg-transparent transition-colors duration-300;"
        >
          <SideBar />
        </motion.div>
      </AnimatePresence>

      <div className="flex-1 relative">
        <AnimatePresence mode="wait">
          <motion.div 
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:mr-20 bg-transparent transition-colors duration-300;"
          >
            <Routes location={location}>
              <Route path="/" element={<AboutMePage />} />
              <Route path="/resume" element={<ResumePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
        <MobileNav />
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;