import { createRouter, createWebHistory } from 'vue-router'

export const Layout = () => import('@/layout/MainLayout.vue') //主要佈局樣式

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          name: 'dashboard',
          component: () => import('../views/dashboard/dashboardView.vue')
        },
      ]
    }
  ]
})

export default router
