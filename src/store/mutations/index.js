
import * as types from '../types'
const mutations = {
  // 测试 vuex
  [types.add](state){
    state.state.num ++
  },
  [types.del](state){
    state.state.num --
  },
  // 储存城市
  [types.choicecity](state, city) {
    state.state.defaultCity = city
    state.state.isShowCitylist = !state.state.isShowCitylist
    try {
      localStorage.city = city
    } catch (e) {}
  },
  [types.showlist] (state) {
    state.state.isShowCitylist = !state.state.isShowCitylist
  },
  [types.setUser] (state, parmas) {
    state.state.username = parmas
    state.state.isLog = !state.state.isLog
    try {
      localStorage.username = parmas
    } catch (e) {}
  }
}
export default mutations
