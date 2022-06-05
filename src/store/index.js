import {createStore} from 'vuex'

export default createStore({
    state:{
        cartList:[],
    },
    mutations:{
        ADDCART(state,value){
            state.cartList =value
        }
    },
    actions:{},
})