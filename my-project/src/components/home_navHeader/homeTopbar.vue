<template>
  <div class="topbar">
    <div class="topbar-container">
      <ul>
        <a v-for="(item,index) in menuList" :key="index"> {{ item.title }} </a>
      </ul>
      <ul>
        <a v-if="username"> {{ username }} </a>
        <a v-if="!username" @click="login">登录</a>
        <a>我的订单</a>
        <a class="my-cart" @click="GotoCart"><i class="iconfont icon-cart"></i>购物车</a>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homeTopbar',
  methods: {
    GotoCart () {
      this.$router.push('/cart')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/index.scss";
.topbar {
  background-color: #333;
  color: #b0b0b0;

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
    }

  }
}
</style>