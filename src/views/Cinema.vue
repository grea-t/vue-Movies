<template>
  <div class="cinema" :style="{height:height}">
    <ul>
      <li v-for="data in cinemaList" :key="data.cinemaId">
        <div>{{data.name}}</div>
        <div>{{data.address}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import http from '../util/http'
import BetterScroll from 'better-scroll'

export default {
  data () {
    return {
      cinemaList: [],
      height: 0
    }
  },
  mounted () {
    this.height = document.documentElement.clientHeight - 50 + 'px'
    http({
      url: '/gateway?cityId=110100&ticketFlag=1&k=6468565',
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
  .cinema{
    overflow: hidden;
    position: relative; // 修正滚动条位置
  }
  li {
    padding: 15px;
  }
</style>
