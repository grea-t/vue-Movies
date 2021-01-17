<template>
  <div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" :immediate-check="false">
      <van-cell v-for="data in dataList" :key="data.filmId" @click="handleClick(data.filmId)">
        <img :src="data.poster" alt="poster">
        <h3>{{data.name}}<span class="item">{{data.filmType.name}}</span></h3>
        <p>观众评分：<span class="score">{{data.grade}}</span></p>
        <p style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis">
          主演：{{data.actors | actorFilter}}
        </p>
        <p>{{data.nation}} | {{data.runtime}} 分钟</p>
        <div class="buy-ticket">购票</div>
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
      padding-right: 10px;
    }
    h3 .item{
      color: #fff;
      background-color: lightblue;
      height: 15px;
      line-height: 15px;
      padding: 0 2px;
      border-radius: 2px;
      margin-left: 5px;
    }
    p{
      color: #797d82;
      .score{
      color: orange;
      }
    }
    .buy-ticket{
      float: right;
      border: 1px solid red;
      line-height: 25px;
      height: 25px;
      width: 50px;
      font-size: 13px;
      color: red;
      text-align: center;
      border-radius: 5px;
      margin-top: 10px;
      margin-right: 10px;
    }
  }
  .van-cell::before {
    content: " ";
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 1px;
    border-bottom: 1px solid #d2d6dc;
    color: #ededed;
    transform-origin: 0 100%;
  }
</style>
