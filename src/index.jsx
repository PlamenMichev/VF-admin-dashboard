// translation
import './locales/i18n';

// scroll bar
import 'simplebar/src/simplebar.css';

// lazy image
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
// context
import { CollapseDrawerProvider } from './contexts/CollapseDrawerContext';

//
import App from './App';

// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HelmetProvider>
    <CollapseDrawerProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CollapseDrawerProvider>
  </HelmetProvider>
);
