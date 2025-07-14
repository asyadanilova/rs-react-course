import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { MainContainer } from './components/MainContainer/MainContainer';
import './components/ErrorBoundary/ErrorBoundary.scss';

function App() {
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
        <MainContainer />
        <Footer />
      </ErrorBoundary>
    </>
  );
}

export default App;
