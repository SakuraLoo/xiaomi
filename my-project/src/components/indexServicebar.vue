<template>
  <div class="service">
    <ul>
      <li><span class="icon-setting"></span>预约维修服务</li>
      <li><span class="icon-7day"></span>7天无理由退货</li>
      <li><span class="icon-15day"></span>15天免费换货</li>
      <li><span class="icon-post"></span>满150元包邮</li>
    </ul>
  </div>
</template>
<script>
  export default{
    name:'indexServicebar'
  }
</script>
<style lang="scss">
  @import './../assets/scss/mixin.scss';
  .service {
    padding: 27px 0 !important;
    background-color: #fff;
    color: #666666;
    font-size: 0;

    li {
      display: inline-block;
      width: calc((100% - 3px)/4);
      text-align: center;
      border-right: 1px solid #E5E5E5;
      font-size: 16px;

      &:last-child {
        border-right: 0;
      }
      span {
        display: inline-block;
        width: 20px;
        height: 20px;
        vertical-align: middle;
        margin-right: 8px;
      }
      .icon-setting {
        @include bgImg(20px,20px,'../assets/imgs/icon-setting.png');
      }
      .icon-7day {
        @include bgImg(20px,20px,'../assets/imgs/icon-7day.png');
      }
      .icon-15day {
        @include bgImg(20px,20px,'../assets/imgs/icon-15day.png');
      }
      .icon-post {
        @include bgImg(20px,20px,'../assets/imgs/icon-post.png');
      }

    }

  }
</style>