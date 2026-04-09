import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
 
 
import Router from './router';
import { AppSessionProvider } from './components/auth/app-session';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AppSessionProvider>
      <Router />
    </AppSessionProvider>
  </BrowserRouter>
);
 
