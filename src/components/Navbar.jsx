import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const Navbar = () => {
    const { t } = useTranslation();
    return (
        <nav className="hidden lg:flex max-w-min self-end bg-white div-shadow-inset p-4 rounded-xl ">
            <div className="flex justify-center space-x-12">
                <NavLink to="/" 
                    className={({ isActive }) => 
                    `text-m font-medium text-gray-600 hover:text-custom-blue transition-colors duration-300 ${isActive ? 'text-custom-blue' : ''}`}>
                    {t("navbar.about")}
                </NavLink>
                <NavLink to="/resume" 
                    className={({ isActive }) => 
                    `text-m font-medium text-gray-600 hover:text-custom-blue transition-colors duration-300 ${isActive ? 'text-custom-blue' : ''}`}>
                    {t("navbar.resume")}
                </NavLink>
                <NavLink to="/projects" 
                    className={({ isActive }) => 
                    `text-m font-medium text-gray-600 hover:text-custom-blue transition-colors duration-300 ${isActive ? 'text-custom-blue' : ''}`}>
                    {t("navbar.projects")}
                </NavLink>
                <NavLink to="/contact"
                    className={({ isActive }) => 
                    `text-m font-medium text-gray-600 hover:text-custom-blue transition-colors duration-300 ${isActive ? 'text-custom-blue' : ''}`}>
                    {t("navbar.contact")}   
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;