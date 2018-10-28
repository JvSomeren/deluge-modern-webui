import multiguard from 'vue-router-multiguard'
import { AuthGuard, LoginGuard, TorrentGuard } from './guards'

const main = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "base" */ '../views/Login.vue'),
    meta: { title: 'Login' },
    beforeEnter: LoginGuard
  },
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "base" */ '../views/Home.vue'),
    meta: { title: 'Home' },
    beforeEnter: AuthGuard
  },
  {
    path: '/t/:hash',
    name: 'torrent',
    component: () => import(/* webpackChunkName: "torrent" */ '../views/TorrentDetails.vue'),
    meta: { title: 'Torrent' },
    beforeEnter: multiguard( [ AuthGuard, TorrentGuard ] )
  },
  {
    path: '/add',
    name: 'add',
    component: () => import(/* webpackChunkName: "add" */ '../views/TorrentAdd.vue'),
    meta: { title: 'Add torrent' },
    beforeEnter: AuthGuard
  },
];

const error = [
  {
    path: '*',
    name: 'error',
    redirect: '/'
  }
];

export default [].concat( main, error );