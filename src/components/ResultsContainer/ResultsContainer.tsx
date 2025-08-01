import React, { useEffect, useState } from 'react';
import './ResultsContainer.css';
import { searchUniversities } from '../../api/searchUniversities';
import { getAllUniversities } from '../../api/getAllUniversities';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';
import noData from '../../assets/no-data.png';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { ITEM_PER_PAGE } from '../../utils/consts';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const ResultsContainer: React.FC = () => {
  const [universities, setUniversities] = useState<University[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm] = useLocalStorage('searchTerm', '');
  const navigate = useNavigate();
  const { page, id } = useParams<{ page: string; id?: string }>();
  const currentPage = parseInt(page || '1', 10) || 1;

  const fetchUniversities = async () => {
    const searchTerm = localStorage.getItem('searchTerm') || '';
    setLoading(true);
    try {
      if (!searchTerm.trim()) {
        const fetchedUniversities = await getAllUniversities();
        setUniversities(fetchedUniversities);
      } else {
        const searchedUniversities = await searchUniversities(
          searchTerm.trim()
        );
        setUniversities(searchedUniversities);
      }
      setError(null);
    } catch (err) {
      console.error('Error fetching universities:', err);
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

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

  useEffect(() => {
    fetchUniversities();
  }, [searchTerm]);

  useEffect(() => {
    const handleSearchTermUpdate = async () => {
      await fetchUniversities();
    };
    window.addEventListener('searchTermUpdated', handleSearchTermUpdate);
    return () => {
      window.removeEventListener('searchTermUpdated', handleSearchTermUpdate);
    };
  }, []);

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

    return paginatedUniversities.map((university: University) => (
      <div
        key={university.domains[0]}
        className="university-card"
        onClick={() => handleSelectUniversity(university)}
        style={{ cursor: 'pointer' }}
      >
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
    ));
  };

  if (loading) {
    return (
      <div className="loader-container">
        <p className="loader-message">Loading universities, please wait...</p>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div className="results-container">
        <div className="before-pagination">
          <div className="master-container">
            {error ? (
              <p className="error-message">{error}</p>
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
      </div>
    </ErrorBoundary>
  );
};

export { ResultsContainer };
