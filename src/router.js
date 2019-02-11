import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import TableView from './views/TableView.vue'
import ChartsView from './views/ChartsView.vue'

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
      path: '/highcharts',
      name: 'highcharts',
      component: ChartsView
    },
    {
      path: '/table',
      name: 'table',
      component: TableView
    }
  ]
})
