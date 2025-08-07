import React, { useRef, useEffect, useState } from 'react';
import './ResultsContainer.css';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';
import noData from '../../assets/no-data.png';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { ITEM_PER_PAGE } from '../../utils/consts';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectItem,
  unselectItem,
  unselectAll,
} from '../../store/selectedItemsSlice';
import type { RootState } from '../../store/store';
import { useSearchUniversitiesQuery } from '../../services/university';

const ResultsContainer: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { page, id } = useParams<{ page: string; id?: string }>();
  const selectedItems = useSelector(
    (state: RootState) => state.selectedItems.items
  );
  const currentPage = parseInt(page || '1', 10) || 1;
  const [searchTerm, setSearchTerm] = useState(
    localStorage.getItem('searchTerm') || ''
  );
  const [searchKey, setSearchKey] = useState(0);
  const { data, isLoading, error, refetch } = useSearchUniversitiesQuery(
    {
      country: searchTerm,
      searchKey,
    },
    { refetchOnMountOrArgChange: true }
  );

  const downloadLinkRef = useRef<HTMLAnchorElement | null>(null);
  const [customIsLoading, setCustomIsLoading] = useState(false);

  useEffect(() => {
    const handler = () => {
      setSearchTerm(localStorage.getItem('searchTerm') || '');
      setSearchKey((k) => k + 1);
    };
    window.addEventListener('searchTermUpdated', handler);
    return () => window.removeEventListener('searchTermUpdated', handler);
  }, []);

  console.log('Debug:', {
    searchTerm,
    searchKey,
    isLoading,
    data,
    error,
  });

  let universities: University[] = [];

  if (Array.isArray(data)) {
    universities = data;
  } else if (
    data &&
    typeof data === 'object' &&
    'data' in data &&
    Array.isArray((data as { data: unknown }).data)
  ) {
    universities = (data as { data: University[] }).data;
  }

  function downloadCSV(items: University[]) {
    const csv = items
      .map((item) => `${item.name},${item.country},${item.web_pages[0]}`)
      .join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    if (downloadLinkRef.current) {
      downloadLinkRef.current.href = url;
      downloadLinkRef.current.download = `${items.length}_items.csv`;
      downloadLinkRef.current.click();
      setTimeout(() => URL.revokeObjectURL(url), 100);
    }
  }

  const handleSelectUniversity = (university: University) => {
    navigate(`/${currentPage}/${university.domains[0]}`);
  };

  const handleCloseDetailsPage = () => {
    navigate(`/${currentPage}`);
  };

  const paginatedUniversities = universities.slice(
    (currentPage - 1) * ITEM_PER_PAGE,
    currentPage * ITEM_PER_PAGE
  );

  const handleNextPage = () => {
    if (currentPage < Math.ceil(universities.length / ITEM_PER_PAGE)) {
      navigate(`/${currentPage + 1}`);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      navigate(`/${currentPage - 1}`);
    }
  };

  const renderUniversitiesList = (): JSX.Element[] | JSX.Element => {
    if (
      !Array.isArray(paginatedUniversities) ||
      paginatedUniversities.length === 0
    ) {
      return (
        <div className="error-container">
          <img src={noData} alt="no-data" />
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
            <strong>Country:</strong> {university.country}
          </p>
          <p>
            <strong>Web Site:</strong>{' '}
            <a href={university.web_pages[0]} target="_blank" rel="noreferrer">
              {university.web_pages[0] || 'No Web Site'}
            </a>
          </p>
        </div>
      );
    });
  };

  const handleRefresh = () => {
    setCustomIsLoading(true);
    setTimeout(() => setCustomIsLoading(false), 1000);
    refetch();
  };

  if (isLoading || customIsLoading) {
    return (
      <div className="loader-container">
        <p className="loader-message">Loading universities, please wait...</p>
      </div>
    );
  }

  return (
    <ErrorBoundary>
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
          {id && universities.length > 0 && (
            <div className="details-panel">
              <Outlet context={{ universities, handleCloseDetailsPage }} />
            </div>
          )}
        </div>
        <div className="pagination-container">
          <button
            className="previous-button"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="pagination-info">
            Page {currentPage} of{' '}
            {Math.ceil(universities.length / ITEM_PER_PAGE)}
          </span>
          <button
            className="next-button"
            onClick={handleNextPage}
            disabled={
              currentPage >= Math.ceil(universities.length / ITEM_PER_PAGE)
            }
          >
            Next
          </button>
        </div>
        {selectedItems.length > 0 && (
          <div className="flyout">
            <span>{selectedItems.length} items are selected</span>
            <button onClick={() => dispatch(unselectAll())}>
              Unselect all
            </button>
            <button onClick={() => downloadCSV(selectedItems)}>Download</button>
            <a ref={downloadLinkRef} style={{ display: 'none' }}>
              Download
            </a>
          </div>
        )}
      </div>
    </ErrorBoundary>
  );
};

export { ResultsContainer };
