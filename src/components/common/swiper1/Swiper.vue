<template>
  <div class="hy-swiper">
    <el-carousel :interval="2000" arrow="hove">
      <slot></slot>
    </el-carousel>
  </div>
</template>

<script>

  export default {
    name: "Swiper",
    components: {}
  }
</script>

<style scoped>
</style>
