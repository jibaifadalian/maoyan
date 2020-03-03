  <template>
    <div>
        <div v-for="item in list" :key="item.filmId" class='willPlaying' @click="toDetail">
          <img :src="item.poster" alt="">
          <div class="contentBox">
            <p>{{item.name}}</p>
            <p>观众评分{{item.grade}}</p>
            <p>{{item.nation}}{{item.runtime}}分钟</p>
            <span>主演：{{item.actors | filterActor}}</span>
            </div>   
        </div>
    </div>

  </template>
  <script>
  import {http} from '@/network/http';
  import {mapState} from 'vuex';
  export default {
    name: 'WillPlaying',
    data() {
      return {
        list:[]
      }
    },
    computed: {
      ...mapState('cityModule',['cityId'])
    },
    mounted() {
      console.log(this.cityId)
      http({
        url:`/gateway?cityId=${this.cityId}&pageNum=1&pageSize=10&type=2&k=8606730`,
        headers:{
          'X-Host': 'mall.film-ticket.film.list',
        }
      }).then(res => {
        this.list = res.data.films;
        // console.log(res.data.films)
        })
    },
    filters:{
      filterActor(item) {
        return item.map(item => item.name).join(' ')
      }
    },
    methods: {
      toDetail() {
        this.$router.push('/film/'+this.cityId)
      }
    },   
   

  }
  </script>
  <style lang='scss' scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .willPlaying {
    display:flex;
    img{
      width:134px;
    }
    .contentBox{
      flex: 1;
    }
  }

  </style>