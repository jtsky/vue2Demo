import {set} from 'vue'
import * as types from './types'

export default {
  [types.CHANGE_WORDS] (state, {message}) {
    console.log('mutations===>', state, message);
    changeWords(state, message.key, message.data);
  },


}

function changeWords(state, key, message) {
  set(state.data1, key, message);
}


