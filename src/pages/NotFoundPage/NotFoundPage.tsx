import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.scss';
import noPage from '../../assets/404-page.png';

const NotFoundPage: React.FC = () => {
  return (
    <div className="not-found-page">
      <h1>404 - Page Not Found</h1>
      <img src={noPage} className="not-found-image" alt="" />
      <p>Oops! The page you&apos;re looking for does not exist.</p>
      <button>
        <Link to="/" className="home-link">
          Go back to Home
        </Link>
      </button>
    </div>
  );
};

export default NotFoundPage;
