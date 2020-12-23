<template>
  <div id="detail">
      <Header>
          <span slot="middle">商品详情</span>
      </Header>
        <swiper ref="swiper" :showIndicator="false" :loop="false" class="my-swipe">
            <swiper-item v-for="(item, index) in goodsCarouselList" :key="index">
                <img :src="prefix(item)" alt="">
            </swiper-item>
        </swiper>  
        <div class="product-info">
                <p>{{goodsName}}</p>
                <p>{{goodsIntro}}</p>
                <p class="price">￥{{originalPrice}}</p>
        </div>
        <div class="product-intro">
            <ul>
                <li>概述</li>
                <li>参数</li>
                <li>安装服务</li>
                <li>常见问题</li>
            </ul>
            <div class="product-content">
                <div v-html="goodsDetailContent" class="pro-con"></div>
            </div>
        </div>    
        <van-goods-action>
            <van-goods-action-icon icon="chat-o" text="客服" />
            <van-goods-action-icon icon="cart-o" text="购物车" :badge="count" @click="gotoCart()"/>
            <van-goods-action-icon ref="star" icon="star" text="收藏" color="#ccc" @click="changeStar()" />
            <van-goods-action-button type="warning" text="加入购物车" @click="onClickCart"/>
            <van-goods-action-button
                type="danger"
                text="立即购买"
                @click="onClickBuy"
            />
        </van-goods-action>
  </div>
</template>

<script>
import Header from '@/components/common/header/Header.vue'
import { Swiper, SwiperItem } from '@/components/common/swiper/index.js'

import { getDetail } from '@/service/goods'
import { addCart } from '@/service/cart'

import Vue from 'vue';
import { GoodsAction, GoodsActionIcon, GoodsActionButton} from 'vant';

Vue.use(GoodsAction).use(GoodsActionButton).use(GoodsActionIcon);

export default {
    name: 'ProductDetail',
    components: {
        Header,
        Swiper,
        SwiperItem,
    },
    data () {
        return {
            goodsCarouselList: [],
            goodsCoverImg: '',
            goodsDetailContent: '',
            goodsId: 0,
            goodsIntro: '',
            goodsName: '',
            originalPrice: 0,
            tag: '',
            // count: this.$store.state.cartCount
        }
    }, 
    computed: {
        count () {
            return this.$store.state.cartCount
        }
    }, 
    methods: {
        async onClickCart () {
            const { resultCode } = await addCart({goodsCount: 1, goodsId: this.goodsId})
            // if (resultCode == 200){
            //     this.$toast.show("加入购物车成功！",2000)
            // }
            /**购物车逻辑部分 */
            // const product = {}
            // product.cartItemId = this.goodsId
            // product.goodsCount = 1
            // product.goodsCoverImg = this.goodscoverImage
            // this.$store.dispatch('updateCart',)  
              
        },
        onClickBuy () {

        },
        gotoCart() {
            this.$router.push('/cart')
        },
        changeStar() {
            this.$refs.star.text = this.$refs.star.text =='收藏' ? '已收藏' : '收藏'
            this.$refs.star.color = this.$refs.star.color =='#ff5000' ? '#ccc' : '#ff5000'
        }
    },
    async mounted (){
        const { id } = this.$route.params
        const { data } = await getDetail(id)

        this.goodsCarouselList = data.goodsCarouselList
        this.goodsCoverImg = data.goodsCoverImg
        this.goodsDetailContent = data.goodsDetailContent
        this.goodsId = data.goodsId
        this.goodsIntro = data.goodsIntro
        this.goodsName = data.goodsName
        this.originalPrice = data.originalPrice
        this.tag = data.tag

        this.$store.dispatch('updateCart') 

    }     
}
</script>

<style lang="stylus" scoped>
.my-swipe
    margin-top 80px
    width 80%
    height 80vw
    margin 0 auto
    .van-swipe-item
        width 100%
        height 100%
        img 
            width 100%
.product-info
    font-size 28px
    padding 15px 0
    .price 
        color red
.product-intro
    font-size 30px
    ul
        display flex
        li
            flex 1
            border-right 1px 
            border-color #ccc
.product-content
    width 100%
    >>> img
        width 100%
.van-goods-action
    height 80px
    >>>  .van-goods-action-icon
        padding 0 10px  
</style>