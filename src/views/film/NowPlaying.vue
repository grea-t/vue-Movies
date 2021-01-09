<template>
  <div>
    <ul>
      <li v-for="data in dataList" :key="data.id" @click="handleClick(data.id)">{{data.title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dataList: [{
        id: 11,
        title: '姜子牙'
      }, {
        id: 22,
        title: '花木兰'
      }, {
        id: 33,
        title: '夺冠'
      }]
    }
  },
  methods: {
    handleClick () {

    }
  }
}
</script>

<style scoped>

</style>
