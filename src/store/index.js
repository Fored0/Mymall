import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: [],
  },
  mutations: {
    // mutations唯一的目的即使修改state中的状态
    // mutations中的每个方法尽可能完成的事件单一一点
    addCounter(state,payload){
      payload.count ++
    },
    addToCart(state,payload){
      state.cartList.push(payload)
    }
  },
  actions: {
    addCart(context, payload) {
      // 查找之前数组中是否有该商品
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
      // 判断oldProduct
      if (oldProduct) {
        // oldProduct.count += 1
        context.commit("addCounter",payload)
      } else {
        payload.count = 1
        // context.state.cartList.push(payload)
        context.commit("addToCart",payload)
      }
    }
  },
  modules: {}
})
