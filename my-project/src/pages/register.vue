<template>
  <div class="register">
    <div class="contain">
      <router-link to="/home"><img src="../assets/imgs/logo-mi.png"/></router-link>
      <el-form ref="form" :model="form">
        <h1>注册小米账号</h1>
        <el-form-item label="账号">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <!-- <p>成功注册账号后，国家/地区将不能被修改</p> -->
        <el-form-item label="密码">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="register_btn" @click="register">立即注册</el-button>
        </el-form-item>
      </el-form>
      <p>已阅读并同意：小米<b>用户协议</b>和<b>隐私政策</b></p>
    </div>
    <div class="footer">
      <span class="footer-link">
        <a>简体</a><a>繁体</a><a>English</a><a>常见问题</a>
      </span>
      <p class="copyright">Copyright ©2019 mi.futurefe.com All Rights Reserved.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'register',
  data() {
    return {
      form: {
        name: '',
        password: ''
      }
    }
  },
  methods: {
    register(){
      if(this.newUsername == "" || this.newPassword == ""){
          alert("请输入用户名或密码")
      }else{
          let data = {'username':this.newUsername,'password':this.newPassword}
          this.$http.post(' http://mock.shtodream.cn/mock/5fa8fc178e13766542114da6/mimal/register',data).then((res)=>{
              console.log(res)
              if(res.statusText == "OK"){
                /*注册成功之后再跳回登录页*/
                this.$router.push('/login')
              }
          })
      }
  }
  }
}
</script>

<style lang="scss" scope>
@import "../assets/scss/index.scss";
@media screen {
  .contain {
    position: relative;
    top: calc((100% - 540px)/2);
    margin: 0 auto;
  }
}
body,html,#app {
  width: 100%;
  height: 100%;
}
.register {
  width: 100%;
  height: 100%;
  background-color: #f1f1f1;
  .contain {
    width: 780px;
    height: 540px;
    background-color: #fff;
    text-align: center;
    font-size: 14px;
    a {
      display: block;
      img {
        width: 48px;
      }
    }
    .el-form {
      margin: 40px auto 100px auto;
      width: 327px;
      text-align: left;
      h1 {
        font-size: 30px;
        font-weight: normal;
        text-align: center;
      }
      .el-form-item__label {
        color: #444;
      }
      .el-form-item:nth-child(2) {
        margin-top: 20px;
        margin-bottom: 5px;
      }
      .el-input__inner:focus {
        border-color: #DCDFE6;
      }
      .register_btn {
        width: 100%;
        background-color: $colorA;
        border: 0;
        border-radius: 0;
      }
    }
    
    p {
      color: #777;
      b {
        color: #444;
        margin: 0 3px;
      }
    }
  }
  
  .footer {
    // position: absolute;
    // bottom: 20px;
    position: relative;
    top: calc((100% - 540px)/2 + 49px*2);
    margin: 0 auto;
    width: 780px;
    text-align:center;
    font-size: 14px;
    .footer-link{
      width: auto;
      font-size: 0;
      a {
        display: inline-block;
        position: relative;
        padding: 0 10px;
        line-height: 20px;
        color:#999999;
        font-size: 14px;
        &:hover {
          color: #444;
        }
        &:after {
          content: "";
          position: absolute;
          top: (20px - 15px)/2;
          right: 0;
          width: 2px;
          height: 15px;
          background-color: #b0b0b0;
        }
        &:last-child:after {
          display: none;
        }
      }
    }
    .copyright {
      margin-top:13px;
    }
  }
}
</style>
