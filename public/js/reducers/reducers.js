import { createReducer } from '../util/boilerplate';
import _ from 'lodash';

export const isDialogOpen = createReducer(false, {
  ['TOGGLE_DIALOG'](state) {
    return !state;
  },
});