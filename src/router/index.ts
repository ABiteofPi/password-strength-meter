import DefaultPage from '@/views/DefaultPage.vue'
import { createRouter, createWebHistory } from 'vue-router'
import TestPage from '../views/TestPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultPage,
    },
    {
      path: '/test',
      component: TestPage,
    },
  ],
})

export default router
