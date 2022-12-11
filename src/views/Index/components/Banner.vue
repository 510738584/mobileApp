<template>
  <div class="banner-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in bannerList" :key="item.id">
        <img :src="item.picurl" :alt="item.description" :id="item.id" />
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper, { Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import { getBanner } from '@/api/indexRequest';

Swiper.use([Pagination]);
export default {
  data() {
    return {
      bannerList: [],
    };
  },
  /**
   * 由于异步请求的事件问题，需要一下操作：
   * 即把获取数据请求和初始化swiper轮播图区域，
   * 放到mounted函数中，其中要异步等待获取数据完成，再初始化swiper
   * 实例化swiper时，并没有数据，不知道具体多少张，所以会导致swiper失效
   * 即 异步处理同步化
   */
  async mounted() {
    await this.getBannerData();
    this.initSwiper();
  },
  methods: {
    initSwiper() {
      const swiper = new Swiper('.banner-container', {
        autoplay: true,
        delay: 2000,
        loop: true,
        slidesPerView: 1.2,
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination',
        },
      // autoplay: {
      //   delay: 2000,
      //   disableOnInteraction: false,
      // },
      });
    },
    async getBannerData() {
      this.bannerList = await getBanner();
    },
  },
};
</script>

<style lang="less" scoped>
.banner-container {
  height: 5rem;
  margin-top: 0.1rem;
  position: relative;
  overflow: hidden;
  padding-bottom: .2rem;
  --swiper-pagination-color: #31c27c; /* 两种都可以 */
  .swiper-slide {
    img {
      width: 100%;
      height: 100%;
      transform: scale(0.9);
      border-radius: 0.25rem;
      transition: 0.3s;
    }
    &.swiper-slide-active img {
      transform: scale(1);
      box-shadow: 0 0.08rem 0.15rem rgba(0,0,0,0.2) ;
    }
  }
}
</style>
