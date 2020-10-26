// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Vuex from 'vuex'
import store from './store/index'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import { Message } from 'element-ui'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'element-ui/lib/theme-chalk/index.css'
import './assets/scss/index.scss'
import './assets/fonts/iconfont.css'
import 'swiper/swiper-bundle.css'

Vue.use(VueAwesomeSwiper);

Vue.use(Vuex)
Vue.use(VueAxios,axios)
Vue.use(VueCookie);
Vue.use(VueLazyLoad);

Vue.prototype.$message = Message;
Vue.prototype.$ajax = axios;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
