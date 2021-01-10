<template>
  <nav>
    <ul>
      <router-link to="/film" tag="li" active-class="clickActive">
        <i class="iconfont icon-film"></i>
        <span>电影</span>
      </router-link>
      <router-link to="/cinema" tag="li" active-class="clickActive">
        <i class="iconfont icon-cinema"></i>
        <span>影院</span>
      </router-link>
      <router-link to="/center" tag="li" active-class="clickActive">
        <i class="iconfont icon-center"></i>
        <span>我的</span>
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Tabbar'
}
</script>

<style lang="scss" scoped>
  nav {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    line-height: 25px;
    text-align: center;
    background: white;

    ul {
      display: flex;

      li {
        flex: 1;
        display: flex;
        flex-direction: column;

        i {
          font-size: 20px;
        }

        span {
          font-size: 13px;
        }
      }
    }
  }

  .clickActive {
    color: red;
  }
</style>
