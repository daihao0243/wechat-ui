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
        path: '/setting',
        name: 'setting',
        meta: {
          __title__: '个人设置'
        },
        component: () => import('@/views/setting'),
      }, {
        path: '/setting/sjhsz',
        name: 'settingSjhsz',
        meta: {
          __title__: '手机号设置'
        },
        component: () => import('@/views/setting/sjhsz'),
      }, {
        path: '/setting/xgmm',
        name: 'settingXgmm',
        meta: {
          __title__: '修改密码'
        },
        component: () => import('@/views/setting/xgmm'),
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
    }, {
      path: '/notfound',
      name: 'notfound',
      meta: {},
      component: () => import('@/views/notfound'),
    }, {
      path: '/404',
      meta: {
        title: '',
      },
      component: () => import('@/views/notfound'),
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/404'
    },
  ]
})
router.beforeEach((to, from, next) => {
  const menus = userStore().menu;
  const hasRouter = userStore().hasRouter;
  if (!hasRouter) {
    let redirectedUrl = to.redirectedFrom;
    userStore().hasRouter = true;
    let routers = menus.map((item, index) => {
      let {
        url,
        name = 'Page-' + index,
        path,
        title,
      } = item;
      if (url) {
        try {
          let page = import('@/views' + url).then(res => {
            return res;
          }).catch(error => {
            return import('@/views/notfound');
          })
          // let component = {
          //   name,
          //   template: '<Page></Page>',
          //   components: {
          //     'Page': () => page,
          //   }
          // }

          router.addRoute('index', {
            path: url,
            name,
            meta: {
              __title__: title,
              keepAlive: true,
              requireLogin: true,
            },
            component: () => page
          });
        } catch (error) {
          console.warn(error)
        }
      }
      return {}
    })
    if (redirectedUrl) {
      next(redirectedUrl);
      return
    }
  }
  next()


})

export default router;