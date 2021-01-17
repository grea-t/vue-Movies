<template>
  <div class="film" v-if="filmInfo">
    <div class="goBack" @click="handleBack"><i class="iconfont icon-left"></i></div>
    <detail-header v-top :title="filmInfo.name"></detail-header>
    <div :style="{backgroundImage:'url('+filmInfo.poster+')'}"
         style="background-position: center;height: 400px;background-size: cover;"></div>
    <div class="film-detail">
      <div class="file-name">
        <span class="name">{{filmInfo.name}}</span>
        <span class="item">{{filmInfo.filmType.name}}</span>
        <span class="grade">{{filmInfo.grade}}<span style="font-size: 10px">分</span></span>
      </div>
      <div class="grey-text">{{filmInfo.category}}</div>
      <div class="grey-text">{{filmInfo.premiereAt | dateFilter}}上映</div>
      <div class="grey-text">{{filmInfo.nation}} | {{filmInfo.runtime}}分钟</div>
      <div :class="isShow?'':'hidden'" class="grey-text">{{filmInfo.synopsis}}</div>
      <div style="text-align: center" class="iconfont" :class="isShow?'icon-up':'icon-down'"
           @click="isShow=!isShow"></div>
    </div>
    <div class="actors-title">
      <span>演职人员</span>
    </div>
    <detail-swiper :perslide="4" swiperclass="swiper-actors" class="Swiper">
      <div class="swiper-slide" v-for="(data,index) in filmInfo.actors" :key="index">
        <img :src="data.avatarAddress" alt="演员照"/>
        <div style="text-align:center;">
          <div class="actors-name">{{data.name}}</div>
          <div class="actors-role">{{data.role}}</div>
        </div>
      </div>
    </detail-swiper>
    <div class="actors-title">
      <span>剧照</span>
    </div>
    <detail-swiper :perslide="2" swiperclass="swiper-photos" class="Swiper">
      <div class="swiper-slide" v-for="(data,index) in filmInfo.photos" :key="index">
        <div :style="{backgroundImage:'url('+data+')'}"
             style="background-position: center;height: 100px;background-size: cover;"
             @click="handlePreview(index)"></div>
      </div>
    </detail-swiper>
    <div class="buy-ticket">选座购票</div>
  </div>
</template>

<script>
import http from '../util/http'
import Vue from 'vue'
import moment from 'moment'
import detailSwiper from './detail/DetailSwiper'
import detailHeader from './detail/DetailHeader'
import { ImagePreview } from 'vant'
import { mapMutations } from 'vuex'

Vue.filter('dateFilter', (date) => {
  return moment(date * 1000).format('YYYY-MM-DD')
})
Vue.directive('top', {
  inserted (el) {
    el.style.display = 'none'
    window.onscroll = () => {
      if ((document.body.scrollTop || document.documentElement.scrollTop) > 50) {
        el.style.display = 'block'
      } else {
        el.style.display = 'none'
      }
    }
  },
  unbind () {
    window.onscroll = null
  }
})
export default {
  data () {
    return {
      filmInfo: null,
      isShow: false
    }
  },
  components: {
    detailSwiper,
    detailHeader
  },
  methods: {
    ...mapMutations('TabbarModule', ['show', 'hide']),
    handlePreview (index) {
      ImagePreview({
        images: this.filmInfo.photos,
        startPosition: index,
        loop: false,
        closeable: true
      })
    },
    handleBack () {
      this.$router.back()
    }
  },
  mounted () {
    this.hide()
    http({
      url: `/gateway?filmId=${this.$route.params.myid}&k=8333910`,
      headers: {
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then(res => {
      this.filmInfo = res.data.data.film
    })
  },
  beforeDestroy () {
    this.show()
  }
}
</script>

<style lang="scss" scoped>
  .film {
    background-color: #f4f4f4;
    .goBack{
      background: rgba(255,255,255,0.6);
      width: 30px;
      text-align: center;
      justify-content: center;
      height: 30px;
      line-height: 30px;
      position: fixed;
      top: 5px;
      left: 5px;
      border-radius: 50%;
      z-index: 100;
    }
    .film-detail {
      background-color: #fff;
      padding: 12px 15px 15px;

      .file-name {
        font-size: 18px;

        .name {
          color: #191a1b;
          height: 24px;
          line-height: 24px;
          margin-right: 7px;
        }

        .item {
          color: #fff;
          background-color: lightblue;
          height: 18px;
          line-height: 18px;
          padding: 0 2px;
          border-radius: 2px;
          display: inline-block;
        }
        .grade{
          color: orange;
          float: right;
        }
      }
    }

    .grey-text {
      font-size: 13px;
      color: #797d82;
      margin-top: 4px;
    }

    .hidden {
      height: 38px !important;
      overflow: hidden;
    }
    .Swiper{
      background-color: #fff;
      padding-bottom: 5px;
      padding-left: 10px;
    }
    .actors-title {
      background-color: #fff;
      margin-top: 10px;
      width: 100%;
      padding: 15px;

      span {
        font-size: 16px;
        text-align: left;
        color: #191a1b;
      }
    }

    .actors-name {
      margin-top: 5px;
      margin-bottom: 5px;
      font-size: 12px;
      color: #191a1b;
      width: 93.5px;
      height: 12px;
      line-height: 12px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      align-items: center;
    }

    .actors-role {
      font-size: 10px;
      color: #797d82;
    }
    .buy-ticket{
      width: 100%;
      text-align: center;
      justify-items: center;
      height: 50px;
      line-height: 50px;
      background-color: red;
      color: white;
      margin-top: 10px;
      margin-bottom: -50px;
    }
  }
</style>
