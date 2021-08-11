<template>
  <div>
    <nav-bar>
      <div slot="left" class="left" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div
          class="titleitem"
          v-for="(item, index) in titles"
          :key="index"
          :class="{ isActive: currentIndex === index }"
          @click="titleClick(index)"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>

import NavBar from "components/common/navbar/NavBar.vue";

export default {
  name: "DetailNavBar",
  components: {
    NavBar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
      this.$emit("titleClick",index)
    },
    backClick(){
      this.$router.go(-1)
      // this.$router.back()
    }
  },
};
</script>

<style scpoed>
.title {
  display: flex;
}
.titleitem {
  flex: 1;
  font-size: 13px;
}
.isActive {
  color: var(--color-high-text);
}
.left img{
  margin-top: 11px;
}
</style>