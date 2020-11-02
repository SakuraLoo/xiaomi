<template>
  <div class="menu">
    <div class="menu-li" v-for="(item,index) in menuList" :key="index">
      <a class="menu-a">
        <span> {{ item.name }} </span>
        <i class="fa fa-chevron-right"></i>
      </a>
      <div :class="['children', 'col-'+colNum]" v-show="colNum!=0">
        <ul v-for="(item,key) in newCol" :key="key">
          <div class="children-li" v-for="(child,index) in item" :key="index">
            <img :src="child.img"/>
            <p> {{ child.name }} </p>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'indexMenu',
  data () {
    return {
      menuList: [
        { name: "手机 电话卡", url: "" },
        { name: "电视 盒子", url: "" },
        { name: "笔记本 显示器", url: "" },
        { name: "家电 插线板", url: "" },
        { name: "出行 穿戴", url: "" },
        { name: "智能 路由器", url: "" },
        { name: "电源 配件", url: "" },
        { name: "健康 儿童", url: "" },
        { name: "健康 儿童", url: "" },
        { name: "生活 箱包", url: "" }
      ],
      colList: [
        { name: "小米10 至尊纪念版", img: require("../assets/imgs/nav-img/nav-1.png") },
        { name: "小米10 Pro", img: require("../assets/imgs/nav-img/nav-2.png") },
        { name: "小米10", img: require("../assets/imgs/nav-img/nav-3.png") },
        { name: "小米10 青春版", img: require("../assets/imgs/nav-img/nav-4.png") },
        { name: "腾讯黑鲨游戏手机", img: require("../assets/imgs/nav-img/nav-5.png") },
        { name: "小米云服务", img: require("../assets/imgs/nav-img/nav-6.png") },
        { name: "Redmi K30S 至尊纪念版", img: require("../assets/imgs/nav-img/nav-3-1.jpg") },
        { name: "Redmi K30 至尊纪念版", img: require("../assets/imgs/nav-img/nav-3-2.jpg") },
        { name: "Redmi K30 Pro 变焦版", img: require("../assets/imgs/nav-img/nav-3-3.png") },
        { name: "Redmi K30 Pro", img: require("../assets/imgs/nav-img/nav-3-4.jpg") },
        { name: "Redmi K30 5G", img: require("../assets/imgs/nav-img/nav-3-5.jpg") },
        { name: "Redmi K30 4G", img: require("../assets/imgs/nav-img/nav-3-6.png") },
        { name: "Redmi 10X Pro", img: require("../assets/imgs/nav-img/nav-1.png") },
        { name: "Redmi 10X 5G", img: require("../assets/imgs/nav-img/nav-1.png") },
        { name: "Redmi 10X 4G", img: require("../assets/imgs/nav-img/nav-1.png") }
      ],
      newCol: {},
      colNum: 0
    }
  },
  created() {
    this.newCol["col1"]=[],this.newCol["col2"]=[],this.newCol["col3"]=[],this.newCol["col4"]=[];
    for(var i=0;i<6;i++) {
      if(this.colList[i]) {
        this.newCol["col1"].push(this.colList[i]);
      }
    }
    for(var i=6;i<12;i++) {
      if(this.colList[i]) {
        this.newCol["col2"].push(this.colList[i]);
      }
    }
    for(var i=12;i<18;i++) {
      if(this.colList[i]) {
        this.newCol["col3"].push(this.colList[i]);
      }
    }
    for(var i=18;i<32;i++) {
      if(this.colList[i]) {
        this.newCol["col4"].push(this.colList[i]);
      }
    }
    if(this.colList.length <= 6) {
      this.colNum = 1;
    } else if(this.colList.length <= 12) {
      this.colNum = 2;
    } else if(this.colList.length <= 18) {
      this.colNum = 3;
    } else if(this.colList.length <= 24) {
      this.colNum = 4;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/index.scss";
.menu {
  @include absolute0();
  padding: 20px 0;
  width: $index_menu_width;
  height: $index_swiper_height - 40px;
  background-color: rgba(105,101,101,.6);
  font-size: $fontJ;
  color: #fff;
  z-index: $index_menu_index;

  &-li:hover {
    .children {
      // opacity: 1;
      display: block;
    }
  }

  &-a {
    display: block;
    position: relative;
    padding-left: 30px;
    height: ($index_swiper_height - 40px)/10;
    line-height: ($index_swiper_height - 40px)/10;
    .fa {
      position: absolute;
      right: 20px;
      top: (($index_swiper_height - 40px)/10 - 14px)/2;
    }
    &:hover {
      background-color: $colorA;
    }
  }

  .children {
    // opacity: 0;
    display: none;
    position: absolute;
    top: 0;
    width: $min-width - $index_menu_width;
    height: $index_swiper_height;
    left: $index_menu_width;
    background-color: #fff;
    box-shadow:rgba(0, 0, 0, 0.144) 0 0 10px;

    ul {
      width: ($min-width - $index_menu_width)/4;
      float: left;
      height: $index_swiper_height;
      .children-li {
        height: $index_swiper_height/6;
        display: flex;
        align-items: center;
        * {
          float: left;
        }
        img {
          width: 50px;
          margin: 0 12px;
        }
        p {
          width: calc(100% - 50px - 16px);
          line-height: 40px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          color: #000;
        }
      }
    }

  }

  .col-1 {
    width: ($min-width - $index_menu_width)/4*1;
  }
  .col-2 {
    width: ($min-width - $index_menu_width)/4*2;
  }
  .col-3 {
    width: ($min-width - $index_menu_width)/4*3;
  }
  .col-4 {
    width: $min-width - $index_menu_width/4*4;
  }

}
</style>
