import {
  createRouter,
  createWebHistory
} from 'vue-router'
import {
  userStore
} from '@/stores/user';
const router = createRouter({
  history: createWebHistory(),
  // history: createWebHashHistory(process.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        top: 0
      }
    }
  },
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
      path: '/xxcx/zhxx/jcxx',
      name: 'jcxx',
      meta: {
        keepAlive: true,
        title: '缴存信息'
      },
      component: () => import('@/views/xxcx/zhxx/jcxx'),
    }, {
      path: '/xxcx/zhxx/zhmx',
      name: 'zhmx',
      meta: {
        keepAlive: true,
        title: '账户明细'
      },
      component: () => import('@/views/xxcx/zhxx/zhmx'),
    }, {
      path: '/xxcx/zhxx/dkxx',
      name: 'dkxx',
      meta: {
        keepAlive: true,
        title: '贷款信息'
      },
      component: () => import('@/views/xxcx/zhxx/dkxx'),
    }, {
      path: '/xxcx/zhxx/dkhkmx',
      name: 'dkhkmx',
      meta: {
        keepAlive: true,
        title: '贷款还款明细'
      },
      component: () => import('@/views/xxcx/zhxx/dkhkmx'),
    }, {
      path: '/tqyw/wdcx',
      name: 'wdcx',
      meta: {
        keepAlive: true,
        title: '在线预约'
      },
      component: () => import('@/views/wdcx'),
    }, {
      path: '/page/status/:type',
      name: 'status',
      meta: {
        title: ''
      },
      component: () => import('@/views/status'), //操作状态页面
    }, {
      path: '/setting',
      name: 'setting',
      meta: {
        title: '个人设置'
      },
      component: () => import('@/views/setting'),
    }, {
      path: '/zxdt/news',
      name: 'setting',
      meta: {
        title: '新闻动态'
      },
      component: () => import('@/views/zxdt/news'),
    }, {
      path: '/zxdt/zcfg',
      name: 'zcfg',
      meta: {
        title: '政策法规'
      },
      component: () => import('@/views/zxdt/zcfg'),
    }, {
      path: '/zxdt/ywwd',
      name: 'ywwd',
      meta: {
        title: '业务网点'
      },
      component: () => import('@/views/zxdt/ywwd'),
    }, {
      path: '/zxdt/gjjll',
      name: 'gjjll',
      meta: {
        title: '公积金利率'
      },
      component: () => import('@/views/zxdt/gjjll'),
    }]
  }, {
    path: '/login',
    name: 'login',
    meta: {},
    component: () => import('@/views/login'),
  }, {
    path: '/register',
    name: 'register',
    meta: {},
    component: () => import('@/views/register'),
  }]
})
router.beforeResolve(() => {
  const menus = userStore().getMenu();
  let routers = menus.map(item => {
    let {
      url,
      name,
      path,
      title,
    } = item;
    if (url) {
      try {
        let page = import('@/views' + url).then(res => {
          return res;
        }).catch(error => {
          item.path = path;
          return import('@/views/notfound');
        })
      } catch (error) {
        console.warn(error)
      }
    }
    return {}
  })
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