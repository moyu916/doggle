<template>
<!--使用fontColor指定字体颜色-->
<div class="tab-bar-item" @click="toRedirect()">
    <!-- 给插槽封装一层div，样式实现在div上，如果实现在slot上，可能会被使用者替换 -->
    <div v-if="!getIsActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-action"></slot></div>
    <div :style="getStyle"><slot name="item-text"></slot></div>
</div>
</template>

<script>
export default {
    name: "TabBarItem",
    props:{
        path:String,
        fontColor:{
            type:String,
            default:'#1baeae'
        }
    },
    methods:{
        toRedirect(){
            
            this.$router.push(this.path);
        }
    },
    computed:{
        getIsActive(){
        //    this.$route.path.indexOf(this.path);当前活跃路由返回0
            
           return this.$route.path.indexOf(this.path)!==-1//当前活跃时return true
        },
        getStyle(){
            
            return this.getIsActive?{color:this.fontColor}:{};
        }
    }
}
</script>
<style scoped>
.tab-bar-item{
   flex: 1;
   height: 80px;
   text-align: center;

 }
 .tab-bar-item img{
     width: 35px;
     height: 35px;
     margin: 3px 0;
     vertical-align: middle;
 }

</style>