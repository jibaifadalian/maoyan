<template>
      <div>
          <div class='header'> 
              <div>
                <span @click="goSearch('/city')">{{cityName}}</span>
                <i class='iconfont icon-moreunfold'></i>
              </div>
              <div class='center'>影院</div>
              <div class='right'><i class='iconfont icon-search' @click="goSearch('/cinema/search')"></i></div>
          </div>
          <div class="select">
              <div @click="isShow = !isShow" :class="isShow?'isActive':''">
                <span>{{current}}</span>
                <i class='iconfont icon-moreunfold'></i>
              </div>
              <div>
                <span @click="hidden = !hidden">APP订票</span>
                <i class='iconfont icon-moreunfold'></i>
              </div>
              <div>
                <span>最近去过</span>
                <i class='iconfont icon-moreunfold'></i>
              </div>
          </div>
          <!--显示各个区域-->
          <div class="cinemas" v-show='isShow' >
              <div v-for="area in computedList" :key="area.cinemaId" @click="getArea(area)"
                :class="area===current?'isActive':''">
              <span>{{area}}</span>
              </div>
          </div>
          <!--显示APP订票-->
          <div v-show='hidden' class='buyTicket' >
            <h3>APP订票</h3>
            <h3>前台兑换</h3>
          </div>
          <!--显示具体区域影院信息-->
          <div class="content" :style="{height:contentHeight}">
            <div>
              <div v-for="cinema in currentArea" :key="cinema.cinemaId" class='innerContent'>
                <p class='cinemaName'>{{cinema.name}}</p>
                <p class='cinemaAddress'>{{cinema.address}}</p>
              </div>
              </div>
          </div>
      </div>
</template>
<script>
import { mapState,mapMutations} from 'vuex';
import betterScroll from 'better-scroll';
import Vue from 'vue';
import { Toast } from 'vant';
Vue.use(Toast);
export default {
  name: 'Cinema',
  data() {
    return {
      current:'全城',
      isShow:false,
      hidden:false,
      contentHeight:0 + 'px'
    }
  }, 
  beforeMount(){
    Toast.loading({
      message: '加载中...',
      forbidClick: true,
      overlay:true, //是否显示背景遮罩层
      duration:1 //不会消失
    });
  },

  mounted() {
    this.contentHeight = document.documentElement.clientHeight - 88 -49 + "px";
    new betterScroll(".content")
    if(this.cinemaList.length===0){
      //组件中向moduleA下的actions发射事件，处理异步请求
      this.$store.dispatch('ModuleA/toActionRequest',this.cityId);
      //localStorage方式更改请求接口，渲染对应数据
      // this.$store.dispatch('ModuleA/toActionRequest',localStorage.getItem('cityId'))
    }else{
      console.log("使用缓存")
    }
  },
  methods: {
     getArea(area){     
     this.current = area;//将当前area赋值给current
     this.isShow = false;//选择区域之后隐藏
     this.hidden = false;
    },
    goSearch(path) {
      if(path==='/city') {  //调用mutation清楚vuex
        this.toMutation([]);
      }
      this.$router.push(path) ;
    }, 
    ...mapMutations('ModuleA',['toMutation'])
  },
  computed: {
      ...mapState('cityModule',['cityName','cityId']),
      ...mapState('ModuleA',['cinemaList']),
    //过滤十五个单独区
    computedList() {
     let newList = this.cinemaList.map(item => item.districtName)
     let cinemaList1 = ['全城',...newList]
     return Array.from(new Set(cinemaList1))
    },
    //筛选出当前区域影院
    currentArea() {
      if(this.current==='全城'){
        return this.cinemaList;
      }
      return  this.cinemaList.filter(item => item.districtName===this.current)
    },
  },
}
</script>
<style lang="scss" >
*{
  margin: 0;
  padding: 0;
}
.isActive{
  border:2px solid #ff5f16;
}
.header{
  z-index: 9;
  display: flex;
  position: fixed;
  height: 44px;
  width:100%;
  line-height: 44px;
  background-color: #fff;
  z-index: 9;
  padding: 15px;
  box-sizing: border-box;
  align-items: center;
  .right{
    text-align: right;
  }
  .center{
    text-align: center;
  }
  div{
    flex:1;
  }
}
.select{
  display: flex;
  position: fixed;
  height: 44px;
  width:100%;
  top: 44px;
  line-height: 44px;
  text-align: center;
  background-color: #fff;
  z-index: 10;
  div{
    flex:1;
  }
}
.cinemas{
  display: flex;
  flex-wrap: wrap;
  position: relative;
  top: 88px;
  z-index: 10;
  div{
    width:25%;
    padding: 5px;
    box-sizing: border-box;
    text-align: center;
  }
  
}
.content{
  position: relative;
  top:88px;
  // padding: 10px;
  .innerContent{
    line-height: 30px;
  }
  .cinemaAddress{
    color: #797d82;
    font-size: 12px;
  }
  .cinemaName{
    color: #191a1b;
    font-size: 15px;
  }
}
.buyTicket{
  z-index: 10;
  position: relative;
  top:88px;
  background-color: #fff;
}
</style>
