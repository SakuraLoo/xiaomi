<template>
  <div>
    <index-section-title class="indexFlash_title">手机</index-section-title>
    <a class="leftbar" :href="leftbar.link">
      <img :src="leftbar.img"/>
    </a>
    <ul>
      <li v-for="(item,index) in phoneList" :key="index">
        <a class="flash_slider_a" :href="'/#/product/'+item.id">
          <div class="swiper_img">
            <img :src="item.img" alt="" class="slide_img"/>
          </div>
          <label> {{ item.title }} </label>
          <p> {{ item.subtitle }} </p>
          <span class="price_now"> {{ item.price }}元起 </span>
          <span class="price_pre"> {{ item.pricePre }}元 </span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import indexSectionTitle from '../components/indexSectionTitle'
export default {
  name: 'indexPhone',
  components: {
    indexSectionTitle
  },
  data () {
    return {
      leftbar: { link: '', img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/574c6643ab91c6618bfb2d0e2c761d0b.jpg?thumb=1&w=234&h=614&f=webp&q=90' },
      phoneList: [
        { id: 1, img: '' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/index.scss";
.leftbar {
  display: block;
  width: $index_menu_width;
  height: 614px;
  img {
    width: 100%;
  }
}
</style>