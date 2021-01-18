<template>
  <div class="login">
    <div class="login-item">
      <img src="../../public/movie.png" alt="">
    </div>
    <van-form>
      <van-field
        label="手机号"
      />
      <van-field
        label="验证码"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import Vue from 'vue'
import { Form, Field, Button } from 'vant'

Vue.use(Form).use(Field).use(Button)
export default {
}
</script>

<style lang="scss" scoped>
  .login {
    background-color: #f4f4f4;
    width: 100%;

    .login-item {
      background-color: #fff;
      width: 100%;
      text-align: center;

      img {
        width: 60px;
        margin: 79px auto 40px;
      }
    }
    button{
      background-color: red;
      border: 1px solid red;
    }
  }
</style>
