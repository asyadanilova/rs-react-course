import { Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import { AppRoutes } from './routes';
import { MainContainer } from '../components/MainContainer/MainContainer';
import { DetailsPage } from '../components/DetailsPage/DetailsPage';
import { About } from '../pages/AboutPage/AboutPage';
import { ResultsContainer } from '../components/ResultsContainer/ResultsContainer';

const AuthorizedRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/1" replace />} />
      <Route path="/main" element={<Navigate to="/main/1" replace />} />
      <Route path="/main" element={<MainContainer />}>
        <Route index element={<MainContainer />} />
        <Route path=":page" element={<ResultsContainer />}>
          <Route path=":id" element={<DetailsPage />} />
        </Route>
      </Route>
      <Route path="/:page" element={<MainContainer />}>
        <Route index element={<MainContainer />} />
        <Route path=":page" element={<ResultsContainer />}>
          <Route path=":id" element={<DetailsPage />} />
        </Route>
      </Route>
      <Route path={AppRoutes.LOGIN_ROUTE} element={<div>Login Page</div>} />
      <Route path={AppRoutes.ABOUT_ROUTE} element={<About />} />
      <Route
        path={AppRoutes.REGISTRATION_ROUTE}
        element={<div>Registration Page</div>}
      />
      <Route path={AppRoutes.ERROR_ROUTE} element={<NotFoundPage />} />
    </Routes>
  );
};

export default AuthorizedRoutes;
