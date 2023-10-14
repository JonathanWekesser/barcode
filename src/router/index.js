import { createRouter, createWebHistory } from 'vue-router'
import Barcode from '../components/Barcode.vue'
import History from '../components/History.vue'
import About from '../components/About.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Barcode',
      component: Barcode
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/history',
      name: 'history',
      component: History
    }
  ]
})

export default router
