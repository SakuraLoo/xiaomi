<template>
  <div>
    <div class="container">
      <index-menu></index-menu>
      <index-swiper></index-swiper>
      <index-servicebar></index-servicebar>
    </div>
  </div>
</template>

<script>
import indexMenu from '../components/indexMenu'
import indexSwiper from '../components/indexSwiper'
import indexServicebar from '../components/indexServicebar'
export default {
  components: {
    indexMenu,indexSwiper,indexServicebar
  }
}
</script>