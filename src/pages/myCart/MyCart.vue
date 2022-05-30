<template>
  <div class="cart">
    <div class="content">
      <div id="drop-area" :class="dropActive ? 'drop-active' : ''">
	</div>
    </div>
    <Footer/>
  </div>
</template>

<script>

import Footer from '../../components/FooterShow.vue'

export default {
  components:{
  Footer,
}
};
</script>

<style lang='less' scoped>
.cart {
  display: flex;
  flex-flow: column;
  height: 100%;
  .content {
    flex: 1;
    overflow-y: auto;
  }
}
</style>