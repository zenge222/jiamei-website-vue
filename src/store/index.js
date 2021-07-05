import Vue from 'vue';
import Vuex from 'vuex';
import login from '../store/modules/login'
import locas from '../api/local'

import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

// 引入vuex-persistedstate，将vuex的数据持久化到本地 处理页面刷新 数据丢失
const store = new Vuex.Store({
  modules: {
    login
  },
  // mutations,
  // getters,
  // actions,
  plugins: [
    createPersistedState({
      storage: {
        getItem: key => locas.get(key),
        setItem: (key, value) => locas.set(key, value),
        removeItem: key => locas.removeItem(key)
      }
    })
  ]
})
export default store;
