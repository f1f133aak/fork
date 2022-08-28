import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'styles/index.css';
import { LogsProvider } from './context/logs';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LogsProvider>
      <App />
    </LogsProvider>
  </React.StrictMode>
);

postMessage({ payload: 'removeLoading' }, '*');
