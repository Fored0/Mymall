<template>
  <div>
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
    <main-tab-bar/>
  </div>
</template>

<script>
import MainTabBar from "./components/content/MainTabBar.vue";

export default {
  name: "App",
  components: {
    MainTabBar,
  },
};
</script>


<style scoped>
@import "assets/css/base.css";
</style>
