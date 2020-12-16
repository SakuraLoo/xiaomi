<template>
  <div class="homeLogo">
    <div class="container">
      <div class="header-logo"><a href="/#/index"></a></div>
      <home-logo-menu></home-logo-menu>
      <home-logo-search></home-logo-search>
    </div>
  </div>
</template>

<script>
import homeLogoMenu from '../components/homeLogoMenu'
import homeLogoSearch from '../components/homeLogoSearch'

export default {
  name: 'homeLogo',
  components: {
    homeLogoMenu,
    homeLogoSearch
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/index.scss";
.container {
  @include flex();
  padding: 20px 0;
  @include logoHeight();

  .header-logo {
    display: inline-block;
    width: $home_logo_img_width;
    height: $home_logo_img_width;
    background-color: $colorA;

    a {
      display: inline-block;
      width: $home_logo_height;
      height: $home_logo_img_width;
      overflow: hidden;
      
      &:before {
        content: "";
        display: inline-block;
        @include bgImg($home_logo_img_width,$home_logo_img_width,'../assets/imgs/mi-logo.png');
        transition: margin .2s;
      }
      &:after {
        content: "";
        display: inline-block;
        @include bgImg($home_logo_img_width,$home_logo_img_width,'../assets/imgs/mi-home.png');
      }
      &:hover:before {
        margin-left: -$home_logo_img_width;
        transition: margin .2s;
      }

    }

  }

}
</style>
