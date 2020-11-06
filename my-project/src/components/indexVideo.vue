<template>
  <div class="indexVideo">
    <div class="graybc_title"> {{ title }} </div>
    <a class="detail" :href="phoneLink">
      <span>查看全部</span>
      <i class="fa fa-chevron-circle-right"></i>
    </a>
    <li class="videoli" v-for="(item,index) in videoList" :key="index">
      <a :href="'/#/product/'+item.id">
        <div class="video_imgCon">
          <img v-lazy="item.img"/>
          <div class="video_iCon"><i class="fa fa-play"></i></div>
        </div>
        <div class="video_textCon">
          <h3> {{ item.title }} </h3>
          <p v-if="item.subtitle"> {{ item.subtitle }} </p>
        </div>
      </a>
    </li>
  </div>
</template>

<script>
export default {
  name: 'indexVideo',
  data () {
    return {
      title: "视频",
      videoList: [
        { id: 1,
          img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/101b19aca4bb489bcef0f503e44ec866.jpg?thumb=1&w=296&h=180&f=webp&q=90',
          title: 'Redmi 10X系列发布会',
          subtitle: 'Redmi 10X系列发布会'
        },
        { id: 2,
          img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/96563e75833ba4563bd469dd28203b09.jpg?thumb=1&w=296&h=180&f=webp&q=90',
          title: '小米10 青春版 发布会',
          subtitle: ''
        },
        { id: 3,
          img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2fd26bb99b723337a2f8eaba84f7d5bb.jpg?thumb=1&w=296&h=180&f=webp&q=90',
          title: '小米10 8K手机拍大片',
          subtitle: ''
        },
        { id: 4,
          img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a8dd25cab48c60fc6387b9001eddc3f9.jpg?thumb=1&w=296&h=180&f=webp&q=90',
          title: '小米10发布会',
          subtitle: ''
        }
      ],
      phoneLink: '/#/product/1'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/index.scss";
.indexVideo {
  position: relative;
  .graybc_title {
    height: 58px;
    line-height: 58px;
    font-size: $fontF;
    color: $colorB;
    font-weight: 300;
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
      color: #b0b0b0;
      font-size: 22px;
    }
  }
  
  .videoli {
    float: left;
    margin: 0 14px 14px 0;
    width: calc((100% - 14px*3)/4);
    height: 285px;
    background-color: #fff;
    text-align: center;
    &:last-child {
      margin-right: 0;
    }
    &:hover {
      box-shadow:rgba(0, 0, 0, 0.144) 0 0 20px;
      transition: all .2s ease;
    }

    .video_imgCon {
      position: relative;
      width: 100%;
      height: 180px;
      overflow: hidden;
      img {
        width: 100%;
      }
      .video_iCon {
        position: absolute;
        left: 20px;
        bottom: 10px;
        width: 36px - 2px*2;
        height: 24px - 2px*2;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px #fff solid;
        border-radius: 20px;
        i {
          color: #fff;
        }
      }
      &:hover {
        .video_iCon {
          border-color: $colorA;
          background-color: $colorA;
          transition: all .2s ease;
        }
      }
    }
    .video_textCon {
      padding: 22px 0;
      height: calc(100% - 180px - 22px*2);
      h3 {
        font-weight: normal;
        line-height: 35px;
        color: $colorB;
      }
      p {
        color: $font_gray;
      }
    }
  }
}
</style>
