import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',  //路由的路径
    name: 'Home',  //路由的名字，保持和组件名一直，也可以没有
    component: Home , //组件引用方式1，管你需要不需要，直接引用

  },
  {
    path: '/about',
    name: 'About',

    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'), //懒加载引用，需要的时候调用
    children: [ //子路由，在about.vue中嵌套之后可以跳转
      {
        path: "user",
        name: "HelloWorld",
        component: () => import("../components/HelloWorld.vue")
      }
    ]
  }, {
    path: "/info_show",
    name: "Info_show",
    component: () => import('../components/Info_show.vue'), //引用展示组件
  },
  {
    path: "/info_input",
    name: "Info_input",
    component: () => import('../components/Info_input.vue'), //引用展示组件
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
