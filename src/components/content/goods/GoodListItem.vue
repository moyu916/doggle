<template>
  <div class="good-item" @click="itemClick">
    <div class="img-wrapper">
        <img :src="prefix(item.goodsCoverImg)" alt  />
    </div>
    <div class="good-info">
      <p>{{item.goodsName}}</p>
      <p class="price">￥{{item.sellingPrice}}</p>
      <p class="collect">{{item.goodsIntro}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "GoodListItem",
  props: {
    item: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  // computed: {
  //   getImgSrc() {
  //     return this.item.goodsCoverImage ;
  //   }
  // },
  methods: {

    itemClick() {
      if (this.item.goodsId !== undefined) {
        this.$router.push("/productDetail/" + this.item.goodsId);
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
.good-item
  float left 
  width 50%
  .img-wrapper
    box-sizing border-box
    width 350px
    height 350px
    padding 30px
    img 
      width 100%
  p
    padding 5px 15px
    ellipsis()
    font-size 23px
  .price
    color $primary
</style>