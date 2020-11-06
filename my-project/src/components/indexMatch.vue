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
  name: 'indexMatch',
  components: {
    indexGray,indexGrayLeft,indexGrayRight,indexGrayLeftimg2,indexTabs
  },
  data () {
    return {
      blockTitle: '搭配',
      aImg: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6874615b3c50e837ffe532eb6ea4ef1a.jpg?thumb=1&w=234&h=300&f=webp&q=90',
      aImg2: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a00bdd568dbc2b02f8fe0fa8d1b46f28.jpg?thumb=1&w=234&h=300&f=webp&q=90',
      blockImg: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1615d1842fe85914a545297836a44271.jpg?thumb=1&w=1226&h=120&f=webp&q=90',
      liArr: [
        {
          label: '热门',
          list: [
            { id: 1,
              img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5fc35cf0af915a9e60f5d4ea220521ab.jpg?thumb=1&w=200&h=200&f=webp&q=90',
              title: '小米真无线蓝牙耳机Air 2 Pro',
              subtitle: '小米真无线蓝牙耳机Air 2 Pro',
              price: 649,
              pricePre: 699
            },
            { id: 2,
              img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/50649d7b5706f4cd9f658e93db6b6564.jpg?thumb=1&w=200&h=200&f=webp&q=90',
              title: '小米真无线蓝牙耳机 Air 2',
              subtitle: '智能真无线，轻松舒适戴',
              price: 299,
              pricePre: 399
            },
            { id: 3,
              img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9eb0178e3bfeb7d170edd641fb4be4bc.jpg?thumb=1&w=200&h=200&f=webp&q=90',
              title: '高速无线充套装',
              subtitle: '快速无线闪充，Qi充电标准',
              price: 149,
              pricePre: 0
            },
            { id: 4,
              img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ea8e42faebf7d76a4cb42b8930cf9e46.jpg?thumb=1&w=200&h=200&f=webp&q=90',
              title: 'Redmi充电宝 10000mAh 标准版 白色',
              subtitle: '<p class="desc">10000mAh大电量 </p>',
              price: 59,
              pricePre: 0
            },
            { id: 5,
              img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eaf70e0e9905de6452f07b1f48fcc386.jpg?thumb=1&w=200&h=200&f=webp&q=90',
              title: 'Redmi充电宝 20000mAh 快充版',
              subtitle: '大容量，	可上飞机 ',
              price: 99,
              pricePre: 0
            },
            { id: 6,
              img: 'https://i8.mifile.cn/v1/a1/5dd69c0a-8f4a-b42f-d840-6c5a47f2cd03!200x200.jpg',
              title: '小米插线板 5孔位',
              subtitle: '多重安全保护',
              price: 39,
              pricePre: 0
            },
            { id: 7,
              img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/321610e787393c42e5cb2e5730a7681d.jpg?thumb=1&w=200&h=200',
              title: '小米小爱蓝牙音箱 随身版',
              subtitle: '小巧便携，一键唤醒小爱',
              price: 49,
              pricePre: 0
            }
          ],
          ad: {
            title: '小米小爱触屏音箱',
            price: '199元',
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9946e252a7c49662376c056ced004a20.jpg?thumb=1&w=100&h=100&f=webp&q=90'
          }
        },
        {
          label: '耳机音箱',
          list: [
            { id: 1,
              img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5fc35cf0af915a9e60f5d4ea220521ab.jpg?thumb=1&w=200&h=200&f=webp&q=90',
              title: '小米真无线蓝牙耳机Air 2 Pro',
              subtitle: '小米真无线蓝牙耳机Air 2 Pro',
              price: 649,
              pricePre: 699
            },
            { id: 2,
              img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c6306bf6d8aede9f6f48d8e4d9256db2.jpg?thumb=1&w=200&h=200&f=webp&q=90',
              title: '小米真无线蓝牙耳机Air 2s',
              subtitle: '全面升级，智慧真无线',
              price: 399,
              pricePre: 0
            },
            { id: 3,
              img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/50649d7b5706f4cd9f658e93db6b6564.jpg?thumb=1&w=200&h=200&f=webp&q=90',
              title: '小米真无线蓝牙耳机 Air 2',
              subtitle: '智能真无线，轻松舒适戴',
              price: 299,
              pricePre: 399
            },
            { id: 4,
              img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/faf8668acb2fd80c0afad4d4c4e837ad.jpg?thumb=1&w=200&h=200&f=webp&q=90',
              title: '小米降噪项圈蓝牙耳机',
              subtitle: '无线降噪，静无止境',
              price: 399,
              pricePre: 499
            },
            { id: 5,
              img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8b619d27877bbc497468c673a317a847.jpg?thumb=1&w=200&h=200&f=webp&q=90',
              title: '小米小爱音箱 Pro',
              subtitle: '语音遥控5000+品牌主流家电',
              price: 299,
              pricePre: 0
            },
            { id: 6,
              img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e6a35e4dfff70f4195b29e8008716d82.jpg?thumb=1&w=200&h=200&f=webp&q=90',
              title: '小米运动蓝牙耳机青春版',
              subtitle: '音随你动',
              price: 99,
              pricePre: 0
            },
            { id: 7,
              img: 'https://i8.mifile.cn/b2c-mimall-media/838ba427ef55317d8c4911b02c95bb79!200x200.jpg',
              title: '小米蓝牙项圈耳机',
              subtitle: '挂在脖子上的好耳机',
              price: 199,
              pricePre: 0
            }
          ],
          ad: {
            title: '小米双单元半入耳式耳机',
            price: '59元',
            img: 'https://i8.mifile.cn/b2c-mimall-media/ddf317f34e47eed06d910ee0ffd6b2fc!100x100.jpg'
          }
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