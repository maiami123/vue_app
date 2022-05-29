<template>
<div class="hello">
  <div>test</div>
  <van-button type='primary'>123</van-button>

<svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-iconfonttubiaozhizuo-2"></use>
</svg>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.hello{
 font-size: 20px;
 div{
   color: red;
 }
}
</style>
