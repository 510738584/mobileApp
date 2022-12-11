<template>
  <div class="index-container">
    <HeaderComp />
    <BannerSwiper />
    <ItemGroup :itemObj="objArr"/>
    <ArticalItem v-for="item in artList" :key="item.id" :itemObj="item"/>
    <Footer>
      <span class="iconfont"></span>
      <span class="name">{{}}</span>
    </Footer>
  </div>
</template>

<script>
import HeaderComp from '@/components/Header.vue';
import ItemGroup from '@/components/ItemGroup.vue';
import ArticalItem from '@/components/ArticalItem.vue';
import Footer from '@/components/FooterSlot/index.vue';
import { getRecom, getArticle } from '@/api/indexRequest';
import BannerSwiper from './components/Banner.vue';

export default {
  data() {
    return {
      objArr: [],
      artList: [{
        id: 1,
        title: '往回走你胜多负少',
        num: 1122,
        time: '2111-32-22',
      },
      {
        id: 2,
        title: 'dsaf斯蒂芬往往都是VS现场ve士大夫维持v',
        num: 2232,
        time: '2121-02-22',
      }],
    };
  },
  components: {
    HeaderComp,
    BannerSwiper,
    ItemGroup,
    ArticalItem,
    Footer,
  },
  async created() {
    await this.getRecomFunc();
    await this.getArticleFunc();
  },
  methods: {
    // 获取首页展示推荐
    async getRecomFunc() {
      this.objArr = await getRecom();
    },
    async getArticleFunc() {
      this.artList = await getArticle();
    },
  },
};
</script>

<style lang="less" scoped>
.index-container {
  width: 100%;
}
</style>
