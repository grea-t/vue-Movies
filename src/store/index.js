import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cityId: '440300',
    cityName: '深圳',
    isTabbarShow: true
  },
  mutations: {
    changeCityName (state, name) {
      state.cityName = name
    },
    changeCityId (state, cityId) {
      state.cityId = cityId
    },
    hide (state) {
      state.isTabbarShow = false
    },
    show (state) {
      state.isTabbarShow = true
    }
  }
})
