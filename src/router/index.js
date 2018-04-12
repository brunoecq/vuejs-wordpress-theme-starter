import Vue from 'vue'
import Router from 'vue-router'

// Components
import Home from '../components/Home'
import PageTemplate from '../components/partials/Page-Template'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
      // props: { pageContentID: 383 }
    },
    {
      path: '/wp-admin',
      name: 'Administrador',
      // props: { pageContentID: 383 }
    },
    {
      path: '/page-template/:page_id',
      name: 'Page-Template',
      component: PageTemplate
      // props: { pageContentID: 383 }
    },
    {
      path: '/images',
      name: 'images'
      // props: { pageContentID: 383 }
    }
  ],
  //mode: 'history', //Esto quité
  base: '',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
