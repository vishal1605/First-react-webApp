import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
// import Index from './redux-tutorial/Index';
import Main from './redux-tutorial/Main';
import store from './redux-tutorial/store';

function App() {

  return (

    <Provider store={store}>
      <Main />
    </Provider>

  );
}

export default App;
