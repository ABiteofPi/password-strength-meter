import { createRouter, createWebHistory } from 'vue-router'
import { default as PassChecker } from '../views/PassChecker.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: PassChecker,
    },
  ],
})

export default router
