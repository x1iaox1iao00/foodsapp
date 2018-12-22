import Vue from 'vue'
import Router from 'vue-router'
import goods from '../pages/goods/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'goods',
      redirect: '/goods' //默认首页
    },
    {
      path: '/goods',
      name: 'goods',   //商品页
      component: goods
    },
    {
      path: '/ratings',
      name: 'ratings', //评价
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ()=>import('../pages/ratings/index')
    },
    {
      path: '/seller',
      name: 'seller',//商家信息
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    component: ()=>import('../pages/seller/index')
    },
    // {
    //   path: '/info',
    //   name: 'info',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    // component: ()=>import('../pages/goods/info')
    // }
  ]
})
