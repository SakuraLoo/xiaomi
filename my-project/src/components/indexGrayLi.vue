<template>
  <div>
    <a class="detail" :href="link">
      <span>查看全部</span>
      <i class="fa fa-chevron-circle-right"></i>
    </a>
    <li class="phoneli" v-for="(item,index) in list" :key="index">
      <a class="phoneli_a" :href="'/#/product/'+item.id">
        <div class="phoneli_a-img">
          <img :src="item.img" alt=""/>
        </div>
        <label> {{ item.title }} </label>
        <p> {{ item.subtitle }} </p>
        <span class="price_now"> {{ item.price }}元起 </span>
        <span class="price_pre" v-if="item.pricePre"> {{ item.pricePre }}元 </span>
        <span class="price_pre" else></span>
      </a>
    </li>
  </div>
</template>

<script>
export default {
  name: 'indexGrayLi',
  props: {
    list: Array,
    link: String
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/index.scss";
.detail {
  margin-right: 3px;
  position: absolute;
  top: 22px;
  right: 0;
  color: #424242;
  font-size: 16px;
  &:hover {
    * {
      color: $colorA;
      transition: all .2s ease;
    }
  }
  i {
    position: relative;
    top: 2px;
    left: 3px;
    color: #b0b0b0;
    font-size: 22px;
  }
}
.phoneli {
  float: left;
  margin-left: 14px;
  width: calc((100% - 14px*4)/4);
  height: 300px;
  background-color: #fff;
  text-align: center;
  &:hover {
    box-shadow:rgba(0, 0, 0, 0.144) 0 0 20px;
    transition: all .2s ease;
  }
  .phoneli_a {
    display: block;
    padding: 20px 0;
    height: calc(100% - 14px);
    color: #b0b0b0;
    * {
      line-height: 22px;
      font-size: $fontJ;
    }
    &-img {
      margin: 0 auto 18px;
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
      font-size: 14px;
      font-weight: 400;
      color: #212121;
      @include ellipsis();
    }
    p {
      margin: 0 auto 10px auto;
      width: 80%;
      font-size: 12px;
      @include ellipsis();
    }
    span.price_now {
      color: $colorA;
    }
    span.price_pre {
      margin-left: 2px;
      text-decoration: line-through;
    }
  }
  &:nth-child(2),&:nth-child(3),&:nth-child(4),&:nth-child(5) {
    margin-bottom: 14px;
  }
}
</style>