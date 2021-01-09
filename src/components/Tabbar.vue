<template>
  <div>
    <ul>
      <router-link to="/film" tag="li" active-class="clickActive">电影</router-link>
      <router-link to="/cinema" tag="li" active-class="clickActive">影院</router-link>
      <router-link to="/center" tag="li" active-class="clickActive">我的</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Tabbar'
}
</script>

<style lang="scss" scoped>
  ul {
    display: flex;

    li {
      flex: 1;
    }
  }
  .clickActive{
    color: red;
  }
</style>
