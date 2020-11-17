<template>
  <div>
    <order-header :title="title">
      <template v-slot:tip>
        <span> {{ tip }} </span>
      </template>
    </order-header>
    <router-view></router-view>
    <service-bar></service-bar>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import OrderHeader from '../components/OrderHeader'
import ServiceBar from '../components/indexServicebar'
import NavFooter from '../components/homeFooter'
export default {
  name: 'order',
  components: {
    OrderHeader,ServiceBar,NavFooter
  },
  data () {
    return {
      title: "确认订单",
      tip: ""
    }
  }
}
</script>

<style>
</style>
