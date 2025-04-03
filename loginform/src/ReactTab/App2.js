import React from 'react';
import { Provider } from 'react-redux';

import HomePage from './Homepage';
import { store } from './Store';

const App2 = () => {
  return (
    // <Provider store={store}>
    //   <HomePage />
    // </Provider>
    <Provider store={store}>
        <HomePage/>
    </Provider>
  );
};

export default App2;
