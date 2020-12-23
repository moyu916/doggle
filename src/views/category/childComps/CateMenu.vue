<template>
     <ul v-if="data">
         <li v-for="item in data" :key="item.categoryId" :class="{ 'active' : currentIndex == item.categoryId }" @click="selectMenu(item.categoryId)">
             {{item.categoryName}}
         </li>
     </ul>
</template>

<script>
export default {
  name: 'CateMenu',
  props: {
    data: {
      type: Array
    }
  },
  data() {
    return {
      currentIndex: 15,
    }
  },
  methods: {
    selectMenu (id) {
        this.currentIndex = id
        this.$emit('selectMenu',this.currentIndex)
    },
  }
}
</script>

<style lang="stylus" scoped>
 ul
     min-height 100vh
     li
         height 75px
         line-height 75px
         font-size 25px
 .active
     background-color #fff
     color $primary
</style>