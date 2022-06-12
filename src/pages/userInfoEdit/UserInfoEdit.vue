<template>
  <div class="userEdit">
    <Header title="帳號管理" />
    <div class="input-item">
      <van-field v-model="nickName" label="昵稱" placeholder="請輸入昵稱" />
      <van-field
        v-model="introduceSign"
        label="個性簽名"
        placeholder="請輸入簽名"
      />
      <van-field v-model="password" label="密碼" placeholder="請輸入密碼" />
    </div>
    <van-button
      type="primary"
      round
      color="#ffc400"
      class="save-btn"
      block
      @click="save"
    >
      保存
    </van-button>
    <van-button
      type="primary"
      round
      color="#ffc400"
      class="save-btn"
      block
      @click="logout"
      >退出登錄</van-button
    >
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import Header from "../../components/Header.vue";
import { Toast } from "vant";
import { useRouter } from "vue-router";
export default {
  components: { Header },
  setup() {
    const router = useRouter();
    let data = reactive({
      nickName: "",
      password: "",
      introduceSign: "肚子好餓...",
    });
    const logout = () => {
      localStorage.removeItem("isLogin");
      Toast("退出登錄");
      router.push("/login");
    };
    // 保存
    const save = () => {
      if (data.nickName && data.password) {
        const userInfo = JSON.parse(localStorage.userInfo);
        const newUserInfo = {
          用戶名: data.nickName || userInfo["用戶名"],
          密碼: data.password || userInfo["密碼"],
        };
        localStorage.setItem("userInfo", JSON.stringify(newUserInfo));
        Toast("修改成功");
        router.push("/mine");
      } else {
        Toast("請輸入修改的內容");
      }
    };

    return {
      ...toRefs(data),
      save,
      logout,
    };
  },
};
</script>
<style lang='less' scoped>
/deep/ .van-button--danger {
  background-color: #ffc400;
  border-color: #ffc400;
}
.save-btn {
  width: 80%;
  margin: 20px auto;
}
</style>