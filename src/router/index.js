import Vue from 'vue'
import Router from 'vue-router'
import main from '@/pages/main.vue'
import error from '@/pages/error.vue'
import toc from '@/pages/toc.vue'
import WebglCn from '@/pages/WebglCn/WebglCn.vue'
import primary from '@/pages/WebglCn/primary/primary.vue'
import WebglCnToc from '@/pages/WebglCn/toc.vue'
import no1start from '@/pages/WebglCn/primary/no1start.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main,
      redirect:'toc',
      meta: { btitle: "首页" },
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
      meta: { btitle: "WebGl 中文网" },
      children:[
        {
          path: 'toc',
          component:WebglCnToc,
        },
        {
          path: 'primary',
          redirect:'/webglcn/toc',
          component:primary,
          meta: { btitle: "初级教程" },
          children:[
            {
              path: 'no1start',
              name: 'no1start',
              component:no1start,
              meta: { btitle: "第1章 开启Threejs之旅(一)" },
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
