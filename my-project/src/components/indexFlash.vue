<template>
  <div class="indexFlash">
    <index-section-title class="indexFlash_title">小米闪购</index-section-title>
    <flash-countdown></flash-countdown>
    <index-flash-swiper></index-flash-swiper>
    <index-block-ad :img="adImg"></index-block-ad>
  </div>
</template>

<script>
import indexSectionTitle from '../components/indexSectionTitle'
import flashCountdown from '../components/flashCountdown'
import indexFlashSwiper from '../components/indexFlashSwiper'
import indexBlockAd from '../components/indexBlockAd'
export default {
  name: 'indexFlash',
  components: {
    indexSectionTitle,flashCountdown,indexFlashSwiper,indexBlockAd
  },
  data () {
    return {
      adImg: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e99b88a8a39fbbd55177aea30e640557.jpg?thumb=1&w=1226&h=120&f=webp&q=90'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/index.scss";
.indexFlash {
  position: relative;
  .indexFlash_title {
    width: $index_menu_width;
  }
}
</style>
