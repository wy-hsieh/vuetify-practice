import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/Projects.vue')
  },
  {
    path: '/team',
    name: 'team',
    component: () => import('../views/Team.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
