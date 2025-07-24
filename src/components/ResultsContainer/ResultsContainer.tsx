import { useEffect, useState } from 'react';
import './ResultsContainer.scss';
import { searchUniversities } from '../../api/searchUniversities';
import { getAllUniversities } from '../../api/getAllUniversities';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';
import noData from '../../assets/no-data.png';

const ResultsContainer: React.FC = () => {
  const [universities, setUniversities] = useState<University[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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
    if (!Array.isArray(universities) || universities.length === 0) {
      return (
        <div className="error-container">
          <img src={noData} alt="no-data" />
          <p className="error-message">No universities available to display.</p>
        </div>
      );
    }

    return universities.map((university: University) => (
      <div key={university.domains[0]} className="university-card">
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
        {error ? (
          <p className="error-message">{error}</p>
        ) : (
          renderUniversitiesList()
        )}
      </div>
    </ErrorBoundary>
  );
};

export { ResultsContainer };
