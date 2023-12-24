<template>
  <ul>
    <router-link to="/film/nowPlaying" active-class="active">正在热播</router-link>
    <router-link to="/film/comingSoon" active-class="active">即将上映</router-link>
  </ul>
</template>

<script>
export default {
  name: 'FilmHeader'
}
</script>

<style lang="scss" scoped>
  ul {
    display: flex;
    height: 40px;
    line-height: 40px;
    text-align: center;
    a{
      flex: 1;
    }
  }
  .active{
    color: red;
    border-bottom: 3px solid red;
  }
</style>
