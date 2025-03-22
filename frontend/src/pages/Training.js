import React from "react";
import { useTranslation } from "react-i18next";

const trainingTopics = [
  {
    title: "PM-KISAN",
    description: "Step-by-step video on how to apply for financial support under the PM-KISAN scheme.",
    videoLink: "https://youtu.be/7iuodclQIGM?si=3-ibBdvJtQNUReCm",
  },
  {
    title: "PMFBY",
    description: "Learn how to avail crop insurance under the Pradhan Mantri Fasal Bima Yojana.",
    videoLink: "https://youtu.be/0ovnhc2ej6s?si=K5qPMedAE8kc5bmb",
  },
  {
    title: "Soil Health Card Scheme",
    description: "Understand how to get your Soil Health Card and improve crop yield.",
    videoLink: "https://youtu.be/xgy97tZyHgI?si=sSH3cpGy17gyCSbi",
  },
  {
    title: "Kisan Credit Card (KCC)",
    description: "Video guidance on how to apply for KCC to get easy credit access.",
    videoLink: "https://youtu.be/2mfa7-nfy2o?si=5hpWAnY6QI22wZ4P",
  },
  {
    title: "Agri-Input Subsidy",
    description: "Find out how to avail subsidies for seeds, fertilizers, and pesticides.",
    videoLink: "https://youtu.be/gqOsig935-w?si=1JGUB8oDdZvTR99n",
  },
];

const Training = () => {
  const { t } = useTranslation();

  return (
    <div className="p-6 bg-gradient-to-r from-[#11998e] to-[#38ef7d] min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-6 text-center">
        {t('Learn How To Apply For Schemes')}
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {trainingTopics.map((topic, index) => (
          <div
            key={index}
            className="bg-gray-800 bg-opacity-70 p-6 rounded-2xl shadow-xl transition-transform transform hover:scale-105"
          >
            <h2 className="text-2xl font-semibold mb-2">{t(topic.title)}</h2>
            <p className="mb-4">{t(topic.description)}</p>
            <a
              href={topic.videoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded inline-block"
            >
              {t('Watch Video')}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Training;
