<template>
  <div class="cartList">
    <div v-show="cartGoods.length === 0" class="tohome" @click="toHome">
      还没有宝贝，赶紧去商城看看吧
    </div>
    <div v-for="(item, index) in cartGoods" :key="index" class="info" @click="toDetail(index)">
      <div>
        <input type="checkbox" class="select">
      </div>
      <div>
        <div class="img">
          <img :src="item.image" alt="" />
        </div>
        <div class="title">{{ item.title }}</div>
        <div class="desc">{{ item.desc }}</div>
        <div class="price">￥{{ item.price }}</div>
        <div class="count">X{{ item.count }}</div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "cartList",
  data() {
    return {
      cartGoods: [],
    };
  },
  mounted() {
    return (this.cartGoods = this.$store.state.cartList);
  },
  methods:{
    toDetail(index){
      // console.log(index);
      // console.log(this.$store.state.cartList[index].iid);
      this.$router.push('/detail'+this.$store.state.cartList[index].iid)
    },
    toHome() {
      this.$router.push("/home");
    }
  }
};
</script >

<style scoped>
.tohome{
  margin-top: 40%;
  text-align: center;
  font-size: 15px;
  font-family: serif;
  color: brown;
}
.select{
  position: fixed;
  margin-left: -7%;
  margin-top: 20%;
}
.info {
  width: 90%;
  margin-left: 8%;
  height: 150px;
  border: 1px solid silver;
  border-radius: 10px;
  margin-top: 5px;
  position: relative;
  overflow: hidden;
}
.img {
  position: absolute;
}
.img img {
  margin-top: 4px;
  height: 140px;
  margin-left: 2%;
  border-radius: 10px;
}
.title {
  position: absolute;
  font-size: 11px;
  width: 200px;
  height: 28px;
  left: 37%;
  top: 10%;
  text-indent: 2em;
  overflow: hidden;
  color: rgb(255, 131, 131);
}
.desc {
  position: absolute;
  font-size: 11px;
  margin-top: 5px;
  height: 40px;
  overflow: hidden;
  left: 37%;
  top: 30%;
  text-indent: 2em;
  color: rgb(103, 128, 103);
}
.price {
  position: absolute;
  font-size: 15px;
  bottom: 10px;
  left: 40%;
  color: red;
}
.count {
  position: absolute;
  right: 10%;
  font-size: 15px;
  bottom: 10px;
  color: rgb(202, 166, 141);
}
</style>