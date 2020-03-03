<template>
    <div >
      <h2>wode</h2>
    </div>
</template>

<script>
import Vue from 'vue';
import { Button } from 'vant';
Vue.use(Button);
export default {
  name: 'Mine',
  beforeRouteEnter (to, from, next) {
    if(localStorage.token) {
      next()
    }else {
      // to.path = '/login
      next('/login')
      console.log(to.path)
    }
  }
}
</script>




<style lang="scss">


</style>
