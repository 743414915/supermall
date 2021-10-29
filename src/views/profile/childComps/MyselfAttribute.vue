<template>
  <div class="myself-attribute">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "MyselfAttribute"
  }
</script>

<style scoped>
  .myself-attribute {
    width: 33%;
    padding: 10px;

    border-right: 1px solid #eee;
  }
</style>
