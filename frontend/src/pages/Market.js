import React from 'react';
import { useTranslation } from 'react-i18next';

const Market = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h2 className="text-2xl font-semibold">{t('Market')}</h2>
      <p>This is the {t('Market')} page.</p>
    </div>
  );
};

export default Market;
