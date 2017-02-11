import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import App from './components/App';
import reducers from './reducers';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers);
const muiTheme = getMuiTheme({
  fontFamily: {
    fontFamily: 'proximanova-light'
  }
});


ReactDOM.render(
 
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <App />
  	</MuiThemeProvider>
  </Provider>, document.getElementById('app'));