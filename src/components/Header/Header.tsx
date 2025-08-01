import { Link, NavLink } from 'react-router-dom';
import './Header.scss';
import { AppRoutes } from '../../routes/routes';

const Header = () => {
  const navButtons = () => (
    <ul className="nav_button">
      <li>
        <NavLink to={AppRoutes.HOME_ROUTE} className="nav-link">
          <i className="bi bi-house"></i> Home
        </NavLink>
      </li>
      <li>
        <NavLink to={AppRoutes.ABOUT_ROUTE} className="nav-link">
          <i className="bi bi-info-circle"></i> About
        </NavLink>
      </li>
      <li>
        <NavLink to={AppRoutes.LOGIN_ROUTE} className="nav-link">
          <i className="bi bi-box-arrow-in-right"></i> Login
        </NavLink>
      </li>
      <li>
        <NavLink to={AppRoutes.REGISTRATION_ROUTE} className="nav-link">
          <i className="bi bi-door-open"></i> Registration
        </NavLink>
      </li>
    </ul>
  );

  return (
    <header className="header">
      <Link to="/main" className="header__logo-link">
        <img
          src="./graduation-cap.png"
          alt="Site Icon"
          className="header__logo-icon"
        />
        <span className="header__app-name">GlobalCampus</span>
      </Link>
      <nav>{navButtons()}</nav>
    </header>
  );
};

export { Header };
