<template>
    <div class="header">
        <!-- div包裹插槽，样式定义在div上。如果不包裹，直接定义在插槽上，有可能被使用者覆盖 -->
        <div class="left">
            <slot name="left">
                <i class="iconfont icon-leftarrow" @click="handleBack()"></i>
            </slot>
        </div>
        <div class="middle">
            <slot name="middle">
                <span>分类</span>
            </slot>
        </div>
        <div class="right">
            <slot name="right">
                <i class="iconfont icon-nav-list"></i>
            </slot>
        </div>
    </div>
</template>

<script>
export default {
    name:'Header',
    methods: {
        handleBack () {
            this.$router.go(-1)
        }
    },    
}
</script>
<style lang="stylus" scoped>
.header
    position fixed
    left 0
    right 0
    top 0
    display: flex;
    height: 75px;
    line-height: 75px;
    background-color: #fff;
    z-index 2
    border-bottom 1px #ccc solid
    .left
        width: 25%;
        text-align: left;
        i
            padding-left 25px
            font-size 45px
    .middle
        flex: 1;
    .right
        width: 25%;
        text-align: right;
        i
            padding-right 25px
            font-size 50px        
</style>