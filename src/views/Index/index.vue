<template>
  <div class="index-container">
    <HeaderComp />
    <BannerSwiper />
    <ItemGroup :itemObj="objArr"/>
    <div class="art-warp" v-if="artList">
      <div class="artical-box">
      <ArticalItem v-for="item in artList" :key="item.id" :itemObj="item" />
    </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import HeaderComp from '@/components/Header.vue';
import ItemGroup from '@/components/ItemGroup.vue';
import ArticalItem from '@/components/ArticalItem.vue';
import Footer from '@/components/Footer/Index.vue';
import { getRecom, getArticle } from '@/api/indexRequest';
import BannerSwiper from './components/Banner.vue';

export default {
  data() {
    return {
      objArr: [],
      artList: [],
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
  .artical-box{
    margin-bottom: 1rem;
  }
}
</style>
