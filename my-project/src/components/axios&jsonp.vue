<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// import axios from 'axios'
import jsonp from 'jsonp'

export default {
  name: 'App',
  mounted () {
    // let url = 'https://www.easy-mock.com/mock/5b012c1fe6e1035843cd3aff/mockapi/table/list';
    // axios.get(url).then(() => {})
    let url = '/api/activity/servicetime?callback=_jp0';
    jsonp(url,(err,res) => {
      // console.log(res)
    })
  }
}
</script>