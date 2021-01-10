<template>
  <div>
    <tabbar></tabbar>
    <router-view></router-view>
  </div>
</template>
<script>
import tabbar from './components/Tabbar'

export default {
  data () {
    return {}
  },
  components: {
    tabbar
  }
}
</script>
<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul, ol {
    list-style: none;
  }
</style>
