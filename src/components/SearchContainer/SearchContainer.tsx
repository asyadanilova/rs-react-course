import { Component } from 'react';
import './SearchContainer.scss';

class SearchContainer extends Component {
  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const searchTerm = event.target.value.toLowerCase().trim();
    localStorage.setItem('searchTerm', searchTerm);
  };

  handleSearch = (): void => {
    window.dispatchEvent(new Event('searchTermUpdated'));
  };

  searchInput(): JSX.Element {
    return (
      <>
        <input
          type="text"
          defaultValue={localStorage.getItem('searchTerm') || ''}
          onChange={this.handleInputChange}
          placeholder="Enter your request..."
          className="search-input"
        />
      </>
    );
  }

  searchButton(): JSX.Element {
    return (
      <>
        <button className="button" onClick={this.handleSearch}>
          Search <i className="bi bi-search"></i>
        </button>
      </>
    );
  }

  render(): JSX.Element {
    return (
      <>
        <div className="search">
          <div className="search__input">{this.searchInput()}</div>
          <div className="search__button">{this.searchButton()}</div>
        </div>
      </>
    );
  }
}

export { SearchContainer };
