import Vue from 'vue'
import Vuex from 'vuex'
import CityModule from './module/CityModule'
import CinemaModule from './module/CinemaModule'
import TabbarModule from './module/TabbarModule'
import persistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [persistedState()],
  state: {},
  mutations: {},
  actions: {},
  modules: {
    CityModule,
    CinemaModule,
    TabbarModule
  }
})
