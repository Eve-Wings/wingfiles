import Vue from 'vue'
import Router from 'vue-router'

import home from '../page/home.vue'
import homePage from '../page/homePage.vue'
import classicalPage from '../page/classicalPage.vue'

import postDetailPage from '../page/postDetailPage.vue'

import search from '../page/search.vue'
import searchResult from '../page/searchResult.vue'

import loginPage from '../page/loginPage.vue'

import rank from '../page/rank.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/'
    },
    {
      path: '/home',
      component: home,
      children: [
        {
          path: '',
          component: homePage
        },
        {
          path: '/home/classicalPage',
          component: classicalPage
        },
        {
          path: '/home/rank',
          component: rank
        }
      ]
    },
    {
      path: '/search',
      component: search
    },
    {
      path: '/searchResult',
      component: searchResult,
      name: 'searchResult'
    },
    {
      path: '/login',
      component: loginPage
    },
    {
      path: '/postDetailPage',
      component: postDetailPage
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0, behavior: 'smooth'}
  }
})
