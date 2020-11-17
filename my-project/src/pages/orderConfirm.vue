<template>
  <div class="orderConfirm">
    <div class="orderConfirm_nav">

      <div class="container">
        <div class="orderConfirm_nav_top">
          <section class="address">
            <h3>收货地址</h3>
            <li :class="item.class" v-for="(item,index) in addressList" :key="index" @click="AddressClick(index)">
              <p class="address-li-name"> {{ item.name }} </p>
              <span class="address-li-company"> {{ item.company }} </span>
              <p class="address-li-phone"> {{ item.phone }} </p>
              <p class="address-li-address"> {{ item.simpleAddress }} </p>
              <p class="address-li-address"> {{ item.address }} </p>
              <span class="address-li-motify">修改</span>
            </li>
            <li class="address-li add">
              <div class="add_contain">
                <i class="fa fa-plus-circle"></i>
                <p>添加新地址</p>
              </div>
            </li>
          </section>
          <section class="cartSection">
            <h3>商品及优惠券</h3>
            <ul>
              <li v-for="(item,index) in cartList" :key="index">
                <a :href="'/#/product/'+item.id">
                  <img :src="item.img"/>
                  <span> {{ item.name }} </span>
                </a>
                <div class="price_box">
                  <span> {{ item.price }}元 × {{ item.num }} </span>
                  <span class="sum"> {{ item.price * item.num }}元 </span>
                </div>
              </li>
            </ul>
          </section>
          <section class="post">
            <h3>配送方式</h3>
            <span v-html="postStyle == 0 ? '包邮' : postStyle + '元'"></span>
          </section>
          <section class="record">
            <h3>发票</h3>
            <span class="record_type">电子普通发票　个人　商品明细</span>
            <ul>
              <div class="record-left">
                <div class="iconBox">
                  <i class="fa fa-plus-circle"></i>
                  <label>使用优惠券</label>
                </div>
                <div class="iconBox">
                  <i class="fa fa-plus-circle"></i>
                  <label>使用小米礼品卡</label>
                </div>
              </div>
              <div class="record-right">
                <li><label>商品件数：</label><span> {{ cartList.length }}件 </span></li>
                <li><label>商品总价：</label><span> {{ CartSum }}元 </span></li>
                <li><label>活动优惠：</label><span> -{{ record.discount }}元 </span></li>
                <li><label>优惠券抵扣：</label><span> -{{ record.coupon }}元 </span></li>
                <li><label>运费：</label><span> {{ postStyle }}元 </span></li>
                <li><label>应付总额：</label><span class="sumBigLetter"> {{ CartSum - record.discount - record.coupon - postStyle }} </span><span>元</span></li>
              </div>
            </ul>
          </section>
        </div>
      </div>

      <div class="container">
        <div class="orderConfirm_nav_bottom">
          <router-link to="/alipay" class="alipayBtn">去结算</router-link>
          <router-link to="/cart" class="cartBtn">返回购物车</router-link>
        </div>
      </div>

      <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>
        <el-dialog title="添加收货地址" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item>
              <el-row :gutter="24">
                <el-col :span="12"><el-input class="form_left" v-model="form.name" placeholder="姓名"></el-input></el-col>
                <el-col :span="12"><el-input class="form_left" v-model="form.phone" placeholder="手机号"></el-input></el-col>
              </el-row>
            </el-form-item>
            <!-- <el-form-item>
              <div class="block">
                <el-cascader
                  placeholder="选择省 / 市 / 区 / 街道"
                  :options="options"
                  filterable
                >
                </el-cascader>
              </div>
            </el-form-item> -->

            <el-form-item>
              <v-distpicker></v-distpicker>
            </el-form-item>

            <el-form-item>
              <el-input placeholder="详细地址" type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input placeholder="地址标签" v-model="form.tag"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
          </div>
        </el-dialog>

    </div>
  </div>
</template>

