import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { MainContainer } from './components/MainContainer/MainContainer';

function App() {
  return (
    <>
      <ErrorBoundary>
        <Header />
        <MainContainer />
        <Footer />
      </ErrorBoundary>
    </>
  );
}

export default App;
