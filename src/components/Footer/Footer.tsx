import React from 'react';
import './Footer.scss';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="team-text">
        Developed with ❤️ by:{' '}
        <a
          href="https://github.com/AsyaDanilova"
          target="_blank"
          rel="noopener noreferrer"
        >
          Asya <i className="bi bi-github"></i>
        </a>
      </p>
      <p data-testid="year-test">
        &copy; {year} My University Search. All rights reserved.
      </p>
      <small>
        Powered by Open APIs. Data may not be accurate for all universities.
      </small>
    </footer>
  );
};

export { Footer };
