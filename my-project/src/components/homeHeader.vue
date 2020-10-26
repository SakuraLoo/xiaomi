<template>
  <div class="header">
    <home-topbar></home-topbar>
    <home-logo></home-logo>
  </div>
</template>

<script>
import homeTopbar from '../components/homeTopbar'
import homeLogo from '../components/homeLogo'
export default {
  name: 'NavHeader',
  components: {
    homeTopbar,
    homeLogo
  }
}
</script>