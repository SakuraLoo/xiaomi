<template>
  <li>
    <a class="phoneli_a" :href="'/#/product/'+item.id">
      <div class="phoneli_a-img">
        <img v-lazy="item.img" alt=""/>
      </div>
      <label> {{ item.title }} </label>
      <p> {{ item.subtitle }} </p>
      <span class="price_now"> {{ item.price }}元起 </span>
      <span class="price_pre" v-if="item.pricePre"> {{ item.pricePre }}元 </span>
      <span class="price_pre" else></span>
    </a>
  </li>
</template>

<script>
export default {
  name: 'indexGrayLi',
  props: {
    item: Object
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/index.scss";
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
</style>