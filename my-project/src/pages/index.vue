<template>
  <div>
    <section class="container">
      <index-menu></index-menu>
      <index-swiper></index-swiper>
      <index-ad></index-ad>
    </section>
    <section class="gray_bc">
      <section class="container">
        <index-flash></index-flash>
        <index-phone></index-phone>
        <index-home></index-home>
        <index-smart></index-smart>
      </section>
    </section>
    <section class="container">
      <index-servicebar></index-servicebar>
    </section>
  </div>
</template>

<script>
import indexMenu from '../components/indexMenu'
import indexSwiper from '../components/indexSwiper'
import indexAd from '../components/indexAd'
import indexFlash from '../components/indexFlash'
import indexPhone from '../components/indexPhone'
import indexHome from '../components/indexHome'
import indexSmart from '../components/indexSmart'
import indexServicebar from '../components/indexServicebar'
export default {
  components: {
    indexMenu,indexSwiper,indexAd,indexFlash,indexPhone,indexHome,indexSmart,indexServicebar
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/index.scss";
section {
  display: block;
}
.gray_bc {
  width: 100%;
  background-color: $colorJ;
  @include clearBoth();
}
.container {
  @include clearBoth();
}
</style>
