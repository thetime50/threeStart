import Vue from 'vue'
import Router from 'vue-router'
import main from '@/pages/main.vue'
import error from '@/pages/error.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '*',
      name: 'error',
      component: error
    }
  ]
})
