<template>
  <div class="center">
    <div class="avatar">
      <i class="iconfont icon-user" @click="handleClick"></i>
      <div @click="handleClick">立即登录</div>
    </div>
    <div class="orders" @click="handleClick">
      <i class="iconfont icon-orders" ></i>
      <span>订单</span>
    </div>
    <div class="setting" @click="handleClick">
      <i class="iconfont icon-setting"></i>
      <span>设置</span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick () {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
  .center{
    background-color: #f4f4f4;
    .avatar{
      width: 100%;
      height: 140px;
      background-color: red;
      color: white;
      line-height: 140px;
      padding-left: 30px;
      text-align: center;
      display: flex;
      i{
        width: 67px;
        height: 67px;
        font-size: 67px;
      }
      div{
        padding-left: 20px;
      }
    }
    .orders{
      margin-top: 10px;
      background-color: #fff;
      height: 50px;
      display: flex;
      i{
        color: orange;
        font-size: 30px;
        padding-top: 10px;
        padding-left: 10px;
      }
      span{
        line-height: 50px;
        padding-left: 10px;
      }
    }
    .setting{
      margin-top: 10px;
      background-color: #fff;
      height: 50px;
      display: flex;
      i{
        color: lightgreen;
        font-size: 26px;
        padding-top: 12px;
        padding-left: 10px;
      }
      span{
        line-height: 50px;
        padding-left: 10px;
      }
    }
  }
</style>
