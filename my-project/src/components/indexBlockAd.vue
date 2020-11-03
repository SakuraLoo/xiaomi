<template>
  <a class="indexFlash-a"><img :src="img"/></a>
</template>

<script>
export default {
  name: 'indexBlockAd',
  props: {
    img: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.indexFlash-a {
  display: block;
  padding: 22px 0;
}
</style>
