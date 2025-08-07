import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { ThemeProvider } from './context/ThemeContext';

const root = document.getElementById('root');
if (root) {
  createRoot(root).render(
    <StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    </StrictMode>
  );
}
