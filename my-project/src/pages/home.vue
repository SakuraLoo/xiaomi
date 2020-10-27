<template>
  <div>
    <home-header></home-header>  
    <router-view></router-view>
    <index-servicebar></index-servicebar>
    <home-footer></home-footer>
  </div>
</template>

<script>
import homeHeader from '../components/homeHeader'
import homeFooter from '../components/homeFooter'
import indexServicebar from '../components/indexServicebar'

export default {
  name: 'home',
  components: {
    homeHeader,
    homeFooter,
    indexServicebar
  }
}
</script>

<style>
</style>
