import 'whatwg-fetch';
import _ from 'underscore';

export const createReducer = (initialState, handlers) => {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };
};

export const convertArrayToObject = (array, keyFieldName) => {
  return array.reduce((obj, el) => {
    obj[el[keyFieldName]] = el;
    return obj;
  }, {});
};

export const httpGet = (url) => {
  return fetchJSON(url);
};

export const httpPost = (url, body = {}, requestHeaders = {}) => {
  return fetchJSON(url, {
    method: 'post',
    body: JSON.stringify(body),
  }, requestHeaders);
};

export const httpPut = (url, body = {}) => {
  return fetchJSON(url, {
    method: 'put',
    body: JSON.stringify(body),
  });
};

export const httpDelete = (url, body = {}) => {
  return fetchJSON(url, {
    method: 'delete',
    body: JSON.stringify(body),
  });
};

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

function fetchJSON(url, options = {}, requestHeaders = {}) {
  const opts = {
    credentials: 'same-origin',

    headers: _.extend({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }, requestHeaders),

    ...options,
  };
  return fetch(url, opts)
    .then(checkStatus)
    .then(res => res.json())
    // .catch(error => {
    //  console.log('request failed:', error);
    // })
}
