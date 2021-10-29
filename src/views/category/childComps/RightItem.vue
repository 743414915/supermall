<template>
  <div class="right-item">
    <div class="right-item-info" v-for="item in RightItemInto">
      <div class="content-box">
        <a :link="item.link">
          <img
            :src="item.image"
            alt="">
        </a>
        <div class="information">{{item.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RightItem",
    props: {
      RightItemInto: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods:{
    }
  }
</script>

<style scoped>
  .right-item {
    display: flex;
    flex-wrap: wrap;
  }

  .right-item-info {
    width: 100px;
    height: 100px;
    margin-bottom: 20px;
  }

  .content-box {
    position: relative;
  }

  .content-box img {
    width: 100%;
  }

  .information {
    text-align: center;
    font-size: 12px;
  }
</style>
