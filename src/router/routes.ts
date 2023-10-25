import { AuthEnum } from '@/common/access/authEnum'
import type { RouteRecordRaw } from 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    title: string
    requiredAuth?: AuthEnum
  }
}

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'nav' /*导航栏*/,
    redirect: '/home',
    component: () => import('@/layouts/BasicLayout.vue'),
    children: [
      {
        path: '/home',
        meta: { title: '主页' },
        component: () => import('@/views/HomeView.vue')
      },
      {
        path: '/taxi',
        meta: { title: '打车' },
        component: () => import('@/views/TaxiView.vue')
      },
      {
        path: '/ticket',
        meta: { title: '订票' },
        component: () => import('@/views/NotFoundView.vue')
      },
      {
        path: '/about',
        meta: { title: '关于' },
        component: () => import('@/views/AboutView.vue')
      }
    ]
  },
  {
    path: '/login',
    meta: { title: '登录' },
    component: () => import('@/views/LoginView.vue')
  },
  {
    path: '/',
    component: () => import('@/layouts/BasicLayout.vue'),
    children: [
      {
        path: '/404',
        meta: { title: 'Error' },
        component: () => import('@/views/NotFoundView.vue')
      }
    ]
  }
]

export default routes
