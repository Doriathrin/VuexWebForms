import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)
var store = new vuex.Store({
  state: {
    list:[]
  },
  mutations: {
    tian (state, obj) {
      state.list.push(obj);
    },
    shan (state, key) {
      state.list.splice(key,1)
    },
    quan (state, k) {
      state.list.splice(k)
    }
  }
})
export default store
