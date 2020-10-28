<template>
  <div class="indexSwiper">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="(item,index) in swiperList" :key="index">
        <img :src="item.imgUrl"/>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'indexSwiper',
  data() {
    return {
      swiperList: [
        {imgUrl: '../assets/imgs/ads/ads-1.png'}
      ],
      swiperOption: {
        effect: 'cube',
        grabCursor: true,
        cubeEffect: {
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94
        },
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/index.scss";
.indexSwiper {
  position: relative;
  overflow: hidden;
  height: 460px;
}
.swiper {
  height: 100%;
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: bold;
    font-size: 12px * 2;
    background-color: #2C8DFB;
    background-position: center;
    background-size: cover;
    color: #fff;
    .slide_bg {
      width: 100%;
      height: 100%;
    }
  }
  .swiper-pagination {
    /deep/ .swiper-pagination-bullet.swiper-pagination-bullet-active {
      background-color: #fff;
    }
  }
}
</style>
