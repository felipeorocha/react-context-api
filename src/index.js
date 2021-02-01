import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Profile from './components/Profile';
import { AuthProvider } from './providers/auth';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
      <Profile />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
