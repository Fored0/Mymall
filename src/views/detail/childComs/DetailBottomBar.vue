<template>
  <div class="bottom-bar">
    <div class="left">
     <span>客服</span>
     <span>店铺</span>
     <span>收藏</span>
    </div>
    <div class="cart" @click="addCart">
      加入购物车
    </div>
    <div class="buy">购买</div>
  </div>
</template>

<script>
export default {
  name:"DetailBottomBar",
  methods:{
    addCart(){
      // console.log('join success');
      this.$emit('addCart')
    }
  }
}
</script>

<style scoped>
  .bottom-bar{
    background-color: #fff;
    width: 100%;
    height: 49px;
    position: fixed;
    bottom: 0;
  }
  .left{
    width: 40%;
    height: 49px;
    display: flex;
    text-align: center;
    line-height: 3em;
  }
  .left span{
    flex: 1;
    border-left: 1px solid silver;
    background-color: rgb(182, 214, 175);
  }
  .cart,.buy{
    width: 40%;
    height: 49px;
    margin-left: 40%;
    background-color: rgb(231, 224, 126);
    text-align: center;
    line-height: 3em;
    position: relative;
  }
  .buy{
    position: absolute;
    margin-left: 80%;
    width: 20%;
    bottom: 0;
    background-color: rgb(228, 108, 108);
  }
</style>