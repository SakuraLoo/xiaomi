import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import home from '@/pages/home'
import alipay from '@/pages/alipay'
import cart from '@/pages/cart'
import login from '@/pages/login'
import order from '@/pages/order'
import orderConfirm from '@/pages/orderConfirm'
import orderList from '@/pages/orderList'
import orderPay from '@/pages/orderPay'
import product from '@/pages/product'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'home',
      component:home,
      redirect:'/index',
      children:[
        {
          path: '/index',
          name: 'index',
          component: index
        }
      ]
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
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/order',
      name: 'order',
      component: order
    },
    {
      path: '/orderConfirm',
      name: 'orderConfirm',
      component: orderConfirm
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
    },
    {
      path: '/product',
      name: 'product',
      component: product
    }
  ]
})
