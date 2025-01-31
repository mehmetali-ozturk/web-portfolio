import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SideBar from './components/SideBar';
import AboutMePage from './components/AboutMePage';
import ResumePage from './components/ResumePage';
import ContactPage from './components/ContactPage';
import ProjectsPage from './components/ProjectsPage';
import MobileNav from './components/MobileNav';


function AppContent() {
  const location = useLocation();

  return (
    <div className="min-h-screen h-full m-10 my-16 bg-white flex flex-col lg:flex-row pb-16 lg:pb-0">
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

      <div className="flex-1 relative">
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