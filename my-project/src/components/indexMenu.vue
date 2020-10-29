<template>
  <ul class="menu">
    <a class="menu-a" v-for="(item,index) in menuList" :key="index">
      <span> {{ item.name }} </span>
      <i class="fa fa-chevron-right"></i>
    </a>
  </ul>
</template>

<script>
export default {
  name: 'indexMenu',
  data () {
    return {
      menuList: [
        { name: "手机 电话卡", url: '' },
        { name: "电视 盒子", url: '' },
        { name: "笔记本 显示器", url: '' },
        { name: "家电 插线板", url: '' },
        { name: "出行 穿戴", url: '' },
        { name: "智能 路由器", url: '' },
        { name: "电源 配件", url: '' },
        { name: "健康 儿童", url: '' },
        { name: "健康 儿童", url: '' },
        { name: "生活 箱包", url: '' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/index.scss";
.menu {
  @include absolute0();
  padding: 20px 0;
  width: $index_swiper_width;
  height: $index_swiper_height - 40px;
  background-color: rgba(105,101,101,.6);
  font-size: $fontJ;
  color: #fff;
  z-index: $index_menu_index;

  &-a {
    display: block;
    position: relative;
    padding-left: 30px;
    height: ($index_swiper_height - 40px)/10;
    line-height: ($index_swiper_height - 40px)/10;
    .fa {
      position: absolute;
      right: 20px;
      top: (($index_swiper_height - 40px)/10 - 14px)/2;
    }
  }

}
</style>
