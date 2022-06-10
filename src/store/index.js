import { createStore } from 'vuex';

export default createStore({
  state: {
    cartList: [], //購物車列表數據
    orderList: [], //生成訂單列表數據
    edit: true, //編輯的狀態
  },
  mutations: {
    ADDCART(state, value) {
      state.cartList = value;
    },
    PAY(state, value) {
      state.orderList = value;
    },
    DELETE(state, value) {
      state.cartList = value;
    },
    EDIT(state, value) {
      if (value === 'delete') {
        state.edit = true;
      } else {
        state.edit = !state.edit;
      }
    },
  },
  actions: {},
});
