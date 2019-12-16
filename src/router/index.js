import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/tabbar/Home.vue'
import Member from '../components/tabbar/Member.vue'
import Shopcar from '../components/tabbar/Shopcar.vue'
import Search from '../components/tabbar/Search.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Member',
    name: 'Member',
    component: Member
  },
  {
    path: '/Shopcar',
    name: 'Shopcar',
    component: Shopcar
  },
  {
    path: '/Search',
    name: 'Search',
    component: Search
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass:'mui-active',
  routes
})

export default router
