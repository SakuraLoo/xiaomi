<template>
  <div>
    <div class="login" v-show="showLogin">
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
              <input type="text" placeholder="邮箱/手机号码/小米ID" v-model="username">
            </div>
            <div class="input">
              <input type="password" placeholder="密码" v-model="password">
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
              <div class="reg"><router-link to="/register">立即注册</router-link><span>|</span><a>忘记密码？</a></div>
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
  </div>
</template>
<script>
import {setCookie,getCookie} from '../assets/js/cookie.js'
export default {
  data () {
    return {
      product: {
        link: '/#/product/1',
        img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/72644d9b8031286de3cc74e151aefd90.jpg"
      },
      activeName: 'first',
      wrong: {
        username: false,
        password: false
      },
      iconList: [
        {link: "", icon: require('../assets/imgs/icons/qq.png')},
        {link: "", icon: require('../assets/imgs/icons/weibo.png')},
        {link: "", icon: require('../assets/imgs/icons/alipay.png')},
        {link: "", icon: require('../assets/imgs/icons/wechat.png')}
      ],
      
      showLogin: true,
      showRegister: false,
      showTishi: false,
      tishi: '',
      username: '',
      password: '',
      newUsername: '',
      newPassword: ''
    }
  },
  mounted(){
    /*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
    if(getCookie('username')){
        this.$router.push('/home')
    }
  },
  methods:{
    login(){
      let _this = this;
      if(this.username == "" || this.password == ""){
        alert("请输入用户名或密码")
      }else{
        let data = {'username':this.username,'password':this.password}
        /*接口请求*/
        this.$http.post(' http://mock.shtodream.cn/mock/5fa8fc178e13766542114da6/mimal/login',data).then((res)=>{
          if(_this.username != res.data.data.username) {
            this.wrong.username = true;
          } else if (_this.password != res.data.data.password) {
            this.wrong.password = true;
          } else {
            setCookie('username',this.username,1000*60)
            setTimeout(function(){
                this.$router.push('/')
            }.bind(this),1000)
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
        a:hover {
          color: $colorA;
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