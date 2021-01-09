<template>
  <div>
    <tabbar></tabbar>
    <router-view></router-view>
  </div>
</template>
<script>
import tabbar from './components/Tabbar'
import axios from 'axios'
export default {
  data () {
    return {}
  },
  components: {
    tabbar
  },
  mounted () {
    axios.get('/ajax/movieOnInfoList?token=&optimus_uuid=6BC3EB00528211EB86248D005FD5091F693AF1C9F151462B9F2462DBC908A23A&optimus_risk_level=71&optimus_code=10').then(res => {
      console.log(res.data)
    })
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
