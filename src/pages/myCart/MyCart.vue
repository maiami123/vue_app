<template>
  <div class="cart">
    <Header title="購物車" :edit='true'/>
    <CartDatils v-if="isShow" :changeShow="changeShow"/>
    <Blank v-else />
    <Footer />
  </div>
</template>

<script>
import Blank from "@/components/Blank.vue";
import Footer from "../../components/Footer.vue";
import Header from "@/components/Header.vue";
import CartDatils from "./components/CartDatils.vue";
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
import { onMounted } from "@vue/runtime-core";
export default {
  components: {
    Footer,
    Blank,
    Header,
    CartDatils,
  },
  setup() {
    const store = useStore();
    let isShow = ref(true);

    // 初始化樣式展示與否
    const init = () => {
      if (store.state.cartList.length === 0) {
        isShow.value = false;
      }
    };

    const changeShow = () => {
      isShow.value = false;
    };
    onMounted(() => {
      init();
    });

    return {
      isShow,
      changeShow,
    };
  },
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