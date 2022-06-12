import { createStore } from 'vuex';

export default createStore({
  state: {
    cartList: [], //購物車列表數據
    orderList: [], //生成訂單列表數據
    orderListed: [], //生成訂單後列表數據
    edit: true, //編輯的狀態
    userAddress: [
      {
        id: 1001,
        name: '田中',
        tel: '13123456731',
        province: '大阪府',
        city: '大阪市',
        county: '浪速区',
        addressDetail: 'asd',
        isDefault: true,
        areaCode: '110101',
      },
      {
        id: 1001,
        name: '小林',
        tel: '13123456731',
        province: '大阪府',
        city: '大阪市',
        county: '淀川区',
        addressDetail: 'asd',
        isDefault: false,
        areaCode: '110101',
      },
    ],
  },
  mutations: {
    // 添加購物車
    ADDCART(state, value) {
      state.cartList = value;
    },
    // 結算按鈕
    PAY(state, value) {
      state.orderList = value;
    },
    //刪除
    DELETE(state, value) {
      state.cartList = value;
    },
    //生成訂單
    UPDATEORDER(state) {
      state.orderListed = state.orderListed.concat(state.orderList);
    },
    //編輯的按鈕
    EDIT(state, value) {
      if (value === 'delete') {
        state.edit = true;
      } else {
        state.edit = !state.edit;
      }
    },
    //新增地址
    ADDADDRESS(state, value) {
      state.userAddress.map((item) => {
        if (value.isDefault) {
          item.isDefault = false;
        }
      });
      state.userAddress.push(value);
    },
    //編輯地址
    CHANGEADDRESS(state, value) {
      state.userAddress = state.userAddress.map((item) => {
        if (value.isDefault) {
          item.isDefault = false;
        }
        return item.id === value.id ? value : item;
      });
    },
    //地址刪除按鈕
    DELETEADDRESS(state, value) {
      state.userAddress = state.userAddress.filter((item) => {
        return !(value.id === item.id);
      });
      if (value.isDefault && state.userAddress.length) {
        state.userAddress[0].isDefault = true;
      }
    },
  },
  actions: {},
});
