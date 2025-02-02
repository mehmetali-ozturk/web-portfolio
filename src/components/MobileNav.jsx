import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUser, FaFileAlt, FaCode, FaEnvelope } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const MobileNav = () => {
  const { t } = useTranslation();
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg lg:hidden">
      <div className="flex justify-around py-3">
        <NavLink to="/" className={({ isActive }) => `flex flex-col items-center ${isActive ? 'text-custom-blue' : 'text-gray-600'}`}>
          <FaUser className="text-xl mb-1" />
          <span className="text-xs">{t("navbar.about")} </span>
        </NavLink>
        <NavLink to="/resume" className={({ isActive }) => `flex flex-col items-center ${isActive ? 'text-custom-blue' : 'text-gray-600'}`}>
          <FaFileAlt className="text-xl mb-1" />
          <span className="text-xs">{t("navbar.resume")}</span>
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => `flex flex-col items-center ${isActive ? 'text-custom-blue' : 'text-gray-600'}`}>
          <FaCode className="text-xl mb-1" />
          <span className="text-xs">{t("navbar.projects")}</span>
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => `flex flex-col items-center ${isActive ? 'text-custom-blue' : 'text-gray-600'}`}>
          <FaEnvelope className="text-xl mb-1" />
          <span className="text-xs">{t("navbar.contact")}</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default MobileNav;