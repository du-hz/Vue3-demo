// import VueRouter from 'vue-router'
import { 
  createRouter,
  // createWebHashHistory, 
  createWebHistory 
} from 'vue-router'

const routes = [
  {
    path: '/',
    // redirect: '/home'
    redirect: () => {
      // console.log(to)
      return {path: '/home'}
    }
  },
  {
    path: '/home',
    component: () => import("@/views/home"),
    children: [{
      path: 'styleOne',
      component: () => import("@/views/stylePage/1")
    }, {
      path: 'styleTwo',
      component: () => import("@/views/stylePage/2")
    }]
  }, {
    path: '/type/:id',
    props: true,
    component: () => import("@/views/type")
  }, {
    path: '/user',
    // alias: '/dhz',
    alias: ['/dhz', '/br'],
    component: () => import("@/views/user")
  }, {
    path: '/shop/:id',
    components: {
      default: () => import("@/views/shop/one"),
      shopTop: () => import("@/views/shop/two"),
      shopFooter: () => import("@/views/shop/three")
    },
    props: {
      default: true,
      shopTop: false,
      shopFooter: false
    },
    // 路由独享的守卫
    beforeEnter: (to, from, next) => {
      console.log(to)
      console.log(from)
      if(to.params.id == 666) {
        console.log('成功');
        next();
      }
    }
  }
]
// hash模式带有哈希字符（#），后面的URL不会发送至服务器，，因为浏览器没有发送请求所以不会刷新页面这样就对性能有提高，对SEO有不好的影响
// history模式，没有#，需要后端配置，没有配置就会404
// const router = new VueRouter({
//   base: '/',
//   mode: 'history',
//   routes
// })

const router = createRouter({
  // history: createWebHashHistory(),/
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  // console.log(to)
  // console.log(from)
  next();
})

export default router;