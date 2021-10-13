import React from 'react';
import {Provider} from 'react-redux';
import RootNavigator from './App/navigation/RootNavigator';
import {store} from './App/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
