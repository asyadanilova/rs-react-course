import { Navigate, Route, Routes } from 'react-router-dom';
import { DetailsPage } from '../components/DetailsPage/DetailsPage';
import { MainContainer } from '../components/MainContainer/MainContainer';
import { About } from '../pages/AboutPage/AboutPage';
import { NotFoundPage } from '../pages/__mocks__/404Page';
import { AppRoutes } from './routes';
import { ResultsContainer } from '../components/ResultsContainer/ResultsContainer';

const PublicRoutes: React.FC = () => {
  return (
    <Routes>
      <Route
        path={AppRoutes.HOME_ROUTE}
        element={<Navigate to="/1" replace />}
      />
      <Route path={AppRoutes.HOME_ROUTE} element={<MainContainer />}>
        <Route path=":page" element={<ResultsContainer />}>
          <Route path=":id" element={<DetailsPage />} />
        </Route>
      </Route>
      <Route path={AppRoutes.ABOUT_ROUTE} element={<About />} />
      <Route path={AppRoutes.ERROR_ROUTE} element={<NotFoundPage />} />
      <Route path={AppRoutes.LOGIN_ROUTE} element={<div>Login Page</div>} />
      <Route
        path={AppRoutes.REGISTRATION_ROUTE}
        element={<div>Registration Page</div>}
      />
    </Routes>
  );
};

export default PublicRoutes;
