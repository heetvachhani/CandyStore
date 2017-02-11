import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './components/App';
import reducers from './reducers';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
 
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
  	</MuiThemeProvider>
  </Provider>, document.getElementById('app'));