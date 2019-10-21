import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './state/store';
import { GlobalStyles } from './styles/global.styles';
import WebsiteLayout from './components/Layout/WebsiteLayout';
import OnboardingLayout from './components/Layout/OnboardingLayout';
import DashboardLayout from './components/Layout/DashboardLayout';


const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <WebsiteLayout />
        <OnboardingLayout />
        <DashboardLayout />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
