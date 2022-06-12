<template>
  <div class="food_list" v-if="index === 0">
    <van-tree-select
      height="88vw"
      :items="items"
      :v-model="active"
      @click-nav="navClick"
    >
      <template #content>
        <div v-for="(i, index) in subItem" class="item_bg" :key="index">
          <FoodAdd
            :item="i"
            :showAdd="true"
            :addClick="addClick"
            :onChange="onChange"
          />
        </div>
      </template>
    </van-tree-select>
  </div>
  <div v-else>{{ foodData.content }}</div>
</template>

<script>
import { reactive, toRefs } from "vue";
import FoodAdd from "../../../components/FoodAdd.vue";
export default {
  props: ["index", "foodData"],
  components: {
    FoodAdd,
  },
  setup(props) {
    let data = reactive({
      active: 0,
      items: [],
      subItem: [],
    });

    // 數據的初始化
    const init = () => {
      let newList = [];
      props.foodData?.items?.map((i, index) => {
        newList.push({ text: i.text });
        if (data.active === index) {
          data.subItem = i.children;
        }
      });
      data.items = newList;
    };
    init();

    // 點擊左側的導航
    const navClick = (i) => {
      data.active = i;
      init();
    };

    // 切換步進器
    const addClick = (i) => {
      data.subItem.forEach((item) => {
        if (item.id === i) {
          item.add = false;
          item.num += 1;
        }
      });
    };

    // 步進器增加觸發事件
    const onChange = (value, detail) => {
      data.subItem.forEach((item) => {
        if (item.id === detail.name) {
          item.num = value;
        }
      });
    };

    return {
      ...toRefs(data),
      navClick,
      addClick,
      onChange,
    };
  },
};
</script>

<style lang='less' scoped>
.food_list {
  margin-top: 20px;
  .item_bg {
    padding: 10px;
  }
}

/deep/ .van-tree-select__item--active {
  color: #ffc400;
}
/deep/ .van-sidebar-item--select::before {
  background-color: #ffc400;
}
</style>