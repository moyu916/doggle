<template>
  <div id="app">
    <keep-alive exclude="ProductDetail,Cart">
      <router-view/>
    </keep-alive>
    <nav-bar v-show="isShowNav"></nav-bar>
  </div>
</template>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  font-size 30px
</style>

<script>
import NavBar from '@/components/content/NavBar'

import { getCart } from '@/service/cart.js'
import Vue from 'vue'

export default {
  components: {
    NavBar,
  },
  data () {
    return {
      isShowNav : true,
      showNavList : ['/home','/category','/user','/cart'],
    }
  },
  // async mounted () {
  //   const { data } = await getCart()
  //   let num = 0;
  //   for (let i of data){
  //       Vue.set(i,'checked',false)
  //       Vue.set(i,'index',num)
  //       num++
  //   }         
  //   this.$store.commit('getData',{ data })
  // },
  watch: {
    $route(to){
      if(this.showNavList.includes(to.path)) {
        this.isShowNav = true
      }else{
        this.isShowNav = false
      }

    }
  }
}
</script>
