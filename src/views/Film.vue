<template>
  <div>
    <div>轮播图</div>
    <film-header></film-header>
    <router-view></router-view>
  </div>
</template>

<script>
import filmHeader from './film/FilmHeader'
export default {
  components: {
    filmHeader
  }
}
</script>

<style scoped>

</style>
