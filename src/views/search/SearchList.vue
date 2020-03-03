<template>
    <li>
        <h4>{{searchtText.name}}</h4>
        <p>{{searchtText.address}}</p> 
    </li>
</template>
<script>
export default {
 name: 'SearchList',
 props:{
     searchtText:null
 }
}
</script>
<style lang='scss' scoped>

</style>