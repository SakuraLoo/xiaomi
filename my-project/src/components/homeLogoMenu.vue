<template>
  <div class="menu">
    <div class="menu-item" v-for="(item,index) in menuList" :key="index">
      <span> {{ item.title }} </span>
      <ul class="children">
        <a class="product" v-for="(product,index) in phoneList" :key="index" v-bind:href="'/#/product/'+item.id">
          <div class="pro-img"><img :src="product.mainImage" :alt="product.subtitle"/></div>
          <div class="pro-name"> {{ product.name }} </div>
          <div class="pro-price"> {{ product.price | currency }} </div>
        </a>
      </ul>
    </div>
  </div>
</template>

<script>
import homeLogoMenuList from '../components/homeLogoMenuList'
export default {
  name: 'homeLogoMenu',
  components: {
    homeLogoMenuList
  },
  data () {
    return {
      username: 'jack',
      phoneList: [],
      menuList: [
        { title: '小米手机' },
        { title: 'RedMi红米' },
        { title: '电视' }
      ],
      phoneList: [
        { id: 0, mainImage: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90', name: '小米10至尊纪念版', price: '5299元起' },
        { id: 1, mainImage: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82ddffd7562c54f9166fa876c143ff22.png?thumb=1&w=160&h=110&f=webp&q=90', name: '小米10 Pro', price: '4999元起' }
      ]
    }
  },
  filters: {
    currency (val) {
      if(!val)return '0.00';
      return '￥' + val.toFixed(2) + '元';
    }
  },
  mounted () {
    this.getProductList();
  },
  methods: {
    getProductList () {
      this.axios.get('/products', {
        params: {
          categoryId: '100012',
          pageSize: 6
        }
      }).then((res) => {
        this.phoneList = res.list.slice(0,6);
      })
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
      .children{
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
