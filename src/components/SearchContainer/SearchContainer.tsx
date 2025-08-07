import React from 'react';
import './SearchContainer.scss';

const SearchContainer = () => {
  const [searchTerm, setSearchTerm] = React.useState(
    localStorage.getItem('searchTerm') || ''
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    const normalized = searchTerm.toLowerCase().trim();
    localStorage.setItem('searchTerm', normalized);
    window.dispatchEvent(new Event('searchTermUpdated'));
  };

  return (
    <div className="search">
      <div className="search__input">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Enter your request..."
          className="search-input"
        />
      </div>
      <div className="search__button">
        <button className="button" onClick={handleSearch}>
          Search <i className="bi bi-search"></i>
        </button>
      </div>
    </div>
  );
};

export { SearchContainer };
