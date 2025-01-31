import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="max-w-min self-end bg-white div-shadow-inset p-4 rounded-xl ">
            <div className="flex justify-center space-x-12">
                <NavLink to="/" 
                    className={({ isActive }) => 
                    `text-m font-medium text-gray-600 hover:text-custom-blue transition-colors duration-300 ${isActive ? 'text-custom-blue' : ''}`}>
                    About
                </NavLink>
                <NavLink to="/resume" 
                    className={({ isActive }) => 
                    `text-m font-medium text-gray-600 hover:text-custom-blue transition-colors duration-300 ${isActive ? 'text-custom-blue' : ''}`}>
                    Resume
                </NavLink>
                <NavLink to="/projects" 
                    className={({ isActive }) => 
                    `text-m font-medium text-gray-600 hover:text-custom-blue transition-colors duration-300 ${isActive ? 'text-custom-blue' : ''}`}>
                    Projects
                </NavLink>
                <NavLink to="/contact"
                    className={({ isActive }) => 
                    `text-m font-medium text-gray-600 hover:text-custom-blue transition-colors duration-300 ${isActive ? 'text-custom-blue' : ''}`}>
                    Contact
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;