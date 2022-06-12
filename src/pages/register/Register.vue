<template>
  <div class="register">
    <Header title="注冊" />
    <div class="img">好神</div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用戶名"
        label="用戶名"
        placeholder="用戶名"
        :rules="[{ required: true, message: '請填寫用戶名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密碼"
        label="密碼"
        placeholder="密碼"
        :rules="[{ required: true, message: '請填寫密碼' }]"
      />
      <div style="margin: 16px">
        <van-button
          round
          block
          type="info"
          native-type="submit"
          color="#ffc400"
        >
          注冊
        </van-button>
        <van-button
          round
          block
          type="info"
          color="#ffc400"
          class="register"
          @click="toLogin"
        >
          已有帳號去登錄
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import Header from "../../components/Header.vue";
import { reactive, toRefs } from "vue";
import { Toast } from "vant";
import { useRouter } from "vue-router";
export default {
  components: {
    Header,
  },
  setup() {
    const router = useRouter();
    let data = reactive({
      username: "",
      password: "",
    });

    //注冊
    const register = (value) => {
      Toast("注冊成功");
      localStorage.setItem("userInfo", JSON.stringify(value));
      router.push("./login");
    };
    // 提交按鈕
    const onSubmit = (value) => {
      if (localStorage.userInfo) {
        let userInfo = JSON.parse(localStorage.userInfo);
        if (userInfo["用戶名"] === value["用戶名"]) {
          Toast("該賬號已存在");
          return;
        } else {
          register(value);
        }
      } else {
        register(value);
      }
    };

    //去登錄
    const toLogin = () => {
      router.push("./login");
    };
    return {
      ...toRefs(data),
      onSubmit,
      toLogin,
    };
  },
};
</script>

<style lang='less' scoped>
.register {
  .img {
    width: 200px;
    height: 200px;
    background-color: #ffc400;
    font-size: 80px;
    line-height: 200px;
    text-align: center;
    border-radius: 40px;
    margin: 20px auto;
  }
  .register {
    margin-top: 20px;
  }
}
</style>