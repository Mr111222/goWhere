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
  }
}

export default actions