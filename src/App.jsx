import { useState } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Page from './redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Page />
      </div>
    </Provider>
  );
}

export default App;
