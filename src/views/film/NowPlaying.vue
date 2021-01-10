<template>
  <div>
    <ul>
      <li v-for="data in dataList" :key="data.filmId" @click="handleClick(data.filmId)">
        <img :src="data.poster" alt="poster">
        <h3>{{data.name}}</h3>
        <p style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis">
          主演：{{data.actors | actorFilter}}
        </p>
        <p>{{data.nation}} | {{data.runtime}} 分钟</p>
      </li>
    </ul>
  </div>
</template>

<script>
import http from '../../util/http'
import Vue from 'vue'
Vue.filter('actorFilter', (actors) => {
  if (actors === undefined) return '暂无主演'
  return actors.map(item => item.name).join(' ')
})
export default {
  data () {
    return {
      dataList: []
    }
  },
  mounted () {
    http({
      url: '/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=207599',
      headers: {
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      this.dataList = res.data.data.films
    })
  },
  methods: {
    handleClick (id) {
      this.$router.push(`/detail/${id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
  li {
    overflow: hidden;
    padding: 10px;

    img {
      float: left;
      width: 100px;
    }
  }
</style>
