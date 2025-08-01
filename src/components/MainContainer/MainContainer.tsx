import { SearchContainer } from '../SearchContainer/SearchContainer';
import './MainContainer.scss';
import graduation from '../../assets/graduation.png';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

const MainContainer = () => {
  const [selectedUniversity] = useState<University | null>(null);

  return (
    <>
      <div className="main-container">
        <p className="app-description">
          Discover universities around the world! <br />
          Enter the <strong>full</strong> name of a country and browse
          institutions easily.
        </p>
        <img src={graduation} alt="graduation" />{' '}
      </div>
      <SearchContainer />
      <Outlet context={{ selectedUniversity }} />
    </>
  );
};

export { MainContainer };
