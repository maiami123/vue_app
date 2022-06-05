<template>
  <div class="food_list" v-if="index === 0">
    <van-tree-select
      v-model:main-active-index="activeIndex"
      height="88vw"
      :items="items"
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
import { reactive, toRefs } from "@vue/reactivity";
import FoodAdd from "../../../components/FoodAdd.vue";

export default {
  components: { FoodAdd },
  props: ["index", "foodData"],
  setup(props) {
    let data = reactive({
      activeIndex: 0,
      items: [],
      subItem: [],
    });

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


    const navClick = (i) => {
      data.active = i;
      init();
    };

    const addClick = (i) => {
      data.subItem.forEach((item) => {
        if (item.id === i) {
          item.add = false;
          item.num += 1;
        }
      });
    };

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

<style lang="less" scoped>
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
