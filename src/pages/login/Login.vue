<template>
  <div class="login">
    <Header title="登錄" />
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
          登錄
        </van-button>
        <van-button
          round
          block
          type="info"
          color="#ffc400"
          class="register"
          @click="toRegister"
        >
          去注冊
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import Header from "../../components/Header.vue";
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
    // 提交按鈕
    const onSubmit = (value) => {
      if (!localStorage.userInfo) {
        Toast("帳號未注冊");
        return;
      } else {
        let userInfo = JSON.parse(localStorage.userInfo);
        if (userInfo["用戶名"] === value["用戶名"]) {
          if (userInfo["密碼"] === value["密碼"]) {
            Toast("登錄成功");
            localStorage.setItem("isLogin", "1");
            router.push("./home");
          } else {
            Toast("密碼錯誤");
          }
        } else {
          Toast("帳號不存在或輸入錯誤");
        }
      }
    };
    // 去注冊
    const toRegister = () => {
      router.push("./register");
    };
    return {
      ...toRefs(data),
      onSubmit,
      toRegister,
    };
  },
};
</script>

<style lang='less' scoped>
.login {
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