<template>
  <div>
    <van-nav-bar title="影院" @click-left="onClickLeft">
      <template #left>
        {{$store.state.cityName}}
        <van-icon name="arrow-down" size="10" color="black"/>
      </template>
      <template #right>
        <van-icon name="search" size="25" color="red"/>
      </template>
    </van-nav-bar>
    <div class="cinema" :style="{height:height}">
      <ul>
        <li v-for="data in cinemaList" :key="data.cinemaId">
          <div>{{data.name}}</div>
          <div>{{data.address}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import http from '../util/http'
import BetterScroll from 'better-scroll'
import { NavBar, Icon } from 'vant'
import Vue from 'vue'

Vue.use(NavBar).use(Icon)
export default {
  data () {
    return {
      cinemaList: [],
      height: 0
    }
  },
  methods: {
    onClickLeft () {
      this.$router.push('/city')
    }
  },
  mounted () {
    this.height = document.documentElement.clientHeight - 96 + 'px'
    http({
      url: `/gateway?cityId=${this.$store.state.cityId}&ticketFlag=1&k=6468565`,
      headers: {
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res => {
      this.cinemaList = res.data.data.cinemas
      this.$nextTick(() => {
        new BetterScroll('.cinema', {
          scrollbar: {
            fade: true
          }
        })
      })
    })
  }
}
</script>

<style lang="scss" scoped>
  .cinema {
    overflow: hidden;
    position: relative; // 修正滚动条位置
  }

  li {
    padding: 15px;
  }
</style>
