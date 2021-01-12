<template>
  <div>
    <van-index-bar :index-list="computedCityList" @select="handleSelect">
      <div v-for="data in cityList" :key="data.type">
        <van-index-anchor :index="data.type"/>
        <van-cell v-for="(item,index) in data.list" :title="item.name" :key="index" @click="handleChangePage(item.name,item.cityId)"/>
      </div>
    </van-index-bar>
  </div>
</template>

<script>
import { IndexBar, IndexAnchor, Toast } from 'vant'
import Vue from 'vue'
import http from '../util/http'

Vue.use(IndexAnchor).use(IndexBar)
export default {
  data () {
    return {
      cityList: []
    }
  },
  mounted () {
    http({
      url: '/gateway?k=7095480',
      headers: {
        'X-Host': 'mall.film-ticket.city.list'
      }
    }).then(res => {
      this.cityList = this.handleCityData(res.data.data.cities)
    })
  },
  methods: {
    handleCityData: function (cities) {
      const letterArr = []
      const newCities = []
      for (let code = 65; code < 95; code++) {
        letterArr.push(String.fromCharCode(code))
      }
      letterArr.forEach((letter) => {
        const list = cities.filter(item => item.pinyin.substring(0, 1).toUpperCase() === letter)
        if (list.length > 0) {
          newCities.push({
            type: letter,
            list
          })
        }
      })
      return newCities
    },
    handleSelect (index) {
      Toast(index)
    },
    handleChangePage (name, cityId) {
      this.$store.commit('changeCityName', name)
      this.$store.commit('changeCityId', cityId)
      this.$router.back()
    }
  },
  computed: {
    computedCityList () {
      return this.cityList.map(item => item.type)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
