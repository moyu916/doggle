import Vue from 'vue'
import Vuex from 'vuex'

import { getCart } from '../service/cart'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartCount: 0,
    cartData: [],
  },
  mutations: {

    //计算购物车商品数量
    addCart (state, payload) { 
      state.cartCount = payload.count
    },

    getData (state, payload) {
      state.cartData.splice(0,state.cartData.length)
      for(let i of payload.data) {
        state.cartData.push(i)
      }
      // state.cartData = payload.data 
    },
    addToCart(state,payload) {
      payload.checked = false;
      payload.index = state.cartCount-1
      state.cartData.push(payload)
    },

    modifyChecked(state,index){
      state.cartData[index].checked=!state.cartData[index].checked;
    },
    allSelected(state){
      state.cartData.forEach(item=>{
          return item.checked=true;
      })
    },
    unAllSelected(state){
      state.cartData.forEach(item=>{
          return item.checked=false;
      })
  },
  },
  actions: {
    async updateCart(ctx,payload) {
      const { data } = await getCart()
      ctx.commit('addCart', {
        count: data.length || 0 
      })
      // ctx.commit('addToCart', {

      // })
    }
  },
  modules: {
  }
})
