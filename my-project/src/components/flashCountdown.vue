<template>
  <div class='flashCount'>
    <p class="flashCount-time"> {{ time }}:00 场 </p>
    <i class="fa fa-flash flashCount-icon"></i>
    <p class="flashCount-desc">距离结束还有</p>
    <div class="flashCount-countdown">
      <countdown :endHours="time+7"></countdown>
    </div>
  </div>
</template>

<script>
import countdown from './countdown'
export default {
  name: 'flashCountdown',
  components: {
    countdown
  },
  data () {
    return {
      time: 10
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/index.scss";
.flashCount {
  padding-top: 39px;
  width: $index_menu_width;
  height: $index_flash_height - 39px - 1px;
  background-color: #f1eded;
  border-top: 1px #e53935 solid;
  text-align: center;

  &-time {
    font-size: 20px;
    color: $wine_red;
  }
  &-icon {
    font-size: 58px;
    color: $wine_red;
    margin: 25px 0;
  }
  &-desc {
    font-size: 15px;
    font-weight: 400;
    color: rgba(0,0,0,.54);
  }
  &-countdown {
    margin-top: 28px;
  }

}
</style>
