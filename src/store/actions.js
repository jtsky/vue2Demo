/**
 * Created by wlw-97 on 2016/11/15.
 */
import * as types from './types';

export const changeWords = ({commit}, payload) => {
  commit(types.CHANGE_WORDS, payload);
}
