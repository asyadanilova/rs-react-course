'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import {
  useSearchUniversitiesQuery,
  useGetUniversitiesQuery,
} from '../../services/university';
import {
  selectItem,
  unselectItem,
  unselectAll,
} from '../../store/selectedItemsSlice';
import { RootState } from '@/store/store';
import DetailsPage from '../DetailsPage/DetailsPage';
import './/ResultsContainer.css';
import { setSearchTerm } from '@/store/searchSlice';
import { ITEM_PER_PAGE, University } from '@/utils/consts';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const ResultsContainer: React.FC<{
  currentPage: number;
  showDetails: boolean;
}> = ({ currentPage, showDetails }) => {
  const t = useTranslations();
  const searchTerm = useSelector((state: RootState) => state.search.searchTerm);
  const router = useRouter();
  const dispatch = useDispatch();
  const params = useParams();
  const id = params && typeof params.id === 'string' ? params.id : undefined;

  const selectedItems = useSelector(
    (state: RootState) => state.selectedItems.items
  );
  const [searchKey, setSearchKey] = useState(0);

  const searchUniversitiesResult = useSearchUniversitiesQuery(
    { country: searchTerm, searchKey },
    { refetchOnMountOrArgChange: true, skip: !searchTerm }
  );
  const getUniversitiesResult = useGetUniversitiesQuery(undefined, {
    refetchOnMountOrArgChange: true,
    skip: !!searchTerm,
  });

  const universities =
    searchTerm && searchUniversitiesResult.data
      ? searchUniversitiesResult.data
      : getUniversitiesResult.data || [];

  const isLoading = searchTerm
    ? searchUniversitiesResult.isLoading
    : getUniversitiesResult.isLoading;

  const error = searchTerm
    ? searchUniversitiesResult.error
    : getUniversitiesResult.error;

  const refetch = searchTerm
    ? searchUniversitiesResult.refetch
    : getUniversitiesResult.refetch;

  const [customIsLoading, setCustomIsLoading] = useState(false);

  useEffect(() => {
    const handler = () => {
      const term = localStorage.getItem('searchTerm') || '';
      setSearchTerm(term);
      setSearchKey((k) => k + 1);
    };
    window.addEventListener('searchTermUpdated', handler);
    return () => window.removeEventListener('searchTermUpdated', handler);
  }, []);

  const downloadCSV = async (items: University[]) => {
    try {
      const response = await fetch('/api/generate-csv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate CSV');
      }

      const blob = await response.blob();
      const disposition = response.headers.get('Content-Disposition') || '';
      const matches = disposition.match(/filename="(.+)"/);
      const fileName = matches ? matches[1] : 'download.csv';
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 100);
    } catch (error) {
      console.error('Error downloading CSV:', error);
      alert('Failed to download CSV. Please try again!');
    }
  };

  const locale =
    params && typeof params.locale === 'string' ? params.locale : 'en';

  const handleSelectUniversity = (university: University) => {
    router.push(`/${locale}/${currentPage}/${university.domains[0]}`);
  };

  const handleCloseDetailsPage = () => {
    router.push(`/${locale}/${currentPage}`);
  };

  const paginatedUniversities = universities.slice(
    (currentPage - 1) * ITEM_PER_PAGE,
    currentPage * ITEM_PER_PAGE
  );

  const handleNextPage = () => {
    if (currentPage < Math.ceil(universities.length / ITEM_PER_PAGE)) {
      router.push(`/${locale}/${currentPage + 1}`);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      router.push(`/${locale}/${currentPage - 1}`);
    }
  };

  const handleRefresh = () => {
    setCustomIsLoading(true);
    setTimeout(() => setCustomIsLoading(false), 1000);
    refetch();
  };

  const renderUniversitiesList = (): JSX.Element[] | JSX.Element => {
    if (
      !Array.isArray(paginatedUniversities) ||
      paginatedUniversities.length === 0
    ) {
      return (
        <div className="error-container">
          <Image src="/no-data.png" alt="No data" />
          <p className="error-message">No universities available to display.</p>
        </div>
      );
    }

    return paginatedUniversities.map((university: University) => {
      const isSelected = selectedItems.some(
        (item: University) => item.domains[0] === university.domains[0]
      );
      return (
        <div
          key={university.domains[0]}
          className="university-card"
          style={{ cursor: 'pointer' }}
          onClick={(e) => {
            if ((e.target as HTMLElement).closest('.select-checkbox')) return;
            handleSelectUniversity(university);
          }}
        >
          <input
            type="checkbox"
            className="select-checkbox"
            checked={isSelected}
            onClick={(e) => e.stopPropagation()}
            onChange={(e) => {
              if (e.target.checked) dispatch(selectItem(university));
              else dispatch(unselectItem(university.domains[0]));
            }}
          />
          <h3>{university.name}</h3>
          <p>
            <strong>{t('detailsPage.country')}:</strong> {university.country}
          </p>
          <p>
            <strong>{t('detailsPage.webSite')}:</strong>{' '}
            <a href={university.web_pages[0]} target="_blank" rel="noreferrer">
              {university.web_pages[0] || t('detailsPage.noWebSite')}
            </a>
          </p>
        </div>
      );
    });
  };

  if (isLoading || customIsLoading) {
    return (
      <div className="loader-container">
        <p className="loader-message">Loading universities, please wait...</p>
      </div>
    );
  }

  return (
    <div className="results-container">
      <button
        className="refresh-button"
        onClick={handleRefresh}
        style={{ marginLeft: '1rem' }}
      >
        <i className="bi bi-arrow-clockwise"></i>
      </button>
      <div className="before-pagination">
        <div className="master-container">
          {error ? (
            <p className="error-message">{String(error)}</p>
          ) : (
            renderUniversitiesList()
          )}
        </div>
        {id && showDetails && universities.length > 0 && (
          <div className="details-panel">
            <DetailsPage
              universities={universities}
              id={id}
              handleCloseDetailsPage={handleCloseDetailsPage}
            />
          </div>
        )}
      </div>
      <div className="pagination-container">
        <button
          className="previous-button"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          {t('results.previous')}
        </button>
        <span className="pagination-info">
          {currentPage || 0} {t('results.page')} {t('results.of')}{' '}
          {Math.ceil(universities.length / ITEM_PER_PAGE)}
        </span>
        <button
          className="next-button"
          onClick={handleNextPage}
          disabled={
            currentPage >= Math.ceil(universities.length / ITEM_PER_PAGE)
          }
        >
          {t('results.next')}
        </button>
      </div>
      {selectedItems.length > 0 && (
        <div className="flyout">
          <span>
            {selectedItems.length} {t('results.selectedItems')}
          </span>
          <button onClick={() => dispatch(unselectAll())}>
            {t('results.unselectAll')}
          </button>
          <button onClick={() => downloadCSV(selectedItems)}>
            {t('results.downloadCsv')}
          </button>
        </div>
      )}
    </div>
  );
};

export default ResultsContainer;
