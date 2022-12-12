<template>
  <div class="footer-container">
    <FooterItem v-for="item in itemList" :key="item.id" :itemObj="item"/>
  </div>
</template>

<script>
import FooterItem from './FooterItem.vue';

export default {
  name: 'MobileFooter',
  components: {
    FooterItem,
  },
  data() {
    return {
      itemList: [
        {
          id: 1,
          iconType: 'icon-home-fill',
          name: '首页',
          path: '/index',
        },
        {
          id: 2,
          iconType: 'icon-Similarproducts-fill',
          name: '分类',
          path: '/category',
        }, {
          id: 3,
          iconType: 'icon-RFQ-logo-fill',
          name: '灵感',
          path: '/ins',
        }, {
          id: 4,
          iconType: 'icon-all-fill1',
          name: '文章',
          path: '/article',
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.footer-container{
  border-top: .01rem solid #ccc;
  padding: .1rem 0;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: .8rem;
  box-sizing: border-box;
  display: flex;
  background: #fff;
}
</style>
