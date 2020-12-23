<template>
<div id="product-list">
    <header>
        <i class="iconfont icon-leftarrow" @click="handleBack()"></i>
        <div class="search">
            <i class="iconfont icon-atm"></i>
            <input v-model="keywords" type="text" placeholder="请输入您要搜索的商品">
        </div>
        <div class="btn">
            <van-button round  color="#1baeae" @click="handleSearch()">搜索</van-button>
        </div>
    </header>

    <van-tabs v-model="active" class="tabs" @click="changeTab" type="card" color="#1baeae">
        <van-tab title="推荐" name=""></van-tab>
        <van-tab title="新品" name="new"></van-tab>
        <van-tab title="价格" name="price"></van-tab>
    </van-tabs>

    <van-pull-refresh v-model="refreshing" @refresh="onRefresh()" class="refresh">
        <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad()"
        >
            <div class="product-item" v-for="(item,index) in productList" :key="index" @click="productDetail(item)">
                <div class="img_wrapper">
                    <img :src="`//47.99.134.126:28019${item.goodsCoverImg}`" alt="">
                </div>
                <div class="item-info">
                    <p>{{item.goodsName}}</p>
                    <p class="desc">{{item.goodsIntro}}</p>
                    <span>￥{{item.sellingPrice}}</span>
                </div>
            </div>
        </van-list>
    </van-pull-refresh>

</div>
</template>

<script>
import { search } from '../service/goods'

import Vue from 'vue';
import { Tab, Tabs, PullRefresh,List } from 'vant';

Vue.use(Tab);
Vue.use(Tabs);
Vue.use(PullRefresh);
Vue.use(List)

export default {
    name: 'ProductList',
    data () {
        return {
            active: 2,
            keywords: '', // 搜索的关键词
            orderBy: '', // 按哪个tab栏获取数据
            refreshing: false, // 是否是下拉刷新
            loading: false,
            finished: false,
            productList: [],
            page: 1,
            totalPage: 0,
        }
    },
    methods: {
        handleBack(){
            this.$router.go(-1)
        },
        handleSearch(){
            // console.log('click')
            this.onRefresh()
        },
        changeTab(name) {
            this.orderBy = name
            this.onRefresh()
        },
        onRefresh() {
            this.refreshing = true 
            this.finished = false
            this.loading = true
            this.page = 1
            // console.log('onrefresh')
            this.onLoad()
        },
        onLoad() {
            // 不是下拉刷新，而是下拉加载
            if(!this.refreshing && this.page<this.totalPage){
                this.page = this.page + 1 
            }
            // 是下拉刷新
            if(this.refreshing) {
                this.productList = []
                this.refreshing = false
            }
            // console.log('onload')
            this.init()
        },
        async init() {
            const { categoryId } = this.$route.query
            if(!this.keywords && !categoryId) {
                this.finished = true
                this.loading = false
                return
            }
            // console.log(this.page)
            const { data, data: { list } } = await search({pageNumber: this.page, goodsCategoryId: categoryId, keyword: this.keywords, orderBy: this.oederBy})
            // console.log(list)
            this.productList = this.productList.concat(list)// this.productList = list
            // console.log(this.productList)
            this.totalPage = data.totalPage
            this.loading = false
            if(this.page >= this.totalPage) this.finished = true
        },
        productDetail(item) {
            this.$router.push({ path: `productDetail/${item.goodsId}` })
        }
    },
}
</script>

<style lang="stylus" scoped>
@import '../assets/css/mixin.styl'
header
    display flex 
    position fixed
    top 0
    left 0
    right 0
    z-index 1
    background-color #fff
    height 60px
    line-height 60px
    padding-top 15px
    .icon-leftarrow
        width 15%
        padding-left 25px
        font-size 30px
        text-align left
    .search
        position relative
        flex 1
        border-radius 20px
        height 60px
        overflow hidden
        .iconfont
            position absolute
            left 30px
            top 0
        input 
            width calc( 100% - 60px)  
            height  100%
            background-color $bc
            padding-left 60px
    .btn
        width 15%
        text-align center
.van-tabs
    margin-top 100px
    >>>.van-tabs__wrap
        height 50px
    >>> .van-tabs__nav--card
        height 50px
.refresh
    margin-top 80px
.product-item
    display flex
    box-sizing border-box
    width 100%
    border-bottom 2px #ddd solid
    padding 10px 10px
    font-size 25px
    .img_wrapper
        box-sizing border-box
        width 300px
        height 300px
        flex-shrink: 0
        padding 15px 15px
        img 
            width 100%
    .item-info
        flex 1
        text-align left 
        min-width 0
        p
            ellipsis()
            margin 20px 0
        span
            color $primary
        .desc
            color #888
.van-pull-refresh
    margin-top 0
.van-list
    min-height 100vh
</style>