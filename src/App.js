import React from 'react';
import store from './state/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { theme } from './styles/theme.styles';
import { GlobalStyles } from './styles/global.styles';
import { ThemeProvider } from 'styled-components';
import WebsiteLayout from './components/Layout/WebsiteLayout';
import OnboardingLayout from './components/Layout/OnboardingLayout';
import DashboardLayout from './components/Layout/DashboardLayout';



const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <WebsiteLayout />
          <OnboardingLayout />
          <DashboardLayout />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
