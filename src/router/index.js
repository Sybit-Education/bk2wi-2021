import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/event/:id',
    name: 'Eventdetail',
    component: () => import(/* webpackChunkName: "event" */ '../views/EventDetailView.vue')
  },
  {
    path: '/impressum',
    name: 'Imprint',
    component: () => import(/* webpackChunkName: "imprint" */ '../views/ImprintView.vue')
  },
  {
    path: '/datenschutz',
    name: 'Privacy',
    component: () => import(/* webpackChunkName: "imprint" */ '../views/PrivacyView.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "imprint" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return { selector: to.hash }
    }
    return { x: 0, y: 0 }
  }
})

export default router
