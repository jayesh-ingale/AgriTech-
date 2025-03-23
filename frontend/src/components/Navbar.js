import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t } = useTranslation();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Example of clearing auth token from localStorage
    localStorage.removeItem('authToken');  // Clear any stored auth token or user data

    // Redirect to Login page
    navigate('/login');
  };

  return (
    <nav className="bg-gradient-to-r from-[#1D4350] to-[#A43931] p-4 text-white shadow-lg flex justify-between items-center">
      <ul className="flex space-x-6">
        {/* Updated "Dashboard" and "Chatbot" */}
        <li><Link to="/dashboard" className="hover:text-gray-300">{t('Dashboard')}</Link></li>
        <li><Link to="/weather" className="hover:text-gray-300">{t('Weather')}</Link></li>
        <li><Link to="/guidance" className="hover:text-gray-300">{t('Guidance')}</Link></li>
        <li><Link to="/supplychain" className="hover:text-gray-300">{t('Supply Chain')}</Link></li>
        <li><Link to="/schemes" className="hover:text-gray-300">{t('Schemes')}</Link></li>
        <li><Link to="/training" className="hover:text-gray-300">{t('Training')}</Link></li>
        <li><Link to="/chatbot" className="hover:text-gray-300">{t('Chatbot')} 🤖</Link></li> {/* Updated "Chatbot" */}
      </ul>

      {/* Profile Button */}
      <div className="relative">
        <button 
          onClick={() => setShowProfileMenu(!showProfileMenu)} 
          className="text-white p-2 ml-[800px] rounded-full focus:outline-none"
        >
          Logout
        </button>

        {/* Dropdown Menu */}
        {showProfileMenu && (
          <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg">
            <button 
              onClick={handleLogout} 
              className="block w-full text-left p-2 hover:bg-gray-200 rounded-t-lg"
            >
              Logout
            </button>
          </div>
        )}
      </div>

      <LanguageSwitcher />
    </nav>
  );
};

export default Navbar;
