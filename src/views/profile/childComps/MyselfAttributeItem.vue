<template>
  <div class="myself-attribute-item">
    <div class="item top">{{itemTop}}</div>
    <div class="item bot">{{itemBot}}</div>
  </div>
</template>

<script>
  export default {
    name: "MyselfAttributeItem",
    props: {
      itemTop: {
        type: String,
        default() {
          return ''
        }
      },
      itemBot: {
        type: String,
        default() {
          return ''
        }
      }
    }
  }
</script>

<style scoped>

  .myself-attribute-item{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    width: 100%;
  }

  .item{
    flex: 1;
    padding: 5px;
   }

.top{
  color: #ff0000;
  font-weight: bolder;
  font-size: 20px;
}
</style>
