<template>
  <div class="tab-cart-item">
    <div>{{textDescription}}</div>
  </div>
</template>

<script>
  export default {
    name: "TabCartItem",
    props: {
      textDescription: {
        type: String,
        default() {
          return ''
        }
      }
    }
  }
</script>

<style scoped>
  .tab-cart-item {
    padding: 5px;
  }

  .tab-cart-item div {
    margin-left: 40px;
    line-height: 40px;
  }
</style>
