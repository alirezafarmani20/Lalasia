import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('@/views/ProductView.vue'),
    },
    {
      path: '/services',
      name: 'services',
      component: ()=> import('@/views/ServicesView.vue'),
    },
    {
      path: '/articles',
      name: 'articels',
      component: () => import('@/views/ArticelsView.vue'),
    },
  ],
})

export default router
