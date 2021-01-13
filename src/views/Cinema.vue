<template>
  <div>
    <van-nav-bar title="影院" @click-left="onClickLeft" @click-right="onClickRight">
      <template #left>
        {{cityName}}
        <van-icon name="arrow-down" size="10" color="red"/>
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
import { NavBar, Icon } from 'vant'
import Vue from 'vue'
import BetterScroll from 'better-scroll'
import { mapActions, mapMutations, mapState } from 'vuex'

Vue.use(NavBar).use(Icon)
export default {
  data () {
    return {
      height: 0
    }
  },
  methods: {
    ...mapActions('CinemaModule', ['getCinemaList']),
    ...mapMutations('CinemaModule', ['clearCinemaList']),
    onClickLeft () {
      // 清空cinemaList缓存数据
      this.clearCinemaList()

      this.$router.push('/city')
    },
    onClickRight () {
      this.$router.push('/cinema/search')
    }
  },
  computed: {
    ...mapState('CinemaModule', ['cinemaList']),
    ...mapState('CityModule', ['cityId', 'cityName'])
  },
  mounted () {
    this.height = document.documentElement.clientHeight - 96 + 'px'
    if (this.cinemaList.length === 0) {
      // vuex 异步流程
      this.getCinemaList(this.cityId).then(res => {
        this.$nextTick(() => {
          new BetterScroll('.cinema', {
            scrollbar: {
              fade: true
            }
          })
        })
      })
    } else {
      this.$nextTick(() => {
        new BetterScroll('.cinema', {
          scrollbar: {
            fade: true
          }
        })
      })
    }
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
