<template>
  <div class="title_bar">
    <div class="graybc_title"> {{ title }} </div>
    <div class="graybc_con">
      <slot></slot>
    </div>
    <a class="indexFlash-a"><img v-lazy="img"/></a>
  </div>
</template>

<script>
export default {
  name: 'indexGray',
  props: {
    title: {
      type: String
    },
    img: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/index.scss";
.title_bar {
  width: 50%;
  .graybc_title {
    height: 58px;
    line-height: 58px;
    font-size: $fontF;
    color: $colorB;
    font-weight: 300;
  }
  .graybc_con {
    display: block;
    width: $min-width;
    height: auto;
    @include clearBoth();
  }
  .indexFlash-a {
    display: block;
    width: $min-width;
    height: 120px;
    padding: 22px 0;
    img {
      width: 100%;
    }
  }
}
</style>