<template>
  <div>
    <film-swiper>
      <div class="swiper-slide" v-for="(data,index) in imgList" :key="index">
        <div :style="{backgroundImage:'url('+data+')'}" style="height: 200px;background-size: cover"></div>
      </div>
    </film-swiper>
    <film-header style="position: sticky;top: 0;background: white;z-index: 99"></film-header>
    <router-view></router-view>
  </div>
</template>

<script>
import filmHeader from './film/FilmHeader'
import filmSwiper from './film/FileSwiper'

export default {
  data () {
    return {
      imgList: ['https://pic.maizuo.com/usr/movie/b451d49006e099c08c5e59db27fdb325.jpg?x-oss-process=image/quality,Q_70', 'https://pic.maizuo.com/usr/movie/6c47eb5dc41e76cb7eaa8b48198cb486.jpg?x-oss-process=image/quality,Q_70', 'https://pic.maizuo.com/usr/movie/9ddd3d8e33947545443beb88781d8480.jpg?x-oss-process=image/quality,Q_70']
    }
  },
  components: {
    filmHeader,
    filmSwiper
  }
}
</script>

<style lang="scss" scoped>

</style>
