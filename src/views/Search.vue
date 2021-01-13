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

Vue.use(Search).use(List)
export default {
  data () {
    return {
      value: ''
    }
  },
  computed: {
    computedCinemaList () {
      if (this.value === '') return []
      return this.$store.state.cinemaList.filter(item => item.name.toUpperCase().includes(this.value.toUpperCase()) || item.address.toUpperCase().includes(this.value.toUpperCase()))
    }
  },
  methods: {
    handleCancel () {
      this.$router.replace('/cinema')
    }
  },
  mounted () {
    if (this.$store.state.cinemaList.length === 0) {
      // vuex 异步流程
      this.$store.dispatch('getCinemaList', this.$store.state.cityId)
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
