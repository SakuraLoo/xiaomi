<template>
  <div class="orderConfirm">
    <div class="orderConfirm_nav">

      <div class="container">
        <div class="orderConfirm_nav_top">
          <section class="address">
            <h3>收货地址</h3>
            <li :class="'address-li ' + item.class" v-for="(item,index) in addressList" :key="index" @click="ActiveClick(item)">
              <p class="address-li-name"> {{ item.name }} </p>
              <span class="address-li-company"> {{ item.company }} </span>
              <p class="address-li-phone"> {{ item.phone }} </p>
              <p class="address-li-address"> {{ item.nowAdPriv+item.nowAdCity+item.nowAdArea }} </p>
              <p class="address-li-address"> {{ item.address }} </p>
              <span class="address-li-motify" @click="dialogFormVisible = true,DialogClick(true,item)">修改</span>
            </li>
            <div class="address-li address-li-add" @click="DialogClick(false,{})">
              <div class="add_contain">
                <i class="fa fa-plus-circle"></i>
                <p>添加新地址</p>
              </div>
            </div>
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
                  <span> {{ item.price }}元 × {{ item.number }} </span>
                  <span class="sum"> {{ item.price * item.number }}元 </span>
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
                <li><label>商品件数：</label><span> {{ CartNum }}件 </span></li>
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

        <el-dialog title="添加收货地址" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item>
              <el-row :gutter="24">
                <el-col :span="12"><el-input v-model="form.name" placeholder="姓名"></el-input></el-col>
                <el-col :span="12"><el-input v-model="form.phone" placeholder="手机号"></el-input></el-col>
              </el-row>
            </el-form-item>
            <el-form-item>
              <v-distpicker
                :province="form.nowAdPriv" :city="form.nowAdCity" :area="form.nowAdArea"
                @province="onChangeProvince2" @city="onChangeCity2" @area="onChangeArea2"
              ></v-distpicker>
            </el-form-item>
            <el-form-item>
              <el-input placeholder="详细地址" type="textarea" v-model="form.address"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input placeholder="地址标签" v-model="form.company"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="onSubmit">确 定</el-button>
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
      // 收货地址
      addressList: [
        {
          id: 0,
          name: "张三",
          phone: "12345678910",
          nowAdPriv: "上海市",
          nowAdCity: "上海市",
          nowAdArea: "黄浦区",
          address: "上海市黄浦区半淞园路街道4111111号",
          company: "公司",
          class: ""
        }
      ],
      cartList: [], // 结算的商品列表
      postStyle: 0, // 配送方式: 0为包邮，其他为运费
      record: {
        discount: 0, // 活动优惠
        coupon: 0 // 优惠券抵扣
      },
      CartNum: 0, // 商品件数，在mounted中计算
      CartSum: 0, // 应付总额，在mounted中计算

      isAdd: false, // 是否已存在
      dialogFormVisible: false, // 弹窗是否打开
      form: { // 表单中的数据
        id: 0,
        name: '',
        phone: ''
      }
    }
  },
  mounted() {
    var getString = this.$route.params.id; // router-link传过来的字符串
    var getArr = getString.split(",");
    var newGetArr = [];
    getArr.forEach(item => {
      item = item.replace(/\;/g,',');
      newGetArr.push(eval("("+item+")")); // 购物车选择的商品
    })

    /*-- 获取订单列表 --*/
    this.GetHomeAjax(newGetArr);
  },
  methods: {
    /*-- 接通axios服务 --*/
    GetHomeAjax (orderIdArr) {
      this.$axios.get('http://mock.shtodream.cn/mock/5fa8fc178e13766542114da6/mimal/carts')
      .then(res => {
        this.HomeAjaxSuccess(res,orderIdArr);
      }).catch(err => {});
    },
    /*-- 获取axios数据 --*/
    HomeAjaxSuccess (res,orderIdArr) {
      var cartList = res.data.data.cartProductVoList; // 购物车所有的商品
      cartList.forEach(item1 => {
        orderIdArr.forEach(item2 => {
          if(item1.id == item2.index) {
            item1.number = item2.num;
            this.cartList.push(item1)
          }
        })
      })
      this.CountCartSum(this.cartList);
    this.GetCartNum(this.cartList);
    },
    /*-- 计算商品件数 --*/
    GetCartNum (cartList) {
      cartList.forEach(item => {
        this.CartNum += item.number;
      })
    },
    /*-- 计算应付总额 --*/
    CountCartSum (orderArr) {
      orderArr.forEach(item => {
        this.CartSum += (item.price * item.number);
      })
    },

    /*-- 省市区三联动 --*/
    onChangeProvince2(data){  
      this.form.nowAdPrivCode=data.code;
      this.form.nowAdPriv=data.value;
    },
    onChangeCity2(data){
      this.form.nowAdCityCode=data.code;
      this.form.nowAdCity=data.value;
    },
    onChangeArea2(data){
      this.form.nowAdAreaCode=data.code;
      this.form.nowAdArea=data.value;
    },
    
    /*-- 切换地址的样式 --*/
    ActiveClick (item) {
      this.addressList.forEach(li => {
        li.class = "";
      })
      item.class = "active";
    },
    
    /*-- 打开弹窗 --*/
    DialogClick (isAdd,item) {
      // 新增
      if(isAdd == false) {
        this.isAdd = false; // 此地址未存在
        this.form = {}; // 清空表单
        this.dialogFormVisible = true;
      } else {
        this.isAdd = true; // 此地址已存在
        // 修改
        this.form = {
          id: item.id,
          name: item.name,
          phone: item.phone,
          nowAdPriv: item.nowAdPriv,
          nowAdCity: item.nowAdCity,
          nowAdArea: item.nowAdArea,
          address: item.address,
          company: item.company
        }
      }
    },
    // 弹窗确定
    onSubmit() {
      var whichInput, // 哪个未填写
      isMessage = true // 提示的开关

      // 提示未填写
      if(!this.form.name) {
        whichInput = "姓名";
      } else if(!this.form.phone) {
        whichInput = "手机号";
      } else if(!(this.form.nowAdPriv && this.form.nowAdCity && this.form.nowAdArea)) {
        whichInput = "省/市/区";
      } else if(!this.form.address) {
        whichInput = "详细地址";
      } else if(!this.form.company) {
        whichInput = "地址标签";
      } else {
        // 不提示
        isMessage = false;
        this.dialogFormVisible = false; // 关闭弹窗

        var newForm = { // 新填写的表单
          name: this.form.name,
          phone: this.form.phone,
          nowAdPriv: this.form.nowAdPriv,
          nowAdCity: this.form.nowAdCity,
          nowAdArea: this.form.nowAdArea,
          address: this.form.address,
          company: this.form.company,
          class: "address-li"
        }
        if(this.isAdd == false) { // 新增
          newForm["id"] = this.addressList.length;
          this.addressList.push(newForm);
        } else { // 修改
          newForm["id"] = this.form.id;
        }
      }

      // 是否提示
      if(isMessage == false) {} else {
        this.$message({
          showClose: true,
          message: '请填写' + whichInput,
          type: 'error'
        });
      }
    }
  }
}
</script>

<style lang="scss">
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
          
        &-li-add {
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

  }
}

.distpicker-address-wrapper {
  font-size: 0;
  label {
    display: inline-block;
    width: calc((100% - 20px*2)/3);
    margin-right: 20px;
    &:last-child {
      margin: 0;
    }
    select {
      width: 100%;
      padding: 0 10px;
      font-size: 14px;
    }
  }
}

</style>