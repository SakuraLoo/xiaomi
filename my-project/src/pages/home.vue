<template>
  <div>
    <home-header></home-header>  
    <router-view></router-view>
    <home-footer></home-footer>
  </div>
</template>

<script>
import homeHeader from '../components/homeHeader'
import homeFooter from '../components/homeFooter'

export default {
  name: 'home',
  components: {
    homeHeader,
    homeFooter
  }
}
</script>

<style>
</style>
