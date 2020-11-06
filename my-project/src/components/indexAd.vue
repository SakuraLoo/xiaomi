<template>
  <div class="ad">
    <ul class="ad-icon">
      <li class="ad-icon-li" v-for="(item,index) in adList" :key="index">
        <a :href="item.link">
          <img v-lazy="item.img"/>
          <p> {{ item.title }} </p>
        </a>
      </li>
    </ul>
    <ul class="ad-list">
      <li class="ad-list-li" v-for="(item,index) in imglist" :key="index">
        <a :href="item.link">
          <img v-lazy="item.img"/>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'indexAd',
  data () {
    return {
      adList: [
        {img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82abdba456e8caaea5848a0cddce03db.png?w=48&h=48', title: '小米秒杀', link: ''},
        {img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/806f2dfb2d27978e33fe3815d3851fa3.png?w=48&h=48', title: '企业团购', link: ''},
        {img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eded6fa3b897a058163e2485532c4f10.png?w=48&h=48', title: 'F码通道', link: ''},
        {img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/43a3195efa6a3cc7662efed8e7abe8bf.png?w=48&h=48', title: '米粉卡', link: ''},
        {img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f4846bca6010a0deb9f85464409862af.png?w=48&h=48', title: '以旧换新', link: ''},
        {img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9a76d7636b08e0988efb4fc384ae497b.png?w=48&h=48', title: '话费充值', link: ''}
      ],
      imglist: [
        {img: require('../assets/imgs/ads/ads-1.png'), link: ''},
        {img: require('../assets/imgs/ads/ads-2.jpg'), link: ''},
        {img: require('../assets/imgs/ads/ads-3.png'), link: ''}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/index.scss";
.ad {
  margin-top: 14px;
  height: $index_ad_height;

  &:after {
    content: "";
    height: 0;
    display: block;
    clear: both;
  }

  &-icon {
    float: left;
    padding: 3px;
    width: $index_menu_width - 3px*2;
    height: $index_ad_height - 3px*2;
    background-color: #5f5750;
    &-li {
      opacity: 0.7;
      float: left;
      border-right: 1px #6b625b solid;
      border-bottom: 1px #6b625b solid;
      width: calc((100% - 2px - 3px*2)/3);
      height: calc((100% - 1px -3px*2)/2);
      text-align: center;
      a {
        display: block;
        padding-top: 18px;
      }
      img {
        width: 24px;
        height: auto;
      }
      p {
        color: #fff;
      }
    }
    &-li:hover {
      opacity: 1;
      transition: all .2s ease;
    }
    &-li:nth-child(3n) {
      border-right: 0;
    }
    &-li:nth-child(4),&-li:nth-child(5),&-li:nth-child(6) {
      border-bottom: 0;
    }
  }

  &-list {
    float: left;
    width: $min-width - $index_menu_width;
    height: $index_ad_height;
    &-li {
      float: left;
      margin-left: 10px;
      width: ($min-width - $index_menu_width - 10px*3)/3;
      height: $index_ad_height;
      img {
        width: 100%;
      }
    }
  }

}
</style>
