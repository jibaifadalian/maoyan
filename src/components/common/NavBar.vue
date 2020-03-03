
<template>
    <div class="nav-bar">
      <div v-for="(item,index) in titles" 
      :key="index" class='nav-bar-item'
      :class='{active:currentIndex === index}'
      @click="currentColor(index)">
        <span>{{item}}</span>
      </div>
    </div>
</template>  

<script>
export default {
  name: 'NavBar',
  data(){
    return {
      currentIndex:0,
       
    }
  },
  props:{
    path:String,
    titles:{ //引用该组件的父元素将数值传给子组件
      type:Array,
      default(){
       return [];
      }
    },
  },
  methods: {
    currentColor(index) {
      this.currentIndex = index;
      if(index===0) {
        this.$router.history.push('/movie/nowPlaying')
      }else {
        this.$router.history.push('/movie/willPlaying')
      }
    }
  },
}
</script>
<style lang='scss' scoped>
.nav-bar {
  display: flex;
  height: 49px;
  line-height: 49px;
  align-items: center;
  background-color: #fff;
  .nav-bar-item{
    flex:1;
    text-align:center;
  }
  $myColor: red;
  .active{
    color:var(--color-high-text);
    // color:$myColor;  
    span {
    padding: 10px;
    border-bottom:3px solid orange;
    }
     
  }  
  
}
            
</style>


