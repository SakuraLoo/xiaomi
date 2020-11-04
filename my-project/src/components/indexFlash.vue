<template>
  <div class="indexFlash">
    <index-gray :title="blockTitle" :img="blockImg" >
      <index-gray-left>
        <flash-countdown></flash-countdown>
      </index-gray-left>
      <index-gray-right>
        <index-flash-swiper></index-flash-swiper>
      </index-gray-right>
    </index-gray>
  </div>
</template>

<script>
import indexGray from '../components/indexGray'
import indexGrayLeft from '../components/indexGrayLeft'
import indexGrayRight from '../components/indexGrayRight'
import indexSectionTitle from '../components/indexSectionTitle'
import flashCountdown from '../components/flashCountdown'
import indexFlashSwiper from '../components/indexFlashSwiper'
export default {
  name: 'indexFlash',
  components: {
    indexGray,indexGrayLeft,indexGrayRight,indexSectionTitle,flashCountdown,indexFlashSwiper
  },
  data () {
    return {
      blockTitle: '小米闪购',
      blockImg: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e99b88a8a39fbbd55177aea30e640557.jpg?thumb=1&w=1226&h=120&f=webp&q=90',
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
