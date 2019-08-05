import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations/index'
import getters from './getter'
Vue.use(Vuex)
export default new Vuex.Store({
  state,
  actions,
  // 省略步骤
  // 1. this.$store.dispatch('citychanged', value)
  // 2. actions: {
  //   citychanged (ctx, cityname) {
  //     ctx.commit('citychanged', cityname)
  //   }
  // },
  mutations,
  getters
})
