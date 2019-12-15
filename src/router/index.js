import Vue from 'vue'
import Router from 'vue-router'
import main from '@/pages/main.vue'
import error from '@/pages/error.vue'
import toc from '@/pages/toc.vue'
import WebglCn from '@/pages/WebglCn/WebglCn.vue'
import primary from '@/pages/WebglCn/primary/primary.vue'
import WebglCnToc from '@/pages/WebglCn/toc.vue'
import no1start1 from '@/pages/WebglCn/primary/no1start1.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main,
      redirect:'toc',
    },
    {
      path: '/toc',
      name: 'toc',
      component: toc,
    },
    {
      path: '/webglcn',
      component:WebglCn,
      redirect:'/webglcn/toc',
      children:[
        {
          path: 'toc',
          component:WebglCnToc,
        },
        {
          path: 'primary',
          component:primary,
          children:[
            {
              path: 'no1start1',
              name: 'no1start1',
              component:no1start1,
            },
          ]
        },
      ]
    },

    {
      path: '*',
      name: 'error',
      component: error
    }
  ]
})
