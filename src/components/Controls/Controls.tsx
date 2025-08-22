import React from 'react';
import styles from '../../styles/Controls.module.css';

interface ControlsProps {
  onSearch: (term: string) => void;
  onSort: (key: string) => void;
  onShowColumnModal: () => void;
  years: number[];
  selectedYear: number;
  onYearChange: (year: number) => void;
  searchTerm: string;
}

const Controls = ({
  onSearch,
  onSort,
  onShowColumnModal,
  years,
  selectedYear,
  onYearChange,
  searchTerm,
}: ControlsProps) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  const handleYearSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onYearChange(Number(e.target.value));
  };

  return (
    <div className={styles.controlsContainer}>
      <div className={styles.controlGroup}>
        <label htmlFor="search-input">Search by Country:</label>
        <input
          id="search-input"
          type="text"
          placeholder="e.g., Canada"
          value={searchTerm}
          onChange={handleSearchChange}
          className={styles.searchInput}
        />
      </div>

      <div className={styles.controlGroup}>
        <label htmlFor="year-select">Select Year:</label>
        <select
          id="year-select"
          value={selectedYear}
          onChange={handleYearSelect}
          className={styles.selectInput}
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.controlGroup}>
        <label>Filters:</label>
        <button onClick={() => onSort('country')} className={styles.sortButton}>
          Sort by Name
        </button>
        <button
          onClick={() => onSort('population')}
          className={styles.sortButton}
        >
          Sort by Population
        </button>
        <button onClick={onShowColumnModal} className={styles.sortButton}>
          Select Columns
        </button>
      </div>
    </div>
  );
};

export default Controls;
