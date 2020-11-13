<template>
  <div class="order-header">
    <div class="container clearfix">
      <div class="header-logo"><a href="/#/index"></a></div>
      <div class="title">
        <h2>{{title}}<slot name="tip"></slot></h2>
      </div>
      <div class="username">
        <a href="javascript:;">{{name}}</a>
      </div>
    </div>
  </div>
</template>
<script>
import {mapMutations,mapState} from 'vuex'
import { setCookie,getCookie,delCookie } from '../assets/js/cookie.js'
  export default{
    name:'order-header',
    props:{
      title:String
    },
    computed:{
      ...mapMutations(['name','cartCount']),
      name () {
        let username = getCookie('username');
        return username
      }
    }
  }
</script>
<style lang="scss">
@import "../assets/scss/index.scss";
  .order-header{
    display: flex;
    align-items: center;
    padding:30px 0;
    height: 100px;
    border-bottom:2px solid #FF6600;
    background-color: #fff;
    .header-logo {
      float: left;
      width: $home_logo_img_width;
      height: $home_logo_img_width;
      a {
        display: inline-block;
        width: $home_logo_img_width;
        height: $home_logo_img_width;
        overflow: hidden;
        background-color: $colorA;
        &:before {
          content: "";
          display: inline-block;
          @include bgImg($home_logo_img_width,$home_logo_img_width,'../assets/imgs/mi-logo.png');
          transition: margin .2s;
        }
        &:after {
          content: "";
          display: inline-block;
          @include bgImg($home_logo_img_width,$home_logo_img_width,'../assets/imgs/mi-home.png');
        }
        &:hover:before {
          margin-left: -$home_logo_img_width;
          transition: margin .2s;
        }
      }
    }
    .title,.username{
      display:inline-block;
      height:55px;
      line-height:55px;
    }
    .title{
      float:left;
      margin-left:54px;
      h2{
        font-size:28px;
        color:#333333;
      }
      span{
        font-size:14px;
        margin-left:17px;
        color:#999999;
        font-weight:200;
      }
    }
    .username{
      float:right;
      a{
        color:#666666;
        font-size:16px;
      }
    }
  }
</style>