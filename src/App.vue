<template>
  <div>
    <tabbar v-show="isTabbarShow"></tabbar>
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>
<script>
import tabbar from './components/Tabbar'
import { mapState } from 'vuex'

export default {
  data () {
    return {}
  },
  components: {
    tabbar
  },
  computed: {
    ...mapState('TabbarModule', ['isTabbarShow'])
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

  html, body {
    height: 100%;
    background-color: #f4f4f4;
  }

  section {
    padding-bottom: 50px;
  }
</style>
