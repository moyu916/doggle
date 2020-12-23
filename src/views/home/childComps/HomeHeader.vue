<template>
      <header>
        <i class="iconfont icon-nav-list" @click="gotoCategory()"></i>
        <span class="name">doggle</span>
        <router-link 
            to="/productList" 
            tag="input" 
            type="text" 
            placeholder="请输入您要搜索的商品">
        </router-link>
        <router-link 
            to="/user" 
            tag="span"
            v-if="token"  
            class="iconfont icon-usercenter">
        </router-link>
        <router-link 
            to="/login" 
            tag="span" 
            v-else 
            class="login">
            登录
        </router-link>
    </header>
</template>

<script>
export default {
    name: 'HomeHeader',
    computed: {
      token () {
        return localStorage.getItem('token')
      },
    },
    methods: {
        gotoCategory() {
            this.$router.push('/category')
        }
    }
}
</script>

<style lang="stylus" scoped>
header 
  position fixed
  top 15px
  left 0
  right 0
  z-index 1
  text-align left
  display flex
  color $primary
  height 40px
  line-height 40px
  .icon-nav-list
    padding-left 15px
    font-size 5.13vw
  .name
    padding-left 30px
    vertical-align bottom
  .login
    float right
    padding-right 15px
  .icon-usercenter
    padding-right 15px
    font-size 7.13vw
  input 
    text-align center
    flex 1
    font-size 20px
    border-radius 20px
    margin 0 20px
    background-color rgba(255,255,255,0.6)
</style>