<template>
  <div class="feature">
    <a href="https://act.mogujie.com/zzlx67">
      <img src="~assets/img/home/recommend_bg.jpg" alt="" @load="featureImgLoad">
    </a>
  </div>
</template>

<script>
  export default {
    name: "FeatureView",
    data() {
      return {
        counter: 0,
        imagesLength: 0
      }
    },
    methods: {
      featureImgLoad() {
          this.$emit('featureImgLoad')
          console.log("图片加载完成");
      }
    }
  }
</script>

<style scoped>
  .feature img {
    width: 100%;
  }
</style>
