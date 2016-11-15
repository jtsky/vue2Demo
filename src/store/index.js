/**
 * Created by wlw-97 on 2016/11/15.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import mutations from './mutations';
Vue.use(Vuex);

const state = {
  data1: {
    a1:'aaa',
    b1:'bbb',
    c1:'ccc',
  },
  data2: {
    a2:'aaa',
    b2:'bbb',
    c2:'ccc',
  },
};

export default new Vuex.Store({
  state,
  actions,
  mutations
});
