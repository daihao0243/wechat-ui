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
    children: [{
      path: '/',
      name: 'main',
      meta: {
        keepAlive: true
      },
      component: () => import('@/views/main'),
    }, {
      path: '/tqyw/zftqxx',
      name: 'zftqxx',
      meta: {
        keepAlive: true,
        title: '住房提取申请'
      },
      component: () => import('@/views/tqyw/zftqxx'),
    }, {
      path: '/tqyw/xhtqSq',
      name: 'xhtqSq',
      meta: {
        keepAlive: true,
        title: '离退休提取申请'
      },
      component: () => import('@/views/tqyw/xhtqSq'),
    }, {
      path: '/page/status/:type',
      name: 'status',
      meta: {
        title: ''
      },
      component: () => import('@/views/status'),
    }]
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
  }]
})
// router.beforeEach((to, from, next) => {
//   var userAgent = window.navigator.userAgent;

//   if (to.path == '/' && userAgent.indexOf("Mobile") >= 0 && to.path != '/mobile') {
//     console.log('ggg');
//     next('/mobile')
//   }
//   next()


// })

export default router;