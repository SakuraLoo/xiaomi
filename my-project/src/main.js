// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Vuex from 'vuex'
import store from './store/index'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import { Message } from 'element-ui'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from 'axios'
import ElementUI from 'element-ui'

import './assets/scss/index.scss'
import 'swiper/swiper-bundle.css'
import 'font-awesome/css/font-awesome.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'jquery'

Vue.use(Vuex)
Vue.use(VueCookie);
Vue.use(VueAwesomeSwiper);
Vue.use(ElementUI);
Vue.use(VueLazyLoad, {
  loading: require('./assets/imgs/loading-svg/loading-bars.svg')
});

Vue.prototype.$axios = axios;
Vue.prototype.$http = axios;
Vue.prototype.$message = Message;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})