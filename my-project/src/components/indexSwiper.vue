<template>
  <div class="indexSwiper">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="(item,index) in swiperList" :key="index">
        <a :href="'/#/product/'+item.id"><img :src="item.img" alt="" class="slide_img"/></a>
      </swiper-slide>
      <!-- pagination -->
      <div class="swiper-pagination" id="pagination" slot="pagination"></div>
      <div class="swiper-button swiper-button-prev swiper-button-white" slot="button-prev" @click="prev"></div>
      <div class="swiper-button swiper-button-next swiper-button-white" slot="button-next" @click="next"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'indexSwiper',
  data() {
    return {
      swiperList: [
        { id: 1, img: require('../assets/imgs/slider/slide-1.jpg') },
        { id: 2, img: require('../assets/imgs/slider/slide-2.jpg') },
        { id: 3, img: require('../assets/imgs/slider/slide-3.jpg') },
        { id: 4, img: require('../assets/imgs/slider/slide-4.jpg') },
        { id: 5, img: require('../assets/imgs/slider/slide-5.jpg') }
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
          el: '.swiper-pagination',
          clickable: true
        },
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  methods: {
    prev() {
      this.$el.swiper.slidePrev();
    },
    next() {
      this.$el.swiper.slideNext();
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/index.scss";
.indexSwiper {
  z-index: $index_menu_swiper;
}
.swiper {
  height: $index_swiper_height;
  .swiper-slide {
    @include flexCenter();
    .slide_img {
      @include absolute0();
    }
  }
  .swiper-pagination {
    /deep/ .swiper-pagination-bullet.swiper-pagination-bullet-active {
      background-color: #fff;
    }
  }
  .swiper-button {
    padding: 20px 10px;
    transform: scale(0.8);
    border-radius: 3px;
  }
  .swiper-button:hover {
    background-color: rgba(0, 0, 0, 0.473);
    transition: all .2s ease;
  }
  .swiper-button-prev {
    position: absolute;
    left: $index_swiper_width + 10px;
  }
}
</style>