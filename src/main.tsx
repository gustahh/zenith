import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './main.css'; // Verifique se o caminho está correto

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
