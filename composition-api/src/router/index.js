import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/counter',
    name: 'counter',
    component: () => import('../views/CounterView')
  },
  {
    path: '/characters',
    name: 'characters',
    component: () => import('../views/CharactersView')
  },
  {
    path: '/pokemon-search',
    name: 'pokemon-search',
    component: () => import('../views/SearchPokemonView')
  },
  {
    path: '/pokemon/:id',
    name: 'pokemon-id',
    component: () => import('../views/PokemonView')
  },
  {
    path: '/todo',
    name: 'todo',
    component: () => import('../views/TodoView')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
