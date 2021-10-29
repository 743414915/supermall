<template>
  <div class="left-list">
    <div
      v-for="(item,index) in categorys"
      class="title-list"
      @click="titleClick(index)"
      :class="{active:index === currentIndex}">
      {{item.title}}
    </div>
  </div>
</template>

<script>
  export default {
    name: "LeftList",
    props: {
      categorys: {
        type: Array,
        default() {
          return []
        }
      }
    }, data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      titleClick(index) {
        this.currentIndex = index
        this.$emit('titleClick', index)
      }
    }
  }
</script>

<style scoped>
  .left-list {
    display: flex;
    flex-direction: column;
    align-items: center;

    float: left;
    width: 100px;
    background-color: #eee;
  }

  .title-list {
    flex: 1;
    padding: 5.7px 0;
    width: 100%;
    text-align: center;
  }

  .active {
    border-left: 5px solid var(--color-tint);
    background-color: #fff;
    color: var(--color-tint);;
  }
</style>
