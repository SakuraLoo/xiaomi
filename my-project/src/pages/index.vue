<template>
  <div>
    <div class="container">
      <index-menu></index-menu>
      <index-swiper></index-swiper>
      <index-ad></index-ad>
      <index-servicebar></index-servicebar>
    </div>
  </div>
</template>

<script>
import indexMenu from '../components/indexMenu'
import indexSwiper from '../components/indexSwiper'
import indexAd from '../components/indexAd'
import indexServicebar from '../components/indexServicebar'
export default {
  components: {
    indexMenu,indexSwiper,indexAd,indexServicebar
  }
}
</script>