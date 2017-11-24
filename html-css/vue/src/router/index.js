import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Computed from '@/components/Computed'
import For from '@/components/For'

Vue.use(Router)

// localhost:8080/#/computed single page app
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/computed',
      name: 'Computed',
      component: Computed
    },
    {
      path: '/for',
      name: 'For',
      component: For
    }
  ],
  mode: 'history'//remove # in url
})
