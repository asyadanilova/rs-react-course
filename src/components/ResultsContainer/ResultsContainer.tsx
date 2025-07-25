import React, { useEffect, useState } from 'react';
import './ResultsContainer.css';
import { searchUniversities } from '../../api/searchUniversities';
import { getAllUniversities } from '../../api/getAllUniversities';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';
import noData from '../../assets/no-data.png';
import { useNavigate, useSearchParams } from 'react-router-dom';

const PAGE_SIZE = 15;

const ResultsContainer: React.FC = () => {
  const [universities, setUniversities] = useState<University[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [selectedUniversity, setSelectedUniversity] =
    useState<University | null>(null);

  const [searchParams, setSearchParams] = useSearchParams();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const navigate = useNavigate();

  const fetchUniversities = async () => {
    const searchTerm = localStorage.getItem('searchTerm') || '';
    setLoading(true);
    try {
      if (!searchTerm || searchTerm.trim() === '') {
        const fetchedUniversities = await getAllUniversities();
        setUniversities(fetchedUniversities);
      } else {
        const searchedUniversities = await searchUniversities(searchTerm);
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
    setSelectedUniversity(university);
    const id = university.domains[0];
    setSearchParams({ ...Object.fromEntries(searchParams), details: id });
  };

  const handleCloseDetails = () => {
    setSelectedUniversity(null);
    const updatedParams = { ...Object.fromEntries(searchParams) };
    delete updatedParams.details;
    setSearchParams(updatedParams);
  };

  const paginatedUniversities = universities.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  const handleNextPage = () => {
    if (currentPage < Math.ceil(universities.length / PAGE_SIZE)) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  useEffect(() => {
    const detailsId = searchParams.get('details');
    if (detailsId) {
      const foundUniversity = universities.find((uni) =>
        uni.domains.includes(detailsId)
      );
      setSelectedUniversity(foundUniversity || null);
    } else {
      setSelectedUniversity(null);
    }
  }, [searchParams, universities]);

  useEffect(() => {
    fetchUniversities();
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
        className={`university-card ${
          selectedUniversity?.domains[0] === university.domains[0]
            ? 'selected'
            : ''
        }`}
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
        <div className="master-container">
          {error ? (
            <p className="error-message">{error}</p>
          ) : (
            renderUniversitiesList()
          )}
          <div className="pagination-container">
            <button
              className="previous-button"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span className="pagination-info">
              Page {currentPage} of {Math.ceil(universities.length / PAGE_SIZE)}
            </span>
            <button
              className="next-button"
              onClick={handleNextPage}
              disabled={
                currentPage >= Math.ceil(universities.length / PAGE_SIZE)
              }
            >
              Next
            </button>
          </div>
        </div>
        {selectedUniversity && (
          <div className="details-container">
            <button className="close-details" onClick={handleCloseDetails}>
              Close Details
            </button>
            <h2>{selectedUniversity?.name}</h2>
            <p>
              <strong>Country:</strong> {selectedUniversity?.country}
            </p>
            <p>
              <strong>Domains:</strong> {selectedUniversity?.domains.join(', ')}
            </p>
            <p>
              <strong>State Province:</strong>{' '}
              {selectedUniversity?.stateProvince || 'Not Available'}
            </p>
            <p>
              <strong>Web Site:</strong>{' '}
              <a
                href={selectedUniversity?.web_pages[0]}
                target="_blank"
                rel="noreferrer"
              >
                {selectedUniversity?.web_pages[0]}
              </a>
            </p>
          </div>
        )}
      </div>
    </ErrorBoundary>
  );
};

export { ResultsContainer };
