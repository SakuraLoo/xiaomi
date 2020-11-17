<template>
  <div class="cart">
    <order-header title="我的购物车">
      <template v-slot:tip>
        <span>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</span>
      </template>
    </order-header>
      <div class="container">
        <el-table
          :data="tableData"
          border
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column label-class-name="DisabledSelection" width="100" type="selection" header-align="center" align="center"></el-table-column>
          <el-table-column label="商品名称" width="430" align="center">
            <template slot-scope="scope">
              <img :src="scope.row.img"/>
              <b> {{ scope.row.name }} </b>
            </template>
          </el-table-column>
          <el-table-column label="单价" align="center">
            <template slot-scope="scope">
              <span> {{ scope.row.price }}元 </span>
            </template>
          </el-table-column>
          <el-table-column label="数量" align="center">
            <template slot-scope="scope">
              <el-input-number v-model="scope.row.number" :min="1" :max="10"></el-input-number>
            </template>
          </el-table-column>
          <el-table-column label="小计" align="center">
            <template slot-scope="scope">
              <span> {{ scope.row.price * scope.row.number }}元 </span>
            </template>
          </el-table-column>
          <el-table-column label="操作" align="center">
            <template slot-scope="scope">
              <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">×</el-button>
            </template>
          </el-table-column>
        </el-table>

        <div class="cart-order">
          <div class="cart-order-left">
            <a>继续购物</a>
            <span>共<b> {{ rowClassName }} </b>件商品，已选择<b> {{ totalNumber }} </b>件</span>
          </div>
          <div class="cart-order-right">
            <span> 合计：<b> {{ totalPrice }} </b>元 </span>
            <router-link to="/orderConfirm"><button>去结算</button></router-link>
          </div>
        </div>

      </div>
    <service-bar></service-bar>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import OrderHeader from './../components/OrderHeader'
import ServiceBar from './../components/indexServicebar'
import NavFooter from './../components/homeFooter'
export default {
  name: "cart",
  components: {
    OrderHeader, ServiceBar, NavFooter
  },
  data() {
    return {
      editIsDialog: false, //编辑弹窗
      multipleSelection: [], //存放已选择的数据
      formData: {
        name: "",
        price: "",
        number: ""
      },
      editData: {},
      formLabelWidth: "200",
      //表格中的数据
      tableData: []
    };
  },
  mounted () {
    this.tableDataFunc();
  },
  // 通过computed计算属性及时改变
  computed: {
    // 总价
    totalPrice() {
      var price_total = 0;
      for (var i = 0; i < this.multipleSelection.length; i++) {
        price_total += this.multipleSelection[i].price * this.multipleSelection[i].number;
      }
      return price_total;
    },
    // 总数
    rowClassName(row) {
      var data = row._data.tableData.length
      return data;
    },
    // 已选择
    totalNumber() {
      var number_total = 0;
      for (var i = 0; i < this.multipleSelection.length; i++) {
        number_total += this.multipleSelection[i].number;
      }
      return number_total;
    }
  },
  methods: {
    tableDataFunc () {
      this.$axios.get(' http://mock.shtodream.cn/mock/5fa8fc178e13766542114da6/mimal/carts').then((res)=>{
        this.tableData = res.data.data.cartProductVoList;
      })
    },
    // 点击发生的变化
    handleSelectionChange(val) {
      this.multipleSelection = val; //给定义的数组赋值
    },
    handleDelete(index, row) {
      this.tableData.splice(index, 1); //删除表格的数据
    },
    // 点击添加弹窗的确定按钮
    addSureBtn() {
      this.tableData.push(this.formData);
      // 初始化添加表单
      this.formData = {
        name: "",
        age: "",
        sex: ""
      };
    },

    tableRowClassName({ row, rowIndex }) {
      row.row_index = rowIndex
    },
    
    onRowClick(row, event, column) {
      this.currentRowIndex = []
      for (var i = 0; i < row.length; i++) {
        this.currentRowIndex.push(row[i].row_index)
      }
    }
  }
};
</script>

