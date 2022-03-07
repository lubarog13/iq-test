import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import LoadingPage from '../views/LoadingPage.vue'
import ResultPage from '../views/ResultPage.vue'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/test/page/:id',
    name: 'TestForm',
    component: () => import('../views/TestForm.vue')
  },
  {
    path: '/test/loading/',
    name: 'LoadingPage',
    component: LoadingPage
  },
  {
    path: '/test/result',
    name: 'ResultPage',
    component: ResultPage
  },
  {
    path: '/',
    redirect: {name: 'Home'}
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior: function (to) {
    if (to.hash) {
      document.getElementById(to.hash.slice(1)).scrollIntoView()
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
  }
})

export default router
