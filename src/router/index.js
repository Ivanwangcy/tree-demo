import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView'
import UserDetailView from '../components/UserDetailView'

export default new Router({
  model: 'history',
  scrollBehavior: () => ({y: 0}),
  routes: [
    { path: '/home', component: HomeView},
    { path: '/user/*', component: AboutView},
    { path: '/detail', component: UserDetailView},
    {path: '*', redirect: 'home'}
  ]
})
