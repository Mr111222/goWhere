import * as types from './types'
const actions = {
  choiceCity (ctx, payload){
    ctx.commit(types.choicecity, payload)
  },
  citychanged (ctx, cityname) {
    ctx.commit(types.citychanged, cityname)
  },
  add (ctx) {
    ctx.commit (types.add)
  },
  del (ctx) {
    ctx.commit (types.del)
  },
  showList (ctx) {
    ctx.commit (types.showlist)
  },
  // 存储当前用户
  setUser (ctx, parmas) {
    ctx.commit (types.setUser, parmas)
  },

  // 登录状态是否显示头部和尾部
  isLogFn (ctx, parmas) {
    ctx.commit (types.isLogFn, parmas)
  },
}

export default actions