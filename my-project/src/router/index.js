import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import home from '@/pages/home'
import alipay from '@/pages/alipay'
import cart from '@/pages/cart'
import login from '@/pages/login'
import register from '@/pages/register'
import order from '@/pages/order'
import orderList from '@/pages/orderList'
import orderPay from '@/pages/orderPay'

Vue.use(Router)

// export default new Router({
const router = new Router({
  routes: [
    {
      path:'/home',
      name:'home',
      component:home,
      redirect:'/index',
      children:[
        {
          path: '/index',
          name: 'index',
          component: index
        },
        {
          path: '/product/:id',
          name: 'product',
          component: () => import('../pages/product.vue')
        },
        {
          path: '/detail/:id',
          name: 'detail',
          component: () => import('../pages/detail.vue')
        }
      ],
      meta: {
        isLogin: true
      }
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/alipay',
      name: 'alipay',
      component: alipay
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/order',
      name: 'order',
      component: order,
      children:[
        {
          path: '/orderConfirm/:id',
          name: 'orderConfirm',
          component: () => import('../pages/orderConfirm.vue')
        }
      ]
    },
    {
      path: '/orderList',
      name: 'orderList',
      component: orderList
    },
    {
      path: '/orderPay',
      name: 'orderPay',
      component: orderPay
    }
  ]
})

export default router;