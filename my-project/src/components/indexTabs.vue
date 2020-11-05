<template>
  <el-tabs ref="navTabs" class="newElementCSS">
    <el-tab-pane
      v-for="(item,index) in list" :key="index"
      :label="item.label"
    >
      <li class="phoneli" v-for="(li,index) in (item.list)" :key="index">
        <index-gray-li :item="li"></index-gray-li>
      </li>
      <li class="phoneAd">
        <h3> {{ item.ad.title }} </h3>
        <p> {{ item.ad.price }} </p>
        <img :src="item.ad.img"/>
      </li>
      <li class="phoneMore">
        <div class="moreText">
          <p>浏览更多</p>
          <span> {{ item.label }} </span>
        </div>
        <img src="../assets/imgs/right.png"/>
      </li>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import indexGrayLi from '../components/indexGrayLi'
export default {
  name: 'indexTabs',
  props: {
    list: Array
  },
  components: {
    indexGrayLi
  },
  data() {
    return {
      activeName: 'first'
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.navTabs.$refs.nav.$nextTick(() => {
        var target = document.getElementsByClassName("el-tabs__item");
        let that = this;
        for (let i = 0; i < target.length; i++) {
          target[i].addEventListener("mouseover", () => {
            that.$refs.navTabs.handleTabClick(1, String(i));
          });
        }
      });
    });
  }
}
</script>

<style>
.newElementCSS {
  margin-top: -58px !important;
}
.newElementCSS .el-tabs__nav {
  float: right !important;
}
.el-tabs__nav-wrap::after {
  background-color: #0000 !important;
}
.el-tabs__item.is-active {
  color: #ff6700;
}
.el-tabs__active-bar {
  bottom: 15px;
  background-color: #ff6700;
}
.el-tabs__item {
  height: 58px;
  line-height: 58px;
  font-size: 16px;
}
.el-tabs__header {
  margin: 0;
}

  
.phoneli {
  float: left;
  margin-left: 14px;
  width: calc((100% - 14px*4)/4);
  height: 300px;
  background-color: #fff;
  text-align: center;
}
.phoneli:hover,.phoneAd:hover,.phoneMore:hover {
  box-shadow:rgba(0, 0, 0, 0.144) 0 0 20px;
  transition: all .2s ease;
  cursor: pointer;
}
.phoneli:nth-child(2),.phoneli:nth-child(3),.phoneli:nth-child(4),.phoneli:nth-child(5) {
  margin-bottom: 14px;
}

.phoneAd {
  float: left;
  margin: 0  0 14px 14px;
  width: calc((100% - 14px*4)/4);
  height: calc((300px - 14px)/2);
  background-color: #fff;
}
.phoneAd h3 {
  float: left;
  margin: 40px 0 5px 25px;
  width: 100px;
  font-weight: normal;
}
.phoneAd p {
  float: left;
  margin: 0 25px;
  font-size: 14px;
  color: #ff6700;
}
.phoneAd img {
  margin-top: 30px;
  width: 80px;
  height: auto;
}

.phoneMore {
  float: left;
  margin-left: 14px;
  width: calc((100% - 14px*4)/4);
  height: calc((300px - 14px)/2);
  background-color: #fff;
  display: flex;
  align-items: center;
}
.moreText {
  float: left;
  width: 50%;
}
.moreText * {
  margin-left: 30px;
}
.moreText p {
  font-size: 18px;
  margin-bottom: 5px;
}
.moreText span {
  color: #b0b0b0;
}
.phoneMore img {
  float: left;
  width: 48px;
  margin: 0 auto;
}
</style>