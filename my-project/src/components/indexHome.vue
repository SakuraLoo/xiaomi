<template>
  <div class="indexHome">
    <index-gray :title="blockTitle" :img="blockImg">
      <index-gray-left>
        <indexGrayLeftimg2 :img="aImg" :img2="aImg2"></indexGrayLeftimg2>
      </index-gray-left>
      <index-gray-right>
        <index-tabs :list="liArr">
        </index-tabs>
      </index-gray-right>
    </index-gray>
  </div>
</template>

<script>
import indexGray from '../components/indexGray'
import indexGrayLeft from '../components/indexGrayLeft'
import indexGrayRight from '../components/indexGrayRight'
import indexGrayLeftimg2 from '../components/indexGrayLeftimg2'
import indexTabs from '../components/indexTabs'
export default {
  name: 'indexHome',
  components: {
    indexGray,indexGrayLeft,indexGrayRight,indexGrayLeftimg2,indexTabs
  },
  data () {
    return {
      blockTitle: '家电',
      blockImg: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/59e8fc8ba9718c266882719fb4bbcedd.jpg?thumb=1&w=1226&h=120&f=webp&q=90',
      aImg: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f256b81e4233333692eece77ed06ebc2.jpg?thumb=1&w=234&h=300&f=webp&q=90',
      aImg2: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/86567ac179a32fa9af05f89a45e57cbe.jpg?thumb=1&w=234&h=300&f=webp&q=90',
      liArr: [
        {
          label: '热门',
          list: [
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
            }
          ],
          ad: {
            title: 'Air 13.3" 2019款',
            price: '5699元起',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/74e573c4c0d89048392d14831cc507d5.jpg?thumb=1&w=100&h=100&f=webp&q=90'
          }
        },
        {
          label: '电视影音',
          list: [
            { id: 1,
              img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3483b4ec83f3d085c567633f2edef1c1.jpg?thumb=1&w=200&h=200&f=webp&q=90',
              title: '小米电视4C 32英寸',
              subtitle: '高清液晶屏，人工智能系统',
              price: 849,
              pricePre: 899
            },
            { id: 2,
              img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f193daba3989eadac5e13ae102b91582.jpg?thumb=1&w=200&h=200&f=webp&q=90',
              title: '全面屏电视 55英寸E55X',
              subtitle: '潮流全面屏设计',
              price: 2099,
              pricePre: 2299
            },
            { id: 3,
              img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d8674cd21c486feff5328772ab9cf01.jpg?thumb=1&w=200&h=200&f=webp&q=90',
              title: '小米电视4A 70英寸',
              subtitle: '大屏更享受',
              price: 2999,
              pricePre: 3999
            },
            { id: 4,
              img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8156dec11073b1f98db8e4b7598262a4.jpg?thumb=1&w=200&h=200&f=webp&q=90',
              title: '小米电视4C 43英寸',
              subtitle: 'FHD全高清屏，钢琴烤漆',
              price: 1349,
              pricePre: 1399
            },
            { id: 5,
              img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7e2127506fd2209f3115828404269d45.jpg?thumb=1&w=200&h=200',
              title: '小米电视4S 75英寸',
              subtitle: '4K HDR，人工智能语音',
              price: 4199,
              pricePre: 5999
            },
            { id: 6,
              img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6a3d09cb5b895f8c3706f513552cd53d.jpg?thumb=1&w=200&h=200&f=webp&q=90',
              title: '小米全面屏电视65英寸 E65C',
              subtitle: '震撼大屏，时尚全面屏',
              price: 2699,
              pricePre: 3099
            },
            { id: 7,
              img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8b3fe3a07ef69fb4c959e39c768c7525.jpg?thumb=1&w=200&h=200&f=webp&q=90',
              title: '小米全面屏电视E32C',
              subtitle: '全面屏设计，人工智能系统',
              price: 849,
              pricePre: 899
            }
          ],
          ad: {
            title: '小米壁画电视65英寸',
            price: '6999元',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0e7eee530e4a103f2f5a0937a14bed53.jpg?thumb=1&w=100&h=100&f=webp&q=90'
          }
        }
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/index.scss";
.indexHome {
  position: relative;
}
</style>