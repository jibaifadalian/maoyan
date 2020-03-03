
<template>
  <div>
        <div v-for="(item,index) in childList" :key="item.filmId" 
        class='movie-item' @click="f(index)">
          <div class="photo">
            <img :src="item.poster" alt="">
          </div>
          <div class='introduce'>  
            <p>{{item.name}}</p>
            <p>观众评分{{item.grade}}</p>
            <p>{{item.nation}}{{item.runtime}}分钟</p>
            {{item.actors | filterActors}}
          </div>
         </div>
      <router-view></router-view>
  </div>

</template>
<script>
export default {
 name: 'nowPlaying',
 props:{
   childList:Array
 },
 methods: {
   detail(index) {
    this.$router.push('/film/' + this.childList[index].filmId) 
   }
 },
 filters: {
   filterActors(value) {
    return value.map(item => item.name).join(' ')
   }
 }
}
</script>

<style lang='scss' scoped>
.movie-item{
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  .photo{
    img{
      width:66px;
    }
  }
  .introduce{
    padding-left:10px; 
    flex:1;
  }
}


</style>
