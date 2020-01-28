import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'


Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper, /* { default global options } */)

fastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({ 
  el: '#app',
  router,
  store,
  render: h => h(App)
})
