<template>
  <div class="footer-item-container">
    <span class="iconfont" :class="itemObj.iconType"></span>
    <span class="name">{{itemObj.name}}</span>
  </div>
</template>

<script>
export default {
  name: 'MobileFooterItem',
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

  mounted() {

  },
};
</script>

<style lang="less" scoped>
.footer-item-container{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 25%;
  color: #ccc;
  &.active{
    color: #31c27c;
  }
  .iconfont{
    font-size: .5rem;
  }
  .name{
    font-size: .28rem;
  }
}
</style>
