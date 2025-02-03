import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SideBar from './components/SideBar';
import AboutMePage from './components/AboutMePage';
import ResumePage from './components/ResumePage';
import ContactPage from './components/ContactPage';
import ProjectsPage from './components/ProjectsPage';
import MobileNav from './components/MobileNav';
import { useTranslation } from 'react-i18next';
import { FaTurkishLira, FaGlobeEurope } from 'react-icons/fa';
import './i18n';


function AppContent() {
  const location = useLocation();
  const { i18n } = useTranslation();

  return (
    <div className="min-h-screen h-full lg:m-10 m-5 lg:my-16 my-5 bg-white flex flex-col lg:flex-row pb-16 lg:pb-0">
      <button 
        onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'tr' : 'en')}
        className="fixed top-1 right-2 z-50 p-2 bg-white rounded-lg div-shadow text-xs"
      >
        {i18n.language === 'en' ? 'TR' : 'EN'}
      </button>
      <AnimatePresence mode="wait">
        <motion.div 
          key="sidebar"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="lg:max-w-s  lg:min-h-screen"
        >
          <SideBar />
        </motion.div>
      </AnimatePresence>

      <div className="flex-1 relative ">
        <AnimatePresence mode="wait">
          <motion.div 
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full"
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