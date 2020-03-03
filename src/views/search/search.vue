<template>
  <div>
        <div class='search'>
            <i class='iconfont icon-search'></i>
            <input type="text" v-model="message">
            <button @click="goBack">取消</button>
        </div>
        <!--渲染搜索后的数据-->
        <div v-show="message">
            <ul v-if='getCinemaList.length'>
                <search-list  v-for="item in getCinemaList" :key="item.cinemaId" 
                :searchtText='item'>
                <!--将遍历得到的成员传递给子组件-->
                </search-list>
            </ul>
            <div v-else>
                您搜索的影院不存在
            </div>
        </div>
        <!--展示推荐信息-->
        <div class='nearlyCinemas' v-show="!message">
            <ul>
                <li v-for="item in topSearchList" :key="item.cinemaId">
                    {{item.name}}
                </li>
            </ul>
        </div>
  </div> 
</template>
<script>
import SearchList from './SearchList';
import {mapState,mapGetters} from 'vuex';
export default {
 name: 'Search',
 components:{
     SearchList
 },
  data() {
    return {
      message:'',
    }
  },
  methods: {
    goBack() {
      this.$router.back();
    }
  },
  computed: {
      ...mapState('ModuleA',['cinemaList']),//与store名字为moduleA中的state为cinemaList建立管道 
      ...mapGetters('ModuleA',['topCinemaList']),//映射getters中的topCinemaList
     getCinemaList(){
      return this.cinemaList.filter(item => item.name.includes(this.message) || 
      item.name.toUpperCase().includes(this.message)
      || item.name.toLowerCase().includes(this.message))
    },
    topSearchList() {
        return this.topCinemaList;//返货getter是中的topCinemaList
    }
  },
  mounted() {
      console.log(this.topCinemaList)
  },
}


</script>
<style lang='scss' scoped>
.search{
  padding: 10px,30px,0,10px;
  input{
    width:80%;
    height: 30px;
    background: #f4f4f4;
    margin-left: 10px;
  }
  i{
    position: absolute;
    left: 22px;
    top: 12px;
    height: 30px;
    border: 0;
  }
}

</style>