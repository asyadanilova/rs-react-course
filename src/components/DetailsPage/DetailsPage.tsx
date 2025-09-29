'use client';
import { useTranslations } from 'next-intl';
import { notFound } from 'next/navigation';
import React from 'react';

type University = {
  name: string;
  country: string;
  domains: string[];
  web_pages: string[];
};

interface DetailsPageProps {
  universities: University[];
  id: string;
  handleCloseDetailsPage: () => void;
}

const DetailsPage: React.FC<DetailsPageProps> = ({
  universities,
  id,
  handleCloseDetailsPage,
}) => {
  const t = useTranslations();
  if (!universities || universities.length === 0 || !id) {
    return <p>No university data available</p>;
  }

  const selectedUniversity = universities.find((u: University) =>
    u.domains.includes(id)
  );

  if (!selectedUniversity) {
    notFound();
  }

  return (
    <div className="details-container">
      <button onClick={handleCloseDetailsPage} className="close-details">
        <i className="bi bi-x-lg"></i> {t('detailsPage.close')}
      </button>
      <h2>{selectedUniversity.name}</h2>
      <p>
        <strong>{t('detailsPage.country')}:</strong>{' '}
        {selectedUniversity.country}
      </p>
      <p>
        <strong>{t('detailsPage.domains')}:</strong>{' '}
        {selectedUniversity.domains.join(', ')}
      </p>
      <p>
        <strong>{t('detailsPage.webSite')}:</strong>{' '}
        <a
          href={selectedUniversity.web_pages[0]}
          target="_blank"
          rel="noreferrer"
        >
          {selectedUniversity.web_pages[0]}
        </a>
      </p>
    </div>
  );
};

export default DetailsPage;
