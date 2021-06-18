import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Studios from '../views/Studios.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/studios',
    name: 'Studios',
    component: Studios
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
