import React from 'react';
import ReactDOM from 'react-dom';
import './dist/semantic.min.css';
import AppContainer from './App';
import { Provider } from 'react-redux';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Provider store={store}>
  <AppContainer/>
</Provider>, document.getElementById('root'));
registerServiceWorker();
