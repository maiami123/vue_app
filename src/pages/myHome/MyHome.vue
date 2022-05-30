<template>
  <div class="home">
    <div class="content">
      <!--頭部-->
      <div class="header">
        <div class="text">外送</div>
        <div class="location">
          <van-icon name="guide-o" />
          <span>大阪市 Test區 5-13-32 999號</span>
          <span> ></span>
        </div>
      </div>

      <!--主要內容-->
      <div class="main">
        <div class="main_bg">

          <div class="search">
            <input type="text" />
            <div class="search_text">搜尋</div>
          </div>

          <div class="classify">
            <div class="big_classify">
                <div v-for="(i,index) in big_classify" :key="index">
                  <svg class="icon" aria-hidden="true">
                  <use :xlink:href="`#${i.icon}`"></use>
                  </svg>
                {{i.name}}
                </div>
            </div>

            <div class="small_classify">
                <div v-for="(i,index) in small_classify" :key="index">
                    <svg class="icon" aria-hidden="true">
                  <use :xlink:href="`#${i.icon}`"></use>
                  </svg>
                {{i.name}}
                </div>
            </div>
          </div>

        </div>
        <van-tabs class="van-tabs">
          <van-tab
            v-for="(i, index) in centent_nav_list"
            :title="i.tab"
            :key="index"
          >
            <Store :store_list="i.data" />
          </van-tab>
        </van-tabs>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity';
import Footer from "../../components/FooterShow.vue";
import Store from './components/Store.vue';

export default {
  components: {
    Footer,
    Store,
  },
  setup(){

    let data = reactive({
      big_classify: [
        { name: "美食", icon: "icon-apple-and-pear" },
        { name: "甜點飲品", icon: "icon-tianpin" },
        { name: "超市便利", icon: "icon-chaoshi" },
        { name: "生鮮果蔬", icon: "icon-shuiguo" },
        { name: "保健食品", icon: "icon-yaopin" },
      ],
      small_classify: [
        { name: "午餐", icon: "icon-iconfonttubiaozhizuo-1" },
        { name: "買酒", icon: "icon-iconfonttubiaozhizuo-" },
        { name: "新鮮水果", icon: "icon-iconfonttubiaozhizuo-9" },
        { name: "漢堡披薩", icon: "icon-iconfonttubiaozhizuo-6" },
        { name: "休閒飲品", icon: "icon-iconfonttubiaozhizuo-8" },
        { name: "宵夜", icon: "icon-iconfonttubiaozhizuo-3" },
        { name: "吐司", icon: "icon-iconfonttubiaozhizuo-5" },
        { name: "跑腿", icon: "icon-paotuiAPP" },
        { name: "美人佳麗", icon: "icon-iconfonttubiaozhizuo-2" },
        { name: "全部分類", icon: "icon-fenlei" },
      ],
      centent_nav_list: [
        {
          tab: "天天神券",
          data: [
            {
              pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
              title: "魚拿酸菜魚",
              sales: "2888",
              price: "20",
              label: ["門店上新", "很下飯"],
            },
            {
              pic: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.cfcy168.com%2FUploadFiles%2F2020%2F2%2F15904074889874037.jpg&refer=http%3A%2F%2Fwww.cfcy168.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645421933&t=66b58fbba9dce6f6b397e38820de24dc",
              title: "隆江豬腳飯",
              sales: "2888",
              price: "20",
              label: ["門店上新", "很下飯"],
            },
            {
              pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
              title: "魚拿酸菜魚",
              sales: "2888",
              price: "20",
              label: ["門店上新", "很下飯"],
            },
            {
              pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
              title: "魚拿酸菜魚",
              sales: "2888",
              price: "20",
              label: ["門店上新", "很下飯"],
            },
          ],
        },
        {
          tab: "減配送費",
          data: [
            {
              pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
              title: "魚拿酸菜魚",
              sales: "2888",
              price: "20",
              label: ["門店上新", "很下飯"],
            },
          ],
        },
        {
          tab: "點評高分",
          data: [
            {
              pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
              title: "魚拿酸菜魚",
              sales: "2888",
              price: "20",
              label: ["門店上新", "很下飯"],
            },
            {
              pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
              title: "魚拿酸菜魚",
              sales: "2888",
              price: "20",
              label: ["門店上新", "很下飯"],
            },
          ],
        },
        {
          tab: "會員滿減",
          data: [
            {
              pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
              title: "魚拿酸菜魚",
              sales: "2888",
              price: "20",
              label: ["門店上新", "很下飯"],
            },
            {
              pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
              title: "魚拿酸菜魚",
              sales: "2888",
              price: "20",
              label: ["門店上新", "很下飯"],
            },
          ],
        },
      ],
    });
    return {
      ...toRefs(data),
    };
  },
};
</script>

<style lang='less' scoped>
/deep/ .van-tabs__wrap {
  border-radius: 10px;
}
.home {
  display: flex;
  flex-flow: column;
  height: 100%;
  font-size: 12px;
  .content {
    flex: 1;
    overflow-y: auto;

    .main {
      margin-top: -30px;
      .van-tabs {
        padding: 0 20px 10px;
      }
      .main_bg {
        background-image: linear-gradient(#fff, #f5f5f5);
        padding: 10px 20px 0 20px;
        border-radius: 30px 30px 0 0;
        position: relative;
        .classify {
          padding: 20px 0;
          .small_classify {
            display: flex;
            flex-wrap: wrap;
            margin-top: 20px;
            div {
              display: flex;
              justify-content: center;
              flex-flow: column;
              align-items: center;
              width: 20%;
            }
            .icon {
              width: 30px;
              height: 30px;
              margin: 10px;
            }
          }
          .big_classify {
            display: flex;
            div {
              flex: 1;
              display: flex;
              justify-content: center;
              flex-flow: column;
              align-items: center;
              .icon {
                width: 50px;
                height: 50px;
                margin-bottom: 5px;
              }
            }
          }
        }

        .search {
          position: relative;
          .search_text {
            position: absolute;
            background-color: #ffc400;
            right: -6px;
            top: 1px;
            width: 50px;
            height: 32px;
            border-radius: 16px;
            text-align: center;
            line-height: 32px;
            font-size: 14px;
          }
          input {
            width: 100%;
            border: 1px solid #ffc400;
            border-radius: 20px;
            height: 30px;
          }
        }
      }
    }

    .header {
      background-image: linear-gradient(#ffc400, #fff);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 20px 40px 20px;
      .text {
        font-size: 20px;
        font-weight: 600;
      }
      .location {
        span {
          margin: 0 5px;
        }
        font-size: 14px;
      }
    }
  }
}
</style>