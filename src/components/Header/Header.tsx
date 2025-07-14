import { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.scss';

class Header extends Component {
  navButtons(): JSX.Element {
    return (
      <>
        <ul className="nav_button">
          <li>
            <NavLink to="/" className="nav-link">
              <i className="bi bi-house"></i> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-link">
              <i className="bi bi-info-circle"></i> About
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className="nav-link">
              <i className="bi bi-box-arrow-in-right"></i> Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/registration" className="nav-link">
              <i className="bi bi-door-open"></i> Registration
            </NavLink>
          </li>
        </ul>
      </>
    );
  }

  render(): JSX.Element {
    return (
      <header className="header">
        <Link to="/" className="header__logo-link">
          <img
            src="./graduation-cap.png"
            alt="Site Icon"
            className="header__logo-icon"
          />
          <span className="header__app-name">GlobalCampus</span>
        </Link>
        <nav>{this.navButtons()}</nav>
      </header>
    );
  }
}

export { Header };
