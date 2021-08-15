<template>
  <div class="bottom-bar">
    <div class="left">
      <span>客服</span>
      <span>店铺</span>
      <span>收藏</span>
    </div>
    <div class="cart" @click="toHome">去购物</div>
    <div class="buy" @click="toPay">去结算({{ "￥" + getPrice }})</div>
  </div>
</template>

<script>
export default {
  name: "cartBottom",
  data() {
    return {
      totalPrice: 0,
      getPrice: null,
    };
  },
  methods: {
    toHome() {
      this.$router.push("/home");
    },
    toPay() {
      // console.log(this.$store.state.cartList[0].price);
      const length = this.$store.state.cartList.length;
      for (var item = 0; item < length; item++) {
        this.totalPrice += Number(this.$store.state.cartList[item].price);
      }
      this.getPrice = parseFloat(this.totalPrice).toFixed(2);
    },
  },
  activated() {
    this.toPay()
  },
};
</script>

<style scoped>
.bottom-bar {
  background-color: #fff;
  width: 100%;
  height: 49px;
  position: fixed;
  bottom: 49px;
  opacity: 0.8;
}
.left {
  width: 40%;
  height: 49px;
  display: flex;
  text-align: center;
  line-height: 3em;
}
.left span {
  flex: 1;
  border-left: 1px solid silver;
  background-color: rgb(182, 214, 175);
}
.cart,
.buy {
  width: 20%;
  height: 49px;
  margin-left: 40%;
  background-color: rgb(231, 224, 126);
  text-align: center;
  line-height: 3em;
  position: relative;
}
.buy {
  position: absolute;
  margin-left: 60%;
  width: 40%;
  bottom: 0;
  background-color: rgb(228, 108, 108);
}
</style>