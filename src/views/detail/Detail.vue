<template>
  <div id="detail">
    <!--    导航-->
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav"></detail-nav-bar>
    <!--    轮播图-->
    <div class="content-box">
      <scroll
        class="content"
        ref="scroll"
        :probe-type="3"
        :pull-up-load="true"
        @scroll="contentScroll">
        <detail-swiper :top-images="topImages"></detail-swiper>
        <detail-base-info :goods="goods"></detail-base-info>
        <detail-shop-info :shop="shop"></detail-shop-info>
        <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
        <detail-param-info ref="params" :param-info="paramInfo"></detail-param-info>
        <detail-comment-info ref="comment" :comment-info="commentInfo"></detail-comment-info>
        <good-list ref="recommend" :goods="recommends"></good-list>
      </scroll>
    </div>
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
    <back-top @click="backClick" v-show="isShowBackTop"></back-top>

    <toast :message="message" :show="isShow"></toast>
  </div>
</template>

<script>


  import DetailNavBar from "./childComps/DetailNavBar";
  import DetailSwiper from "./childComps/DetailSwiper";
  import DetailBaseInfo from "./childComps/DetailBaseInfo";
  import DetailShopInfo from "./childComps/DetailShopInfo";
  import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
  import DetailParamInfo from "./childComps/DetailParamInfo";
  import DetailCommentInfo from "./childComps/DetailCommentInfo";
  import DetailBottomBar from "./childComps/DetailBottomBar";

  import Scroll from 'components/common/scroll/Scroll'
  import GoodList from 'components/content/goods/GoodsList'
  import Toast from 'components/common/toast/Toast'

  import {getDetail, Goods, GoodsParam, Shop, getRecommend} from "network/detail";
  import {debounce} from "common/utils";
  import {backTopMixin} from 'common/mixin'

  import {mapActions} from 'vuex'


  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      DetailBottomBar,
      Scroll,
      GoodList,
      Toast,
    },
    mixins: [backTopMixin],
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        recommends: [],
        themeTopYs: [],
        getThemeTopY: null,
        currentIndex: 0,
        isShow: false,
        message: ''
      }
    },
    created() {
      // 1.保存传入的iid
      this.iid = this.$route.params.iid

      // 2.根据iid请求详情数据
      getDetail(this.iid).then(res => {
        // console.log(res);
        // 1.获取数据
        const data = res.result

        // 2.获取顶部的轮播图片
        this.topImages = res.result.itemInfo.topImages

        // 3.获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

        // 4.创建店铺信息的对象
        this.shop = new Shop(data.shopInfo)

        // 5.保存商品的详情数据
        this.detailInfo = data.detailInfo

        // 6.获取参数信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

        // 7.取出评论的信息
        if (data.rate.cRate != 0) {
          this.commentInfo = data.rate.list[0]
        }

        // this.$nextTick(() => {
        //   // 根据最新的数据，对应的DOM已经被渲染出来
        //   // 但是图片还没有被加载完(目前获取到的offsetTop不包含其中的图片)
        //   this.themeTopYs.push(0)
        //   this.themeTopYs.push(this.$refs.params.$el.offsetTop)
        //   this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        //   this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        //
        //   console.log(this.themeTopYs);
        // })


      })

      // 8.请求推荐数据
      getRecommend().then(res => {
        this.recommends = res.data.list
      })

      // 9.给getThemeTopY赋值
      this.getThemeTopY = debounce(() => {

        this.themeTopYs.push(0)
        this.themeTopYs.push(this.$refs.params.$el.offsetTop - 44)
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop - 44)
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop - 44)
        this.themeTopYs.push(Number.MAX_VALUE)

        console.log(this.themeTopYs);
      }, 100)
    },
    mounted() {
    },
    methods: {
      ...mapActions(['addCart']),
      imageLoad() {
        this.$refs.scroll.refresh()

        this.getThemeTopY()
      },
      titleClick(index) {
        console.log(index);
        this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200)
      },
      contentScroll(position) {

        // 1.判断BackTop是否显示
        this.isShowBackTop = (-position.y) > 1000

        // 1.获取y值
        const positionY = -position.y

        // 2.positionY和主题中值进行对比

        let length = this.themeTopYs.length
        for (let i = 0; i < length - 1; i++) {

          // 普通做法
          // if (this.currentIndex != i && ((i < length - 1 && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i + 1]) ||
          //   (i === length - 1 && positionY >= this.themeTopYs[i]))) {
          //   this.currentIndex = i
          //   console.log(this.currentIndex);
          //   this.$refs.nav.currentIndex = this.currentIndex
          // }

          // hack做法
          if (this.currentIndex != i &&
            (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i + 1])) {
            this.currentIndex = i
            this.$refs.nav.currentIndex = this.currentIndex
          }
        }
      },
      addToCart() {
        // 1.获取购物车中需要展示的商品信息
        const product = {}
        product.image = this.topImages[0]
        product.title = this.goods.title
        product.desc = this.goods.desc
        product.price = this.goods.nowPrice
        product.iid = this.iid

        // 2.将商品添加到购物车里面
        // this.$store.commit('addToCart', product)

        //mapActions 映射
        // this.addCart(product).then(res => {
        //
        //   this.isShow = true
        //   this.message = '添加购物车成功'
        //
        //   setTimeout(() => {
        //     this.isShow = false
        //     this.message = ''
        //   }, 2000)
        //   console.log(res);
        // })

        // 方法在actions里面时，用dispatch
        // 在mutations里面时，用commit
        this.$store.dispatch('addCart', product)
        //   .then(res => {
        //   console.log(res);
        // })
      },
    }
  }
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }

  .detail-nav {
    position: relative;
    z-index: 9;
    background: #fff;
  }

  .content-box {
    height: calc(100% - 44px - 58px);
  }

  .content {
    height: 100%;
    overflow: hidden;
  }
</style>
