import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/grid',
      name: 'grid',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Grid.vue')
    },
    {
      path: '/buttons',
      name: 'buttons',
      component: () => import('./views/Buttons.vue')
    },
    {
      path: '/card',
      name: 'card',
      component: () => import('./views/Card.vue')
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: () => import('./views/Tasks.vue')
    },
    {
      path: '/tasksRest',
      name: 'tasksRest',
      component: () => import('./views/TasksRest.vue')
    }
  ]
})
