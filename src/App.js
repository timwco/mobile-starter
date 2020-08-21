/**
 * PROJECT NAME Mobile App
 * @format
 */
import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import Navigator from 'utils/navigator';
import configureStore from 'utils/store-config';

const store = configureStore();

const App = () => {
  return (
    <ReduxProvider store={store}>
      <Navigator />
    </ReduxProvider>
  );
};

export default App;
