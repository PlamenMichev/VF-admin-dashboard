// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import ScrollToTop from './components/ScrollToTop';
import { ProgressBarStyle } from './components/ProgressBar';
import MotionLazyContainer from './components/animate/MotionLazyContainer';
import { AuthProvider } from './contexts/JWTContext';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <AuthProvider>
      <MotionLazyContainer>
        <ThemeProvider>
          <ProgressBarStyle />
          <ScrollToTop />
          <Router />
        </ThemeProvider>
      </MotionLazyContainer>
    </AuthProvider>
  );
}
