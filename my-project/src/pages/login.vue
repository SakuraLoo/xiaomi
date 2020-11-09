<template>
  <div class="login">
    <div class="container">
      <a href="/#/index"><img src="../assets/imgs/login-logo.png" alt=""></a>
    </div>
    <a :href="product.link">
      <div class="wrapper" v-if="product.img" :style="{background: 'url('+ product.img +') no-repeat center',backgroundSize: 'cover'}"></div>
    </a>
    <div class="login-form">
      <el-tabs v-model="activeName" stretch>
        <el-tab-pane label="帐号登录" name="first">
          <div class="input">
            <input type="text" placeholder="邮箱/手机号码/小米ID" v-model="loginForm.username">
          </div>
          <div class="input">
            <input type="password" placeholder="密码" v-model="loginForm.password">
          </div>
          <div class="btn-box">
            <a class="btn" @click="login">登录</a>
          </div>
          <div class="tips">
            <p class="wrong">
              <span v-if="wrong.username == true || wrong.password == true">用户名或密码错误！</span>
              <span v-else></span>
            </p>
            <div class="sms">手机短信登录/注册</div>
            <div class="reg">立即注册<span>|</span>忘记密码？</div>
          </div>
          <div class="icons">
            <a v-for="(item,index) in iconList" :key="index" :href="item.link"><img :src="item.icon"/></a>
          </div>
        </el-tab-pane>
        <el-tab-pane label="扫码登录" name="second">
          <div class="scanCon">
            <canvas/>
            <p>使用<span>小米商城APP</span>扫一扫</p>
            <p>小米手机可打开「设置」>「小米帐号」扫码登录</p>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="footer">
      <div class="footer-link">
        <a href="https://www.imooc.com/u/1343480" target="_blank">河畔一角主页</a><span>|</span>
        <a href="https://coding.imooc.com/class/113.html" target="_blank">Vue全栈课程</a><span>|</span>
        <a href="https://coding.imooc.com/class/236.html" target="_blank">React全家桶课程</a><span>|</span>
        <a href="https://coding.imooc.com/class/343.html" target="_blank">微信支付专项课程（H5+小程序/云+Node+MongoDB）</a>
      </div>
      <p class="copyright">Copyright ©2019 mi.futurefe.com All Rights Reserved.</p>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex';
export default {
  data () {
    return {
      product: {
        link: '/#/product/1',
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/72644d9b8031286de3cc74e151aefd90.jpg"
      },
      activeName: 'first',
      loginForm: {
        username: '',
        password: ''
      },
      wrong: {
        username: false,
        password: false
      },
      iconList: [
        {link: "", icon: require('../assets/imgs/icons/qq.png')},
        {link: "", icon: require('../assets/imgs/icons/weibo.png')},
        {link: "", icon: require('../assets/imgs/icons/alipay.png')},
        {link: "", icon: require('../assets/imgs/icons/wechat.png')}
      ]
    }
  },
  methods: {
    ...mapMutations(['changeLogin']),
    login () {
      let _this = this;
      if (this.loginForm.username === '' || this.loginForm.password === '') {
        alert('账号或密码不能为空');
      } else {
        this.$axios({
          method: 'post',
          url: 'http://mock.shtodream.cn/mock/5f96744d04f654354c74d039/mimal/login',
          data: _this.loginForm
        }).then(res => {
          console.log(res.data);
          _this.userToken = 'Bearer ' + res.data.data.body.token;
          // 将用户token保存到vuex中
          _this.changeLogin({ Authorization: _this.userToken });
          if(_this.loginForm.username != res.data.data.username) {
            this.wrong.username = true;
          } else if (_this.loginForm.password != res.data.data.password) {
            this.wrong.password = true;
          } else {
            _this.$router.push('/home');
          }
        }).catch(error => {
          console.log('系统提示：账号或密码错误');
          console.log(error);
        });
      }
    }
  }
};
</script>
<style lang="scss">
@import "../assets/scss/index.scss";
.el-tabs__item.is-active,.el-tabs__item:hover {  
  color: #f56600;
}
.el-tabs__nav-wrap::after,.el-tabs__active-bar {
  display: none;
}
.el-tabs__item {
  position: relative;
  margin-top: 40px !important;
  line-height: 23px !important;
  font-size: 24px !important;
  color: #666;
}
#tab-first:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 2.5px;
  height: 26px;
  background: #e0e0e0;
}

.login{
  &>.container{
    height: 98px;
    img{
      width:auto;
      height:100%;
    }
  }

  .wrapper {
    height:576px;
  }
  .login-form{
    box-sizing: border-box;
    padding-left: 31px;
    padding-right: 31px;
    width:410px;
    height:510px;
    background-color:#ffffff;
    position:absolute;
    top: 130px;
    right: 200px;
    .input{
      display:inline-block;
      width:348px;
      height:50px;
      border:1px solid #E5E5E5;
      margin-bottom:20px;
      input{
        width: 100%;
        height: 100%;
        border: none;
        padding: 18px;
      }
    }
    .btn{
      width:100%;
      line-height:50px;
      margin-top:10px;
      font-size:16px;
    }
    .tips {
      position: relative;
      line-height: 30px;
      font-size: 14px;
      .wrong {
        position: absolute;
        top: 0;
        left: 0;
        height: 30px;
        line-height: 30px;
        font-size: 12px;
        span {
          color: #ff0000;
        }
      }
      .sms{
        color:#FF6600;
        text-align: center;
      }
      .reg{
        clear: both;
        margin-top: 20px;
        color:#999999;
        text-align: center;
        span{
          margin:0 7px;
        }
      }
    }
    .icons {
      margin: 50px auto;
      width: 60%;
      @include flex();  
      a {
        display: inline-block;
        width: 30px;
        height: 30px;
        font-size: 0;
        &:last-child {
          margin-right: 0;
        }
        img {
          width: 100%;
        }
      }
    }

    .scanCon {
      width: 100%;
      canvas {
        display: block;
        margin: 20px auto;
        width: 180px;
        height: 180px;
        background: url('../assets/imgs/scan.png') no-repeat center;
        background-size: 100%;
      }
      span {
        margin: 0 3px;
        color: #ff6700;
      }
      p {
        color: #757575;
        text-align: center;
        font-size: 14px;
      }
    }
  }

  .footer{  
    height:100px;
    padding-top:60px;
    color:#999999;
    font-size:16px;
    text-align:center;
    .footer-link{
      a{
        color:#999999;
        display:inline-block;
      }
      span{
        margin:0 10px;
      }
    }
    .copyright{
      margin-top:13px;
    }
  }
}
</style>