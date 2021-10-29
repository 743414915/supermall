<template>
  <div class="wrapper" ref="wrapper">
    <nav-bar class="catepory-bar">
      <template #center>
        <div>分类</div>
      </template>
    </nav-bar>

    <div class="content-box-left">
      <scroll
        class="contents content-left"
        :pull-up-load="true"
        ref="scroll">
        <left-list :categorys="categoryLsit" @title-click="titleClick"></left-list>
      </scroll>
    </div>

    <div class="content-box-right">
      <scroll
        class="contents content-right"
        :pull-up-load="true">
        <right-item
          :RightItemInto="RightItemInto">
        </right-item>
      </scroll>
    </div>
  </div>
</template>

<script>
  import LeftList from "./childComps/LeftList";
  import RightItem from "./childComps/RightItem";

  import NavBar from "components/common/navbar/NavBar";
  import Scroll from "components/common/scroll/Scroll";

  import {getCategory, getSubcategory, getCategoryDetail} from "network/category";
  import {debounce} from "../../common/utils";

  export default {
    name: "category",
    components: {
      LeftList,
      RightItem,
      NavBar,
      Scroll,
    },
    data() {
      return {
        categoryLsit: [],
        maitKey: null,
        RightItemInto: []
      }
    },
    created() {
      // 请求数据
      this.getCategory()
      this.getSubcategory('3627')
    },
    methods: {
      titleClick(index) {
        this.maitKey = this.categoryLsit[index].maitKey
        this.getSubcategory(this.maitKey)
      },
      getCategory() {
        getCategory().then(res => {
          // console.log(res);
          this.categoryLsit = res.data.category.list

        })
      },
      getSubcategory(maitKey) {
        getSubcategory(maitKey).then(res => {
          this.RightItemInto = res.data.list
        })
      },
    },
    activated() {
    }
  }
</script>

<style scoped>

  .wrapper {
    height: 100vh;
  }

  .catepory-bar {
    background-color: var(--color-tint);
    color: #fff;
  }

  .content-box-left {
    height: calc(100% - 44px - 49px);

    float: left;
    width: 100px;
  }


  .contents {
    height: 100%;
    overflow: hidden;
  }


  .content-box-right {
    height: calc(100% - 44px - 49px);
  }
</style>
