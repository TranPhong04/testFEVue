import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import ListFilmView from '../components/ListFilmView.vue'
import FilmDetail from '../components/FilmDetail.vue'
import Slot from '../components/Slot.vue'
import BillDetail from '../components/BillDetail.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: ListFilmView
  },
  {path:'/listFilm',
    name:'listFilm',
    component:ListFilmView
  },
  {path:'/filmDetail/:id',
    name:'filmDetail',
    component:FilmDetail
  },
  {
    path: '/slot/:id',
    name:'slot',
    component : Slot
  },
  {path:'/confirm/:totals/:id',
  name:'confirmBill',
  component:BillDetail

  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
