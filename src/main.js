import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
//阻止启动生产消息，常用作指令。
//Vue.config.productionTip = false

//路由拦截, 拦截全部路由，每次操作路由都是被拦截进行判断
router.beforeEach((to, from, next) => {

  const token = localStorage.getItem('token')
  //筛选需要传token的页面, 匹配router里面需要登录的路径，如果匹配到就是true
  if (to.matched.some(record => record.meta.requiresAuth)) {
    //根据token是否为空判断是否跳转登录页
    if (token) {
      next()
    } else {
      next({ path: '/login'})
    }
  } else {
    next()
  }
})


// 整个应用只有一个Vue实例，其它的都是组件，router也只有一个
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
