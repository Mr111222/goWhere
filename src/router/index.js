import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/index'
import Learn from '@/pages/learn/index'
import Play from '@/pages/play/index'
import My from '@/pages/my/index'
import hotCity from '@/components/common/hotdetail'
import ChildHotCity from '@/pages/home/children/index'
import Login from '@/pages/login/index'

Vue.use(Router)


export default new Router({
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/home/hot/:id',
      name: 'hotcity',
      component: hotCity,
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
    	component:Login,
    	redirect:'/login'
    }
  ]
})
