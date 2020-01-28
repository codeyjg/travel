import Vue from 'vue'
import Router from 'vue-router'
const  Home = () => import("../page/home/Home")
const City = () => import("../page/city/City")
const Detail = () => import("../page/detail/Detail")
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path:'/city',
      name:'City',
      component:City

    },{
      path:'/detail/:id',
      name:'Detail',
      component:Detail
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
