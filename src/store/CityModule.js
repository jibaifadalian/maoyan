// import {http} from '@/network/http';
const cityModule = {
  namespaced: true,
  state: {
    cityName: "北京",
    cityId: 110100
  },
  mutations: {
    setCityName(state, name) {
      //组件中调用
      state.cityName = name;
    },
    setCityId(state,id) {
      state.cityId = id;
    }
  },
  actions: {},
  getters: {}
};
export default cityModule;