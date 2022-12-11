<template>
  <div class="item-group-container">
    <div class="item-box" v-for="item in itemObj" :key="item.id">
      <img :src="item.picurl" :title="item.title">
      <div class="title">{{item.title}}</div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    itemObj: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="less" scoped>
.item-group-container{
  margin-top: .2rem;
  background:#f6f6f6;
  padding: .2rem;
  column-count: 2;
  column-gap: .1rem;
  .item-box{
    background: #fff;
    width: 100%;
    padding: .1rem;
    border: 1px solid #cca;
    box-sizing: border-box;
    break-inside: avoid;
    margin-bottom: .1rem;
    img{
      width: 100%;
      display: block;
    }
    .title{
      font-size: .32rem;
      padding: .2rem 0;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      position: relative;
      width: 100%;
      height: .64rem;
      box-sizing: border-box;
      line-height: .32rem;
    }
  }
}
</style>
