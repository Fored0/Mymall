<template>
  <div class="top">
    <span>用户评论</span>
    <span class="more" @click="commentMore">更多</span>
    <br />
    <hr />
    <div class="user">
      <!-- <img :src="commentInfo.user.avatar" alt="" /> -->
      <img src="~assets/img/common/top.png" alt="" />
      <!-- <span>{{ commentInfo.user.uname }}</span> -->
      <span>我今天更帅啦</span>
    </div>
    <p class="content">{{ commentInfo.content }}</p>
    <p>{{ date }}</p>
  </div>
</template>

<script>
import { fmtDate } from "common/formatdate.js";

export default {
  name: "DeatailCommentInfo",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      date: "2018-03-10 15:30:26",
    };
  },
  // mounted() {
  //   this.date = fmtDate(commentInfo.created * 1000, "yyyy-MM-dd hh:mm:ss");
  // },
  methods: {
    commentMore() {
      this.$router.push("/commentmore");
    },
  },
};
</script>

<style scoped>
.top {
  margin-top: 5px;
  position: relative;
  line-height: 2em;
}
.more {
  position: absolute;
  top: 0;
  right: 20px;
  color: blue;
}
.user img {
  width: 50px;
  border-radius: 50%;
  margin-left: 20px;
  margin-top: 20px;
}
.user span {
  display: block;
  margin-left: 80px;
  margin-top: -50px;
  font-weight: bold;
}
.content {
  display: block;
  line-height: 1.5em;
  margin-top: 23px;
  font-size: 13px;
  text-indent: 2em;
}
</style>