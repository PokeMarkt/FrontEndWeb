import Vue from 'vue'
import Router from 'vue-router'
import PostContainer from '../components/PostContainer.vue'
import ProfilePage from '../components/ProfilePage.vue'
import OfferCreate from '../components/OfferCreate.vue'

import TestingComponent from '../components/TestingComponent'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    
    {
      path: '/',
      name: '',
      component: PostContainer
    },
    {
      path: '/user',
      name: '',
      component: ProfilePage
    },
    {
      path: '/create-offer',
      name: '',
      component: OfferCreate
    },
    {
      path: '/test',
      component: TestingComponent
    }
  ]
})
