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
  name: 'indexSmart',
  components: {
    indexGray,indexGrayLeft,indexGrayRight,indexGrayLeftimg2,indexTabs
  },
  data () {
    return {
      blockTitle: '智能',
      aImg: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/45c23f5b9a927b2dc49c25277e07727c.jpg?thumb=1&w=234&h=300&f=webp&q=90',
      aImg2: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a660ce095e8f553a9ed1515265f4e9fc.jpg?thumb=1&w=234&h=300&f=webp&q=90',
      blockImg: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/100dbcf1bee16fe5cc76f6b7f006ee0d.jpg?thumb=1&w=1226&h=120&f=webp&q=90',
      liArr: [
        {
          label: '热门',
          list: [
            { id: 1,
              img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/011dd8493ad62f3793dbb63d9fbd3bc0.jpg?thumb=1&w=200&h=200&f=webp&q=90',
              title: '小米「小爱老师」',
              subtitle: '英语提分利器',
              price: 999,
              pricePre: 0
            },
            { id: 2,
              img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f0914c60fa1ab807972541b4e2b1a4cd.jpg?thumb=1&w=200&h=200&f=webp&q=90',
              title: '小米智能门锁 E',
              subtitle: '告别钥匙，畅享便捷生活',
              price: 999,
              pricePre: 0
            },
            { id: 3,
              img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e7c6e79433c883e1a022ec21402c1679.jpg?thumb=1&w=200&h=200&f=webp&q=90',
              title: '小米小爱音箱 Play',
              subtitle: '听音乐、语音遥控家电',
              price: 99,
              pricePre: 169
            },
            { id: 4,
              img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/44a30f0da2aacb66a0f896293ebc703f.jpg?thumb=1&w=200&h=200&f=webp&q=90',
              title: '小爱音箱万能遥控版',
              subtitle: '传统家电秒变智能',
              price: 149,
              pricePre: 199
            },
            { id: 5,
              img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b42e49c6c0208f2de5a2f7a491a3af46.jpg?thumb=1&w=200&h=200&f=webp&q=90',
              title: '米家电饭煲4L',
              subtitle: '890W 立体加热',
              price: 249,
              pricePre: 299
            },
            { id: 6,
              img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3accd497afc0047cfbd40f442e3b17df.jpg?thumb=1&w=200&h=200&f=webp&q=90',
              title: '米家智能窗帘',
              subtitle: '窗帘开合随心控',
              price: 799,
              pricePre: 0
            },
            { id: 7,
              img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/550177d2e54387521bce9e78cb2949dd.jpg?thumb=1&w=200&h=200&f=webp&q=90',
              title: '小米体脂秤2',
              subtitle: '轻松掌握身体脂肪率',
              price: 99,
              pricePre: 0
            }
          ],
          ad: {
            title: '九号平衡车',
            price: '1999元',
            img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-miapp-a1/T1r_x_BgLT1RXrhCrK.jpg?thumb=1&w=100&h=100'
          }
        },
        {
          label: '安防',
          list: [
            { id: 1,
              img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2f33baec53cc73e2942277640ba6e710.jpg?thumb=1&w=200&h=200&f=webp&q=90',
              title: '米家智能门锁 标准锁体 碳素黑',
              subtitle: '一体化活体指纹识别，多种开锁方式',
              price: 1299,
              pricePre: 0
            },
            { id: 2,
              img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1840f64ea310ca8013385885baaf16a8.jpg?thumb=1&w=200&h=200&f=webp&q=90',
              title: '米家智能门锁 标准锁体 磨砂金',
              subtitle: '全新磨砂金配色，精湛工艺升级',
              price: 1499,
              pricePre: 0
            },
            { id: 3,
              img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0baacf6e54cbf89cab2c543cc02344e9.jpg?thumb=1&w=200&h=200&f=webp&q=90',
              title: '米家智能门锁 推拉式 通用版',
              subtitle: '一步推拉，高端智能门锁',
              price: 1699,
              pricePre: 0
            },
            { id: 4,
              img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0245498a0e08b87ba8c323871c5d48bc.jpg?thumb=1&w=200&h=200&f=webp&q=90',
              title: '米家智能门锁 青春版',
              subtitle: '隐形指纹识别设计 简单一步快进家门',
              price: 999,
              pricePre: 0
            },
            { id: 5,
              img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e83e1ab5947337d7b631e056b3e0f23d.jpg?thumb=1&w=200&h=200&f=webp&q=90',
              title: '米家智能门锁 霸王锁体 碳素黑',
              subtitle: '一体化活体指纹识别，多种开锁方式',
              price: 1599,
              pricePre: 0
            },
            { id: 6,
              img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fa7cdb455f106da904e8c3f6156abc06.jpg?thumb=1&w=200&h=200&f=webp&q=90',
              title: '米家智能门锁 霸王锁体 磨砂金',
              subtitle: '<p class="desc">适配霸王锁体，多种开锁方式</p>',
              price: 1799 ,
              pricePre: 0
            },
            { id: 7,
              img: 'https://i8.mifile.cn/b2c-mimall-media/98c51f977ac5b590dbaf7b8445b30fa6!200x200.jpg',
              title: '小米米家小白智能摄像机增强版',
              subtitle: '智能看护， AI你所爱',
              price: 399,
              pricePre: 0
            }
          ],
          ad: {
            title: '小米米家智能摄像机云台版',
            price: '179元',
            img: 'https://i8.mifile.cn/b2c-mimall-media/5a94a17f3e893d9804ede3b06e894460!100x100.jpg'
          }
        },
        {
          label: '出行',
          list: [
            { id: 1,
              img: 'https://i8.mifile.cn/b2c-mimall-media/18a82e7cda6ecbc22ecee7ac927d6ff9!200x200.jpg',
              title: '米兔折叠婴儿推车',
              subtitle: '出发去向往的地方',
              price: 649,
              pricePre: 699
            },
            { id: 2,
              img: 'https://i8.mifile.cn/v1/a1/877d3ce8-68ab-7506-2a78-55a8c0fba946!200x200.png',
              title: '九号平衡车 Plus',
              subtitle: '一个形影不离的新伙伴',
              price: 3499,
              pricePre: 0
            },
            { id: 3,
              img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0294e2f3997bf0cffb7bf48361d03588.jpg?thumb=1&w=200&h=200&f=webp&q=90',
              title: '米家充气宝',
              subtitle: '便携电动打气筒',
              price: 199,
              pricePre: 0
            },
            { id: 4,
              img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/12fe0ea5e8dafecce5ffa65108796683.jpg?thumb=1&w=200&h=200&f=webp&q=90',
              title: '小米小背包',
              subtitle: '<p class="desc">城市休闲，简约设计</p>',
              price: 24.9,
              pricePre: 0
            },
            { id: 5,
              img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5b4304d0e62a9c874e83eba0649110ee.jpg?thumb=1&w=200&h=200&f=webp&q=90',
              title: '小米旅行箱 青春款',
              subtitle: '环保材料，轻便重量',
              price: 179,
              pricePre: 199
            },
            { id: 6,
              img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3520b7c57449585bc3185d31b9d9bd08.jpg?thumb=1&w=200&h=200&f=webp&q=90',
              title: '骑记电动助力自行车 新国标版 黑色',
              subtitle: '更多助力选择，更多城市风景',
              price: 2999,
              pricePre: 0
            },
            { id: 7,
              img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d86c1eb8f5525bc4c76c8e0e98db7446.jpg?thumb=1&w=200&h=200&f=webp&q=90',
              title: '小米米家对讲机2',
              subtitle: '向更远出发',
              price: 449,
              pricePre: 0
            }
          ],
          ad: {}
        }
      ]
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