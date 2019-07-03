import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    routerMenus: [],
    isCollapse: false
  },
  mutations: {
    getRouterMenus(state, routers) {
      state.routerMenus = routers
    },
    setSiderbarCollapse(state, status) {
      state.isCollapse = status
    }
  },
  actions: {}
})