<script>
export default {
  name: 'orderConfirm',
  data () {
    return {
      addressList: [
        {
          name: "张三",
          phone: "12345678910",
          simpleAddress: "上海上海市黄浦区半淞园路街道",
          address: "上海市黄浦区半淞园路街道4111111号",
          company: "公司",
          class: "address-li"
        }
      ],
      cartList: [
        {
          id: 1,
          img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1575882207.04955417.jpg?thumb=1&w=30&h=30",
          name: "Redmi K30 5G 8GB+128GB 紫玉幻境",
          price: 1799,
          num: 1
        },
        {
          id: 2,
          img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1543561468.82116708.jpg?thumb=1&w=30&h=30",
          name: "黑鲨游戏 Type-C 耳机 黑色",
          price: 99,
          num: 1
        },
        {
          id: 3,
          img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1553764670.0369286.jpg?thumb=1&w=30&h=30",
          name: "米家压力IH电饭煲1S 白色",
          price: 1099,
          num: 1
        },
        {
          id: 4,
          img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1563334968.4986834.jpg?thumb=1&w=30&h=30 ",
          name: "Redmi充电宝 10000mAh 白色",
          price: 59,
          num: 1
        }
      ],
      postStyle: 0,
      record: {
        discount: 0,
        coupon: 0
      },
      CartSum: 0,

      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: '',
        phone: ''
      },
      formLabelWidth: '120px',



      // options: [{
      //   value: 'zhinan',
      //   label: '指南',
      //   children: [{
      //     value: 'shejiyuanze',
      //     label: '设计原则',
      //     children: [{
      //       value: 'yizhi',
      //       label: '一致'
      //     }, {
      //       value: 'fankui',
      //       label: '反馈'
      //     }, {
      //       value: 'xiaolv',
      //       label: '效率'
      //     }, {
      //       value: 'kekong',
      //       label: '可控'
      //     }]
      //   }, {
      //     value: 'daohang',
      //     label: '导航',
      //     children: [{
      //       value: 'cexiangdaohang',
      //       label: '侧向导航'
      //     }, {
      //       value: 'dingbudaohang',
      //       label: '顶部导航'
      //     }]
      //   }]
      // }, {
      //   value: 'zujian',
      //   label: '组件',
      //   children: [{
      //     value: 'basic',
      //     label: 'Basic',
      //     children: [{
      //       value: 'layout',
      //       label: 'Layout 布局'
      //     }, {
      //       value: 'color',
      //       label: 'Color 色彩'
      //     }, {
      //       value: 'typography',
      //       label: 'Typography 字体'
      //     }, {
      //       value: 'icon',
      //       label: 'Icon 图标'
      //     }, {
      //       value: 'button',
      //       label: 'Button 按钮'
      //     }]
      //   }, {
      //     value: 'form',
      //     label: 'Form',
      //     children: [{
      //       value: 'radio',
      //       label: 'Radio 单选框'
      //     }, {
      //       value: 'checkbox',
      //       label: 'Checkbox 多选框'
      //     }, {
      //       value: 'input',
      //       label: 'Input 输入框'
      //     }, {
      //       value: 'input-number',
      //       label: 'InputNumber 计数器'
      //     }, {
      //       value: 'select',
      //       label: 'Select 选择器'
      //     }, {
      //       value: 'cascader',
      //       label: 'Cascader 级联选择器'
      //     }, {
      //       value: 'switch',
      //       label: 'Switch 开关'
      //     }, {
      //       value: 'slider',
      //       label: 'Slider 滑块'
      //     }, {
      //       value: 'time-picker',
      //       label: 'TimePicker 时间选择器'
      //     }, {
      //       value: 'date-picker',
      //       label: 'DatePicker 日期选择器'
      //     }, {
      //       value: 'datetime-picker',
      //       label: 'DateTimePicker 日期时间选择器'
      //     }, {
      //       value: 'upload',
      //       label: 'Upload 上传'
      //     }, {
      //       value: 'rate',
      //       label: 'Rate 评分'
      //     }, {
      //       value: 'form',
      //       label: 'Form 表单'
      //     }]
      //   }, {
      //     value: 'data',
      //     label: 'Data',
      //     children: [{
      //       value: 'table',
      //       label: 'Table 表格'
      //     }, {
      //       value: 'tag',
      //       label: 'Tag 标签'
      //     }, {
      //       value: 'progress',
      //       label: 'Progress 进度条'
      //     }, {
      //       value: 'tree',
      //       label: 'Tree 树形控件'
      //     }, {
      //       value: 'pagination',
      //       label: 'Pagination 分页'
      //     }, {
      //       value: 'badge',
      //       label: 'Badge 标记'
      //     }]
      //   }, {
      //     value: 'notice',
      //     label: 'Notice',
      //     children: [{
      //       value: 'alert',
      //       label: 'Alert 警告'
      //     }, {
      //       value: 'loading',
      //       label: 'Loading 加载'
      //     }, {
      //       value: 'message',
      //       label: 'Message 消息提示'
      //     }, {
      //       value: 'message-box',
      //       label: 'MessageBox 弹框'
      //     }, {
      //       value: 'notification',
      //       label: 'Notification 通知'
      //     }]
      //   }, {
      //     value: 'navigation',
      //     label: 'Navigation',
      //     children: [{
      //       value: 'menu',
      //       label: 'NavMenu 导航菜单'
      //     }, {
      //       value: 'tabs',
      //       label: 'Tabs 标签页'
      //     }, {
      //       value: 'breadcrumb',
      //       label: 'Breadcrumb 面包屑'
      //     }, {
      //       value: 'dropdown',
      //       label: 'Dropdown 下拉菜单'
      //     }, {
      //       value: 'steps',
      //       label: 'Steps 步骤条'
      //     }]
      //   }, {
      //     value: 'others',
      //     label: 'Others',
      //     children: [{
      //       value: 'dialog',
      //       label: 'Dialog 对话框'
      //     }, {
      //       value: 'tooltip',
      //       label: 'Tooltip 文字提示'
      //     }, {
      //       value: 'popover',
      //       label: 'Popover 弹出框'
      //     }, {
      //       value: 'card',
      //       label: 'Card 卡片'
      //     }, {
      //       value: 'carousel',
      //       label: 'Carousel 走马灯'
      //     }, {
      //       value: 'collapse',
      //       label: 'Collapse 折叠面板'
      //     }]
      //   }]
      // }, {
      //   value: 'ziyuan',
      //   label: '资源',
      //   children: [{
      //     value: 'axure',
      //     label: 'Axure Components'
      //   }, {
      //     value: 'sketch',
      //     label: 'Sketch Templates'
      //   }, {
      //     value: 'jiaohu',
      //     label: '组件交互文档'
      //   }]
      // }]






















      
    }
  },
  mounted() {
    this.cartList.forEach(item => {
      this.CartSum += (item.price * item.num);
    })
  },
  methods: {
    AddressClick (index) {
      this.addressList.forEach(item => {
        item.class = "address-li";
      })
      this.addressList[index].class += " active";
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/index.scss";
.orderConfirm {
  background-color: #eee;
  @include clearBoth();
  .orderConfirm_nav {
    margin: 30px auto;

    .orderConfirm_nav_top {
      padding: 47px 25px 0 25px;
      border-bottom: 1px #e0e0e0 solid;
      background-color: #fff;
      section {
        padding: 10px 0;
        border-bottom: 1px #e0e0e0 solid;
        h3 {
          margin: 20px 0;
          font-size: 18px;
          font-weight: normal;
        }
      }

      .address {
        @include clearBoth();
        border-bottom: 0;
        h3 {
          margin-top: 0;
        }
        &-li {
          float: left;
          position: relative;
          margin: 0 17px 20px 0;
          padding: 15px 20px;
          width: calc((100% - 17px*3 - 2px*4 - 20px*2*4)/4);
          height: 180px - 15px*2;
          border: 1px #e0e0e0 solid;
          cursor: pointer;
          &:nth-child(4n+1) {
            margin-right: 0;
          }
          &:hover {
            border-color: #b0b0b0;
            transition: all .3s ease;
            .address-li-motify {
              opacity: 1;
            }
          }
          &.active {
            border-color: $colorA !important;
            .address-li-motify {
              opacity: 1;
            }
          }
          &.add {
            display: flex;
            justify-content: center;
            align-items: center;
            &:hover {
              i {
                color: #B0B0B0 !important;
                transition: all .5s ease;
              }
            }
            .add_contain {
              display: block;
              text-align: center;
              i {
                margin-bottom: 5px;
                font-size: 32px;
                color: #e0e0e0;
              }
              p {
                color: #b0b0b0;
              }
            }
          }

          p,span {
            line-height: 20px;
            color: #757575;
            font-size: 14px;
          }
          &-name {
            margin-bottom: 20px;
            font-size: 18px !important;
          }
          &-company {
            position: absolute;
            top: 17px;
            right: 20px;
            color: rgb(176, 176, 176) !important;
          }
          &-address {
            @include multiline-ellipsis();
          }
          &-motify {
            position: absolute;
            bottom: 17px;
            right: 20px;
            color: $colorA !important;
            opacity: 0;
          }

        }
      }

      .cartSection {
        h3 {
          margin-top: 0;
        }
        li {
          margin: 25px 0;
          color: #424242;
          * {
            display: inline-block;
            height: 30px;
            line-height: 30px;
            font-size: 14px;
          }
          a {
            color: #424242;
            * {
              display: inline-block;
              vertical-align: middle;
            }
            img {
              margin-right: 10px;
              width: auto;
              height: 30px;
            }
          }
          .price_box {
            float: right;
            width: 50%;
            @include flex();
            .sum {
              margin-right: 40px;
              color: $colorA;
            }
          }
        }
      }

      .post {
        * {
          display: inline-block;
          vertical-align: middle;
        }
        h3 {
          width: 150px;
        }
        span {
          font-size: 14px;
          color: $colorA;
        }
      }

      .record {
        border: 0;
        font-size: 14px;
        h3 {
          display: inline-block;
          vertical-align: middle;
          width: 150px;
        }
        .record_type {
          display: inline-block;
          vertical-align: middle;
          font-size: 14px;
          color: $colorA;
        }
        ul {
          @include clearBoth();
          .record-left {
            float: left;
            .iconBox {
              * {
                display: inline-block;
                vertical-align: middle;
                margin: 15px 0;
              }
              i {
                margin: 0 5px 0 20px;
                font-size: 26px;
                color: $colorA;
              }
              label {
                color: #757575;
              }
            }
          }
          .record-right {
            float: right;
            li {
              margin: 10px 0;
              @include flex();
              label {
                color: #757575;
              }
              span {
                margin-left: 30px;
                color: $colorA;
              }
              &:last-child {
                span {
                  margin: 0;
                }
                .sumBigLetter {
                  font-size: 30px;
                }
              }
            }
          }
        }
      }
    }

    .orderConfirm_nav_bottom {
      background-color: #fff;
      @include clearBoth();
      a {
        float: right;
        margin: 20px;
        width: 160px;
        height: 40px;
        line-height: 40px;
        border: 1px #b0b0b0 solid;
        color: #b0b0b0;
        text-align: center;
        font-size: 14px;
      }
      .alipayBtn {
        background-color: $colorA;
        border-color: $colorA;
        color: #fff;
        &:hover {
          background-color: #F25807;
        }
        &:active {
          background-color: #e75607;
        }
      }
      .cartBtn {
        &:active {
          box-shadow: inset 0 2px 4px rgba(0,0,0,.18);
        }
      }
    }

    .el-form-item {
      margin-bottom: 20px;
    }
    .el-cascader {
      width: 100%;
    }

  }
}
</style>
