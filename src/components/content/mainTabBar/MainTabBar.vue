<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="#d4237a">
      <template #item-icon>
        <img src="~assets/img/tabbar/home.png" alt="">
      </template>
      <template #item-icon-active>
        <img src="~assets/img/tabbar/home_active.svg" alt="">
      </template>
      <template #item-text>
        <div>首页</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="#d4237a">
      <template #item-icon>
        <img src="~assets/img/tabbar/category.png" alt="">
      </template>
      <template #item-icon-active>
        <img src="~assets/img/tabbar/category_active.svg" alt="">
      </template>
      <template #item-text>
        <div>分类</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/shopcart" activeColor="#d4237a">
      <template #item-icon>
        <img src="~assets/img/tabbar/shopcart.png" alt="">
      </template>
      <template #item-icon-active>
        <img src="~assets/img/tabbar/shopcart_active.svg" alt="">
      </template>
      <template #item-text>
        <div>购物车</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="#d4237a">
      <template #item-icon>
        <img src="~assets/img/tabbar/profile.png" alt="">
      </template>
      <template #item-icon-active>
        <img src="~assets/img/tabbar/profile_active.svg" alt="">
      </template>
      <template #item-text>
        <div slot="item-text">我的</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>

  import TabBar from "components/common/tabbar/TabBar";
  import TabBarItem from 'components/common/tabbar/TabBarItem'

  export default {
    name: "MainTabBar",
    components: {
      TabBarItem,
      TabBar
    }
    ,
  }
</script>

<style scoped>
  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
</style>
