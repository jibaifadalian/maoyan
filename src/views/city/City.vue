<template>
  <div>
    <van-index-bar :index-list="indexList">
      <div v-for="item in cityList" :key="item.cityId">
        <van-index-anchor :index="item.index"></van-index-anchor>
        <van-cell :title="city.name" v-for="(city,index) in item.list" 
        :key="index" @click="handleCity(city)">
        </van-cell>
      </div>
    </van-index-bar>
  </div>
</template>
<script>
import Vue from "vue";
import {IndexBar,IndexAnchor,Cell} from "vant";
import {http} from "@/network/http";
import {mapMutations} from 'vuex';
// import betterScroll from 'better-scroll';

Vue.use(IndexBar);
Vue.use(IndexAnchor).use(Cell);
export default {
    name: "",
    data() {
      return { 
          indexList: [],
          cityList:[],
        }
    },
    mounted() {
      http({
        url: "/gateway?k=6373009",
        headers: {
          "X-Host": "mall.film-ticket.city.list"
        }
      }).then(res => {
        this.filterCity(res.data.cities);
      })
    },
    methods: {
      filterCity(city) {
        let codeList = []; 
        //获取26个字母
        for(let i = 65;i < 91;i++) {
          codeList.push(String.fromCharCode(i));
        }
        //每个字母分别与各个城市对比
        codeList.forEach(item => {
              let newCodeList = city.filter(value => value.pinyin.slice(0,1).toUpperCase() === item)
              newCodeList.length&&this.indexList.push(item);//有该字母，存入indexlist
              newCodeList.length&&this.cityList.push({index:item,list:newCodeList})
              })
      },
       //处理点击城市后相应对应的影院
      handleCity(city) {
        //修改vuex共享的城市数据
        this.setCityName(city.name);
        this.setCityId(city.cityId);//通过更改id更改城市  cinema中dispatch携带该id
        // localStorage.setItem('cityName',city.name);
        // localStorage.setItem('cityId',city.cityId)
        this.$router.back();
      },
      ...mapMutations('cityModule',['setCityName','setCityId'])
    },
  
 
}


</script>


<style lang='scss' scoped>

</style>