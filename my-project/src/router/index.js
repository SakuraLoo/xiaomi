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

// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next();
  } else {
    let token = localStorage.getItem('Authorization');
 
    if (token === 'null' || token === '') {
      next('/login');
    } else {
      next();
    }
  }
});
export default router;