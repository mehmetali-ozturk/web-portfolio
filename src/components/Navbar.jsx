import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const { t } = useTranslation();
    return (
        <nav className="hidden lg:flex max-w-min self-end bg-white p-4 rounded-xl dark:text-white dark:bg-custom-gray transition-colors duration-300">
            <div className="flex justify-center space-x-12">
                {[
                    { to: "/", text: "navbar.about" },
                    { to: "/resume", text: "navbar.resume" },
                    { to: "/projects", text: "navbar.projects" },
                    { to: "/contact", text: "navbar.contact" }
                ].map((link) => (
                    <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                        `text-m font-medium relative transition-colors duration-300
                        ${isActive 
                            ? 'text-custom-blue after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-custom-blue after:rounded-full after:transform after:transition-transform after:duration-300 after:origin-left' 
                            : 'text-gray-600 hover:text-custom-blue hover:after:scale-x-100 after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-custom-blue after:rounded-full after:transform after:transition-transform after:duration-300 after:origin-left after:scale-x-0 dark:text-white dark:hover:text-custom-blue dark:after:bg-custom-blue '
                        }`
                    }
                >
                    {t(link.text)}
                </NavLink>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;