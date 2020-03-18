import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import Home from '../components/Home'
import Welcome from '../components/Welcome'
import Users from '../components/users/Users'

Vue.use(VueRouter)


// 挂载路由导航守卫
const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: '',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      redirect: '/welcome',
      component: Home, children: [
        { path: '/welcome', component: Welcome },
        { path: '/users', component: Users }
      ]
    }

  ]
})

router.beforeEach((to, from, next) => {
  // to 将要访问的路径
  // from 从哪个路径来
  // next 是一个函数，表示放行  next()--放行  next('/login')-- 强制跳转

  if (to.path == '/login') return next();
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()

})


export default router
