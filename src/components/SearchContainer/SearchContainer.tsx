import './SearchContainer.scss';
import { ErrorButton } from '../ErrorButton/ErrorButton';

const SearchContainer = () => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.toLowerCase().trim();
    localStorage.setItem('searchTerm', searchTerm);
  };

  const handleSearch = () => {
    window.dispatchEvent(new Event('searchTermUpdated'));
  };

  const searchInput = () => (
    <input
      type="text"
      defaultValue={localStorage.getItem('searchTerm') || ''}
      onChange={handleInputChange}
      placeholder="Enter your request..."
      className="search-input"
    />
  );

  const searchButton = () => (
    <button className="button" onClick={handleSearch}>
      Search <i className="bi bi-search"></i>
    </button>
  );

  return (
    <div className="search">
      <div className="search__input">{searchInput()}</div>
      <div className="search__button">{searchButton()}</div>
      <ErrorButton />
    </div>
  );
};

export { SearchContainer };
