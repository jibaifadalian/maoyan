<template>
  <div>
    <tab-bar>
      <tab-bar-item path='/movie'>
        <i class='iconfont icon-rfq' slot="item-img"></i>
        <div slot="item-text">电影</div>
      </tab-bar-item>
      <tab-bar-item path='/cinema'>
        <i class='iconfont icon-folder' slot="item-img"></i>
        <div slot="item-text">影院</div>
      </tab-bar-item>
      <tab-bar-item path='/profile'>
        <i class='iconfont icon-comments' slot="item-img"></i>
        <div slot="item-text">咨询</div>
      </tab-bar-item>
      <tab-bar-item path='/mine'>
        <i class='iconfont icon-account' slot="item-img"></i>
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>
<script>
import TabBar from '@/components/tabbar/TabBar.vue' 
import TabBarItem from '@/components/tabbar/TabBarItem.vue'
export default {
  name: '',
  components:{
  TabBar,
  TabBarItem
  }   
}
</script>
<style lang='scss' scoped>
i{
  display:block;
}
</style>