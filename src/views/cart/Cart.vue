<template>
  <div id="cart">
    <Header>
      <span slot="middle">购物车</span>
    </Header>
    <scroll class="cart-content" ref="scroll">
        <cart-list :cartList="this.$store.state.cartData"></cart-list>
    </scroll>
    <div class="submit-all">
        <check-button :action="all" @checkClick="checkClick"></check-button>
        <span class="textall">全选</span>
        <span class="money">金额：￥{{total}}</span>
        <button @click="onSubmit">结算</button>
    </div>
  </div>
</template>

<script>
import Header from '@/components/common/header/Header.vue'
import Scroll from '@/components/common/scroll/Scroll'

import { getCart,modifyCart,deleteCartItem } from '@/service/cart'

import Vue from 'vue';
import { Checkbox, CheckboxGroup, SwipeCell, Stepper, SubmitBar } from 'vant';
import CartList from './childComps/CartList.vue';

import CheckButton from "@/components/content/CheckButton"

Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(SwipeCell);
Vue.use(Stepper).use(SubmitBar)

export default {
    name: "Cart",
    components: {
      Header,
      Scroll,
      CartList,
      CheckButton,
    },
    data () {
      return {
        data: [],
        result: [],
        checkAll: false,
        checkedItem:[],
      }
    },
    computed: {
        total: function() {
            let sum = 0
            let data_checked = this.$store.state.cartData.filter(item => item.checked == true)
            data_checked.forEach(item => {
                sum+= item.goodsCount * item.sellingPrice
            })
            return sum
        },
        all() {
            this.checkedItem = this.$store.state.cartData.filter(item => item.checked == true)
            if(this.checkedItem.length == this.$store.state.cartData.length)
            {
                this.checkAll = true
                return true
            }
            else {
                this.checkAll = false
                return false
            }
        }
    },
    mounted() {
        this.init()
    },
    methods: {
        async init() {
            const { data } = await getCart()
            this.data = data
            console.log(data)
            let num = 0;
            for (let i of data){
                Vue.set(i,'checked',false)
                Vue.set(i,'index',num)
                num++
            }         
            this.$store.commit('getData',{ data })
        },
        checkClick() {
            if(this.checkAll) {
                this.checkAll = false
                this.$store.commit("unAllSelected"); 
            }
            else{
                this.checkAll = true
                this.$store.commit("allSelected"); 
            }        
        },

        onSubmit() {
            const params = JSON.stringify(this.checkedItem.map(item=>item.cartItemId)) 
            this.$router.push(`/createOrder?cartItemIds=${params}`)
        },
    }
}
</script>

<style lang="stylus" scoped>
.cart-content
    margin 80px 0 135px 0
    .group
        width 100%  
        .cart-item 
            display flex
            .checkbox
                width 60px
                >>> .van-checkbox__icon
                    font-size 30px
                    margin 0 auto
            .img-wrapper
                width  200px
                height 200px
                img 
                    width 100%
            .item-content
                position relative
                flex 1
                padding 40px 30px 0 0
                .name
                    float left
                .num 
                    float right 
                .price
                    position absolute
                    bottom 30px
                    font-size 30px
                    color red
                .item-btn
                    position absolute
                    bottom 30px
                    right 30px
.van-submit-bar
    bottom 110px
    height 40px
    >>> .van-submit-bar__bar
        font-size 30px   
        line-height 30px  
    >>> .van-checkbox__label
        line-height 30px
    >>> .van-icon-success
        height 25px
        width 25px 
    >>> .delete-button
        height 100px
        width 40px
    >>> .van-swipe-cell__right
        right -20px

.submit-all
    position: fixed;
    left 0
    right 0
    bottom 80px
    height 60px
    line-height 60px
    .textall
        float left
    button
        float right
        width: 25%
        height 60px
</style>