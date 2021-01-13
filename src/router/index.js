import Vue from 'vue'
import VueRouter from 'vue-router'
import Film from '../views/Film'
import Cinema from '../views/Cinema'
import ComingSoon from '../views/film/ComingSoon'
import NowPlaying from '../views/film/NowPlaying'
import Detail from '../views/Detail'
import City from '../views/City'
import Search from '../views/Search'

Vue.use(VueRouter)
const routes = [
  {
    path: '/film',
    component: Film,
    children: [
      {
        path: 'nowPlaying',
        component: NowPlaying
      }, {
        path: 'comingSoon',
        component: ComingSoon
      }, {
        path: '',
        redirect: '/film/nowPlaying'
      }
    ]
  }, {
    path: '/cinema',
    component: Cinema
  }, {
    path: '/cinema/search',
    component: Search
  },
  {
    path: '/city',
    component: City
  }, {
    path: '/center',
    component: () => import(/* webpackChunkName:"componentGroup" */ '../views/Center.vue')
  }, {
    path: '/login',
    component: () => import(/* webpackChunkName:"componentGroup" */ '../views/Login.vue')
  }, {
    path: '/detail/:myid',
    component: Detail
  }, {
    path: '*',
    redirect: '/film'
  }
]
const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  if (to.fullPath === '/center') {
    if (!localStorage.getItem('token')) {
      next('/login')
    } else {
      next()
    }
  } else {
    next()
  }
})
export default router
