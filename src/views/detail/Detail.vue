<template>
  <div id="details">
    <detail-nav-bar class="detail-nav-bar" @titleClick="titleClick" />
    <scroll class="scrolling" ref="scroll" @scroll="toTop" :probe-type="3">
      <detail-swiper :topImages="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad" />
      <detail-params-info :param-info="paramInfo" ref="params" />
      <detail-comment-info :comment-info="commentInfo" ref="comment" />
      <goods-list :goods="recommend" ref="recommend" />
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBack" />
  </div>
</template>

<script>
import DetailNavBar from "./childComs/DetailNavBar.vue";
import DetailSwiper from "./childComs/DetailSwiper.vue";
import DetailBaseInfo from "./childComs/DetailBaseInfo.vue";
import DetailShopInfo from "./childComs/DetailShopInfo.vue";
import DetailGoodsInfo from "./childComs/DetailGoodsInfo.vue";
import DetailParamsInfo from "./childComs/DetailParamsInfo.vue";
import DetailCommentInfo from "./childComs/DetailCommentInfo.vue";

import Scroll from "components/common/scroll/Scroll.vue";
import BackTop from "components/content/backTop/BackTop.vue";

import {
  getDetail,
  Goods,
  Shop,
  GoodsParams,
  getRecommend,
} from "network/detail.js";
import GoodsList from "components/content/goods/GoodsList.vue";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    BackTop,
    Scroll,
    GoodsList,
  },
  data() {
    return {
      iid: null,
      res: null,
      isShowBack: false,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommend: [],
      themeTopY: [],
    };
  },
  created() {
    // 保存传入的iid
    this.iid = this.$route.params.iid;
    // 根据保存的iid请求数据
    getDetail(this.iid).then((res) => {
      // console.log(res);
      this.res = res;
      this.topImages = this.res.result.itemInfo.topImages;
      // 获取商品信息
      this.goods = new Goods(
        res.result.itemInfo,
        res.result.columns,
        res.result.shopInfo.services
      );
      // 创建商家信息对象
      this.shop = new Shop(res.result.shopInfo);
      // 获取商品详细信息
      this.detailInfo = res.result.detailInfo;
      // 获取参数的信息
      this.paramInfo = new GoodsParams(
        res.result.itemParams.info,
        res.result.itemParams.rule
      );
      // 取出评论信息
      if (res.result.rate.cRate !== 0) {
        this.commentInfo = res.result.rate.list[0];
        // console.log(this.commentInfo);
      }
      // 请求推荐数据
      getRecommend().then((res) => {
        this.recommend = res.data.list;
        // console.log(res);
      });
    });
  },

  methods: {
    imageLoad() {
      this.$refs.scroll.refresh();
      this.$nextTick(()=>{
        this.themeTopY = []
        this.themeTopY.push(0)
        this.themeTopY.push(this.$refs.params.$el.offsetTop)
        this.themeTopY.push(this.$refs.comment.$el.offsetTop)
        this.themeTopY.push(this.$refs.recommend.$el.offsetTop)
        console.log(this.themeTopY);
      })
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 200);
    },
    toTop(position) {
      this.isShowBack = -position.y > 1000;
    },
    titleClick(index) {
      // console.log(index);
      this.$refs.scroll.scrollTo(0, -this.themeTopY[index], 10);
    },
  },
};
</script>

<style scoped>
#details {
  position: relative;
  height: 100vh;
}
.detail-nav-bar {
  position: relative;
  z-index: 9;
}
.scrolling {
  height: calc(100% - 93px);
}
.fixed {
  position: fixed;
  left: 0;
  right: 0;
  top: 244px;
}
</style>