import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import  '@/util/Derective.js' //引入全局指令v-title
import ShowBar from '@/components/common/ShowBar'//引入全局组件showbar
Vue.component('ShowBar',ShowBar)//注册全局组件
Vue.config.productionTip = false
import "@/assets/iconfont/iconfont.css";
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')        
