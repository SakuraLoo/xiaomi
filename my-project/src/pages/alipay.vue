<template>
  <div class="ali-pay">
    <loading v-if="loading"></loading>
    <div id="form" v-html="content"></div>
  </div>
</template>
<script>
  import Loading from '../components/Loading'
  export default{
    name:'alipay',
    components:{
      Loading
    },
    data(){
      return {
        orderId: 0,
        content:'',
        loading:true
      }
    },
    mounted(){
      this.paySubmit();
    },
    methods:{
      paySubmit(){
        this.$axios.post('http://mock.shtodream.cn/mock/5fa8fc178e13766542114da6/mimal/pay', {
          orderId: this.$route.params.orderId,
          orderName:'Vue高仿小米商城',
          amount:0.01,//单位元
          payType:1 //1支付宝，2微信
        }).then((res)=>{
          // this.content = res.data.data.content;
          this.content = ""; // 支付宝的网址，需要后台的支持
          setTimeout(()=>{
            $('.form').submit();
          },100)
        })
      }
    }
  }
</script>