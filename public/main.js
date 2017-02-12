import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import App from './components/App';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Form from './components/Form';
import { connect } from 'react-redux';
import { reducer as reduxFormReducer } from 'redux-form'
import $ from 'jquery';

injectTapEventPlugin();

const reducer = combineReducers({
  form: reduxFormReducer // mounted under "form"
})
// define middleware that gets called during dispatch
const logger = store => next => action => {
  const result = next(action);
  console.log('\ndispatching:', action, '\nnext state:', store.getState());
  return result;
};

const crashReporter = store => next => action => {
  try {
    return next(action);
  } catch (err) {
    console.error('Caught an exception!', err);
    throw err;
  }
};

const createStoreWithMiddleware = applyMiddleware(thunk, logger, crashReporter)(createStore);
const store = createStoreWithMiddleware(reducer);

const showResults = values =>
  new Promise(resolve => {
    setTimeout(() => {  // simulate server latency
     window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
      				// $.ajax({
          //               url: "/candy",
          //               type: 'POST',
          //               data: values,
          //               beforeSend: function() {
          //                   $("#msg").html("sending...");
          //               },
          //               success: function(data) {
          //                   $("#msg").hide();
          //                   $("#response").html(data);
          //               }
          //           });
      resolve()
    }, 500)
  })


ReactDOM.render(
 
  <Provider store={store}>
    <MuiThemeProvider>
      <Form onSubmit={showResults}/>
  	</MuiThemeProvider>
  </Provider>, document.getElementById('app'));