<template>
  <div class="storeDetails">
    <Header title="店鋪" />
    <div class="content">
      <div class="img" />
      <div class="foodClassify">
        <div class="name">
          {{ title }}
          <img :src="img" class="store_img" alt="" />
        </div>
        <div class="classify">
          <van-tabs color="#ffc400">
            <van-tab v-for="(i, index) in storeData" :title="i.name" :key="index">
              <FoodList :index="index" :foodData="i.data" />
            </van-tab>
          </van-tabs>
        </div>
      </div>
    </div>
    <van-action-bar>
      <van-action-bar-icon icon="chat-o" text="客服" @click="service" />
      <van-action-bar-icon
        icon="cart-o"
        text="購物車"

        :badge="store.state.cartList.length"
        @click="toCart"
      />
      <van-action-bar-button
        type="warning"
        text="加入購物車"
        @click="handleAddCart"
      />
      <van-action-bar-button type="danger" text="立即購買" @click="clickBuy" />
    </van-action-bar>
  </div>
</template>

<script>
import Header from "../../components/Header.vue";
import { reactive, toRefs } from "vue";
import FoodList from "./components/FoodList.vue";
import { Toast } from "vant";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  components: {
    Header,
    FoodList,
  },

  setup() {

    const store = useStore();
    const router = useRouter();
    let data = reactive({
      title: "魚拿酸菜魚",
      img: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
      storeData: [
        {
          name: "點菜",
          data: {
            content: "點菜",
            items: [
              {
                text: "熱銷套餐",
                children: [
                  {
                    pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                    title: "招牌酸菜魚",
                    num: 0,
                    price: 25.0,
                    id: 0,
                    add: true,
                  },
                  {
                    pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                    title: "藤椒酸菜魚",
                    num: 0,
                    price: 25.0,
                    id: 1,
                    add: true,
                  },
                ],
              },
              {
                text: "澳洲肥牛",
                children: [
                  {
                    pic: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbkimg.cdn.bcebos.com%2Fpic%2F8694a4c27d1ed21b0ef4f3137f24cac451da80cb91b8&refer=http%3A%2F%2Fbkimg.cdn.bcebos.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645407747&t=ea2c9f772ba0df3a2d1b00b962875460",
                    title: "酸湯肥牛",
                    num: 0,
                    price: 25.0,
                    id: 3,
                    add: true,
                  },
                  {
                    pic: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbkimg.cdn.bcebos.com%2Fpic%2F8694a4c27d1ed21b0ef4f3137f24cac451da80cb91b8&refer=http%3A%2F%2Fbkimg.cdn.bcebos.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645407747&t=ea2c9f772ba0df3a2d1b00b962875460",
                    title: "香辣肥牛",
                    num: 0,
                    price: 25.0,
                    id: 4,
                    add: true,
                  },
                ],
              },
              {
                text: "超級折扣",
                children: [
                  {
                    pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                    title: "無骨酸菜魚+肥牛雙拼",
                    num: 0,
                    price: 25.0,
                    id: 5,
                    add: true,
                  },
                  {
                    pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                    title: "香辣水煮魚+肥牛雙拼",
                    num: 0,
                    price: 25.0,
                    id: 6,
                    add: true,
                  },
                ],
              },
            ],
          },
        },
        { name: "評價", data: { content: "評價" } },
        { name: "商家", data: { content: "商家" } },
      ],
    });

    // 客服的點擊
    const service = () => {
      Toast.fail("敬請期待...");
    };

    // 跳轉購物車
    const toCart = () => {
      router.push("./cart");
    };

    // 加入購物車
    const handleAddCart = (type) => {
      let newList = [];
      data.storeData.forEach((item) => {
        item.data.items?.forEach((items) => {
          items.children.forEach((itemss) => {
            if (itemss.num > 0) {
              newList.push(itemss);
            }
          });
        });
      });
      if (newList.length === 0) {
        Toast("請選擇商品");
        return;
      }
      store.commit("ADDCART", newList);
      type === "buy" ? toCart() : "";
    };

    // 立即購買點擊
    const clickBuy = () => {
      handleAddCart("buy");
    };

    return {
      ...toRefs(data),
      service,
      handleAddCart,
      store,
      clickBuy,
      toCart,
    };
  },
};
</script>

<style lang='less' scoped>
.storeDetails {
  height: 100%;
  display: flex;
  flex-flow: column;
  .content {
    flex: 1;
    overflow-y: auto;
    .img {
      background: url("../../assets/yuna.jpg") no-repeat center/cover;
      width: 100%;
      height: 150px;
    }
    .foodClassify {
      height: 500px;
      background-color: #fff;
      margin-top: -30px;
      border-radius: 20px 20px 0 0;

      .classify {
        margin-top: 10px;
      }
      .name {
        display: flex;
        padding: 20px;
        justify-content: space-between;
        .store_img {
          width: 80px;
          height: 80px;
          border-radius: 10px;
          margin-top: -30px;
        }
      }
    }
  }
}
</style>