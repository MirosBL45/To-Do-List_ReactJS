import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //react console log twice with StrictMode on, and loads 2 times in a row
  <App />
  // </React.StrictMode>
);