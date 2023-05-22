import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'About',
      redirect: '/about/child',
      component: () => import('../views/EmptyRouteView.vue'),
      children: [
        {
          path: 'child',
          name: 'Child',
          component: () => import('../views/AboutView.vue')
        }
      ]
    }
  ]
})

export default router
