<template>
  <div class="category">
    <category-nav-bar/>
    <div class="wrapper" ref="caozuo">
      <div class="content"></div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { getCategory } from "network/category.js";
import CategoryNavBar from "./childComs/CategoryNavBar.vue";
export default {
  name: "Category",
  components: {
    CategoryNavBar
  },

  NavBardata() {
    return {
      scroll: null,
    };
  },
  created() {
    getCategory().then((res) => {
      console.log(res);
    });
  },
  // 注意，created此时dom还未进行渲染，一般无法操作
  mounted() {
    this.scroll = new BScroll(this.$refs.caozuo, {
      probeType: 3,
    });
    this.scroll.on("scroll", (position) => {
      // console.log(position);
    });
  },
};
</script>

<style scoped>
.wrapper {
  height: 400px;
  overflow: hidden;
}
</style>