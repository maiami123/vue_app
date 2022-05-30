<template>
  <div class="food_list" v-if="index === 0">
    <van-tree-select
      v-model:main-active-index="activeIndex"
      height="88vw"
      :items="items"
    >
      <template #content> 商品 </template>
    </van-tree-select>
  </div>
  <div v-else>{{ foodDate.content }}</div>
</template>

<script>
import { reactive, toRefs } from "@vue/reactivity";
export default {
  props: ["index", "foodDate"],
  setup(props) {
    let date = reactive({
      activeIndex: 0,
      items: [],
    });

    const init = () => {
      let newList = [];
      props.foodDate.items.map((i) => {
        newList.push({
          text: i.text,
        });
        date.items = newList;
      });
    };

    init();
    return {
      ...toRefs(date),
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
