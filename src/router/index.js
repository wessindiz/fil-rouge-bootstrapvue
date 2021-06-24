import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Studios from '../views/Studios.vue'
import Tarifs from '../views/Tarifs.vue'
import Label from '../views/Label.vue'
import Contacts from '../views/Contacts.vue'
import Connexion from '../views/Connexion.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Studios',
    name: 'Studios',
    component: Studios
  },
  {
    path: '/Tarifs',
    name: 'Tarifs',
    component: Tarifs
  },
  {
    path: '/Label',
    name: 'Label',
    component: Label
  },
  {
    path: '/Contacts',
    name: 'Contacts',
    component: Contacts
  },
  {
    path: '/Connexion',
    name: 'Connexion',
    component: Connexion
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
