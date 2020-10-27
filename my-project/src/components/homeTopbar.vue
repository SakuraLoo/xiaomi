<template>
  <div class="topbar">
    <div class="topbar-container">
      <ul>
        <a v-for="(item,index) in menuList" :key="index"> {{ item.title }} </a>
      </ul>
      <ul>
        <a v-if="username" @click="GotoLogin">登录</a>
        <a v-if="!username">我的订单</a>
        <a v-if="username" class="my-cart"><i class="iconfont icon-cart" @click="GotoCart"></i>购物车</a>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homeTopbar',
  data () {
    return {
      username: "",
      menuList: [
        { title: "小米商城" },
        { title: "MIUI" },
        { title: "IoT" },
        { title: "金融" },
        { title: "有品" },
        { title: "小爱开放平台" },
        { title: "企业团购" },
        { title: "资质证照" },
        { title: "协议规则" },
        { title: "下载app" },
        { title: "智能生活" },
        { title: "Select Location" }
      ]
    }
  },
  methods: {
    GotoLogin () {
      this.$router.push('/login');
    },
    GotoCart () {
      this.$router.push('/cart');
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/index.scss";
.topbar {
  background-color: #333;
  color: #b0b0b0;
  &:after {
    content: "";
    height: 0;
    display: block;
    clear: both;
  }
  * {
    height: $home_header_height;
    line-height: $home_header_height;
  }
  &-container {
    width: $min-width;
    margin: 0 auto;
    @include flex();
    a {
      display: inline-block;
      color: #bbb;
      margin-right: 17px;
    }
    a:last-child {
      margin-right: 0;
    }
    a:hover {
      color: #eee;
      transition: all 0.2s ease;
    }
    .my-cart {
      position: relative;
      width: 110px;
      background-color: $colorA;
      text-align: center;
      color: #fff;
      .iconfont {
        margin-right: 5px;
      }
    }
  }
}
</style>
