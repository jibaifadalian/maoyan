  <template>
    <div class="tabbar" >
      <slot></slot>           
    </div>
    
  </template>
  <script>
  
  export default {
   name: 'TabBar',
   
  }
  </script>
  <style  scoped>
  .tabbar {
    display: flex;
    background-color: #ccc;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0px -1px 1px rgba(100,100,100, 0.5);
    z-index: 9;
  }
 
  </style>