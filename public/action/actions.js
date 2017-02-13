import { httpGet, httpPut, httpPost, httpDelete } from '../util/boilerplate';
import _ from 'lodash';

export const toggleDialog = () => {
  return (dispatch) => {
  	dispatch({ type: 'TOGGLE_DIALOG' });

  };
};