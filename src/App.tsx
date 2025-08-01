import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import './components/ErrorBoundary/ErrorBoundary.scss';
import MainRouter from './routes/MainRouter';

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
        <MainRouter />
        <Footer />
      </ErrorBoundary>
    </>
  );
};

export default App;