<style lang="scss">
@import "../assets/scss/index.scss";
@media screen and (min-width: 0) {
  html,body,#app {
    height: 100%;
  }
}
.cart {
  background-color: #f1f1f1 !important;
  .container {
    margin: 35px auto;
    .cart-order {
      @include flex();
      margin-top: 15px;
      height: 50px;
      background-color: #fff;
      color: #757575;
      font-size: 14px;
      * {
        height: 50px;
        line-height: 50px;
      }
      .cart-order-left {
        a {
          position: relative;
          padding: 0 15px 0 30px;
          &:after {
            content: "";
            position: absolute;
            top: calc((100% - 15px)/2);
            right: 0;
            width: 1px;
            height: 15px;
            background-color: #eee;
          }
          &:hover {
            color: $colorA;
            transition: all .2s ease;
          }
        }
        span {
          padding-left: 10px;
          b {
            color: $colorA;
            font-weight: normal;
          }
        }
      }
      .cart-order-right {
        font-size: 0;
        span {
          display: inline-block;
          vertical-align: bottom;
          padding-right: 30px;
          color: $colorA;
          font-size: 14px;
          b {
            font-size: 30px;
            font-weight: normal;
          }
        }
        a {
          display: inline-block;
          vertical-align: bottom;
          button {
            width: 200px;
            border: 0;
            background-color: $colorA;
            color: #fff;
            font-size: 18px;
            cursor: pointer;
            &:hover {
              background-color: #f25807;
            }
            &:active {
              background-color: #e6570a;
            }
          }
        }
      }
    }
  }
}


/*-- 修改element的表格样式 --*/
.el-table td, .el-table th.is-leaf {
  border-right: 0;
  border-bottom-width: 1.5px;
}
.el-table td, .el-table th {
  padding: 15px 0;
  position: relative;
}

.cart th {
  font-weight: normal !important;
  color: #666;
}
.cart .el-table td {
  font-size: 16px;
}
.el-table__row .cell img, .el-table__row .cell b {
  float: left;
  line-height: 80px;
  font-weight: normal;
}
.el-table__row .cell img {
  margin-right: 20px;
}
.el-table__row .cell b {
  max-width: 303px;
  @include ellipsis();
}

.el-checkbox__inner {
  width: 20px;
  height: 20px;
}
.el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: $colorA;
  border-color: $colorA;
}
.el-checkbox__inner:hover,.el-checkbox__input.is-focus .el-checkbox__inner {
  border-color: $colorA;
}
.el-checkbox__inner::after {
  top: (20px - 8px - 3px*2 - 1px*2)/2;
  left: (20px - 4px - 3px*2 + 1px*2)/2;
  width: 4px;
  height: 8px;
  border-width: 3px;
}
.el-table_1_column_1 .el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: #fff;
  border-color: #dcdfe680;
}
.el-table__row .cell img, .el-table__row .cell b {
  font-size: 18px;
}

.el-input-number {
  width: 150px;
  border-radius: 0;
}
.el-input-number * {
  border-color: #DCDFE6;
  border-radius: 0;
  font-weight: bold;
}
.el-input-number *:hover,.el-input-number *:focus {
  border-color: #DCDFE6 !important;
}
.el-input-number__decrease,.el-input-number__increase ,.el-input-number__decrease:hover, .el-input-number__increase:hover {
  background-color: #0000;
  border: 0;
  color: #666;
}

.el-table_1_column_5 {
  color: $colorA;
}

.el-button--danger {
  padding: 0;
  width: 24px;
  height: 24px;
  background-color: #0000;
  color: #666;
  border: 0;
  font-size: 18px;
  border-radius: 100%;
}
.el-button--danger:focus {
  background-color: #0000;
  color: #666;
}
.el-button--danger:hover {
  background-color: #e53935;
  color: #fff;
}

.el-table /deep/.DisabledSelection .cell .el-checkbox__inner {
  position:relative;
}
.el-table /deep/.DisabledSelection .cell:before {
  content:"全选";
  position:absolute;
  right:11px;
}
.cart .el-checkbox {
  position: absolute;
  top: calc((100% - 20px)/2);
  left: 20px;
}
.cell.DisabledSelection {
  height: 23px;
  * {
    line-height: 23px;
  }
}
.el-table_1_column_1 .el-checkbox {
  width: 20px;
  * {
    width: 20px;
  }
}
</style>  