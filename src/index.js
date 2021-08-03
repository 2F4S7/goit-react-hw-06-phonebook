import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import './header/btn.module.css';
import App from './App';
import 'modern-normalize/modern-normalize.css';

import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
// import

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persist={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
