<template>
  <div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" :immediate-check="false">
      <van-cell v-for="data in dataList" :key="data.filmId" @click="handleClick(data.filmId)">
        <img :src="data.poster" alt="poster">
        <h3>{{data.name}}</h3>
        <p style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis">
          主演：{{data.actors | actorFilter}}
        </p>
        <p>{{data.nation}} | {{data.runtime}} 分钟</p>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
import http from '../../util/http'
import Vue from 'vue'
import { List, Cell } from 'vant'
import { mapState } from 'vuex'

Vue.use(List).use(Cell)
Vue.filter('actorFilter', (actors) => {
  if (actors === undefined) return '暂无主演'
  return actors.map(item => item.name).join(' ')
})
export default {
  data () {
    return {
      dataList: [],
      loading: false,
      finished: false,
      current: 1,
      total: 0
    }
  },
  mounted () {
    http({
      url: `/gateway?cityId=${this.cityId}&pageNum=1&pageSize=10&type=1&k=207599`,
      headers: {
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      this.dataList = [...this.dataList, ...res.data.data.films]
      this.total = res.data.data.total
    })
  },
  computed: {
    ...mapState('CityModule', ['cityId'])
  },
  methods: {
    onLoad () {
      if (this.dataList.length === this.total && this.dataList.length !== 0) {
        this.finished = true
        return
      }
      this.current++
      http({
        url: `/gateway?cityId=${this.cityId}&pageNum=${this.current}&pageSize=10&type=1&k=207599`,
        headers: {
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        this.dataList = [...this.dataList, ...res.data.data.films]
        this.loading = false
      })
    },
    handleClick (id) {
      this.$router.push(`/detail/${id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
  .van-cell {
    overflow: hidden;
    padding: 10px;

    img {
      float: left;
      width: 100px;
    }
  }
</style>
