import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Home1 from './views/Home1.vue'
import About1 from './views/About1.vue'
import Home2 from './views/Home2.vue'
import About2 from './views/About2.vue'
import Home3 from './views/Home3.vue'
import About3 from './views/About3.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/1',
      name: 'home',
      component: Home1
    },
    {
      path: '/about1',
      name: 'about',
      component: About1
    },
    {
      path: '/2',
      name: 'home',
      component: Home2
    },
    {
      path: '/about2',
      name: 'about',
      component: About2
    },
    {
      path: '/3',
      name: 'home',
      component: Home3
    },
    {
      path: '/about3',
      name: 'about',
      component: About3
    }
  ]
})
