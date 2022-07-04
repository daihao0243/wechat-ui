import {
  createRouter,
  createWebHistory
} from 'vue-router'
const router = createRouter({
  history: createWebHistory(),
  // history: createWebHashHistory(process.env.BASE_URL),
  routes: [{
    path: '/',
    name: 'index',
    meta: {
      keepAlive: true
    },
    component: () => import('@/views/index'),
  }, {
    path: '/user',
    name: 'user',
    meta: {
      keepAlive: true
    },
    component: () => import('@/views/user'),
  }, {
    path: '/user/menu',
    name: 'menu',
    meta: {
      keepAlive: true
    },
    component: () => import('@/views/user/menu'),
  }, {
    path: '/login',
    name: 'login',
    meta: {
      keepAlive: true
    },
    component: () => import('@/views/login'),
  }, {
    path: '/register',
    name: 'register',
    meta: {
      keepAlive: true
    },
    component: () => import('@/views/register'),
  }, {
    path: '/demo',
    name: 'demo',
    meta: {
      keepAlive: true
    },
    component: () => import('@/views/demo'),
  }, {
    path: '/demo2',
    name: 'demo2',
    meta: {
      keepAlive: true
    },
    component: () => import('@/views/demo2'),
  }, {
    path: '/enter',
    name: 'enter',
    component: () => import('@/views/enter'),
  }, {
    path: '/mobile',
    name: 'mobile',
    meta: {
      keepAlive: true
    },
    component: () => import('@/views/mobile'),
  }]
})
router.beforeEach((to, from, next) => {
  var userAgent = window.navigator.userAgent;
  if (to.path == '/' && userAgent.indexOf("Mobile") >= 0 && to.path != '/mobile') {
    next('/mobile')
  } else {
    next()
  }


})

export default router;