<template>
  <div class="article-container">
    <HeaderComp />
    <div class="article-content" ref="articleContent">
      <div class="content">
        <div class="updown">
          <div v-show="isUpDown">下拉刷新</div>
          <div v-show="!isUpDown">
            <div v-show="isLoad">加载中...</div>
            <div v-show="!isLoad">加载完成</div>
          </div>
        </div>
        <ArticalItem v-for="item in articleList" :key="item.id" :itemObj = 'item'/>
        <div class="tip">
          <div class="more" v-show="moreData">数据正在加载中...</div>
          <div class="hasNo" v-show="!moreData">没有更多数据...</div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import HeaderComp from '@/components/Header.vue';
import Footer from '@/components/Footer/Index.vue';
import BScroll from '@better-scroll/core';
import Pullup from '@better-scroll/pull-up';
import { getArticle } from '@/api/articleRequest';
import ArticalItem from '@/components/ArticalItem.vue';
import PullDown from '@better-scroll/pull-down';

BScroll.use(PullDown);
BScroll.use(Pullup);

export default {
  components: {
    HeaderComp,
    Footer,
    ArticalItem,
  },
  async mounted() {
    await this.getArticleData();
    this.initBScroll();
  },
  data() {
    return {
      articleList: [],
      page: 1,
      bscroll: null,
      resData: [],
      moreData: false,
      isUpDown: true,
      isLoad: true,
    };
  },
  methods: {
    initBScroll() {
      this.bscroll = BScroll(this.$refs.articleContent, {
        pullUpLoad: true,
        pullDownRefresh: true,
      });
      this.bscroll.on('pullingUp', this.pullingUpHandler);
      this.bscroll.on('pullingDown', this.pullingDownHandler);
    },
    // 下拉刷新数据
    async pullingDownHandler() {
      this.isUpDown = false;
      this.page = 1;
      this.articleList = [];
      await this.getArticleData();
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
      await this.getArticleData(this.page);
      this.bscroll.finishPullUp();
      this.bscroll.refresh();
    },
    async getArticleData() {
      const oldList = this.articleList;
      const newList = await getArticle(this.page);
      this.resData = newList;
      const fullList = oldList.concat(newList);
      this.articleList = fullList;
    },
  },
};
</script>

<style lang="less" scoped>
.article-container{
  width: 100%;
  position:relative;
  .article-content{
    height: calc(100vh - 1.8rem);
    overflow: hidden;
    position:relative;
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
}
</style>
