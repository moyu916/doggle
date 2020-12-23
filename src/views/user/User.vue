<template>
<div id="user">
    <Header>
      <slot name="left">
        <i class="iconfont icon-leftarrow" @click="handleBack()"></i>
      </slot>
      <slot name="center">我的</slot>
      <slot name="right">
        <i class="iconfont icon-nav-list"></i>
      </slot>
    </Header>
    <div class="user-info">
      <div class="info">
        <img src="//s.weituibao.com/1583583975067/user-graduate%20(1).png"/>
        <div class="user-desc">
          <span>昵称：{{ user.nickName }}</span>
          <span>登录名：{{ user.loginName }}</span>
          <span class="name">个性签名：{{ user.introduceSign }}</span>
        </div>
      </div>
    </div>
    <ul class="user-list">
      <li @click="goTo('order')">
        <span>我的订单</span>
        <van-icon name="arrow" />
      </li>
      <li @click="goTo('setting')">
        <span>账号管理</span>
        <van-icon name="arrow" />
      </li>
      <li @click="goTo('address?from=mine')">
        <span>地址管理</span>
        <van-icon name="arrow" />
      </li>
      <li @click="goTo('about')">
        <span>关于我们</span>
        <van-icon name="arrow" />
      </li>
    </ul>
</div>  
</template>

<script>
import Header from '@/components/common/header/Header'
import { getUserInfo } from '@/service/user'
export default {
    name: "User",
    components: {
        Header,
    },
    data () {
        return {
            user: {},
        }
    },
    methods: {
        goTo(r) {
          this.$router.push({ path: r })
        }
    },
    async mounted () {
        const { data } = await getUserInfo()
        this.user = data
    }
}
</script>

<style lang="stylus" scoped>
.user-list >>> .van-icon
  float right
.user-info
  width 700px
  height 250px
  border-radius 10px
  background-color $primary
  margin 100px 25px 30px 25px
  .info
    display flex
    padding 30px
    img 
      width 140px
      height 140px
      border-radius 70px
    .user-desc
      flex 1
      color #ffffff
      font-size 25px
      span 
        display block
        text-align left 
        margin 20px 10px
.user-list
  margin-top 50px
  li
    text-align left 
    margin 30px
    font-size 30px
</style>