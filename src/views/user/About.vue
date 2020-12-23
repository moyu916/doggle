<template>
  <div id="about">
      <Header>
        <span slot="middle">关于我们</span>
      </Header>
      <div class="desc">
        <p> 加油，打工人！</p>
      </div>
  </div>
</template>

<script>
import Header from '@/components/common/header/Header'
export default {
    name: 'About',
    components: {
      Header,
    },
}
</script>

<style lang="stylus" scoped>
.desc
  position relative
  margin-top 75px
  min-height calc( 100vh - 75px )
  font-size 50px
  color #1baeae
  p
    width 400px
    position absolute
    left calc( 50% - 200px )
    top calc( 50vh - 75px )
</style>