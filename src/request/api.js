import axios from './request';

// 首頁接口
export const getHomeData = () => axios.get('/mock/home.json');

// 商店數據
export const getStoreData = () => axios.get('/mock/store.json');
