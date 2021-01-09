import Vue from 'vue'
import VueRouter from 'vue-router'
import Center from '../views/Center'
import Film from '../views/Film'
import Cinema from '../views/Cinema'
import ComingSoon from '../views/film/ComingSoon'
import NowPlaying from '../views/film/NowPlaying'
import Detail from '../views/Detail'

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
    path: '/center',
    component: Center
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
export default router
