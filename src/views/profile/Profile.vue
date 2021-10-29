<template>
  <div class="profile">
    <nav-bar class="profile-navBar">
      <template #center>
        <div>超级商场</div>
      </template>
    </nav-bar>

    <profile-info></profile-info>
    <div
      class="myself-attribute"
      style="border-bottom: 10px solid #eee;">
      <myself-attribute
        v-for="(item,index) in 3"
      >
        <myself-attribute-item
          :item-top="itemTop[index]"
          :item-bot="itemBot[index]">
        </myself-attribute-item>
      </myself-attribute>
    </div>

    <div class="description">
      <scroll
        :pull-up-load="true"
        class="description-scroll">
        <div style="border-bottom: 10px solid #eee;">
          <tab-cart
            v-for="(item,index) in 3"
            class="tab-car">
            <tab-cart-item :textDescription="textDescription1[index]"></tab-cart-item>
          </tab-cart>
        </div>

        <div style="border-bottom: 10px solid #eee;">
          <tab-cart
            v-for="(item,index) in 2"
            class="tab-car">
            <tab-cart-item :textDescription="textDescription2[index]"></tab-cart-item>
          </tab-cart>
        </div>

        <div style="border-bottom: 10px solid #eee;">
          <tab-cart
            v-for="(item,index) in 2"
            class="tab-car">
            <tab-cart-item :textDescription="textDescription3[index]"></tab-cart-item>
          </tab-cart>
        </div>
      </scroll>
    </div>


  </div>

</template>

<script>
  import ProfileInfo from "./childComps/ProfileInfo";
  import MyselfAttribute from "./childComps/MyselfAttribute";
  import MyselfAttributeItem from "./childComps/MyselfAttributeItem";
  import TabCart from "./childComps/TabCart";
  import TabCartItem from "./childComps/TabCartItem";

  import NavBar from "components/common/navbar/NavBar";
  import Scroll from "components/common/scroll/Scroll";


  export default {
    name: "profile",
    components: {
      ProfileInfo,
      MyselfAttribute,
      MyselfAttributeItem,
      TabCart,
      TabCartItem,
      NavBar,
      Scroll,
    },
    data() {
      return {
        itemTop: ['0.00元', '0个', '0分'],
        itemBot: ['我的余额', '我的优惠', '我的积分'],
        textDescription1: ['我的消息', '积分商城', '会员卡'],
        textDescription2: ['我的购物车', '下载购物APP'],
        textDescription3: ['设置', '更多'],
      }
    }
  }
</script>

<style scoped>
  .profile-navBar {
    background-color: var(--color-tint);
    color: #fff;
  }

  .myself-attribute {
    display: flex;
    justify-content: space-around;

  }

  .myself-attribute:nth-child(3) {
    border: none;
  }

  .tab-car {

    border-bottom: 2px solid #eee;
    height: 40px;
  }

  .description {
    height: calc(100vh - 284px);
  }

  .description-scroll{
    height: 100%;
    overflow: hidden;
  }
</style>
