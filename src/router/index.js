import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/EpisodeInfo',
    name: 'EpisodeInfo',
    component: () => import('.././views/EpisodeInfo.vue')
  },
  {
    path: '/CharacterInfo',
    name: 'CharacterInfo',
    component: () => import('.././views/CharacterInfo.vue')
  },
  {
    path: '/DeathInfo',
    name: 'DeathInfo',
    component: () => import('.././views/DeathInfo.vue')
  },
  {
    path: '/QuoteInfo',
    name: 'QuoteInfo',
    component: () => import('.././views/QuoteInfo.vue')
  },
  {
    path: '/OccupationList',
    name: 'OccupationList',
    component: () => import('.././views/OccupationList.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
