<template>
    <div>   
      <swiper>
        <div class="swiper-slide" v-for="item in banners" :key="item.bannerId">
          <img :src="item.imgUrl" alt="">
        </div>
      </swiper>  
      <nav-bar :titles="title"></nav-bar>
      <now-playing :childList="list" v-if="isShow"></now-playing>
      <will-playing  v-else></will-playing>
      <router-view></router-view>
    </div>
</template>
<script> 
import NavBar from '@/components/common/NavBar.vue'
import NowPlaying from './NowPlaying'
import WillPlaying from './willPlaying'   
import Swiper from '@/components/common/swiper.vue'


import {http} from '@/network/http.js';
import {mapState} from 'vuex';
export default {
  name: 'Movie',
  components:{
    NavBar,
    NowPlaying,
    WillPlaying,
    Swiper
  },
  data(){
    return {
      list:[],
      title:['今日热映','即将热映'],
      banners:[]
    }
  },
  computed: {
    isShow() {
      return this.$route.path === '/movie/nowPlaying' ? true : false;
    },
    ...mapState('cityModule',['cityId'])
  },
  mounted(){
    http({   //nowplaying请求商品
    url:`/gateway?cityId=${this.cityId}&pageNum=1&pageSize=10&type=1&k=1057814`,
    headers:{
    'X-Host': 'mall.film-ticket.film.list'
    }
    }).then(res => {
        this.list = res.data.films;
    });
    //请求banner数据
    http({
      url:`/gateway?type=2&cityId=${this.cityId}&k=3529285`,
      headers:{
        'X-Host': 'mall.cfg.common-banner'
      }
    }).then(res => {
      this.banners = res.data
    })
  },
}

</script>




<style lang="scss">
// @import 'swiper/css/swiper.css';
.left,.right{
  line-height: 49px;
}
 

</style>
