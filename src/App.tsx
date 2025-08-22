import { Suspense } from 'react';
import './styles/App.css';
import CountryDashboard from './components/CountryDashboard/CountryDashboard';
import Spinner from './components/Spinner/Spinner';

function App() {
  return (
    <div className="App">
      <h1>CO₂ Emissions Dashboard</h1>
      <Suspense fallback={<Spinner />}>
        <CountryDashboard />
      </Suspense>
    </div>
  );
}

export default App;
