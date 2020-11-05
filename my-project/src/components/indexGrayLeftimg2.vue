<template>
  <div>
    <a class="indexFlash-a"><img :src="img"/></a>
    <a class="indexFlash-a"><img :src="img2"/></a>
  </div>
</template>

<script>
export default {
  name: 'indexGrayLeftimg2',
  props: {
    img: String,
    img2: String
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/index.scss";
.indexFlash-a {
  display: block;
  width: $index_menu_width;
  height: 300px;
  &:first-child {
    margin-bottom: 14px;
  }
  img {
    width: 100%;
  }
}
</style>
