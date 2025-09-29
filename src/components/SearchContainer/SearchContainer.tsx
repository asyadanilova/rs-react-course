'use client';

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../lib/store';
import { setSearchTerm } from '@/lib/searchSlice';
import './SearchContainer.scss';

const SearchContainer = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: RootState) => state.search.searchTerm);
  const [inputTerm, setInputTerm] = useState(searchTerm);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputTerm(event.target.value);
  };

  const handleSearch = () => {
    const normalizedTerm = inputTerm.toLowerCase().trim();
    localStorage.setItem('searchTerm', normalizedTerm);
    dispatch(setSearchTerm(normalizedTerm));
    window.dispatchEvent(new Event('searchTermUpdated'));
  };

  return (
    <div className="search">
      <div className="search__input">
        <input
          type="text"
          value={inputTerm}
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
