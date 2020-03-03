<template>
      <div class="tabBarItem" :class="{active: isActive}"  @click="toPath" >
        <div><slot name="item-img"></slot></div>
        <div><slot name="item-text"></slot></div>
      </div>
</template>
<script>
export default {
 name: 'TabBarItem',
 data(){
   return {
   activeColor:'orange'
  }
 },
 props:{
   path:String
 },
 methods: {
   toPath() {
     this.$router.history.push(this.path)
   },
 },
 computed: {
    isActive() {
     return this.$route.path.indexOf(this.path) != -1;
   },
  
 },
}
</script>
<style  scoped>
 .tabBarItem{
    height: 49px;
    flex:1;
    text-align: center;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
   img{
    height:12px;
    margin-top: 5px;
    margin-bottom: 2px;
    display: block;
  }
  .active{
    color:orangered
  }
</style>