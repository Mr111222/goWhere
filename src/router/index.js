import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/index'
import Learn from '@/pages/learn/index'
import Play from '@/pages/play/index'
import My from '@/pages/my/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
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
