<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>

  import BScroll from 'better-scroll'

  export default {
    name: "scroll",
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      },
      observeDom: {
        type: Boolean,
        default: false
      },
      observeImage: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      // 1.创建better-scroll对象
      setTimeout(() => {
        this.scroll = new BScroll(this.$refs.wrapper, {
          click: true,
          probeType: this.probeType,
          pullUpLoad: this.pullUpLoad,
          observeDom: this.observeDom,
          observeImage: {
            debounceTime: 300
          }
        })


        // 2.监听滚动的位置
        this.scroll.on('scroll', position => {
          // console.log(position);
          this.$emit('scroll', position)
        })

        // 3.监听上拉加载更多
        this.scroll.on('pullingUp', () => {
          this.$emit('pullingUp')
          this.scroll && this.scroll.finishPullUp()
        })
      }, 1000)

    },
    methods: {
      scrollTo(x, y, time = 500) {
        this.scroll && this.scroll.scrollTo(x, y, time)
      },
      refresh() {
        this.scroll && this.scroll.refresh()
      }

    }


  }
</script>

<style scoped>
  .content {
    touch-action: none
  }
</style>
