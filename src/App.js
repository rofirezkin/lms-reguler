import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';
import {ThemeProvider} from 'styled-components';

import {Provider, useSelector} from 'react-redux';
import {Loading} from './components';
import store from './redux/store';
import FlashMessage from 'react-native-flash-message';
import {navigationRef} from './RootNavigation';
import {theme} from './utils';

const MainApp = () => {
  const {isLoading} = useSelector(state => state.loadingReducer);

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer ref={navigationRef}>
        <Router />
        <FlashMessage position="top" />
        {isLoading && <Loading />}
      </NavigationContainer>
    </ThemeProvider>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};
export default App;
