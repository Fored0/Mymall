<template>
  <div id="app">
    <div id="tabbar">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import TabBarItem from '../content/TabBarItem.vue'
export default {
  components:{
    TabBarItem
  }
}
</script>

<style scoped>
  #tabbar{
    display: flex;
    background-color: #f2f2f2;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0px -1px 1px rgba(100, 100, 100, .15);
  }
</style>