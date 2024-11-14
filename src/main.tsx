import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

import { SlideshowContextProvider } from './context/SlideshowContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SlideshowContextProvider>
      <App />
    </SlideshowContextProvider>
  </StrictMode>
);
