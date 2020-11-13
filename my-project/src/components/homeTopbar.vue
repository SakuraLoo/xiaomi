<template>
  <div class="topbar">
    <div class="topbar-container">
      <ul>
        <a v-for="(item,index) in menuList" :key="index"> {{ item.title }} </a>
      </ul>
      <ul>
        <el-dropdown @command="handleCommand" v-if="name">
          <a class="el-dropdown-link">
            {{name}}
          </a>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="qiut">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <!-- <a v-if="name">{{name}}</a> -->
        <a v-if="!name" @click="GotoLogin">登录</a>
        <a v-if="!name" @click="GotoRegister">注册</a>
        <a v-if="name">我的订单</a>
        <a class="my-cart"><i class="fa fa-cart-plus" @click="GotoCart"></i>购物车</a>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { setCookie,getCookie,delCookie } from '../assets/js/cookie.js'
export default {
  name: 'homeTopbar',
  data () {
    return {
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
      ],
      name: ''
    }
  },
  mounted() {
    console.log(this.$store);
    
    /*页面挂载获取保存的cookie值，渲染到页面上*/
    let uname = getCookie('username')
    this.name = uname
    /*如果cookie不存在，则跳转到登录页*/
    // if(uname == ""){
    //     this.$router.push('/login')
    // }
  },
  computed:{
    ...mapMutations(['username','cartCount'])
  },
  methods: {
    GotoLogin () {
      this.$router.push('/login');
    },
    GotoRegister () {
      this.$router.push('/register');
    },
    GotoCart () {
      this.$router.push('/cart');
    },
    handleCommand(command) {
      delCookie('username');
      this.name = "";
    }
  }
}
</script>

<!--style lang="scss" scoped-->
<style lang="scss">
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
    a:hover {
      color: #eee;
      transition: all 0.2s ease;
    }

    .topbar-container a:hover {
      margin-right: 17px !important;
    }
    el-dropdown-item {
      width: 100px;
    }

    .my-cart {
      position: relative;
      margin-right: 0;
      width: 110px;
      background-color: $colorA;
      text-align: center;
      color: #fff;
      .fa {
        margin-right: 5px;
      }
    }
  }
}
</style>
