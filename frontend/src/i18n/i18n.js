import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "AgriTech Platform": "AgriTech Platform",
      "Market": "Market",
      "Weather": "Weather",
      "Guidance": "Guidance",
      "Supply Chain": "Supply Chain",
      "Schemes": "Schemes",
    }
  },
  hi: {
    translation: {
      "AgriTech Platform": "एग्रीटेक प्लेटफ़ॉर्म",
      "Market": "बाज़ार",
      "Weather": "मौसम",
      "Guidance": "मार्गदर्शन",
      "Supply Chain": "आपूर्ति श्रृंखला",
      "Schemes": "योजनाएँ",
    }
  },
  mr: {
    translation: {
      "AgriTech Platform": "अ‍ॅग्रीटेक प्लॅटफॉर्म",
      "Market": "बाजार",
      "Weather": "हवामान",
      "Guidance": "मार्गदर्शन",
      "Supply Chain": "पुरवठा साखळी",
      "Schemes": "योजना",
      "Chatbot": "चैटबॉट"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', 
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
