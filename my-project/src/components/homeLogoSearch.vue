<template>
  <div class="header-search">
    <div class="wrapper">
      <input type="text" name="keyword">
      <a></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homeLogoSearch'
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/index.scss";
.header-search {
  width: $home_logo_search_width;
  @include logoHeight();

  .wrapper {
    @include flex();
    height: 50px;
    border: 1px solid $colorH;

    input {
      padding: 0 14px;
      height: 50px;
      width: calc(100% - 50px);
      border: none;
      border-right: 1px solid $colorH;
    }
    a {
      width: 50px;
      margin: 0 auto;
      @include bgImg(18px,18px,'../assets/imgs/icon-search.png');
    }
    
  }

}
</style>
