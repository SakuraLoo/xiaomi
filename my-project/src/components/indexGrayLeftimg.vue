<template>
    <a class="indexFlash-a"><img :src="img"/></a>
</template>

<script>
export default {
  name: 'indexGrayLeftimg',
  props: {
    img: String
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/index.scss";
.indexFlash-a {
  display: block;
  width: $index_menu_width;
  height: 614px;
  img {
    width: 100%;
  }
}
</style>
