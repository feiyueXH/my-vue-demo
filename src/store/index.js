import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLogin: false,
    initedApp: false,
    menuList: []
  },
  mutations: {
    login(state) {
      state.isLogin = true
    },
    setMenuList(state, menus) {
      state.menuList = menus
      state.initedApp = true
    }
  },
  actions: {
    loginByUserName({ commit }, userinfo) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('login')
          resolve()
        }, 1000)
      })
    },
    setAccessMenuList({ commit }, menus) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('setMenuList', menus)
          resolve()
        }, 1000)
      })
    }
  }
})

export default store
