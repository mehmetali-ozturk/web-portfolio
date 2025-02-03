import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUser, FaFileAlt, FaCode, FaEnvelope } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const MobileNav = () => {
  const { t } = useTranslation();

  const NavItem = ({ to, Icon, text }) => (
    <NavLink to={to}>
      {({ isActive }) => (
        <div className="flex flex-col items-center ">
          <Icon 
            size={16} 
            className={`mb-0.5 ${
              isActive ? 'text-custom-blue dark:text-custom-blue' : 'text-gray-600 dark:text-white'
            }`}
          />
          <span className={`text-xs ${
            isActive ? 'text-custom-blue dark:text-custom-blue' : 'text-gray-600 dark:text-white'
          }`}>
            {text}
          </span>
        </div>
      )}
    </NavLink>
  );

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg lg:hidden dark:bg-custom-gray transition-colors duration-300">
      <div className="flex justify-around py-2 border-t-2 border-custom-blue transition-colors duration-300">
        <NavItem to="/" Icon={FaUser} text={t("navbar.about")} />
        <NavItem to="/resume" Icon={FaFileAlt} text={t("navbar.resume")} />
        <NavItem to="/projects" Icon={FaCode} text={t("navbar.projects")} />
        <NavItem to="/contact" Icon={FaEnvelope} text={t("navbar.contact")} />
      </div>
    </nav>
  );
};

export default MobileNav;