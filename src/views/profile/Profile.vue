<template>
  <div>
    <div class="top">
      <p>我的主页</p>
    </div>
    <div class="logo">
      <img src="" alt="">
      <div class="info">
        <h5>人家只是个简单的个</h5>
        <h5>人页面，你别乱搞啦</h5>
      </div>
    </div>
    <div class="content">
      <ul>
        <li><a href="">卡包</a><span>></span></li>
        <li><a href="">发票助手</a><span>></span></li>
        <li><a href="">经营公示</a><span>></span></li>
        <li><a href="">隐私政策</a><span>></span></li>
        <li><a href="">服务协议</a><span>></span></li>
        <li><a href="">客服</a><span>></span></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name:"Profile",
  data(){
    return{
      name:'sasa',
      password:'telephone'
    }
  }
}
</script>
<style scoped>
  .top{
    width: 100%;
    height: 50px;
    background-color:rgb(206, 127, 127);
  }
  .top p{
    display: block;
    padding-top: 15px;
    color: white;
    font-family: 宋体;
    font-size: 20px;
  }
  .logo{
    margin-top: 20px;
    margin-left: 50px;
    width: 100px;
    height: 100px;
    border:1px solid silver;
    border-radius: 50%;
  }
  .logo img{
    margin-top: 0;
  }
  .info{
    position: absolute;
    right: 50px;
    top: 85px;
  }
  ul{
    width: 90%;
    margin-left: 5%;
    margin-top: 20px;
    border: 1px solid rgb(235, 235, 235);
    box-shadow: 1px 1px 1px silver;
    border-radius: 15px;
  }
  ul li{
    margin-left: 10%;
    width: 80%;
    height: 50px;
    border-bottom: 2px solid silver;
    position: relative;
  }
  ul li:last-child{
    border-bottom: none;
  }
  ul li a{
    display: block;
    text-align: left;
    color: black;
    font-size: 15px;
    font-family:宋体;
    padding-top: 25px;
  }
  span{
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
  }
</style>