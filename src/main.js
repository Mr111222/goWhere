// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import '@/assets/fonts/iconfont.css'
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.prototype.$http = axios
Vue.config.productionTip = false
import '@/assets/common.scss'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
