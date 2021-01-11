<template>
  <div>
    {{title}}
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style lang="scss" scoped>
  div{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 44px;
    line-height: 44px;
    text-align: center;
    background-color: white;
    font-size: 17px;
  }
</style>
