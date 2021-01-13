const module = {
  namespaced: true,
  state: {
    cityId: '440300',
    cityName: '深圳'
  },
  mutations: {
    changeCityName (state, name) {
      state.cityName = name
    },
    changeCityId (state, cityId) {
      state.cityId = cityId
    }
  }
}
export default module
