import React from 'react';
import { createTheme } from '@mui/material/styles';
// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/chart/BaseOptionChart';

// ----------------------------------------------------------------------
import { AuthProvider } from './contexts/auth';

export default function App() {
  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <ScrollToTop />
      <BaseOptionChartStyle />
      <AuthProvider>
        <Router />
      </AuthProvider>
    </ThemeProvider>
  );
}
