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
      icon: 'home'
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
    path: '/shortcut',
    name: 'shortcut',
    component: () => import('../views/shortcut/Shortcut.vue'),
    meta: { title: '快捷菜单', icon: 'promotion' }
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
