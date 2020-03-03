<template>
  <div class="swiper-container" :class="swiperClass">
    <div class="swiper-wrapper">
        <slot></slot>
    </div>
          <!-- <div class="swiper-pagination"></div> -->
          <!-- <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div> -->
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
export default {
  name:'Swiper',
  props:{
    swiperConfig:Object,           //自定义属性，使用时传递
    swiperClass:{
      type:String,
      default() {
        return 'swiper-container'
      }
    }            
  },
  mounted(){
    new Swiper("."+ this.swiperClass,this.swiperConfig)
  }
}
</script>

  <style lang='scss' scoped>
  .swiper-wrapper{
    img{
      width:100%;
    }
  }

  </style>