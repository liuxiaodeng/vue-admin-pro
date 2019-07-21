import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import NProgress from 'nprogress'
import Layout from '../layout/Layout.vue'
Vue.use(Router)

export const defaultRouters = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard/analysis',
    meta: {
      title: '仪表盘',
      icon: 'el-icon-s-home'
    },
    children: [
      {
        path: '/dashboard/analysis',
        name: 'analysis',
        component: () => import('../views/dashboard/analysis/Analysis.vue'),
        meta: {
          title: '分析页'
        }
      },
      {
        path: '/dashboard/monitor',
        name: 'monitor',
        component: () => import('../views/dashboard/monitor/Monitor.vue'),
        meta: {
          title: '监控页'
        }
      },
      {
        path: '/dashboard/workplace',
        name: 'workplace',
        component: () => import('../views/dashboard/workplace/Workplace.vue'),
        meta: {
          title: '工作台'
        }
      }
    ]
  },
  {
    path: '/waterfall',
    component: Layout,
    redirect: '/waterfall/height-js',
    meta: {
      title: '瀑布流布局',
      icon: 'el-icon-picture'
    },
    children: [
      {
        path: '/waterfall/width-js',
        name: 'width-js',
        component: () => import('../views/waterfall/WidthJs.vue'),
        meta: {
          title: '等宽形JS'
        }
      },
      {
        path: '/waterfall/width-position',
        name: 'width-position',
        component: () => import('../views/waterfall/WidthPosition.vue'),
        meta: {
          title: '等宽形定位'
        }
      },
      {
        path: '/waterfall/height-js',
        name: 'height-js',
        component: () => import('../views/waterfall/HeightJs.vue'),
        meta: {
          title: '等高型JS'
        }
      },
      {
        path: '/waterfall/height-css',
        name: 'height-css',
        component: () => import('../views/waterfall/HeightCss.vue'),
        meta: {
          title: '等高型CSS'
        }
      },
      {
        path: '/waterfall/image-layout',
        name: 'image-layout',
        component: () => import('../views/waterfall/ImageLayout.vue'),
        meta: {
          title: '布局'
        }
      }
    ]
  },
  {
    path: '/shortcut',
    name: 'shortcut',
    component: () => import('../views/shortcut/Shortcut.vue'),
    meta: { title: '快捷菜单', icon: 'el-icon-s-promotion' }
  }
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: defaultRouters
})
//路由守卫
router.beforeEach((to, from, next) => {
  NProgress.start()
  store.commit('getRouterMenus', defaultRouters)
  next()
})
router.afterEach(() => {
  NProgress.done()
})
export default router
