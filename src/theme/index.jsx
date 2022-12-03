import { ReactNode } from 'react';
// @mui
import { CssBaseline } from '@mui/material';
import {
  createTheme,
  ThemeOptions,
  ThemeProvider as MUIThemeProvider,
  StyledEngineProvider,
} from '@mui/material/styles';
//
import palette from './palette';
import typography from './typography';
import breakpoints from './breakpoints';
import componentsOverride from './overrides';
import shadows, { customShadows } from './shadows';

// ----------------------------------------------------------------------

export default function ThemeProvider({ children }) {
  const themeOptions = {
    palette: palette.light,
    typography,
    breakpoints,
    shape: { borderRadius: 8 },
    direction: 'ltr',
    shadows: shadows.light,
    customShadows: customShadows.light,
  };

  const theme = createTheme(themeOptions);

  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
