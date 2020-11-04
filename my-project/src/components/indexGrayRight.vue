<template>
  <div class="rightbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'indexGrayLeft'
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/index.scss";
.rightbar {
  float: left;
  width: $min-width - $index_menu_width - 10px;
  min-height: 10px;
  margin-left: 10px;
}
</style>
