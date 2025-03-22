import React from "react";
import { useTranslation } from "react-i18next";

const recordFeatures = [
  {
    title: "Automated Analytics",
    description: "Analyze financial performance with minimal effort.",
  },
  {
    title: "Expense Tracking",
    description: "Track your expenses with accuracy and efficiency.",
  },
  {
    title: "Revenue Monitoring",
    description: "Keep a close watch on your crop revenue and profitability.",
  },
  {
    title: "Yield Analysis",
    description: "Understand your yield trends and improve production.",
  },
  {
    title: "Financial Reports",
    description: "Generate detailed reports for better financial planning.",
  },
];

const RecordKeeping = () => {
  const { t } = useTranslation();

  return (
    <div className="p-6 bg-gradient-to-r from-[#11998e] to-[#38ef7d] min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-6 text-center">{t('recordKeeping')}</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {recordFeatures.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-800 bg-opacity-70 p-6 rounded-2xl shadow-xl transition-transform transform hover:scale-105"
          >
            <h2 className="text-2xl font-semibold mb-2">{t(feature.title)}</h2>
            <p className="mb-4">{t(feature.description)}</p>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              {t('startTracking')}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecordKeeping;
