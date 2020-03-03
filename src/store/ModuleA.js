import { http } from "@/network/http.js";
const moduleA = {
  namespaced: true,
  state: {
    isShow: false,
    cinemaList: []
  },
  getters: {
    topCinemaList(state) {
      return state.cinemaList.slice(0, 5);
    }
  },
  mutations: {
    toMutation(state, data) {
      state.cinemaList = data; //将携带的数据赋值给state管理  第一个参数state即为初始化state
    }
  },
  actions: {
    toActionRequest(context,id) {
      http({
        //接受dispa中携带的cityid
        url:`/gateway?cityId=${id}&ticketFlag=1&k=7306745`,
        headers: {
          "X-Host": "mall.film-ticket.cinema.list"
        }
      }).then(res => {
        //向mutation提交commit事件  携带数据  自带参数context
        context.commit("toMutation", res.data.cinemas);
      });
    }
  }
};
export default moduleA;
