<template>
  <Header :title="address" />
  <van-address-edit
    :area-list="areaList"
    :address-info="addressInfo"
    show-delete
    show-set-default
    :area-columns-placeholder="['請選擇', '請選擇', '請選擇']"
    @save="onSave"
    @delete="onDelete"
  />
</template>

<script>
import { reactive, toRefs } from "@vue/reactivity";
import Header from "../../components/Header.vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import { computed, onMounted } from "@vue/runtime-core";
import { Toast } from "vant";

export default {
  components: { Header },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const store = useStore();
    let data = reactive({
      areaList: {
        province_list: {
          110000: "大阪府",
          120000: "京都府",
        },
        city_list: {
          110100: "大阪市",
          110200: "吹田市",
          120100: "京都市",
          120200: "舞鶴市",
        },
        county_list: {
          110101: "都島區",
          110102: "福島區",
          120102: "此花區",
          130102: "西區",
        },
      },
      
      addressInfo: {},
    });
    const address = computed(() => {
      return route.query.type === "add" ? "地址新增" : "地址編輯";
    });
    //數據初始化
    const init = () => {
      store.state.userAddress.forEach((item) => {
        if (item.id === Number(route.query.id)) {
          data.addressInfo = item;
        }
      });
    };
    onMounted(() => {
      init();
    });

    //保存的按鈕
    const onSave = (content) => {
      if (route.query.type === "add") {
        store.commit("ADDADDRESS", content);
      } else {
        store.commit("CHANGEADDRESS", content);
      }
      Toast("保存成功");
      setTimeout(() => {
        router.back();
      }, 1000);
    };

    //刪除的按鈕
    const onDelete = (content) => {
      store.commit("DELETEADDRESS", content);
      Toast("刪除成功");
      setTimeout(() => {
        router.back();
      }, 1000);
    };

    return {
      ...toRefs(data),
      onSave,
      onDelete,
      address,
    };
  },
};
</script>

<style lang='less' scoped>
/deep/ .van-button--danger {
  background-color: #ffc400;
  border-color: #ffc400;
}
/deep/ .van-switch--on {
  background-color: #ffc400;
}
</style>