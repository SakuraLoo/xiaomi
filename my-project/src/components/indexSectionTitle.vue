<template>
  <div class="title_bar">
    <div class="graybc_title">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'indexSectionTitle'
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/index.scss";
.title_bar {
  width: $index_menu_width;
  height: 58px;
  line-height: 58px;
  .graybc_title {
    font-size: $fontF;
    color: $colorB;
    font-weight: 300;
  }
}
</style>
