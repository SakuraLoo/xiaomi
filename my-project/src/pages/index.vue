<template>
  <div>
    <div class="container">
      <index-swiper></index-swiper>
      <index-servicebar></index-servicebar>
    </div>
  </div>
</template>

<script>
import indexSwiper from '../components/indexSwiper'
import indexServicebar from '../components/indexServicebar'
export default {
  components: {
    indexSwiper,indexServicebar
  }
}
</script>