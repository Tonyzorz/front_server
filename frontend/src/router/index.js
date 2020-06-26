import Vue from 'vue'
import Router from 'vue-router'
// import MovieListPage from '@/components/MovieListPage'
import DetailMoviePage from '@/components/DetailMoviePage'
import UploadMoviePage from '@/components/UploadMoviePage'
import QueryInsertPage from '@/components/QueryInsertPage'
import QueryListPage from '@/components/QueryListPage'
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'movielist',
    //   component: MovieListPage
    // },
    {
      path: '/:id',
      name: 'detailmovie',
      component: DetailMoviePage
    },
    {
      path: '/upload',
      name: 'uploadmovie',
      component: UploadMoviePage
    },
    {
      path: '/',
      name: 'querylistpage',
      component: QueryListPage
    },
    {
      path: '/query_insert',
      name: 'queryinsertpage',
      component: QueryInsertPage
    }
  ]
})
