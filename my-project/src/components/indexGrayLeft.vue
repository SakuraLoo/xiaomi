<template>
  <div class="leftbar">
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
.leftbar {
  float: left;
  width: $index_menu_width;
  min-height: 10px;
}
</style>
