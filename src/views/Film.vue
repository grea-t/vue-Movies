<template>
  <div>
    <film-swiper>
      <div class="swiper-slide" v-for="(data,index) in imgList" :key="index">
        <div :style="{backgroundImage:'url('+data+')'}" style="height: 200px;background-size: cover"></div>
      </div>
    </film-swiper>
    <film-header style="position: sticky;top: 0;background: white;"></film-header>
    <router-view></router-view>
  </div>
</template>

<script>
import filmHeader from './film/FilmHeader'
import filmSwiper from './film/FileSwiper'

export default {
  data () {
    return {
      imgList: ['https://pic.maizuo.com/usr/movie/423e9dece16c3c98d2f4314dcd40b701.jpg?x-oss-process=image/quality,Q_70', 'https://pic.maizuo.com/usr/movie/4ca39e8bec04aadc337bc09ee25ed838.jpg?x-oss-process=image/quality,Q_70', 'https://pic.maizuo.com/usr/movie/4a0e3cee8005428710b96834289f3747.jpg?x-oss-process=image/quality,Q_70']
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
