<template>
  <div class="cartDetails">
    <!-- 商品的列表 -->
    <div class="content">
      <van-checkbox-group v-model="result" @change="groupChange">
        <div v-for="(i, index) in store.state.cartList" :key="index">
          <FoodAdd :item="i" :showCheckbox="true" :onChange="onChange" />
        </div>
      </van-checkbox-group>
    </div>
    <!-- 結算 -->
    <van-submit-bar
      :price="allPrice * 100"
      button-text="結算"
      @submit="onSubmit"
      class="submit-all"
      button-color="#ffc400"
      v-if="isDelete"
    >
      <van-checkbox v-model="checked" checked-color="#ffc400" @click="choseAll">
        全選
      </van-checkbox>
    </van-submit-bar>

    <!-- 刪除 -->
    <div class="buy" v-else>
      <div class="left">
        <van-checkbox
          v-model="checked"
          checked-color="#ffc400"
          @click="choseAll"
        >
          全選
        </van-checkbox>
      </div>
      <div class="delete" @click="deleteClick">刪除</div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive, toRefs } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import FoodAdd from "../../../components/FoodAdd.vue";
import { Toast } from "vant";
import emitter from "../../../common/js/evenbus.js";

export default {
  components: { FoodAdd },
  props: ["changeShow"],
  setup(props) {
    const store = useStore();
    const router = useRouter();
    let data = reactive({
      result: [],
      checked: true,
      isDelete: true,
    });

    // 商品默認選中的初始化
    const init = () => {
      data.result = store.state.cartList.map((item) => item.id);
    };

    onMounted(() => {
      init();
    });

    // 商品的個數同步
    const onChange = (value, detail) => {
      store.state.cartList.map((item) => {
        if (item.id === detail.name) {
          item.num = value;
        }
      });
    };

    // 全選或者取消全選
    const choseAll = () => {
      if (data.result.length !== store.state.cartList.length) {
        init();
      } else {
        data.result = [];
      }
    };

    // 更新數據
    const updata = (type) => {
      return store.state.cartList.filter((item) => {
        return type === 2
          ? data.result.includes(item.id)
          : !data.result.includes(item.id);
      });
    };

    // 結算按鈕
    const onSubmit = () => {
      if (data.result.length !== 0) {
        store.commit("PAY", updata(2));
        router.push("./createorder");
      } else {
        Toast.fail("請選擇要結算的商品");
      }
    };

    // 每個覆選框的點擊事件觸發
    const groupChange = (result) => {
      if (result.length === store.state.cartList.length) {
        data.checked = true;
      } else {
        data.checked = false;
      }
      data.result = result;
    };

    // 總價
    const allPrice = computed(() => {
      let countList = updata(2);
      let sum = 0;
      countList.forEach((item) => {
        sum += item.num * item.price;
      });
      return sum;
    });

    // 監聽編輯的點擊
    emitter.on("edit", () => {
      data.isDelete = !data.isDelete;
    });

    // 刪除按鈕
    const deleteClick = () => {
      if (data.result.length) {
        // 更新刪除後的購物車的數據
        store.commit("DELETE", updata(1));

        // 刪除後的選中
        data.result = [];

        // 購物車無數據時展示
        if (store.state.cartList.length === 0) {
          store.commit("EDIT", "delete");
          props.changeShow();
        }
      } else {
        Toast.fail("請選擇要刪除的商品");
      }
    };
    return {
      ...toRefs(data),
      store,
      onChange,
      onSubmit,
      choseAll,
      groupChange,
      allPrice,
      deleteClick,
    };
  },
};
</script>

<style lang='less' scoped>
.cartDetails {
  font-size: 14px;
  flex: 1;
  position: relative;
  overflow-y: auto;
  padding: 20px 20px 55px;
  .submit-all {
    position: fixed;
    bottom: 48px;
  }

  .buy {
    position: fixed;
    bottom: 48px;
    right: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: #fff;
    border-radius: 10px;
    height: 50px;
    align-items: center;
    padding: 0 16px;
    box-sizing: border-box;
    .left {
      display: flex;
      align-items: center;
    }
    .delete {
      color: #fff;
      background-color: #ffc400;
      border-radius: 20px;
      font-size: 14px;
      font-weight: 600;
      width: 110px;
      height: 40px;
      text-align: center;
      line-height: 40px;
    }
  }

  .content {
    padding: 10px;
    background-color: #fff;
    border-radius: 10px;
  }
}
</style>