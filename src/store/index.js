import Vue from 'vue'
import Vuex from 'vuex'
import ModuleA from './ModuleA'
import cityModule from "./CityModule";
import Login from './login';
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)
export default new Vuex.Store({
  plugins: [
    createPersistedState()
  ],
  state: {
    isLogin: 0,
  },
  getters: {},
  mutations: {
    //mutation改变state状态
  },
  actions: {},
  modules: {
    ModuleA,
    cityModule,
    Login
  }
});
