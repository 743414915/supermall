<template>
  <div class="recommoned">
    <div v-for="item in recommends" class="recommoned-item">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="recommendImgLoad">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RecommendView",
    props: {
      recommends: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        counter: 0,
        imagesLength: 0
      }
    },
    methods: {
      recommendImgLoad() {
        // 判断，所有的图片都加载完成，那么进行一次回调就可以了
        if (++this.counter === this.recommends.length) {
          this.$emit('recommendImgLoad')
          console.log("图片加载完成");
        }
      }
    },
  }
</script>

<style scoped>

  .recommoned {
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;
    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
  }

  .recommoned-item {
    flex: 1;
  }

  .recommoned-item img {
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
  }
</style>
