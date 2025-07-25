import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { MainContainer } from './components/MainContainer/MainContainer';
import './components/ErrorBoundary/ErrorBoundary.scss';
import { Route, Routes } from 'react-router-dom';
import NotFoundPage from './view/404Page/404Page';
import { About } from './view/About/about';

const App: React.FC = () => {
  return (
    <>
      <ErrorBoundary
        fallbackUI={
          <div className="fallback">
            <h1 className="fallback__header">
              Something went wrong in your application!
            </h1>
            <button
              onClick={() => window.location.reload()}
              style={{ marginTop: '10px' }}
            >
              Reload App
            </button>
          </div>
        }
      >
        <Header />
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<div>Login Page</div>} />
          <Route path="/registration" element={<div>Registration Page</div>} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </ErrorBoundary>
    </>
  );
};

export default App;
