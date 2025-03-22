import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => changeLanguage('en')}
        className="px-2 py-1 bg-gray-600 hover:bg-gray-500 rounded text-white"
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('hi')}
        className="px-2 py-1 bg-gray-600 hover:bg-gray-500 rounded text-white"
      >
        HI
      </button>
      <button
        onClick={() => changeLanguage('mr')}
        className="px-2 py-1 bg-gray-600 hover:bg-gray-500 rounded text-white"
      >
        MR
      </button>
    </div>
  );
};

export default LanguageSwitcher;
