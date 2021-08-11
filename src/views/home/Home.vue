<template>
  <div id="home" class="wrapper">
    <nav-bar class="home-nav">
      <div slot="center">购物车</div>
    </nav-bar>
    <tab-control
      :titles="['流行', '精选', '热门']"
      class="tab-control"
      @tabClick="tabClick"
      ref="tabControlone"
      v-show="istabFixed"
    />
    <scroll
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banners" @swiperimageLoad="swiperimageLoad" />
      <recommend-view :recommends="recommends" />
      <feature />
      <tab-control
        :titles="['流行', '精选', '热门']"
        class="tab-control"
        @tabClick="tabClick"
        ref="tabControltwo"
        :class="{ fixed: istabFixed }"
      />
      <goods-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBack"></back-top>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper.vue";
import RecommendView from "./childComps/RecommendView.vue";
import Feature from "./childComps/feature.vue";
import { debounce } from "common/utils.js";

import NavBar from "components/common/navbar/NavBar.vue";
import TabControl from "components/content/tabControl/TabControl.vue";
import GoodsList from "components/content/goods/GoodsList.vue";
import Scroll from "components/common/scroll/Scroll.vue";
import BackTop from "components/content/backTop/BackTop.vue";

// 网络请求
import { getHomeMultidata, getHomeGoods } from "network/home.js";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    Feature,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShowBack: false,
      taboffsetTop: 0,
      istabFixed: false,
      saveY:0
    };
  },
  created() {
    this.getHomeMultidata();

    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  activated() {
    // 回到离开前的位置
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    // console.log('ac');
  },
  deactivated() {
    // 记录离开时的位置
    this.saveY = this.$refs.scroll.getscrollY;
    // console.log('deac');
  },
  // destroyed(){
  //   console.log('destroy');
  // },
  mounted() {
    // 存储防抖函数
    const refresh = debounce(this.$refs.scroll.refresh);
    // 监听item中图片加载完成
    this.$bus.$on("itemImageLoad", () => {
      // console.log('-----');
      // 每一次加载图片完毕后都计算一下scrollerHeight
      refresh();
    });
  },

  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  methods: {
    // 网络请求相关
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.banner.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        // console.log(res);
        // 请求list数据动态添加
        this.goods[type].list.push(...res.data.list);
        // for (let i in res.data.list){
        //   this.goods[type].list.push(i)
        // }
        this.goods[type].page += 1;
        // 完成上拉加载更多
        this.$refs.scroll.finishPullUp();
      });
    },
    // 事件监听
    tabClick(index) {
      // console.log(index);
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      // this.$refs.TabControlone.currentIndex = index
      // this.$refs.tabControltwo.currentIndex = index
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    contentScroll(position) {
      // console.log(position);
      // 显示隐藏回弹按钮(backTop)
      this.isShowBack = -position.y > 1000;
      // 决定tabControl是否吸顶(position:fixed)
      this.istabFixed = -position.y > this.taboffsetTop;
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
    },
    swiperimageLoad() {
      this.taboffsetTop = this.$refs.tabControltwo.$el.offsetTop;
    },
  },
};
</script>

<style scoped>
#home {
  padding-top: 44px;
  height: 100vh;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
}
.tab-control {
  top: 44px;
  z-index: 999;
}
.fixed {
  position: fixed;
  left: 0;
  right: 0;
  top: 244px;
}
</style>