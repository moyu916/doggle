<template>
  <div id="category">
    <!-- 页面头部 -->
    <Header></Header>
    <div class="list">
      <scroll class="list-left">
          <cate-menu v-if="data" :data="data" @selectMenu="toggle"></cate-menu>
      </scroll>
      <scroll class="list-right" ref="child">
          <cate-content v-if="data" :data="data" :currentIndex="currentIndex"></cate-content>
      </scroll>
    </div>
  </div>
</template>

<script>
import Header from '@/components/common/header/Header.vue'
import Scroll from "@/components/common/scroll/Scroll";

import CateMenu from './childComps/CateMenu'
import CateContent from './childComps/CateContent'

import { getCategory } from '@/service/goods'

export default {
    name: "Category",
    components: {
      Header,
      Scroll,
      CateMenu,
      CateContent,
    },
    data () {
        return {
            title: '分类',
            data: [],
            currentIndex: 15
        }
    },
    methods: {
        toggle(id) {
            this.currentIndex=id
        }
    },
    async mounted () {
        const { data } = await getCategory()
        this.data = data  //怎么解决data最开始渲染为空的问题
    },
    updated() {
        this.$refs.child.scrollTo(0,0,0)
        this.$refs.child.refresh()
    }
}
</script>

<style lang="stylus" scoped>
.list
    margin-top 80px
    display flex
    font-size 23px
    .list-left
        box-sizing border-box
        width 200px
        height calc(100vh - 120px)
        background-color $bc
    .list-right
        flex 1
        box-sizing border-box
        width 200px
        height calc(100vh - 120px)
        padding 0 20px
</style>