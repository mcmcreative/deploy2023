import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/Computed',
      name: 'Computed',
      component: () => import('./views/computed.vue'),
    },
    {
      path: '/ref',
      name: 'ref',
      component: () => import('./views/ref.vue'),
    },
  ],
})

export default router
