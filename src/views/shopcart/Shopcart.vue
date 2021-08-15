<template>
  <div class="shopcart">
    <nav-bar class="navbar">
      <div slot="center">购物车({{ cartListLength }})</div>
    </nav-bar>
    <scroll class="scrolling" ref="scroll">
      <cart-list />
    </scroll>
    <cart-bottom/>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
import Scroll from "../../components/common/scroll/Scroll.vue";
import CartBottom from './childComs/cartBottom.vue';
import cartList from "./childComs/cartList.vue";

export default {
  name: "shopcart",
  components: {
    NavBar,
    Scroll,
    cartList,
    CartBottom,
  },
  data() {
    return {
      cartlength: 0,
    };
  },
  computed: {
    cartListLength() {
      return (this.cartlength = this.$store.state.cartList.length);
    },
  },
  activated() {
    this.$refs.scroll.refresh();
  },
};
</script>

<style scoped>
.shopcart {
  position: relative;
  background-color: #fff;
}
.navbar {
  background-color: var(--color-tint);
  color: white;
}
.scrolling {
  height: calc(100% - 44px);
}
</style>
