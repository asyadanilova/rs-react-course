import { Component } from 'react';
import { SearchContainer } from '../SearchContainer/SearchContainer';
import { ResultsContainer } from '../ResultsContainer/ResultsContainer';
import './MainContainer.scss';
import graduation from '../../assets/graduation.png';

class MainContainer extends Component {
  render() {
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
        <ResultsContainer />
      </>
    );
  }
}

export { MainContainer };
