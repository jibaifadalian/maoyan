<template>
  <div class='show-bar'>
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>
<script>
export default {
 name: 'ShowBar'
}
</script>
<style lang='scss' scoped>
.show-bar{
  display: flex;
  height:44px;
  line-height: 44px;
  position: fixed;
  top:0;
  left:0;
  right: 0;
  .left,.right{
    width:80px;
    text-align: center;
    background-color:#fff;
  }
  .center{
    flex:1;
    background-color: #fff;
    text-align: center;
  }
}
</style>