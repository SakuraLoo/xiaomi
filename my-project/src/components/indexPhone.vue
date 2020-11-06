<template>
  <div class="indexPhone">
    <index-gray :title="blockTitle" :img="blockImg">
      <index-gray-left>
        <indexGrayLeftimg :img="aImg"></indexGrayLeftimg>
      </index-gray-left>
      <index-gray-right>
        <a class="detail" :href="phoneLink">
          <span>查看全部</span>
          <i class="fa fa-chevron-circle-right"></i>
        </a>
        <li class="phoneli" v-for="(item,index) in phoneList" :key="index">
          <index-gray-li :item="item"></index-gray-li>
        </li>
      </index-gray-right>
    </index-gray>
  </div>
</template>

<script>
import indexGray from '../components/indexGray'
import indexGrayLeft from '../components/indexGrayLeft'
import indexGrayRight from '../components/indexGrayRight'
import indexGrayLeftimg from '../components/indexGrayLeftimg'
import indexGrayLi from '../components/indexGrayLi'
export default {
  name: 'indexPhone',
  components: {
    indexGray,indexGrayLeft,indexGrayRight,indexGrayLeftimg,indexGrayLi
  },
  data () {
    return {
      blockTitle: '手机',
      blockImg: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c3b86ede4dd31d7c126d56fbdde4f855.jpg?thumb=1&w=1226&h=120&f=webp&q=90',
      aImg: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/574c6643ab91c6618bfb2d0e2c761d0b.jpg?thumb=1&w=234&h=614&f=webp&q=90',
      phoneList: [
        { id: 1,
          img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d880ff45a9a3b70527770e01521fc939.jpg?thumb=1&w=200&h=200&f=webp&q=90',
          title: '小米10 至尊版',
          subtitle: '120X 变焦/120W秒充/120Hz屏幕',
          price: 5299,
          pricePre: 0
        },
        { id: 2,
          img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7cf7a05df86a858a1f391a0378d8c27d.jpg?thumb=1&w=200&h=200&f=webp&q=90',
          title: 'Redmi K30S 至尊纪念版',
          subtitle: '144Hz[7档]变速高刷屏',
          price: 2599,
          pricePre: 0
        },
        { id: 3,
          img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3b19bf0e7e599c1bbbce510fb0dbc8bc.jpg?thumb=1&w=200&h=200&f=webp&q=90',
          title: 'Redmi K30 至尊版',
          subtitle: '120Hz弹出全面屏，天玑1000+旗舰处理器',
          price: 1999,
          pricePre: 0
        },
        { id: 4,
          img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/237942bfcaf2bbe82fbe966c2f584d69.jpg?thumb=1&w=200&h=200&f=webp&q=90',
          title: '腾讯黑鲨3S',
          subtitle: '骁龙865处理器，120Hz刷新率',
          price: 3799,
          pricePre: 3999
        },
        { id: 5,
          img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c892a7640f58032489cbff8a948b50f9.jpg?thumb=1&w=200&h=200&f=webp&q=90',
          title: 'Redmi 9A',
          subtitle: '5000mAh长循环大电量，6.53"超大护眼屏幕',
          price: 599,
          pricePre: 0
        },
        { id: 6,
          img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8729282b199b3ec51e31c1b6b15f3f93.jpg?thumb=1&w=200&h=200&f=webp&q=90',
          title: '小米10 青春版 5G',
          subtitle: '50倍潜望式变焦 / 轻薄5G手机',
          price: 1899,
          pricePre: 2299
        },
        { id: 7,
          img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0099822e42b4428cb25c4cdebc6ca53d.jpg?thumb=1&w=200&h=200&f=webp&q=90',
          title: '小米10',
          subtitle: '骁龙865/1亿像素相机',
          price: 3499,
          pricePre: 3999
        },
        { id: 8,
          img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d037b19b924fdf15b1cc9e671d6628fe.jpg?thumb=1&w=200&h=200&f=webp&q=90',
          title: 'Redmi K30 Pro',
          subtitle: '双模5G，骁龙865，弹出全面屏',
          price: 2999,
          pricePre: 3699
        }
      ],
      phoneLink: '/#/product/1'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/index.scss";
.indexPhone {
  position: relative;
  .leftbar {
    display: block;
    width: $index_menu_width;
    height: 614px;
    img {
      width: 100%;
    }
  }
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
      color: $font_gray;
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
    &:nth-child(2),&:nth-child(3),&:nth-child(4),&:nth-child(5) {
      margin-bottom: 14px;
    }
  }
}
</style>