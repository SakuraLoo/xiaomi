<template>
  <div class="menu">
    <div class="menu-item" v-for="(item,key) in menuList" :key="key">
      <span> {{ key }} </span>
      <ul class="children" v-if="item.length">
        <a class="product" v-for="(product,index) in item" :key="index" v-bind:href="'/#/product/'+item.id">
          <div class="pro-img"><img :src="product.imgUrl" :alt="product.name"/></div>
          <div class="pro-name"> {{ product.name }} </div>
          <div class="pro-price"> {{ product.price }}元起 </div>
        </a>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'homeLogoMenu',
  data () {
    return {
      menuList: {},
      list: []
    }
  },
  created() {
    this.GetListAxios();
  },
  methods: {
    GetListAxios () {
      this.$axios.get('/mimal/menuList').then(this.GetListSuccess);
    },
    GetListSuccess (res) {
      this.menuList = res.data.data;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/index.scss";
.menu {
  display: inline-block;
  width: $min-width - $home_logo_img_width - $home_logo_search_width - 209px;
  padding-left: 209px;
  @include logoHeight();

  &-item {
    display: inline-block;
    margin-right: 20px;
    color: $colorB;
    font-weight: bold;
    font-size: $fontI;

    span {
      cursor: pointer;
      font-weight: normal;
    }
    &:hover {
      color: $colorA;
      transition: all .2s ease;
      .children {
        height: $home_logo_child_height;
        opacity: 1;
      }
    }
    .children{
      position: absolute;
      top: 112px;
      left: 0;
      width: $min-width;
      opacity: 0;
      overflow: hidden;
      border-top: 1px solid $colorH;
      box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.11);
      z-index: 10;
      transition: all .5s;
      background-color: #ffffff;
      .product {
        position: relative;
        float: left;
        width: 16.6%;
        height: $home_logo_child_height;
        font-size: $fontK;
        line-height: $fontK;
        text-align: center;
        .pro-img{
          height: 100px;
          margin: 38px 0 20px 0;
          img{
            width: auto;
            height: 100%;
          }
        }
        * {
          height: 18px;
          line-height: 18px;
        }
        .pro-name{
          font-weight: bold;
          color: $colorB;
        }
        .pro-price{
          color: $colorA;
        }
        &:before{
          content: '';
          position: absolute;
          top: 28px;
          right: 0;
          border-left: 1px solid $colorF;
          height: 100px;
          width: 1px;
        }
        &:last-child:before{
          display: none;
        }
      }
    }

  }

}
</style>
