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
      title: "订单确认",
      tip: ""
    }
  },
  mounted () {
    let path = this.$route.path;
    if(path == '/order/confirm') {
      this.title = "订单确认";
      this.tip = "请认真填写收货地址";
    } else if (path == '/order/list') {
      this.title = "订单列表";
      this.tip = "请谨防钓鱼链接或诈骗电话，了解更多>";
    } else if (path == '/orderPay') {
      this.title = "订单支付";
      this.tip = "请谨防钓鱼链接或诈骗电话，了解更多>";
    } else {
      this.title = "订单支付";
      this.tip = "请谨防钓鱼链接或诈骗电话，了解更多>";
    }
  }
}
</script>

<style>
</style>