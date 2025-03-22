import React from "react";
import { useTranslation } from "react-i18next";

const schemes = [
  {
    name: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
    description: "Crop insurance scheme to protect farmers from yield losses due to natural calamities.",
    eligibility: "Farmers growing notified crops in notified areas. Must have insurable interest.",
    link: "https://pmfby.gov.in/",
  },
  {
    name: "Pradhan Mantri Krishi Sinchayee Yojana (PMKSY)",
    description: "Scheme to improve water efficiency through irrigation and water conservation.",
    eligibility: "Farmers from identified irrigation districts.",
    link: "https://pmksy.gov.in/",
  },
  {
    name: "Soil Health Card Scheme",
    description: "Provides soil nutrient status and recommends fertilizers and soil amendments.",
    eligibility: "All farmers are eligible.",
    link: "https://soilhealth.dac.gov.in/",
  },
  {
    name: "e-NAM (National Agriculture Market)",
    description: "Online trading platform for agricultural commodities.",
    eligibility: "Registered farmers, traders, and buyers.",
    link: "https://www.enam.gov.in/",
  },
  {
    name: "Paramparagat Krishi Vikas Yojana (PKVY)",
    description: "Promotes organic farming and supports cluster-based organic cultivation.",
    eligibility: "Groups of farmers or clusters practicing organic farming.",
    link: "https://www.ncof.dacnet.nic.in/PKVY.aspx",
  },
  {
    name: "Rashtriya Krishi Vikas Yojana (RKVY)",
    description: "Encourages holistic development of agriculture and allied sectors.",
    eligibility: "State governments and farmers.",
    link: "https://rkvy.nic.in/",
  },
  {
    name: "Kisan Credit Card (KCC) Scheme",
    description: "Short-term credit to farmers for crop and non-farm needs.",
    eligibility: "All farmers, including tenant farmers and sharecroppers.",
    link: "https://pmkisan.gov.in/",
  },
  {
    name: "National Food Security Mission (NFSM)",
    description: "Enhance production of rice, wheat, pulses, coarse cereals, and commercial crops.",
    eligibility: "Farmers cultivating specified crops.",
    link: "https://nfsm.gov.in/",
  },
  {
    name: "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",
    description: "Direct income support of Rs. 6,000 per year to farmers.",
    eligibility: "Small and marginal farmers with landholding up to 2 hectares.",
    link: "https://pmkisan.gov.in/",
  },
  {
    name: "Gramin Bhandaran Yojana",
    description: "Provides financial assistance for the construction of rural godowns.",
    eligibility: "Farmers, NGOs, cooperatives, and self-help groups.",
    link: "https://www.nabard.org/",
  },
];

const Schemes = () => {
  const { t } = useTranslation();

  return (
    <div className="p-6 bg-gradient-to-r from-[#11998e] to-[#38ef7d] min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-6 text-center">{t("Government Schemes")}</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {schemes.map((scheme, index) => (
          <div
            key={index}
            className="bg-gray-800 bg-opacity-70 p-6 rounded-2xl shadow-xl transition-transform transform hover:scale-105"
          >
            <h2 className="text-2xl font-semibold mb-2">{t(scheme.name)}</h2>
            <p className="mb-2">{t(scheme.description)}</p>
            <p className="text-sm text-gray-300 mb-2">{t("Eligibility")}: {t(scheme.eligibility)}</p>
            <a
              href={scheme.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-300 underline hover:text-teal-500"
            >
              {t("Learn more")}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schemes;
