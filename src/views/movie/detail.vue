<template>
  <div v-if="detail" >
      <top-bar v-title="40" @goback="goback">
        <div>{{detail.name}}</div>
      </top-bar>
      <div class="introduce">
          <img :src="detail.poster" alt="">
          <h4>{{detail.name}}</h4>
          <p>{{detail.category}}</p> 
          <div>{{detail.nation}}|{{detail.runtime}}分钟{{detail.premiereAt}}</div>
          <div  :class="{synopsis:isActive}">{{detail.synopsis}}</div>
          <div class='toggle' @click="isActive = !isActive">
            <img src="~assets/imgs/tabbar/home.svg" alt="">
          </div>
      </div>
      <div class="actors">
        <swiper :swiperConfig = 'config'  swiperClass='actorDetail'>
            <div class="swiper-slide" v-for="(item,index) in detail.actors" :key="index">
              <img :src="item.avatarAddress" alt="">
              <div>{{item.name}}</div>
              <div>{{item.role}}</div>
            </div>
        </swiper>
      </div>
      <div>
        <div class='movie-photos'>
          <span>剧照</span>
          <span>全部({{detail.photos.length}})</span>
        </div>
        <swiper :swiperConfig = 'config1' 
        :swiperClass='actorDetail'>
            <div class="swiper-slide" v-for="(item,index) in detail.photos" :key="index">
              <img :src="item" alt="">
            </div>
        </swiper>
      </div>
  
     
  </div>
</template>
<script>
import {http} from '@/network/http.js';
import TopBar from '@/components/common/TopBar.vue';
import Swiper from '@/components/common/swiper'
export default {
  name: 'Detail',
  components:{
    TopBar,
    Swiper
  },
  data() {
    return{
      id:null,
      detail:null,
      isActive:true,
      actorDetail:'sddd',
    } 
  },
  computed: {
    config() {
      return {
          slidesPerView: 3,
          spaceBetween: 30,
          freeMode: true
        }
    },
    config1() {
      return {
          slidesPerView: 2,
          spaceBetween: 30,
          freeMode: true
        }
    }
  },
 
  mounted() {
    this.id = this.$route.params.filmId;
    http({       //请求影片信息
      url:`/gateway?filmId=${this.id}&k=9479090`,//gateway?filmId=4645&k=9479090'
      headers:{
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then(res => {
      this.detail = res.data.film
    })
  },
  methods: {
    goback() {
      this.$router.history.go(-1)
      console.log(1111)
    }
  },
  directives:{
    scroll:{
      inserted:function (el) {
        el.style.display='none';
        window.onscroll = function () {
          if(document.documentElement.scrollTop | document.body.scrollTop > 40) {
            el.style.display = 'block';
          }else{
            el.style.display = 'none'
          }
        }
      }
   
    }
  }
}
</script>
<style lang='scss' scoped>


    .icon-back{
      font-size: 30px;
    }

.introduce {
  background-color: #fff;
  img{
  width:100%;
  }
  .toggle {
    text-align: center;
    display: block;
    height: auto;
    width: 20px;
    margin: auto;
    line-height: normal;
    img{
      width:14px;
      height: 8px;
    }
  }
}

.synopsis{
  height:40px;
  overflow: hidden;
}
.actors{
  text-align: center;
}
.movie-photos{
  display: flex;
  padding: 10px;
  justify-content: space-between;
}
</style>