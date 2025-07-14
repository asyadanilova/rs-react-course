import { Component } from 'react';
import './ResultsContainer.scss';
import { searchUniversities } from '../../api/searchUniversities';
import { getAllUniversities } from '../../api/getAllUniversities';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';
import noData from '../../assets/no-data.png';

type ResultsProps = object;

interface ResultsState {
  universities: University[];
  loading: boolean;
  error: string | null;
}

class ResultsContainer extends Component<ResultsProps, ResultsState> {
  constructor(props: ResultsProps) {
    super(props);

    this.state = {
      universities: [],
      loading: true,
      error: null,
    };
  }

  async fetchUniversities(): Promise<void> {
    const searchTerm = localStorage.getItem('searchTerm') || '';

    if (!searchTerm || searchTerm.trim() === '') {
      try {
        const universities = await getAllUniversities();
        this.setState({ universities, loading: false });
      } catch (error) {
        this.setState({
          error: `${error}` || 'Unknown error',
          loading: false,
        });
        throw new Error(`${error}` || 'Error fetching universities');
      }
      return;
    }

    try {
      this.setState({ loading: true });
      const universities = await searchUniversities(searchTerm);
      this.setState({ universities, loading: false });
    } catch (error) {
      console.error('Error fetching universities:', error);
      this.setState({
        error: `${error}` || 'Unknown error',
        loading: false,
      });
    }
  }

  async componentDidMount(): Promise<void> {
    await this.fetchUniversities();

    window.addEventListener(
      'searchTermUpdated',
      this.fetchUniversities.bind(this)
    );
  }

  componentWillUnmount(): void {
    window.removeEventListener(
      'searchTermUpdated',
      this.fetchUniversities.bind(this)
    );
  }

  renderUniversitiesList = (): JSX.Element[] => {
    const { universities } = this.state;

    if (!universities || universities.length === 0) {
      return [
        <div key="no-universities" className="error-container">
          <img src={noData} alt="no-data" />
          <p key="no-universities" className="error-message">
            No universities available to display.
          </p>
        </div>,
      ];
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

  render() {
    const { loading, error } = this.state;

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
            this.renderUniversitiesList()
          )}
        </div>
      </ErrorBoundary>
    );
  }
}

export { ResultsContainer };
