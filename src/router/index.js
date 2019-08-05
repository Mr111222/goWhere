import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/index'
import Learn from '@/pages/learn/index'
import Play from '@/pages/play/index'
import My from '@/pages/my/index'
import ChildHotCity from '@/pages/home/children/index'

Vue.use(Router)

const childs = [{
  name: 'hotCity',
  path:'/home/hotcity',
  component: ChildHotCity
}]

export default new Router({
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      children:[...childs]
    },
    
    {
      path: '/learn',
      name: 'learn',
      component: Learn
    },
    {
      path: '/play',
      name: 'play',
      component: Play
    },
    {
      path: '/my',
      name: 'my',
      component: My
    },
    {
    	path:'*',
    	component:Home,
    	redirect:'/home'
    }
  ]
})
