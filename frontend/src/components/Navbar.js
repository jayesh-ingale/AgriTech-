import React from 'react';
import { Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const { t } = useTranslation();

    return (
        <nav className="bg-gradient-to-r from-[#1D4350] to-[#A43931] p-4 text-white shadow-lg flex justify-between items-center">
            <ul className="flex space-x-6">
                <li><Link to="/" className="hover:text-gray-300">{t('Market')}</Link></li>
                <li><Link to="/weather" className="hover:text-gray-300">{t('Weather')}</Link></li>
                <li><Link to="/guidance" className="hover:text-gray-300">{t('Guidance')}</Link></li>
                <li><Link to="/supplychain" className="hover:text-gray-300">{t('Supply Chain')}</Link></li>
                <li><Link to="/schemes" className="hover:text-gray-300">{t('Schemes')}</Link></li>
                <li><Link to="/training" className="hover:text-gray-300">{t('Learn About Schemes')}</Link></li>
                <li><Link to="/record-keeping" className="hover:text-gray-300">{t('Record Keeping')}</Link></li>
            </ul>
            <LanguageSwitcher />
        </nav>
    );
};

export default Navbar;
