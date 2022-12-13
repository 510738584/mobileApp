<template>
  <div class="ins-container">
    <HeaderComp/>
    <div class="ins-main" ref="insMain">
      <div class="content">
        <div class="updown">
          <div v-show="isUpDown">下拉刷新</div>
          <div v-show="!isUpDown">
            <div v-show="isLoad">加载中...</div>
            <div v-show="!isLoad">加载完成</div>
          </div>
        </div>
        <ItemGroup :itemObj="listData" />
        <div class="tip">
          <div class="more" v-show="moreData">数据正在加载中...</div>
          <div class="hasNo" v-show="!moreData">没有更多数据...</div>
        </div>
      </div>
    </div>
    <FooterComp/>
  </div>
</template>

<script>
import HeaderComp from '@/components/Header.vue';
import FooterComp from '@/components/Footer/Index.vue';
import ItemGroup from '@/components/ItemGroup.vue';
import { getList } from '@/api/insRequest';
import BScroll from '@better-scroll/core';
import PullDown from '@better-scroll/pull-down';
import Pullup from '@better-scroll/pull-up';

BScroll.use(PullDown);
BScroll.use(Pullup);
export default {
  name: 'MobileIndex',

  data() {
    return {
      listData: [],
      moreData: false,
      isUpDown: true,
      isLoad: true,
      bscroll: null,
      page: 1,
      resData: [],
    };
  },
  components: {
    HeaderComp,
    FooterComp,
    ItemGroup,
  },
  created() {

  },
  async mounted() {
    await this.getListData();
    this.initScroll();
  },
  methods: {
    async getListData() {
      const oldList = this.listData;
      const newList = await getList(this.page);
      this.resData = newList;
      const fullList = oldList.concat(newList);
      this.listData = fullList;
    },
    initScroll() {
      this.bscroll = BScroll(this.$refs.insMain, {
        pullUpLoad: true,
        pullDownRefresh: true,
      });
      this.bscroll.on('pullingUp', this.pullingUpHandler);
      this.bscroll.on('pullingDown', this.pullingDownHandler);
    },
    async pullingDownHandler() {
      this.isUpDown = false;
      this.page = 1;
      this.listData = [];
      await this.getListData();
      this.isLoad = false;
      setTimeout(() => {
        this.bscroll.finishPullDown();
        this.isLoad = true;
        this.isUpDown = true;
      }, 1000);
      this.bscroll.refresh();
    },
    // 触底加载数据刷新页面
    async pullingUpHandler() {
      this.moreData = true;
      if (!this.resData.length) {
        this.moreData = false;
        this.bscroll.finishPullUp();
        return;
      }
      this.page += 1;
      await this.getListData();
      this.bscroll.finishPullUp();
      this.bscroll.refresh();
    },
  },
};
</script>

<style lang="less" scoped>
.ins-container{
  width: 100%;
  position: relative;
}
.ins-main{
  overflow: hidden;
  height: calc(100vh - 1.8rem);
  position: relative;
  border: 1px solid darkgreen;
}
.more,.hasNo,.updown{
    font-size: .4rem;
    color: #888;
    line-height: 1.3em;
    text-align: center;
  }
  .updown{
    position: absolute;
    width:100%;
    top: 0;
    left:0;
    transform: translateY(-100%);
  }
  .item-group-container{
    margin-top: 0;
  }
</style>
