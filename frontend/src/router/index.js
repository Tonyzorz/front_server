import Vue from 'vue'
import Router from 'vue-router'
// import MovieListPage from '@/components/MovieListPage'
// import DetailMoviePage from '@/components/DetailMoviePage'
import UploadMoviePage from '@/components/movie/UploadMoviePage'
import QueryInsertPage from '@/components/query/QueryInsertPage'
import QueryListPage from '@/components/query/QueryListPage'
import DetailQueryPage from '@/components/query/DetailQueryPage'
import PropertyInsertPage from '@/components/property/PropertyInsertPage'
import PropertyListPage from '@/components/property/PropertyListPage'
import DetailPropertyPage from '@/components/property/DetailPropertyPage'
import InstanceInsertPage from '@/components/instance/InstanceInsertPage'
import InstanceListPage from '@/components/instance/InstanceListPage'
import DetailInstancePage from '@/components/instance/DetailInstancePage'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'movielist',
    //   component: MovieListPage
    // },
    // {
    //   path: '/:id',
    //   name: 'detailmovie',
    //   component: DetailMoviePage
    // },
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
    },
    {
      path: '/:id',
      name: 'detailquerypage',
      component: DetailQueryPage
    },
    {
      path: '/property',
      name: 'propertylistpage',
      component: PropertyListPage
    },
    {
      path: '/property_insert',
      name: 'propertyinsertpage',
      component: PropertyInsertPage
    },
    {
      path: '/property/:id',
      name: 'detailpropertypage',
      component: DetailPropertyPage
    },
    {
      path: '/instance',
      name: 'instancelistpage',
      component: InstanceListPage
    },
    {
      path: '/instance_insert',
      name: 'instanceinsertpage',
      component: InstanceInsertPage
    },
    {
      path: '/instance/:id',
      name: 'detailinstancepage',
      component: DetailInstancePage
    }
    // {
    //   path: '/queryUpdate',
    //   component: DetailQueryPage
    // }
  ]
})
