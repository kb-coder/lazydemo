import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
// import Bella from '@/components/bella'
const Bella = () => import(/* webpackChunkName: "dogs" */ '@/components/bella')
// import Daisy from '@/components/daisy'
const Daisy = () => import(/* webpackChunkName: "dogs" */ '@/components/daisy')
const About = () => import(/* webpackChunkName: "about" */ '@/views/About.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/bella-bella',
    name: 'BellaBella',
    component: Bella
  },
  {
    path: '/daisy-mae',
    name: 'DaisyMae',
    component: Daisy
  }
]

const router = new VueRouter({
  routes
})

export default router
