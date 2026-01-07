import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './contexts/ThemeContext';

// Set basename for GitHub Pages
// Extract pathname from homepage URL (e.g., "/beloWebsite" from "https://yuribelorusets.github.io/beloWebsite")
const getBasename = () => {
  if (process.env.PUBLIC_URL) {
    try {
      const url = new URL(process.env.PUBLIC_URL);
      return url.pathname;
    } catch {
      // If PUBLIC_URL is just a pathname (starts with /)
      if (process.env.PUBLIC_URL.startsWith('/')) {
        return process.env.PUBLIC_URL;
      }
    }
  }
  return '';
};

const basename = getBasename();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
