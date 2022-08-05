import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

Vue.use(VueRouter)
// 路由懒加载方式
const Tabbar = () => import('@/components/app-tabbar.vue')
const Home = () => import('@/views/home/index.vue')
const Question = () => import('@/views/question/index.vue')
const Video = () => import('@/views/video/index.vue')
const User = () => import('@/views/user/index.vue')
const Artcile = () => import('@/views/article/index.vue')
const Login = () => import('@/views/login/index.vue')

// 路由规则
const routes = [
  { path: '/', components: { default: Home, tabbar: Tabbar } },
  { path: '/question', components: { default: Question, tabbar: Tabbar } },
  { path: '/video', components: { default: Video, tabbar: Tabbar } },
  { path: '/user', components: { default: User, tabbar: Tabbar } },
  { path: '/article', component: Artcile },
  { path: '/login', component: Login }
]

const router = new VueRouter({
  routes
})

// 导航守卫:使用前置导航守卫拦截未登录却访问用户页面的情况
router.beforeEach((to, from, next) => {
  const token = store.state.user.token
  // 没登录却访问user下的路由
  if (!token && to.path.startsWith('/user')) {
    return next('/login?returnUrl=' + encodeURIComponent(to.fullPath))
  }
  // 其他情况放行
  next()
})

export default router
