<template>
  <div class="indexFlashSwiper">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="(item,index) in swiperList" :key="index" class="flash_slider">
        <a class="flash_slider_a" :href="'/#/product/'+item.id">
          <div class="swiper_img">
            <img :src="item.img" alt="" class="slide_img"/>
          </div>
          <label> {{ item.title }} </label>
          <p> {{ item.subtitle }} </p>
          <span class="price_now"> {{ item.price }}元 </span>
          <span class="price_pre"> {{ item.pricePre }}元 </span>
        </a>
      </swiper-slide>
      <!-- pagination -->
      <div class="swiper-pagination" id="pagination" slot="pagination"></div>
      <div class="swiper-button swiper-button-prev indexFlash_swiperBtn" slot="button-prev"><i class="fa fa-angle-left"></i></div>
      <div class="swiper-button swiper-button-next indexFlash_swiperBtn" slot="button-next"><i class="fa fa-angle-right"></i></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'indexFlashSwiper',
  data() {
    return {
      swiperList: [
        { id: 1, img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d5d783720dd5fc9fc953b704b2b959f9.png?thumb=1&w=200&h=200&f=webp&q=90', title: '米家蓝牙温湿度计 2 白色', subtitle: '冷暖干湿,一望而知', price: 9.9, pricePre: 29 },
        { id: 2, img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7827f0294b27dddf5c696cb7c9c36b76.png?thumb=1&w=200&h=200&f=webp&q=90', title: '小米无线鼠标 Lite 黑色', subtitle: '简约设计，轻盈握感', price: 29, pricePre: 39 },
        { id: 3, img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/66c181d5618d26feba7d0a2c89239013.png?thumb=1&w=200&h=200&f=webp&q=90', title: '小米移动电源3 10000mAh快充版 黑色', subtitle: '铝合金金属外壳', price: 69, pricePre: 79 },
        { id: 4, img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/491bb71855dd8cede61e5d1d9eba494e.png?thumb=1&w=200&h=200&f=webp&q=90', title: '圈厨多功能涮烤锅 黑色火锅盘圈厨多功能涮烤锅', subtitle: '深浅双盘多用途', price: 299, pricePre: 399 },
        { id: 5, img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/730055892c1afa7b6d8128c0938b5277.png?thumb=1&w=200&h=200&f=webp&q=90', title: '日常元素抽纸 青春版 24包/箱', subtitle: '精选原生竹浆，健康环保', price: 27.9, pricePre: 32.9 },
        { id: 6, img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ac1d664d0028eb0990f635ff5bc1acfe.png?thumb=1&w=200&h=200&f=webp&q=90', title: '小米对讲机Lite 白色', subtitle: '小米对讲机Lite', price: 99, pricePre: 129 },
        { id: 7, img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/036a31c8c6b42d14626dcb2ea7ab41e7.png?thumb=1&w=200&h=200&f=webp&q=90', title: 'RedmiBook Air 13 I5/16G/512G/2.5K100%sRGB 灰色', subtitle: '轻盈便携 | 轻松办公', price: 4799, pricePre: 5499 }
      ],
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 10,
        slidesPerGroup: 4,
        loopFillGroupWithBlank: true,
        autoplay: {
          delay: 6000,
          disableOnInteraction: false
        },
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
.indexFlashSwiper {
  position: absolute;
  top: 0;
  right: 0;
  width: $min-width - $index_menu_width - 10px;
  height: $index_flash_height;
  .flash_slider {
    width: ($min-width - $index_menu_width - 30px)/4;
    height: $index_flash_height;
    margin-top: 58px;
    text-align: center;
    border-top: 1px solid;
    * {
      line-height: 24px;
      font-size: $fontJ;
    }
    .flash_slider_a {
      display: block;
      padding-top: 39px;
      height: calc(100% - 39px - 1px);
      background-color: #fff;
      color: #b0b0b0;
      .swiper_img {
        margin: 0 auto 22px;
        width: 160px;
        height: 160px;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
      label {
        display: block;
        width: 80%;
        margin-left: 10%;
        font-size: $fontJ;
        font-weight: 400;
        color: #212121;
        @include ellipsis();
      }
      p {
        margin-bottom: 10px;
      }
      span.price_now {
        color: $colorA;
      }
      span.price_pre {
        margin-left: 2px;
        text-decoration: line-through;
      }
    }

    &:nth-child(4n-3) {
      border-top-color: #ffac13;
    }
    &:nth-child(4n-2) {
      border-top-color: #83c44e;
    }
    &:nth-child(4n-1) {
      border-top-color: #2196f3;
    }
    &:nth-child(4n) {
      border-top-color: #e53935;
    }

  }
  .indexFlash_swiperBtn {
    position: absolute;
    top: 22px;
    width: 36px;
    height: 24px;
    border: 1px #e0e0e0 solid;
    text-align: center;
    cursor: pointer;

    &.swiper-button-prev {
      left: $min-width - $index_menu_width - 10px - 36px*2;
      border-right: 0;
    }
    &.swiper-button-next {
      right: 0;
    }
    &.swiper-button-prev:after, &.swiper-container-rtl .swiper-button-next:after,
    &.swiper-button-next:after, &.swiper-container-rtl .swiper-button-prev:after {
      content: "";
    }

    i {
      font-size: 22px;
      color: #b0b0b0;
    }
    &:hover i {
      color: #ff6700;
      transition: all .2s ease;
    }

  }
}
</style>