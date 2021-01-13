<template>
  <div>
    <van-search v-model="value" show-action placeholder="请输入搜索关键词" shape="round"  @cancel="handleCancel()"/>
    <van-list>
      <van-cell v-for="data in computedCinemaList" :key="data.cinemaId">
        <div>{{data.name}}</div>
        <div>{{data.address}}</div>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
import { Search, List } from 'vant'
import Vue from 'vue'
import { mapActions, mapState } from 'vuex'

Vue.use(Search).use(List)
export default {
  data () {
    return {
      value: ''
    }
  },
  computed: {
    ...mapState('CinemaModule', ['cinemaList']),
    ...mapState('CityModule', ['cityId']),
    computedCinemaList () {
      if (this.value === '') return []
      return this.cinemaList.filter(item => item.name.toUpperCase().includes(this.value.toUpperCase()) || item.address.toUpperCase().includes(this.value.toUpperCase()))
    }
  },
  methods: {
    ...mapActions('CinemaModule', ['getCinemaList']),
    handleCancel () {
      this.$router.replace('/cinema')
    }
  },
  mounted () {
    if (this.cinemaList.length === 0) {
      // vuex 异步流程
      this.getCinemaList(this.cityId)
    } else {
    }
  }
}
</script>

<style lang="scss" scoped>
  .cinema {
    overflow: hidden;
    position: relative; // 修正滚动条位置
  }
</style>
