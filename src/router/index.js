import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Details from '../views/Details.vue'


Vue.use(VueRouter)

const routes = [

  {
    path: '/details/:alpha',
    name: 'Details',
    component: Details,
  }, {
    path: '/',
    name: 'Home',
    component: Home
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
