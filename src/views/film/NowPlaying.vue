<template>
  <div>
    <ul>
      <li v-for="data in dataList" :key="data.filmId" @click="handleClick(data.filmId)">
        <img :src="data.poster" alt="poster">
        <h3>{{data.name}}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      dataList: []
    }
  },
  mounted () {
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=2452495',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1610202739449017355960321","bc":"440300"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      this.dataList = res.data.data.films
    })
  },
  methods: {
    handleClick () {
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
