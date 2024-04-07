import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Assuming your HTML file has a div with id='root'
const container = document.getElementById('root');

// Check if container is not null
if (container) {
  const root = createRoot(container); // Create a root.
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
