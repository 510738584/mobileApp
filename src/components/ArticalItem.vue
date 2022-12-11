<template>
  <div class="artical-item-container">
    <div class="pic">
      <img :src="itemObj.picurl" alt="">
    </div>
    <div class="info">
      <div class="title">{{itemObj.title}}</div>
      <div class="tip">
        <div class="left">
          <span class="iconfont icon-ontimeshipment"></span>
          <span class="time">{{formatTimeStamp(itemObj.posttime)}}</span>
        </div>
        <div class="right">
          <span class="iconfont icon-operation"></span>
          <span class="num">{{formatNum(itemObj.hits)}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import formatTimeStamp from '@/utils/formatTimeStamp';
import formatNum from '../utils/formatNum';

export default {
  name: 'MobileArticalItem',
  props: {
    itemObj: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {

    };
  },
  methods: {
    formatTimeStamp,
    formatNum,
  },
};
</script>

<style lang="less" scoped>
.artical-item-container{
  box-sizing: border-box;
  width: 100%;
  height: 2rem;
  padding: .2rem;
  border: 1px solid rgba(0,0,0,0.1);
  display: flex;
  margin-top: .1rem;
  .pic{
    width: 2.5rem;
    height: 1.5rem;
    flex:0 0 auto;
    margin-right: .2rem;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .info{
    margin-left: .1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 70%;
    .title{
      font-size: .32rem;
      font-weight: bold;
      padding: .16rem 0;
    }
    .tip{
      padding-bottom: .1rem;
      font-size: .26rem;
      color: #ccc;
      display: flex;
      justify-content: space-between;
      .left span{
        font-weight: bold;
      }
      .right{
        .num{
        padding-right: .26rem;
        font-weight: bold;
      }
      }
    }
  }
}
</style>
