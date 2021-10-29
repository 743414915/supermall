<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <!--            <div class="cart" @click="addToCart">加入购物车</div>-->
      <el-button
        :plain="true"
        @click="addToCart($evnte),open2($event)"
        class="cart">加入购物车
      </el-button>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>

  import {ElMessage} from "element-plus";

  export default {
    name: "DetailBottomBar",
    methods: {
      addToCart(e) {
        this.$emit('addToCart')
      }
    },
    setup() {
      const open2 = (e) => {
        ElMessage({
          message: '商品添加成功',
          type: 'success',
          duration: 3000,
          offset: 210,
          center: true
        })
      }
      return {
        open2,
      }
    }
  }
</script>

<style scoped>

  @import url("//unpkg.com/element-plus/dist/index.css");


  .bottom-bar {
    height: 58px;
    position: absolute;
    background-color: #fff;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    text-align: center;
  }

  .bar-item {
    flex: 1;
    display: flex;
  }

  .bar-item > div {
    flex: 1;
  }

  .bar-left .text {
    font-size: 13px;
  }

  .bar-left .icon {
    display: block;
    width: 22px;
    height: 22px;
    margin: 10px auto 3px;
    background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
  }

  .bar-left .service {
    background-position: 0 -54px;
  }

  .bar-left .shop {
    background-position: 0 -98px;
  }

  .bar-right {
    font-size: 15px;
    color: #fff;
    line-height: 58px;
  }

  .bar-right .cart {
    background-color: #ffe817;
    color: #333;
  }

  .bar-right .buy {
    background-color: #f69;
  }
</style>
