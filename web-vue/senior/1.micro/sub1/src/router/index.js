import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    redirect: '/sub1/about1'
  },
  {
    path: '/sub1',
    name: 'Home',
    component: Home,
  },
  {
    path: '/sub1/about1',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  }
]

const router = createRouter({
  base: '/sub1',
  history: createWebHistory(),
  routes
})

export default router
