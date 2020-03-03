<template>
  <div id="app">
    <main-tab-bar></main-tab-bar>
    <transition name='fade'>
      <router-view/>
    </transition>
    
  </div>
</template>
<script>
import MainTabBar from '@/components/content/MainTabBar.vue';
import '@/assets/iconfont/iconfont.css';
 
export default {
  name:'App',
  components:{
    MainTabBar,
  }
}

</script>
<style scoped>

@import './assets/css/reset.css';
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
  transform: translateY(100)
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(0)
}


</style>
