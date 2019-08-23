import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './state/store';
import App from './views/App';

// const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

ReactDOM.render(
  // <ReduxProvider>
    <App />,
  // </ReduxProvider>,
  document.getElementById('root')
)