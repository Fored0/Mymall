<template>
  <div>
    <swiper>
      <swiper-item v-for="item in banners" :key="item.title">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imageLoad">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>

import {Swiper,SwiperItem} from 'components/common/swiper/index'

export default {
  name:'HomeSwiper',
  props:{
    banners:Array,
    default(){
      return []
    }
  },
  components:{
    Swiper,
    SwiperItem
  },
  methods:{
    imageLoad(){
      this.$emit('swiperimageLoad')
    }
  }
}
</script>

<style>

</style>